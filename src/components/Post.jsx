import React from 'react'
import { toast } from 'react-toastify'

export default function Post({post, setOndelete}) 
{
    const handleDelete = (id) =>{
        fetch(`http://localhost:3000/posts/${id}`, {
            method: 'DELETE',
          })
        .then((res) => res.json())
        .then((response)=>{
            setOndelete(id)
            toast.success("Post deleted successfully!")
        })
        
    }

  return (
    <div className='border p-3' >
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

        <button onClick={()=> handleDelete(post.id)} type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
            Delete
        </button>

  </div>
  )
}
