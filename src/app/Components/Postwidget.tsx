"use client"
import React, { useState, useEffect } from 'react';;
import moment from 'moment';
import Link from 'next/link';


import { getSimilarPosts, getRecentPosts } from '../Service';
type Props={
  rposts:{}
}


export default function Postwidget({rposts}) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
    <h3 className="text-xl mb-8 font-semibold border-b pb-4">{"የመረጥንላችሁ"}</h3>
    {rposts.map((post, index) => (
      <div key={index} className="flex items-center w-full mb-4">
        <div className="flex  justify-evenly gap-2">
          <img
            alt={post.title}
            className="align-middle object-top  object-cover rounded-none min-w-44 h-32"
            src={post.featuredImage.url}
          />
          <div className='flex flex-col gap-3'>
          <p className="text-black font-xl font-semibold border-b-4 w-fit border-red-700">{post.title}</p>
          <Link href={`/post/${post.slug}`} className="text-md text-balance" key={index}>{  post.excerpt.slice(0,100)}</Link>
          </div>
        </div>
      </div>
    ))}
  </div>
  )
}
