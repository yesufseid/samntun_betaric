"use client"
import React, { useState, useEffect } from 'react';
import { MdMenu } from "react-icons/md";
import Link from "next/link"
import { getCategories } from '../Service';
import ThemeToggle from './Themetoggle';
import moment from "moment-timezone";
import { FaTwitter, FaFacebookF,FaYoutube ,FaInstagram , FaTelegramPlane,FaWhatsapp } from "react-icons/fa";
 const icon=[<FaTwitter  className='text-white'  />, <FaFacebookF className='text-white' />,<FaYoutube className='text-white' /> ,<FaInstagram  className='text-white' />, <FaTelegramPlane className='text-white' />,<FaWhatsapp className='text-white' />]

export default function Header() {
  const [currentTime, setCurrentTime] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    // Set the current time when the component mounts
    const interval = setInterval(() => {
      setCurrentTime(moment().format("YYYY/M/D HH:mm EAT"));
    }, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);
  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className={` sticky z-50 top-0 bg-white dark:bg-slate-950   mb-8  shadow-md shadow-gray-100 dark:shadow-slate-900
    transition-transform duration-500  ${
        isScrolled ? "-translate-y-28" : "translate-y-0"
      } `}>
      <div className='bg-slate-900  w-full h-8 overflow-y-hidden' >
        <div className='mx-32 flex justify-between items-center'>
              <div className='flex gap-3 text-black dark:text-white items-center'>
                  <p >{currentTime}</p>
                  <hr className='h-8 w-[1px] bg-slate-300 ' />
                  <div className='flex items-center gap-3'>{["English","አማረኛ","العربية","Oromia","Afar"].map(p=><p className='text-white'>{p}</p>) }</div>
              </div>
              <div className='flex gap-5'>
                    {icon.map(i=>i)}
              </div>
        </div>
      </div>
        <div className="flex justify-between h-20 items-center  mx-32  border-b  border-blue-400">
           <div  >

           </div>
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl text-black dark:text-white">Graph CMS</span>
          </Link>
          <ThemeToggle />
        </div>
        <div className=" flex gap-8 py-2 justify-end mx-32  text-black dark:text-white">
        {["ቀዳሚ ገፅ","ስፖርት","ፖለቲካ","ዜና"].map((category, index) => (
            <Link key={index} href={`/category/${category}`}><span className="text-2xl  font-semibold cursor-pointer">{category}</span></Link>
          ))}
        </div>
        
    </div>
  )
}


