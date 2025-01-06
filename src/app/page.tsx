"use client"
import { NewsCard,Postwidget } from "./Components";
import { getRecentPosts } from "./Service";
import { useEffect,useState } from "react";
import Skeletel from "./Components/skele/Skeletel";
import Sport from "./Components/sport/Sport";


export default function Home () {
  const [post,setPost]=useState()
  const [recentpost,setRecentpost]=useState()
  useEffect(()=>{
   const Handler=async()=>{
      const posts =await getRecentPosts()
      const pos =await posts.shift()
       setPost(pos)
     return  setRecentpost(posts)
       
   }
   Handler()
  },[])
  
  return (
    <>
    <div className="  md:mx-32 scroll-container scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-200" >
      <div className="grid grid-cols-1 md:grid-cols-12  " >
           <div className="lg:col-span-7 col-span-1  "> 
              {post?<NewsCard post={post}  />:<Skeletel  height={450} width={700} variant={"rectangular"} />} 
           </div>
           <div className="lg:col-span-5 col-span-1 ml-5" >
             <Postwidget rposts={recentpost} />    
           </div>
      </div>
    </div>
    <div className="sport">
        <h1 className="w-full text-center text-2xl text-white py-5 ">ስፖርት</h1>
             <Sport />
       </div>
    </>
  );
}


