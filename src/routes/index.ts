import { Request, Response } from "express";
import express from "express";

const router = express.Router();

router.get('/',function (req, res) {
    res.send("spend-meter-backend service");
});

export default router;
