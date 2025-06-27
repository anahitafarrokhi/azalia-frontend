import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useEffect, useState } from "react";
import { AxiosInstance } from "@/utils/api";

// Import Swiper styles
import 'swiper/css';
import ProductCardSlider from './ProductCardSlider';

interface Product {
  id: number;
  title: string;
  price: number;
  imagePrimary: {
    id: number;
    imageUrl: string;
    isPrimary: boolean;
  };
}

export default function HomeSliderComponent() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch products from the API using Axios
    const fetchProducts = async () => {
      try {
        const response = await AxiosInstance.get(`/Products/multi/0/1/0/0/0/0/260000/10/3`);
        setProducts(response.data); // Assuming the API returns an array of products
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    
    <Swiper
      spaceBetween={20}
      slidesPerView={5}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCardSlider
              imageUrl={product.imagePrimary.imageUrl}
              productName={product.title}
              //productPrice={product.price === 0 ? 'Contact for Price' : `$${product.price}`}
              productLink={`/product/${product.id}`} // Replace with actual product URL structure
              productId={product.id}
            />
          </SwiperSlide>
        ))
      )}
    </Swiper>
  );
}

