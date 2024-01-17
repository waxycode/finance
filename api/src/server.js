import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import "./config/database.js";
dotenv.config();
import userRouter from "./modules/user/user.route.js";
import authRouter from "./modules/auth/auth.route.js";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/users", userRouter);
app.use("/auth", authRouter);

app.get("/health", (_, res) => {
  return res.send("Server is running");
});

app.listen(8080, () => {
  console.log("server started on port 8080");
});
