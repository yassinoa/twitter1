import express from 'express'
import { createChat, findCHat, userChats } from '../Controllers/ChatController.js'
const router = express.Router()
router.post("/",createChat)
router.get("/:userId",userChats)
router.get("/find/:firstId/:secondId",findCHat)
export default router