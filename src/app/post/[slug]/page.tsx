
import Details from "@/app/Components/Details"






// export async function generateStaticParams({params}) {
       
//   }

export default function Page({ params }: { params: { slug: string } }) { 
  
    return (
        <>
        <div className="container mx-auto px-10 mb-8">
         <Details  slug={params.slug} />
        </div>
      </>
    )
  }
