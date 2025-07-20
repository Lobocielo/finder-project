// backend/server.js
const express = require("express");
const axios = require("axios");
const app = express();
app.use(express.json());

const DISCORD_WEBHOOK = "https://discord.com/api/webhooks/1395923548044005406/XtdiHIMtc5_BLFHBkKnTRt1GiAxPUqR_v8B-_CB13cffQ4Kgheg_Q74SXXHWu8zRUsJl";

app.post("/api/robloxdata", async (req, res) => {
  const { playerCount, averageMoney, topPlayers, placeId, jobId } = req.body;
  
  const embed = {
    title: "📊 ZENIHT FINDER | Info del Servidor",
    color: 3447003,
    fields: [
      { name: "🎮 Jugadores", value: `${playerCount}`, inline: true },
      { name: "💰 Promedio", value: `$${Math.floor(averageMoney)}`, inline: true },
      { name: "🧭 PlaceId", value: placeId, inline: true },
      { name: "🆔 JobId", value: jobId, inline: true },
      // Top 5 jugadores
      ...topPlayers.map((p, i) => ({
        name: `#${i+1} ${p.name}`,
        value: `💰 ${p.cash} — 🆔 ${p.userid}`,
        inline: false
      }))
    ],
    timestamp: new Date()
  };

  try {
    await axios.post(DISCORD_WEBHOOK, { embeds: [embed] });
    res.json({ ok: true });
  } catch (err) {
    console.error("Error enviando embed:", err);
    res.status(500).send("Error en webhook");
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🔧 API corriendo en http://localhost:${PORT}`));
