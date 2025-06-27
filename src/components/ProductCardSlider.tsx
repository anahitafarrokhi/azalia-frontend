import Link from 'next/link';
import React from 'react';
interface ProductCardSlider {
  imageUrl: any;
  productName: string;
  productPrice?: string;
  productLink: string;
  productId: number;
}

const ProductCard: React.FC<ProductCardSlider> = ({
  imageUrl,
  productName,
  productPrice,
  productLink,
  productId,
}) => {
  return (
    <div className="w-full max-w-sm mx-auto">
      <div className="m-product-card m-product-card--style-1 m-scroll-trigger animate--fade-in shadow-md hover:shadow-lg transition rounded-lg overflow-hidden bg-white">
        {/* Product Image */}
        <div className="relative aspect-square">
          <Link href={`/productdetail/${productId}`} className="block w-full h-full">
            <img
              src={imageUrl}
              alt={productName}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </Link>
        </div>

        {/* Product Info */}
        <div className="text-center mt-4 px-3 pb-4">
          <h3 className="text-base sm:text-lg font-semibold mb-1 truncate">
            <Link
              href={`/productdetail/${productId}`}
              className="text-gray-800 hover:underline capitalize"
            >
              {productName}
            </Link>
          </h3>

          <div className="text-sm sm:text-base font-bold text-gray-900">
            <Link
              href={`/productdetail/${productId}`}
              className="text-gray-800 hover:underline"
            >
              {productPrice === null
                ? ""
                : productPrice === "0"
                ? "Contact for Price"
                : productPrice}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
