import React from "react";
import io from "socket.io-client";
import { useState, useEffect } from "react";

const socket = io.connect("http://localhost:4000");

export default function App() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    //Rutina que se ejecuta solo una vez al iniciar el componente
    socket.on("message", receiveMessage);
    return () => {
      socket.off("message", receiveMessage);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newMessage = {
      from: "Me",
      body: message,
    };
    setMessages([...messages, newMessage]);
    socket.emit("message", message);
  };

  const receiveMessage = (message) => {
    setMessages((state) => [...state, message]);
  };

  return (
    <div className="h-screen bg-zinc-800 text-white flex items-center">
      <form onSubmit={handleSubmit} className="bg-zinc-900 p-10">
        <h1 className="text-2xl font-bold my-2">Chat React</h1>
        <input
          className="border-2 border-zinc-500 p-2 w-full text-black"
          onChange={(e) => setMessage(e.target.value)}
          type="text"
          placeholder="Enter a message"
        />
        <button type="submit">Send</button>
        <ul>
          {messages.map((message, index) => (
            <li
              key={index}
              className={`my-2 p-2 table text-sm rounded-md ${
                message.from === "Me" ? "bg-sky-700" : `bg-black ml-auto`
              }`}
            >
              <span className="text-xs text-slate-300 block">
                {message.from}
              </span>
              <span className="text-md">{message.body}</span>
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
}
