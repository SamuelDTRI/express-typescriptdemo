import express from "express"; // ecmascript modules

const router = express.Router();

router.get("/", (_req, res) => {
  res.send("Fetching all entry diaries ");
});

router.post("/", (_req, res) => {
  res.send("Saving A diary");
});

export default router;
