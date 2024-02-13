import React, { useState } from 'react'

function Comments(props) {
  const [comments,setComments]= useState("")
  const addComents=async()=>{
    const newsDoc=doc(database,"News",`${props.url.substr(-10,10)}`,)
    const commentsRef =collection(newsDoc,"Coments")
    try{
     await addDoc(CommentsRef,{
      comments:comments
     })
    }
    catch(err){
      console.error(err)
    }
    
  }
  return (
    <div className='grid grid-rows-2'>
         <div className='p-5'>
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Comments</label>
           <div className='flex'>
           <input onChange={(e)=>setComments(e.target.value)} type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="commets" required/>
            <button onClick={addComents} class="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded ml-3">
            Add Button
            </button>
           </div>
           
        </div>
    </div>
  )
}

export default Comments;
