import express from "express";
import { verifyToken } from "../middleware/verify.js";
import { bookTicket, getUserTickets } from "../controllers/ticketController.js";
const router = express.Router();
router.post("/book", verifyToken, bookTicket);
router.get("/my-tickets", verifyToken, getUserTickets);
export default router;
