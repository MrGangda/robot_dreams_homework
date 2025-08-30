const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

// middleware для работы с JSON
app.use(express.json());

// тестовый маршрут
app.get("/health", (req, res) => {
    res.json({ status: "ok" });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});