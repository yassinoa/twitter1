import React, { useEffect, useState } from 'react'
import LogoSearch from '../../components/LogoSearch/LogoSearch'
import './Chat.css'
import { useDispatch, useSelector } from "react-redux";
import { userChats } from '../../api/ChatRequests';
import Conversation from '../../components/Conversation/Conversation';

const Chat = () => {

  const user =useSelector((state)=>state.authReducer.authData)
  console.log(user)

  const [chats,setChats]=useState([])

  useEffect(()=>{
    const getChats=async()=>{
      try {
        const {data}=await userChats(user._id)
        setChats(data)
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }  
    getChats()  
  },[user])
  return (
    <div className="Chat">
      <div className="Left-side-chat">
        <LogoSearch/>
        <div className="Chat-container">
          <h2>Chats</h2>
          <div className="Chat-list">
            {chats.map((chat)=>(
              <div>
                <Conversation data={chat} currentUserId={user._id} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="Right-side-chat">Right Side</div>
    </div>
  )
}

export default Chat