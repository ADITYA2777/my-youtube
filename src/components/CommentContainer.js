
import React from 'react'


const commentsData = [
  {
    name: "Aditya jain",
    text: "ye hi i want to create youtube like uu bhaii!!",
    replies: [
      {
        name: "Aditya jain",
        text: "ye hi i want to create youtube like uu bhaii!!",
        replies: [
          {
            name: "Aditya jain",
            text: "ye hi i want to create youtube like uu bhaii!!",
            replies: [
              {
                name: "Aditya jain",
                text: "ye hi i want to create youtube like uu bhaii!!",
                replies: [],
              },
              {
                name: "Aditya jain",
                text: "ye hi i want to create youtube like uu bhaii!!",
                replies: [],
              },
              {
                name: "Aditya jain",
                text: "ye hi i want to create youtube like uu bhaii!!",
                replies: [],
              },
              {
                name: "Aditya jain",
                text: "ye hi i want to create youtube like uu bhaii!!",
                replies: [],
              },
            ],
          },
          {
            name: "Aditya jain",
            text: "ye hi i want to create youtube like uu bhaii!!",
            replies: [],
          },
          {
            name: "Aditya jain",
            text: "ye hi i want to create youtube like uu bhaii!!",
            replies: [],
          },
          {
            name: "Aditya jain",
            text: "ye hi i want to create youtube like uu bhaii!!",
            replies: [],
          },
        ],
      },
      {
        name: "Aditya jain",
        text: "ye hi i want to create youtube like uu bhaii!!",
        replies: [],
      },
      {
        name: "Aditya jain",
        text: "ye hi i want to create youtube like uu bhaii!!",
        replies: [],
      },
      {
        name: "Aditya jain",
        text: "ye hi i want to create youtube like uu bhaii!!",
        replies: [],
      },
      {
        name: "Aditya jain",
        text: "ye hi i want to create youtube like uu bhaii!!",
        replies: [],
      },
    ],
  },
  {
    name: "Aditya jain",
    text: "ye hi i want to create youtube like uu bhaii!!",
    replies: [
      {
        name: "Aditya jain",
        text: "ye hi i want to create youtube like uu bhaii!!",
        replies: [],
      },
    ],
  },
  {
    name: "Aditya jain",
    text: "ye hi i want to create youtube like uu bhaii!!",
    replies: [
      {
        name: "Aditya jain",
        text: "ye hi i want to create youtube like uu bhaii!!",
        replies: [
          {
            name: "Aditya jain",
            text: "ye hi i want to create youtube like uu bhaii!!",
            replies: [],
          },
          {
            name: "Aditya jain",
            text: "ye hi i want to create youtube like uu bhaii!!",
            replies: [],
          },
          {
            name: "Aditya jain",
            text: "ye hi i want to create youtube like uu bhaii!!",
            replies: [],
          },
          {
            name: "Aditya jain",
            text: "ye hi i want to create youtube like uu bhaii!!",
            replies: [],
          },
        ],
      },
      {
        name: "Aditya jain",
        text: "ye hi i want to create youtube like uu bhaii!!",
        replies: [
          {
            name: "Aditya jain",
            text: "ye hi i want to create youtube like uu bhaii!!",
            replies: [],
          },
          {
            name: "Aditya jain",
            text: "ye hi i want to create youtube like uu bhaii!!",
            replies: [],
          },
          {
            name: "Aditya jain",
            text: "ye hi i want to create youtube like uu bhaii!!",
            replies: [],
          },
          {
            name: "Aditya jain",
            text: "ye hi i want to create youtube like uu bhaii!!",
            replies: [],
          },
        ],
      },
      {
        name: "Aditya jain",
        text: "ye hi i want to create youtube like uu bhaii!!",
        replies: [
          {
            name: "Aditya jain",
            text: "ye hi i want to create youtube like uu bhaii!!",
            replies: [],
          },
          {
            name: "Aditya jain",
            text: "ye hi i want to create youtube like uu bhaii!!",
            replies: [],
          },
          {
            name: "Aditya jain",
            text: "ye hi i want to create youtube like uu bhaii!!",
            replies: [],
          },
          {
            name: "Aditya jain",
            text: "ye hi i want to create youtube like uu bhaii!!",
            replies: [],
          },
        ],
      },
      {
        name: "Aditya jain",
        text: "ye hi i want to create youtube like uu bhaii!!",
        replies: [
          {
            name: "Aditya jain",
            text: "ye hi i want to create youtube like uu bhaii!!",
            replies: [],
          },
          {
            name: "Aditya jain",
            text: "ye hi i want to create youtube like uu bhaii!!",
            replies: [],
          },
          {
            name: "Aditya jain",
            text: "ye hi i want to create youtube like uu bhaii!!",
            replies: [],
          },
          {
            name: "Aditya jain",
            text: "ye hi i want to create youtube like uu bhaii!!",
            replies: [],
          },
        ],
      },
      {
        name: "Aditya jain",
        text: "ye hi i want to create youtube like uu bhaii!!",
        replies: [],
      },
      {
        name: "Aditya jain",
        text: "ye hi i want to create youtube like uu bhaii!!",
        replies: [],
      },
    ],
  },
  {
    name: "Aditya jain",
    text: "ye hi i want to create youtube like uu bhaii!!",
    replies: [],
  },
  {
    name: "Aditya jain",
    text: "ye hi i want to create youtube like uu bhaii!!",
    replies: [],
  },
  {
    name: "Aditya jain",
    text: "ye hi i want to create youtube like uu bhaii!!",
    replies: [],
  },
  {
    name: "Aditya jain",
    text: "ye hi i want to create youtube like uu bhaii!!",
    replies: [],
  },
  {
    name: "Aditya jain",
    text: "ye hi i want to create youtube like uu bhaii!!",
    replies: [],
  },
  {
    name: "Aditya jain",
    text: "ye hi i want to create youtube like uu bhaii!!",
    replies: [],
  },
];

const Comment = ({ data }) => {
    const {name,text,replies} = data
    return (
      <div className='flex  shadow-sm bg-gray-100 p-2 rounded-lg my-2'>
        <img className='w-12 h-12'
          alt="image"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQdztTDcpZ2pFqwWDYwSXbvZq5nzJYg5cn8w&usqp=CAU"
            />
            <div className='px-3'>
                <p className='fontbold'>{ name}</p>
                <p>{ text}</p>
            </div>
      </div>
    );
}

const CommentList = ({comments}) => {
    return comments.map((comment, index) => (
      <div>
            <Comment key={index} data={comment} />
            <div className='pl-5 border border-l-black ml-5'>
               <CommentList comments={comment.replies}/>
            </div>
      </div>
    ));
}

const CommentContainer = () => {
  return (
    <div className='m-5  p-2'>
          <h1 className='text-2xl font-bold'>Comment:</h1>
          <CommentList comments={commentsData} />
    </div>
  );
}

export default CommentContainer