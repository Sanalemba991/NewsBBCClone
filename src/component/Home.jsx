
import React, { useEffect, useState } from 'react'
import { Await, Link } from 'react-router-dom'
import {  doc } from 'firebase/firestore'
import { setDoc } from 'firebase/firestore'
import { database } from '../firebase/setup'
function Home(props) {
  const [news, setNews] = useState([])
 
  const addNews=async (data)=>{
    const newsDoc=doc(database,"News",`${data.url.substr(-10,10)}`)
    try{
      await setDoc(newsDoc,{
        title:data.title,
        description:data.description

      })
    }
    catch(err){
      console.error(err)

    }  

  }
 
  function getNews() {
    fetch(`https://newsapi.org/v2/everything?q=${props.menu ? props.menu : "All"}&sortBy=popularity&apiKey=3e50066ea2654bd582fdfb43cc44855b`)
      .then(res => res.json())
      .then(json => setNews(json.articles))
  }
  useEffect(() => {
    getNews()
  }, [news])
  return (

    <div className='mt-12 grid grid-cols-4 p-5'>
      {news?.filter(data => data.title.includes(props.search)).map((data) => {
        return <>
          <Link onClick={()=>addNews(data)} to="/details" state={{ data: data }}>
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
              <img class="w-full" src={data.urlToImage} alt="Not Found" />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{data.title}</div>
                <p class="text-gray-700 text-base">
                  {data.content}
                </p>
              </div>

            </div>
          </Link>
        </>
      })}
    </div>
  )
}

export default Home;
