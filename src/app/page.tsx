import Image from "next/image";
import { sanityfetch } from "@/sanity/lib/fetch"
import { sanityFetch } from "@/sanity/lib/live";
import { allproducts } from "@/sanity/lib/queries";
import { product } from "@/sanity/schemaTypes/product";

type Product={
  _id:string;
  name:string;
  description:string;
  price:number;
  imageurl:string
}
export default async function Home() {
  const products: Product[] = await sanityfetch({query:allproducts })
  
  return(
    <div>
      <h1>
        Products
      </h1>
      <div className="grid grid-cols-3 gap-4">
{
  products.map((product)=>(
<div className="border p-4 rounded-lg flex flex-col items-center" key={product._id}>
<Image src={product.imageurl} alt={product.name} className="w-60" width={500} height={500}/> 
<h2 className="text-xl font-bold text-center">
  {product.name}
 </h2>
 <p className="text-center">
  {product.description}
</p>
<p className="text-center">
  {product.price}
</p>
  </div>
  ))
}
      </div>
    </div>
  )
}