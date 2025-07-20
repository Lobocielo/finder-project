# analyzer/analyzer.py
import requests, json

WEBHOOK = "https://discord.com/api/webhooks/1395923548044005406/XtdiHIMtc5_BLFHBkKnTRt1GiAxPUqR_v8B-_CB13cffQ4Kgheg_Q74SXXHWu8zRUsJl"

def enviar_resultados(player_data, place_id, job_id):
    embed = {
        "title": "📈 Análisis Externo del Servidor",
        "color": 3447003,
        "fields": [
            {"name": f"#{i+1} {d['name']}", "value": f"💰 {d['cash']} — 🆔 {d['userid']}", "inline": False}
            for i, d in enumerate(player_data)
        ],
        "footer": {"text": f"PlaceId {place_id} — JobId {job_id}"},
    }
    res = requests.post(WEBHOOK, json={"embeds": [embed]})
    print("Enviado:", res.status_code)

if __name__ == "__main__":
    # Prueba local
    enviar_resultados([
        {"name": "Zenith", "cash": 5000000, "userid": 123},
        {"name": "Noob", "cash": 100000, "userid": 456}
    ], place_id=111, job_id="abc")
