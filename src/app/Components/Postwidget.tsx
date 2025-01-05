"use client"
import React, { useState, useEffect } from 'react';;
import Link from 'next/link';
import WidgetSkeletel from './skele/widget';




export default function Postwidget({rposts}) {
  return (
    <div className="bg-white  text-black dark:text-white dark:bg-slate-950 shadow-lg rounded-lg p-8 pb-12 mb-8">
    <h3 className="text-xl mb-2 font-semibold  w-fit   flex-col gap-2"> {"የመረጥንላችሁ"} <hr className='h-2 w-10 rounded-full bg-red-700' /></h3>
    {rposts?rposts.map((post, index) => (
      <Link href={`/post/${post.slug}`}  key={index}>
      <div key={index} className="flex items-center w-full mb-4">
        <div className="flex  gap-2">
          <div className=' relative overflow-hidden group min-w-44'>
          <img
            alt={post.title}
            className="align-middle object-top cursor-pointer  object-cover rounded-none min-w-44 h-32  transform 
            transition-transform duration-1000  ease-in-out group-hover:scale-105"
            src={post.featuredImage.url}
          />
            </div>
          <div className='flex flex-col gap-3'>
          <p className={` font-xl font-semibold  w-fit flex gap-2 items-center`}><hr className='h-10 w-2 rounded-full bg-red-700' />{post.category[0].name }</p>
          <p  className="text-md text-balance" >{  post.title}</p>
          </div>
        </div>
      </div>
      </Link>
    )):[1,2,3,4].map(p=><WidgetSkeletel />)}
  </div>
  )
}
