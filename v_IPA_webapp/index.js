const express = require("express");
const messageRouter = require("./routes/message-routes")
const PORT = 4444;
const app = express()
const DBIsConnected = require("./models/check-db-connection")

DBIsConnected

app.use(express.json())

app.use("/api/messages", messageRouter)

app.get("/", (req, res) => {
    res.status(200).json({"message": "Dies ist der root-Endpoint :DD"})
})

app.listen(PORT,"0.0.0.0", () => {
    console.log(`Server is running on port ${PORT}`)});