import MessageModel from "../Models/MessageModel.js";

export const addMessage=async(req,res)=>{
  const {chatId,senderId,text}=req.body
  const message=new MessageModel({
    chatId,
    senderId,
    text
  })
  try {
    const result=await message.save()    
    res.status(200).json(result)
  } catch (error) {
    console.log(error)    
  }
}