"useClient"
import React from 'react'
import { Horizontal,Vertical,TextCard } from './Cards'
import { getSportPosts } from '@/app/Service'
import { useEffect,useState } from 'react'

const cata=[{name:"ስፖርት",slug:"sport"}]
export default function Sport() {
   const [spost,setSpost]=useState()
   const [hpost,setHpost]=useState([])
   const [textpost,setTextpost]=useState([])
      useEffect(()=>{
       const Handler=async()=>{
          const posts =await getSportPosts()
         setSpost(posts.shift()) 
        setHpost(posts.slice(1,3))
        setTextpost(posts.slice(3))
       }
       Handler()
      },[])
  return (
         <div className='grid grid-cols-3 mx-32 gap-3'>
              <div>
                {spost && <Vertical  post={spost}  />}
              </div>
              <div className='flex flex-col gap-3'>
                  {hpost && hpost.map((p)=><Horizontal post={p}  />)} 
              </div>
              <div>
                {textpost && textpost.map((p)=><TextCard  rposts={p} />)}
              </div>
         </div>
  )
}
