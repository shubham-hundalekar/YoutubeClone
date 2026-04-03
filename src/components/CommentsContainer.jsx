import React from 'react'

/*

  const comments = [
    {
      name: "",
      text: "",
      reply : []
    },
    {
      name: "",
      text: "",
      reply : []
    
    },
    {
      name: "",
      text: "",
      reply : []
    
    }
  ]

*/
const commentData = [
  {
    name : "Shubham Hundalekar",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio officia qui magni nisi accusantium cupiditate",
    replies:[
      {
        name:"Akshay Saini",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eius fugiat rem alias harum ipsa porro ipsum vero nihil voluptate.",
        replies:[]
      } 
    ]
  },
  {
    name : "Shubham Hundalekar",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio officia qui magni nisi accusantium cupiditate",
    replies:[
      {
        name:"Akshay Saini",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eius fugiat rem alias harum ipsa porro ipsum vero nihil voluptate.",
        replies:[
          {
        name:"Akshay Saini",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eius fugiat rem alias harum ipsa porro ipsum vero nihil voluptate.",
        replies:[
          {
            name : "Shubham Hundalekar",
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio officia qui magni nisi accusantium cupiditate",
            replies:[{
              name : "Shubham Hundalekar",
              text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio officia qui magni nisi accusantium cupiditate",
              replies:[]
          }]
          }
        ]
      }
        ]
      }
    ]
  },
  {
    name : "Shubham Hundalekar",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio officia qui magni nisi accusantium cupiditate",
    replies:[]
  },
  {
    name : "Shubham Hundalekar",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio officia qui magni nisi accusantium cupiditate",
    replies:[]
  }

]

const CommentList = ({comments}) =>{
  return(
      comments.map((comment, index)=>(
      <div key={index}>
        <Comment  data={comment}/>
        <div className='pl-3 ml-5 border border-l-black'>
          <CommentList comments={comment.replies} />    
        </div>
        
      </div>
    ))
  )
}

const Comment = ({data})=>{
  const {name, text, replies} = data;
  return(
    <div className='flex py-2 m-1 bg-gray-200'>
      <img className='w-8 h-8' src="https://tse3.mm.bing.net/th/id/OIP.0LvP1YUJ2stgbrp2srwnFQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
      <div className='px-2 text-sm'>
        <p>{name}</p>
        <p>{text}</p>
      </div>
      
    </div>
  )
}

const CommentsContainer = () => {

  return (
    <div className='px-16 py-10'>
      <h1 className='text-2xl font-bold'>Comments</h1>
        <CommentList comments={commentData}/>
    </div>
  )
}

export default CommentsContainer