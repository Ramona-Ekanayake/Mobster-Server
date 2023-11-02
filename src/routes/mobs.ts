import express from "express";
const router = express.Router();

type Mob = {
  name: string;
  id: number;
};

const mobs: Mob[] = [{ name: "Rasor", id: Date.now() }];

router.get("/", function (req, res) {
  res.json(mobs);
});

router.post("/", function (req, res) {
  const body = { name: req.body.name, id: Date.now() };
  mobs.push(body);
  res.status(201).json(mobs);
});

export default router;
