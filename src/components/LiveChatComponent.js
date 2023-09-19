import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addChat } from "../utils/chatSlice";
import store from "../utils/store";
import { generateRandomName } from "../utils/helper";

const LiveChatComponent = () => {

  const [liveMessage,setliveMessage] =useState("")
  const dispatch = useDispatch();

  const chatMessage = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      // api call
      dispatch(
        addChat({
          name: generateRandomName(),
          message: "this is My youtube live !!🚀",
        })
      );
    }, 2000);
    return () => clearInterval(i);
  }, []);
  return (
    <>
      <div className=" h-[400px] border border-black ml-2 p-2  bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessage.map((c, i) => {
            return <ChatMessage key={i} name={c.name} message={c.message} />;
          })}
        </div>
      </div>
      <form className="w-full  ml-2 p-2 border border-black rounded-lg"
        onSubmit={(e) => {
          e.preventDefault()
          
          dispatch(
            addChat({
              name: "Aditya jain",
              message: liveMessage,
            })
          );
          setliveMessage("");
      }}>
        <input className="px-2  w-96" type="text"
          value={liveMessage}
          onChange={(e) => {
            setliveMessage(e.target.value)
          }} />
        <button className="px-2 mx-2 bg-green-700 text-cyan-300">Chat Us</button>
      </form>
    </>
  );
};

export default LiveChatComponent;
