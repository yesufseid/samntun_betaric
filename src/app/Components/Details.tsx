"use client"
import { Categories, Postwidget,PostDetail,Author,Comments,CommentsForm } from '../../app/Components';
import {getPostDetails} from "../Service"
import { useEffect,useState} from 'react';
import {PostProps} from "../types"
import  {AdjacentPosts} from "../Section"

type Props={
    slug:string
}


export default function Details({slug}:Props) {
    const [post,setPost]=useState<PostProps>();
  useEffect(() => {
    getPostDetails(slug).then((posts:any) => {
      console.log(posts);
      
      setPost(posts) 
    });
  }, []);
 
 
  return (
    <>
       <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="col-span-1 lg:col-span-8">
            {post&& <>   <PostDetail  post={post}  /> 
                  <Author author={post.author} />
            <AdjacentPosts slug={post.slug} createdAt={post.createdAt} /> 
            <CommentsForm slug={post.slug} /> 
            {/* <Comments slug={post.slug} />  */}
             </> } 
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className="relative lg:sticky top-8">
              {post&&<>
                <Postwidget slug={post.slug} categories={post.category}/>
                <Categories />
              </>}
            </div>
          </div>
        </div>
    </>
  )
}
