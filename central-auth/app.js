import express from "express";
import cors from "cors";

const PORT = 5000;

const app = express();

app.use(cors());

app.use(express.static("public"));

app.listen(PORT, () => console.log(`Backend on http://localhost:${PORT}`));
