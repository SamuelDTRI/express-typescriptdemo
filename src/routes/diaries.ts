import express from "express"; // ecmascript modules
import * as diaryServices from "../services/diaryServices";

const router = express.Router();

router.get("/", (_req, res) => {
  res.send(diaryServices.getEntriesWithoutSensitiveInfo());
});

router.post("/", (_req, res) => {
  res.send("Saving A diary");
});

export default router;
