"use client"
import React, { useState, useEffect } from 'react';
import { submitComment } from '../Service';


const CommentsForm = ({ slug }:{slug:string}) => {
  const [error, setError] = useState(false);
  const [email,setEmail] = useState<string>();
  const [name,setName] = useState<string>();
  const [comment,setComment] = useState<string>();
  const [storData,setStorData] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);


  useEffect(() => {
    const user= JSON.parse(window.localStorage.getItem("user")) 
   if(user){
    console.log(user);
    setEmail(user.email)
    setName(user.name)
    setStorData(true)
   }
  
  }, []);


const HandleStorData=()=>{
  setStorData((prev)=>prev?false:true)
    const user={
      name:name,
      email:email
    }  
    if(!storData){
      window.localStorage.setItem("user",JSON.stringify(user))  
    }
    if(storData){
      window.localStorage.removeItem("user")
    } 
}
  const handlePostSubmission = async() => {
    const commentObj = {
      name:name,
      email:email,
      comment:comment,
      slug:slug
    };
  await  submitComment(commentObj)
      .then((res) => {
        if (res.status===200) {
          setShowSuccessMessage(true);
          setTimeout(() => {
            setShowSuccessMessage(false);
          }, 3000);
          
        }
        if(res.status===500){
          setError(true)
        }
      });
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">Leave a Reply</h3>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea value={comment} onChange={(e)=>setComment(e.target.value)} className="p-4 outline-none w-full rounded-lg h-40 focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" name="comment" placeholder="Comment" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" placeholder="Name" name="name" />
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" placeholder="Email" name="email" />
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div>
          <input checked={storData} onClick={HandleStorData} type="checkbox" id="storeData" name="storeData" value="true" />
          <label className="text-gray-500 cursor-pointer" htmlFor="storeData"> Save my name, email in this browser for the next time I comment.</label>
        </div>
      </div>
      {error && <p className="text-xs text-red-500">All fields are mandatory</p>}
      <div className="mt-8">
        <button  disabled={name===""||email===""||comment===""} type="button" onClick={handlePostSubmission} className="transition duration-500 ease hover:bg-indigo-900 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">Post Comment</button>
        {showSuccessMessage && <span className="text-xl float-right font-semibold mt-3 text-green-500">Comment submitted for review</span>}
      </div>
    </div>
  );
};

export default CommentsForm;