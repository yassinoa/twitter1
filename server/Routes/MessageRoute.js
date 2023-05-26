import express from "express"

const router=express.Router()
router.post('/',addMessage)
router.get('/:chatId',getMessage)

export default router