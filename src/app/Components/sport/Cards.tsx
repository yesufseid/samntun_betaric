import Link from "next/link"




export  function Vertical({post}) {
  return (
    <div className="group relative overflow-hidden mb-5 w-full h-[500px]   ">
    {/* Image */}
    <img
      src={post.featuredImage.url}
      alt="Church"
      className="w-full h-full object-top  object-cover  shadow-lg  cursor-pointer 
       transform transition-transform duration-1000 ease-in-out group-hover:scale-105"
    />
  
    {/* Text content */}
  
      <p className="text-white  absolute bottom-0  leading-relaxed w-full">
        {post.excerpt}
      </p>
  </div>
  )
}



export  function Horizontal({post}) {
  return (
    <div className="group relative overflow-hidden  w-full h-[245px]   ">
    {/* Image */}
    <img
      src={post.featuredImage.url}
      alt="Church"
      className="w-full h-[245px] object-top  object-cover  shadow-lg  cursor-pointer 
       transform transition-transform duration-1000 ease-in-out group-hover:scale-105"
    />
  
    {/* Text content */}
    
      <p className="text-white absolute bottom-0  leading-relaxed w-full">
        {post.excerpt.slice(0,100)}
      </p>
  </div>
  )
}



export  function TextCard({rposts}) {
  return (
      <div  className="flex items-center w-full bg-slate-300">
        <div className="flex  gap-2">
          <div className=' relative overflow-hidden group min-w-44'>
          <img
            alt={rposts.title}
            className="align-middle object-top  object-cover rounded-none min-w-44 h-32  transform 
            transition-transform duration-1000  ease-in-out group-hover:scale-105"
            src={rposts.featuredImage.url}
          />
            </div>
          <div className='flex flex-col '>
          <Link href={`/post/${rposts.slug}`} className="text-md  text-xl text-balance" >{rposts.title}</Link>
          </div>
     </div>
     </div>
  )
}
