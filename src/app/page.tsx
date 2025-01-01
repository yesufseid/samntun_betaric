"use client"
import { NewsCard,Categories,Postwidget } from "./Components";
import { getRecentPosts } from "./Service";
import { useEffect,useState } from "react";
import {NodeProps} from '../../src//app/types'
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
    <div className="mx-32" >
      <div className="grid grid-cols-1 lg:grid-cols-12  " >
           <div className="lg:col-span-7 col-span-1 "> 
              {post&&<NewsCard post={post}  />} 
           </div>
           <div className="lg:col-span-5 col-span-1" >
            <div className="" >
             <Postwidget rposts={recentpost} /> 
                 {/* <Categories /> */}
            </div>
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


