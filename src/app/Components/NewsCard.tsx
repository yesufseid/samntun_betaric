"use client"
import React from "react";
import { getSimilarPosts } from "../Service";
import { useEffect,useState } from "react";
import BoxCard from "./BoxCard";
import Link from "next/link";


export default function  NewsCard({post}){
  const [spost,setSpost]=useState([])
    useEffect(()=>{
     const Handler=async()=>{
        const posts =await getSimilarPosts(post.category,post.slug,2)
        return setSpost(posts)   
     }
     Handler()
    },[post])
  return (
    <div>
      <Link href={`/post/${post.slug}`} >
    <div className="group relative overflow-hidden mb-5  mr-5 w-full h-[450px]   ">
      {/* Image */}
      <img
        src={post.featuredImage.url}
        alt="Church"
        className="w-full h-[450px] object-top  object-cover  shadow-lg  cursor-pointer 
         transform transition-transform duration-1000 ease-in-out group-hover:scale-105"
      />
    
      {/* Text content */}
      <div className="absolute bottom-0  flex flex-col  p-4">
        {/* Badge */}
        <span className="bg-red-600 text-white text-sm font-bold px-3 py-1 rounded-md self-start">
          {post.category[0].name}
        </span>
        {/* Headline */}
        <p className="text-white text-lg font-semibold leading-relaxed w-full">
          {post.excerpt}
        </p>
      </div>
    </div>
    </Link>
    <div className="flex justify-between">
    {spost&&spost.map((post)=>{
      return(
        <Link key={post.slug} href={`/post/${post.slug}`} >
        <BoxCard  post={post}  />
        </Link>
      )
    })}
    </div>
    </div>
  );
};

