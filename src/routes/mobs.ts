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

export default router;
