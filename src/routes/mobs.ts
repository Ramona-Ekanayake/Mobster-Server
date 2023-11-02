import express from "express";
const router = express.Router();

type Mob = {
  name: string;
  id: number;
};

const mobs: Mob[] = [{ name: "Rasor", id: 1 }];

router.get("/", function (req, res) {
  res.json(mobs);
});

router.post("/", function (req, res) {
  const body = req.body;
  mobs.push(body);
  res.status(201).json(mobs);
});

export default router;
