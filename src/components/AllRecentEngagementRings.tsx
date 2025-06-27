import React, { useEffect, useState } from "react";
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
interface AllRecentEngagementRingsProps {
    data: any;
    isLoading: boolean;
}
const AllRecentEngagementRings: React.FC<AllRecentEngagementRingsProps> = ({ data, isLoading }) => {


    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6">
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                data.map((product: any) => (
                    <ProductCardSlider
                        key={product.id}
                        imageUrl={product.imagePrimary.imageUrl}
                        productName={product.title}
                        productPrice={
                            product.price === 0 ? 'Contact for Price' : `${product.price} AED`
                        }
                        productLink={`/product/${product.id}`}
                        productId={product.id}
                    />
                ))


                
            )}
        </div>
    )
}

export default AllRecentEngagementRings