'use client';

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";
import ChatItem from "../components/ChatItem";
import { getUserChats, sendChatRequest, deleteUserChats } from "../helpers/api-communicator";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { IoMdSend } from "react-icons/io";
import Navbar from "../components/Navbar";

function Chat() {
  const navigate = useRouter();
  const inputRef = useRef(null);
  const auth = useAuth();
  const [chatMessage, setMessage] = useState([]);
  
  const handleSubmit = async () => {
    const content = inputRef.current?.value;
    if (inputRef.current && inputRef) {
      inputRef.current.value = "";
    }
    const newMessage = { role: "user", content };
    setMessage((chatMessage) => [...chatMessage, newMessage]);
    const chatData = await sendChatRequest(content);
    setMessage([...chatData.chats]);
    
  };

  useLayoutEffect(() => {
    if (auth?.isLoggedIn && auth?.user) {
      toast.loading("Loading chat messages", { id: "loadchats" });
      getUserChats()
        .then((data) => {
          if (data.chats.length === 0) {
            // If chat history is empty, add the initial message from the assistant
            const initialMessage = {
              role: "assistant",
              content: "Hi! I am ScamSensei, and I am here to help Sri Lankan tourists."
            };
            setMessage([initialMessage]);
            // Optionally, save the initial message to the database if needed
          } else {
            setMessage([...data.chats]);
          }
          toast.success("Chat messages loaded", { id: "loadchats" });
        })
        .catch((error) => {
          console.error(error);
          toast.error("Unable to load chat messages", { id: "loadchats" });
        });
    }
  }, [auth]);

  useEffect(() => {

const timeoutId = setTimeout(() => {
    console.log(auth); // Log the auth state after the timeout

    if (!auth?.user) {
      navigate.push('/Signin');
    } 
  }, 3000); // Wait for 3 seconds

  return () => clearTimeout(timeoutId);
  }, [auth]);
  

  const handleDelete = async () => {
    try {
      toast.loading("Deleting chat messages", { id: "deletechats" });
      await deleteUserChats();
      setMessage([]);
      toast.success("Chat messages deleted", { id: "deletechats" });
    } catch (err) {
      console.error(err);
      toast.error("Unable to delete chat messages", { id: "deletechats" });
    }
  };

  return (
  <>
   <br/><br/><br/>

    <div className="flex flex-1 w-full h-full mt-12 gap-12">
       
      <div className="hidden md:flex flex-col flex-[0.2]">
        <div className="flex flex-col w-full h-[60vh] bg-[rgb(17,29,39)] rounded-lg mx-12">
          <div className="mx-auto my-2 bg-white text-black font-bold rounded-full w-16 h-16 flex items-center justify-center text-3xl">
            {auth?.user?.name[0]}
            {auth?.user ? (auth.user.name.split(" ")[1] ? auth.user.name.split(" ")[1][0] : " ") : " "}
          </div>
        
          <p className="mx-auto font-sans text-white">{"You are talking to ScamSensei"}</p>
          <p className="font-sans my-4 text-white px-4 justify-center">{"You can ask questions related to scams in Sri Lanka"}</p>
         
          <button
            onClick={handleDelete}
            className="w-48 my-auto p-3 text-white font-bold rounded-md mx-auto bg-red-400 hover:bg-red-500"
          >
            Clear Conversation
          </button>
        </div>
      </div>

      <div className="flex flex-1 md:flex-[0.8] px-12 flex-col">
        <h2 className="text-center text-4xl text-white mb-8">ScamSensei ChatBot</h2>
        <div className="w-[150vh] h-[50vh] rounded-md mx-auto flex flex-col overflow-y-auto scroll-smooth overflow-x-hidden">
          {chatMessage.map((chat, index) => (
            <ChatItem content={chat.content} role={chat.role} key={index} />
          ))}
        </div>

        <div className="w-full rounded-lg bg-[rgb(17,27,39)] flex mx-auto mt-4 pr-4">
          <input
           onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSubmit()
            }
          }}
            type="text"
            ref={inputRef}
            
            className="w-full bg-transparent p-6 border-none outline-none text-white text-2xl"
          />
          <button onClick={handleSubmit} className="ml-auto text-white">
            <IoMdSend size={30} />
          </button>
        </div>
      </div>
    </div>
    </>
  );
}

export default Chat;
