import React from "react";
import {NodeProps} from "../types"

type PostProps={
  post:NodeProps
}
export default function  BoxCard({post}:PostProps){
  return (
    <div className="group relative overflow-hidden mb-5  mr-5   ">
      {/* Image */}
      <img
        src={post.featuredImage.url}
        alt="Church"
        className="w-[400px] h-[250px] object-top  object-cover  shadow-lg rounded-t-lg lg:rounded-lg cursor-pointer 
         transform transition-transform duration-1000 ease-in-out group-hover:scale-105"
      />
    
      {/* Text content */}
      <div className="absolute bottom-0  flex flex-col  p-4">
        {/* Badge */}
        <span className="bg-red-600 text-white text-sm font-bold px-3 py-1 rounded-md self-start">
          አስረ
        </span>
        {/* Headline */}
        <p className="text-white text-lg font-semibold leading-relaxed">
          {post.excerpt}
        </p>
      </div>
    </div>
  );
};

