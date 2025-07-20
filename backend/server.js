-- añadir al final de tu script existente

function EnviarInfoBackend()
    local data = {}
    data.playerCount = #Players:GetPlayers()
    data.placeId = tostring(game.PlaceId)
    data.jobId = tostring(game.JobId)

    local totalCash = 0
    local topList = {}
    for _, p in ipairs(Players:GetPlayers()) do
        local stats = p:FindFirstChild("leaderstats")
        local cash = stats and stats:FindFirstChild("Cash") and stats.Cash.Value or 0
        totalCash += cash
        table.insert(topList, {name = p.Name, cash = cash, userid = p.UserId})
    end

    table.sort(topList, function(a,b) return a.cash > b.cash end)
    data.averageMoney = (data.playerCount > 0) and totalCash / data.playerCount or 0
    data.topPlayers = {}
    for i = 1, math.min(5, #topList) do
        table.insert(data.topPlayers, topList[i])
    end

    local payload = HttpService:JSONEncode(data)
    local success, err = pcall(function()
        HttpService:PostAsync("https://TU-DOMINIO/api/robloxdata", payload, Enum.HttpContentType.ApplicationJson)
    end)
end

Sec:NewButton("📨 Enviar Info al Backend", "Envía al servidor backend para análisis", EnviarInfoBackend)
