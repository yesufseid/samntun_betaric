

type PostProps={
  author:AutorProps
  createdAt:string
  slug:string
  title:string
  excerpt:string
  featuredImage:{url:string}
  category:[]
  content:{html:string}
}

type AutorProps={
    bio:string
    id:string
    photo:{url:any}
    name:string
}
type CategoryProps={
   name:string
   slug:string
}

 type NodeProps ={
    author:AutorProps
    createdAt:string
    slug:string
    title:string
    excerpt:string
    featuredImage:{url:any}
    category:CategoryProps
  }

  type EdageProps={
    edges:NodeProps
  }
  export type {NodeProps,PostProps,AutorProps}