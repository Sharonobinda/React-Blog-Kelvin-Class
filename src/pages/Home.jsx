import React, { useEffect, useState } from 'react'
import Landing from '../components/Landing'

export default function Home() 
{
  const [posts, setPosts] = useState([])

  useEffect(()=>{
    fetch("http://localhost:3000/posts")
    .then((res)=>res.json())
    .then((data)=>{
       setPosts(data)
    })


  },[])

  return (
    <div>

    {
      posts && posts.map((post)=>(
        <div className='border p-3' key={post.id}>
          <h1 className='text-xl font-semibold'>{post.title}</h1>
          <p>{post.content}</p>
          <p>By <span className='italic'>{post.author}</span> </p>
          
          <div className='bg-gray-300 p-4'>
            <h5>Comments {post.comments.length}</h5>
          {
            post.comments && post.comments.map((comment)=>(
              <div className='p-2 bg-white mt-2' key={comment.id}>
                <p>{comment.text}</p>
                <p>{comment.author}</p>
              </div>
            ))
          }
          </div>
        </div>
      ))
    }


        <Landing/>
    </div>
  )
}
