import express from 'express';
import { createMessage, getMessage } from '../Controllers/messageController.js';


const router = express.Router();
router.post("/" , createMessage);
router.get("/:chatId", getMessage );

export default router; 