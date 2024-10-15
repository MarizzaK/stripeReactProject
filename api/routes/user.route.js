import express from "express";
const router = express.Router();

router.post("/register", (req, res) => {
  res.send("router works");
});
router.post("/login", (req, res) => {
  res.send("router works");
});
router.post("/logout", (req, res) => {
  res.send("router works");
});

export default router;
