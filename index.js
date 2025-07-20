const express = require("express");
const axios = require("axios");
const app = express();
const PORT = process.env.PORT || 3000;

const DISCORD_WEBHOOK = "const express = require("express");
const axios = require("axios");
const app = express();
const PORT = process.env.PORT || 3000;

const DISCORD_WEBHOOK = "const express = require("express");
const axios = require("axios");
const app = express();
const PORT = process.env.PORT || 3000;

const DISCORD_WEBHOOK = "https://discord.com/api/webhooks/1395923548044005406/XtdiHIMtc5_BLFHBkKnTRt1GiAxPUqR_v8B-_CB13cffQ4Kgheg_Q74SXXHWu8zRUsJl";

app.use(express.json());

app.post("/api/robloxdata", async (req, res) => {
  const { topPlayers, serverStats } = req.body;

  const embed = {
    title: "📊 ZENIHT FINDER | Info del Servidor",
    color: 3447003, // azul
    fields: [
      { name: "👥 Jugadores", value: `${serverStats.totalPlayers}`, inline: true },
      { name: "💰 Promedio Cash", value: `$${serverStats.averageCash}`, inline: true },
      { name: "🏆 Top 5 Jugadores", value: topPlayers.map((p, i) => `${i+1}. ${p.name} | 💰 ${p.cash}`).join("\n") }
    ],
    timestamp: new Date()
  };

  await axios.post(DISCORD_WEBHOOK, {
    embeds: [embed]
  });

  res.status(200).send("Enviado a Discord");
});

app.listen(PORT, () => {
  console.log(`API corriendo en puerto ${PORT}`);
});
";

app.use(express.json());

app.post("/api/robloxdata", async (req, res) => {
  const { topPlayers, serverStats } = req.body;

  const embed = {
    title: "📊 ZENIHT FINDER | Info del Servidor",
    color: 3447003, // azul
    fields: [
      { name: "👥 Jugadores", value: `${serverStats.totalPlayers}`, inline: true },
      { name: "💰 Promedio Cash", value: `$${serverStats.averageCash}`, inline: true },
      { name: "🏆 Top 5 Jugadores", value: topPlayers.map((p, i) => `${i+1}. ${p.name} | 💰 ${p.cash}`).join("\n") }
    ],
    timestamp: new Date()
  };

  await axios.post(DISCORD_WEBHOOK, {
    embeds: [embed]
  });

  res.status(200).send("Enviado a Discord");
});

app.listen(PORT, () => {
  console.log(`API corriendo en puerto ${PORT}`);
});
";

app.use(express.json());

app.post("/api/robloxdata", async (req, res) => {
  const { topPlayers, serverStats } = req.body;

  const embed = {
    title: "📊 ZENIHT FINDER | Info del Servidor",
    color: 3447003, // azul
    fields: [
      { name: "👥 Jugadores", value: `${serverStats.totalPlayers}`, inline: true },
      { name: "💰 Promedio Cash", value: `$${serverStats.averageCash}`, inline: true },
      { name: "🏆 Top 5 Jugadores", value: topPlayers.map((p, i) => `${i+1}. ${p.name} | 💰 ${p.cash}`).join("\n") }
    ],
    timestamp: new Date()
  };

  await axios.post(DISCORD_WEBHOOK, {
    embeds: [embed]
  });

  res.status(200).send("Enviado a Discord");
});

app.listen(PORT, () => {
  console.log(`API corriendo en puerto ${PORT}`);
});
