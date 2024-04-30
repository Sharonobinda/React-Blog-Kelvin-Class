import React, { useEffect, useState } from 'react'
import Landing from '../components/Landing'
import Post from '../components/Post'

export default function Home() 
{
  const [posts, setPosts] = useState([])
  const [onDelete, setOndelete] = useState()

  useEffect(()=>{
    fetch("http://localhost:3000/posts")
    .then((res)=>res.json())
    .then((data)=>{
       setPosts(data)
    })


  },[onDelete])
console.log('====================================');
console.log(posts);
console.log('====================================');
  return (
    <div>

    {
      posts && posts.map((post)=>(
       <Post key={post.id} setOndelete={setOndelete} post={post} />
      ))
    }


        <Landing/>
    </div>
  )
}
