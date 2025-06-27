import Image from "next/image";

interface ProductGridProps {
  products: any;
  selectedProduct: any;
  setSelectedProduct: (product: any) => void;
  isLoading: boolean;
}

const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  selectedProduct,
  setSelectedProduct,
  isLoading,
}) => {
  return (
    <div className="p-4 h-[730px] overflow-y-scroll rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-bold">Showing {products.length} Settings</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          products.map((product: any) => (
            <div
              key={product.id}
              className={`border rounded-lg p-4 text-center hover:shadow-lg transition-shadow cursor-pointer ${
                selectedProduct?.id === product?.id ? "border-black" : "border-gray-300"
              }`}
              onClick={() => setSelectedProduct(product)}
            >
              <div className="mb-2">
                <img
                  src={product.imagePrimary.imageUrl}
                  alt={product.title}
                  width={150}
                  height={150}
                  className="mx-auto rounded-lg"
                  loading="lazy"
                />
              </div>
              <h2 className="font-bold text-gray-700 truncate">{product.title}</h2>
              <p className="text-orange-500 text-sm">{product.price}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductGrid;
