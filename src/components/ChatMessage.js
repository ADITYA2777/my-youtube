import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className="flex  items-center shadow-sm p-2  text-cyan-600">
      <img
        className=" h-8"
        alt="user"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQdztTDcpZ2pFqwWDYwSXbvZq5nzJYg5cn8w&usqp=CAU"
          />
          <span className=' font-bold p-2'>{ name}</span>
          <span>{ message}</span>
    </div>
  );
}

export default ChatMessage