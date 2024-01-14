import express from "express";
import dotenv from "dotenv";
import "./config/database.js";
dotenv.config();
import userRoute from "./modules/user/user.route.js";
const app = express();
app.use(express.json());

app.use("/users", userRoute);

app.get("/health", (_, res) => {
  return res.send("Server is running");
});

app.listen(8080, () => {
  console.log("server started on port 8080");
});
