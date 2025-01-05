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

const results:any=await request(graphqlAPI,query,[{name:"ስፖርት",slug:"sport"}])
return results.postsConnection.edges
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
  const result:any = await request(graphqlAPI, query, { slug, categories });
 if(result){
  return result.posts;
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
  const result:any = await request(graphqlAPI, query);

  return result.posts;
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
  const result:any = await request(graphqlAPI, query);
  return result.posts
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
  const result:any = await request(graphqlAPI, query);
  return result.posts
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
  const result:any = await request(graphqlAPI, query,{createdAt});
  return result.posts
};
export const getCategories = async () => {
  const query = gql`
    query GetGategories {
        categories(orderBy:createdAt_DESC) {
          name
          slug
        }
    }
  `;

  const result:any = await request(graphqlAPI, query);

  return result.categories;
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

  const results:any = await request(graphqlAPI, query, { slug });
  return results.post
};  

export const submitComment = async (obj:{}) => {
  const result = await fetch('/api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body:JSON.stringify(obj)
  });
  return result
};

export const getComments = async (slug:string) => {
  const query = gql`
    query GetComments($slug:String!) {
      comments(where: {post: {slug:"${slug}"}}){
        name
        createdAt
        comment
      }
    }
  `;

  const result:any = await request(graphqlAPI, query, { slug });

  return result.comments;
};
export const getFeaturedPosts = async () => {
  const query = gql`
    query GetCategoryPost() {
      posts(where: {featuredPost: true}) {
        author {
          name
          photo {
            url
          }
        }
        featuredImage {
          url
        }
        title
        slug
        createdAt
      }
    }   
  `;

  const result:any = await request(graphqlAPI, query);

  return result.posts;
};
export const getAdjacentPosts = async (createdAt, slug) => {
  const query = gql`
    query GetAdjacentPosts($createdAt: DateTime!,$slug:String!) {
      next:posts(
        first: 4
        orderBy: createdAt_ASC
        where: {slug_not: $slug, AND: {createdAt_gte: $createdAt}}
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
      previous:posts(
        first: 1
        orderBy: createdAt_DESC
        where: {slug_not: $slug, AND: {createdAt_lte: $createdAt}}
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;

  const result:any = await request(graphqlAPI, query, { slug, createdAt });

  return { next: result.next[0], previous: result.previous[0] };
};