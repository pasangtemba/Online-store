"use client";



import Image from "next/image";
import { useState } from "react";


type proops = {
product: Product;
fill?: boolean;
}

function ProductImage({product, fill }: proops) {
const [loading , setLoading] = useState(true);


  return (
    <>

    {fill ? (
        <Image 
        src={ product.image }
        alt= {product.title}
        fill
        className={`object-contain duration-700 ease-in-out group-hover:opacity-75
        ${loading
        ? "scale-110 blur-2xl grayscale "
          : " scale-100 blur-0 grayscale-0 "}
        `}
        onLoadingComplete={() => setLoading(false)}
        />
    ):(

      <Image
      src={ product.image}
      alt = {product.title}
      width={200}
      height={200}
      className={`object-contain duration-700 ease-in-out group-hover:opacity-75
        ${loading
        ? "scale-110 blur-2xl grayscale "
        : " scale-100 blur-0 grayscale-0 "}
        `}
        onLoadingComplete={() => setLoading(false)}
      />
   
      )}
    </>

  );
 
}

export default ProductImage;