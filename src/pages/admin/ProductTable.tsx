import React, { useEffect, useState } from "react";
import { AxiosInstance } from "@/utils/api";
import { useRouter } from "next/router";

interface Product {
    id: number;
    title: string;
    code: string;
    price: number;
}

const ProductTable = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const router = useRouter();

    const fetchProducts = async () => {
        try {
            const res = await AxiosInstance.get("/Products");
            const data = res.data?.$values || [];
            setProducts(data);
            setFilteredProducts(data);
        } catch (error) {
            console.error("Failed to fetch products:", error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleDelete = async (id: number) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this product?");
        if (!confirmDelete) return;

        try {
            await AxiosInstance.delete(`/Products/${id}`);
            alert("Product deleted successfully!");
            const updated = products.filter(product => product.id !== id);
            setProducts(updated);
            setFilteredProducts(updated);
        } catch (error) {
            console.error("Failed to delete product:", error);
            alert("Error deleting product.");
        }
    };

    const handleSearch = (term: string) => {
        setSearchTerm(term);
        const lowerTerm = term.toLowerCase();
        setFilteredProducts(
            products.filter(
                (p) =>
                    p.title.toLowerCase().includes(lowerTerm) ||
                    p.code.toLowerCase().includes(lowerTerm)
            )
        );
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 mt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
                <h2 className="text-2xl font-bold">All Products</h2>
                <button
                    className="bg-green-600 text-white px-4 py-2 rounded"
                    onClick={() => router.push("/admin/product-form")}
                >
                    + Create Product
                </button>
            </div>

            <div className="mb-4">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => handleSearch(e.target.value)}
                    placeholder="Search by title or code"
                    className="w-full sm:w-1/2 border p-2 rounded"
                />
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full border text-left">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="p-2 border">Title</th>
                            <th className="p-2 border">Code</th>
                            <th className="p-2 border">Price</th>
                            <th className="p-2 border">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredProducts.map(product => (
                            <tr key={product.id} className="border-t">
                                <td className="p-2 border max-w-xs truncate">{product.title}</td>
                                <td className="p-2 border">{product.code}</td>
                                <td className="p-2 border">€{product.price.toLocaleString()}</td>
                                <td className="p-2 border">
                                    <div className="flex flex-col sm:flex-row gap-2">
                                        <button
                                            onClick={() => router.push(`/admin/product-form/${product.id}`)}
                                            className="bg-blue-600 text-white px-3 py-1 rounded text-sm"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handleDelete(product.id)}
                                            className="bg-red-600 text-white px-3 py-1 rounded text-sm"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        {filteredProducts.length === 0 && (
                            <tr>
                                <td colSpan={4} className="text-center p-4">
                                    No products found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductTable;
