// components/Productdetail.tsx
import React, { useEffect, useState } from "react";
import Image from "next/image";
import ProductDetailDesc from "@/components/ProductDetailDesc";
import PictureGallery from "@/components/PictureGallery";
import CartSidebar from "@/components/CartSidebar";
import { AxiosInstance } from "@/utils/api";

interface ProductdetailProps {
  productId: string;
  engraving? :any;
  selectedStone?:any;
  setSelectedDiamond?:any;
  diamond?:any;
}

export default function Productdetail({ productId, engraving ,selectedStone,setSelectedDiamond,diamond}: ProductdetailProps) {
  const [product, setProduct] = useState<any>(null);

 
useEffect(() => {
  const fetchProduct = async () => {
    try {
      const response = await AxiosInstance.get(`/Products/${productId}`);
      setProduct(response.data);
      
    } catch (error) {
      console.error("Failed to fetch product:", error);
    }
  };

  if (productId) {
    fetchProduct();
  }
}, [productId]);

if (!product) return <p className="p-6">Loading...</p>;

const imageUrls = product?.images?.map((img: any) =>
  img.imageUrl.replace(/\\/g, "/")
) || [];
console.log(imageUrls,"hhhhhhhh")
  return (
    <div className="mt-10">
      <div className=" flex flex-col md:flex-row items-center md:items-start">
        <div className="p-6">
          <PictureGallery pictures={imageUrls} />
        </div>
        <ProductDetailDesc product={product} engraving={engraving} selectedStone={selectedStone} diamond={diamond}/>
      </div>
    </div>
  );
}
