import express from "express";
import { getBusDetails, searchBuses } from "../controllers/busController.js";

const router = express.Router();

router.post("/search", searchBuses);
router.get("/:busId", getBusDetails);

export default router;
