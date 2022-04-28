import express from "express";

const PORT = 5500;

const app = express();

app.use(express.static("public"));

app.listen(PORT, () => console.log(`Backend on http://localhost:${PORT}`));
