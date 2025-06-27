import React, { useState } from "react";

const CreateProduct = () => {
    const [formData, setFormData] = useState<{
        [key: string]: any;
    }>({
        title: "",
        description: "",
        productCategoryId: 1,
        jewelleryTypeId: 1,
        color: 1,
        labOrNat: 1,
        labOrNatDesc: "",
        ayar: 1,
        caratWeight: 1.0,
        weightDesc: "",
        width: 2.5,
        price: 100,
        code: "",
        countryMaker: 1,
        productGender: 1,
        style: 1,
        shape: 1,
        gemstone: 1,
        birthdayCategory: 1,
        packingDesc: "",
        sheepingDesc: "",
        setAsGift: false
    });


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" && "checked" in e.target ? (e.target as HTMLInputElement).checked : value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = new FormData();
        for (const key in formData) {
            const value = formData[key];
            form.append(key, String(value)); // ✅ Convert everything to string
        }

        const res = await fetch("https://your-backend-url/Products", {
            method: "POST",
            body: form,
        });

        if (res.ok) {
            alert("Product created successfully!");
        } else {
            alert("Something went wrong!");
        }
    };


    return (
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-4 space-y-4">
            <input name="title" value={formData.title} onChange={handleChange} placeholder="Title" className="border p-2 w-full" />
            <input name="description" value={formData.description} onChange={handleChange} placeholder="Description" className="border p-2 w-full" />
            <input name="code" value={formData.code} onChange={handleChange} placeholder="Code" className="border p-2 w-full" />
            <input name="price" value={formData.price} onChange={handleChange} type="number" step="0.01" placeholder="Price" className="border p-2 w-full" />
            <input
                type="checkbox"
                name="setAsGift"
                checked={formData.setAsGift}
                onChange={handleChange}
            />

            {/* Select for enums */}
            <select name="color" value={formData.color} onChange={handleChange} className="border p-2 w-full">
                <option value={1}>Silver</option>
                <option value={2}>White</option>
                <option value={3}>Bronz</option>
                <option value={4}>Gold</option>
                <option value={5}>Rose</option>
            </select>

            <select name="ayar" value={formData.ayar} onChange={handleChange} className="border p-2 w-full">
                <option value={1}>18k</option>
            </select>

            <select name="labOrNat" value={formData.labOrNat} onChange={handleChange} className="border p-2 w-full">
                <option value={1}>Natural</option>
                <option value={2}>LabGrown</option>
            </select>

            <select name="countryMaker" value={formData.countryMaker} onChange={handleChange} className="border p-2 w-full">
                <option value={1}>USA</option>
                <option value={2}>Dubai</option>
            </select>

            <select name="productGender" value={formData.productGender} onChange={handleChange} className="border p-2 w-full">
                <option value={1}>Male</option>
                <option value={2}>Other</option>
                <option value={3}>Female</option>
            </select>

            <button type="submit" className="bg-black text-white px-6 py-2 rounded">Create Product</button>
        </form>
    );
};

export default CreateProduct;
