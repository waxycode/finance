import { Router } from "express";
import { getAll } from "./user.model";

const router = Router();

router.get("/", (req, res) => {
  res.status(200).json({ data });
});

export default router;
