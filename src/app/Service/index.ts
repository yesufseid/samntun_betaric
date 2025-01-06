import { gql, request } from 'graphql-request'

const graphqlAPI=process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT || "hellow"

export const Getpost=async()=>{
   const query=gql`
   query MyQuery {
  postsConnection {
    edges {
      node {
        author {
          bio
          id
          photo {
            url
          }
          name
        }
        createdAt
        slug
        title
        excerpt
        featuredImage {
          url
        }
        category {
          name
          slug
        }
      }
    }
  }
}`
try {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const results:any=await request(graphqlAPI,query,[{name:"ስፖርት",slug:"sport"}])
  return results.postsConnection.edges
} catch (error) {
  console.log(error); 
}

}
export const getSimilarPosts = async (categories:[], slug:string,amount:number) => {
  const query = gql`
    query MyQuery{
      posts(
        where: {slug_not: "${slug}"}
        last:${amount}
      ) {
        title
        excerpt
        slug
        featuredImage {
          url
        }
         category {
          name
          slug
        }
        createdAt
        slug
      }
    }
  `
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const result:any = await request(graphqlAPI, query, { slug, categories ,amount});
     return result.posts;
  } catch (error) {
    console.log(error);
    
  }
 
};
export const getSportPosts = async () => {
  const query = gql`
   query MyQuery {
  posts(where: {category_some: {name: "ስፖርት"}}, last: 10) {
    title
        excerpt
        slug
        featuredImage {
          url
        }
         category {
          name
          slug
        }
        createdAt
        slug
  }
}
  `
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const results:any=await request(graphqlAPI,query)
    return results.posts;
  } catch (error) {
    console.log(error); 
  }
}
export const getRecentPosts = async () => {
  const query = gql`
    query MyQuery {
  posts(last: 5, orderBy:createdAt_DESC) {
    id
    slug
    createdAt
    featuredImage {
      url
    }
    title
    excerpt
      category {
          name
          slug
        }
  }
}
  `
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const result:any = await request(graphqlAPI, query);
    return result.posts
  } catch (error) {
    console.log(error);
  }
 
};
export const getRecent = async ({slug}) => {
  const query = gql`
    query MyQuery {
  posts( where: {slug_not:${slug}}, last: 4, orderBy:createdAt_DESC) {
    id
    slug
    createdAt
    featuredImage {
      url
    }
    title
    excerpt
      category {
          name
          slug
        }
  }
}
  `
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const result:any = await request(graphqlAPI, query,{slug});
    return result.posts
  } catch (error) {
     console.log(error);
     
  }
 
};

export const getNearRecentPosts = async (createdAt) => {
  const query = gql`
    query MyQuery {
  posts(createdAt_lt:${createdAt}},last: 4) {
    id
    slug
    createdAt
    featuredImage {
      url
    }
    title
    excerpt
      category {
          name
          slug
        }
  }
}
  `
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const result:any = await request(graphqlAPI, query,{createdAt});
    return result.posts
  } catch (error) {
     console.log(error);
     
  }
 
};

export const getPostDetails = async (slug:string) => {
  const query = gql`
     query MyQuery {
  post(where: {slug:"${slug}"}) {
    title
    excerpt
    featuredImage {
      url
    }
    author {
      name
      bio
      photo {
        url
      }
    }
    slug
    createdAt
    content {
         html
    }
    category {
      name
      slug
    }
  }
}
  `
try {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const results:any = await request(graphqlAPI, query, { slug });
  return results.post
} catch (error) {
  console.log(error);
  
}
  
};  

