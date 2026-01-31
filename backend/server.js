import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import router from "./route.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/tasks", router);

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MobgoDB Connected"))
    .catch((err) => console.error(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
