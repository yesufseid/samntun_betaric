"use client"
import React, { useState, useEffect } from 'react';
import Link from "next/link"
import { getCategories } from '../Service';


export default function Header() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);
  return (
    <div className="sticky z-50 top-0  container mx-auto px-10 mb-8 ">
      <div className="border-b w-full inline-block border-blue-400 py-8">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl text-black">Graph CMS</span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
        {["ስፖርት","ፖለቲካ","ዜና","ቀዳሚ ገፅ"].map((category, index) => (
            <Link key={index} href={`/category/${category}`}><span className="md:float-right mt-2 text-2xl align-middle text-black ml-8 font-semibold cursor-pointer">{category}</span></Link>
          ))}
        </div>
      </div>
    </div>
  )
}
