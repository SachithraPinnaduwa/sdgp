'use client';
import React, { useState, useEffect } from "react";
import UserInput from "./UserInput";
import Message from "./Message";
import toast from "react-hot-toast";


function Searchbot() {
  const [messages, setMessages] = useState([]);
  const [response, setResponse] = useState("");

  
  useEffect(() => {
    // setMessages([...messages, { text: "What can you do for me?", isUser: true }]);
    sendMessage("What can you do for me?");
  }, []);

  useEffect(() => {

    // setMessages([...messages,{ text: "Generating response....", isUser: false}])
    if (response) {
      let newMessages = [...messages];
      console.log(newMessages);
      newMessages[newMessages.length - 1] = { text: response, isUser: false };
      console.log(newMessages);
      setMessages(newMessages);
      setResponse("");
    }
  }, [response]);

  const sendMessage = async (text) => {
    // Handle sending the message and receiving a response here
    // You can add the user's message to the state and get a response from your backend or AI model.
    const newMessage = { text, isUser: true };
    setMessages([
      ...messages,
      newMessage,
      { text: "Generating response...", isUser: false },
    ]);
    // Handle AI response and add it to the messages state.
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt: text }),
    };
    try {
      const resp = await fetch("http://localhost:3100/api/v1/chat2", options);
      console.log("resp ",resp);
      if(resp.status != 200) {
        setResponse("I don't know how to respond to that")
      }
      const result = await resp.json();
      
      setResponse(result.content);
    } catch (error) {
      toast.error("Unable to send message")
      console.log("error > ",error)
      setResponse(error.message ? error.message : "Something went wrong...")
    }
  };

  const clearMessage = () => {
    setMessages([])
    setResponse('')
  }

  

  return (
    <div className=" m-0 p-0  min-h-screen">
      
      <div className="max-w-[80vw] justify-center mx-auto ">
      
      <div className="p-10 h-[74vh] overflow-y-auto bg-gray-700 border-8 mt-[10vh]">
        {messages.map((message, index) => (
          <Message key={index} message={message} />
        ))}
      </div>
      
      <UserInput onSendMessage={sendMessage} clearMessage={clearMessage} />
     
      </div>
     
      
    </div>
  );
}

export default Searchbot;
