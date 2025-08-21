import FileUploader from "@/components/FileUploader";
import ImageUploader from "@/components/ImageUploader";
import { AxiosInstance } from "@/utils/api";
import React, { useEffect, useState } from "react";
import Select from 'react-select';
import { useRouter } from "next/router";
const CreateProduct = () => {
    const router = useRouter();
    const [formData, setFormData] = useState<{ [key: string]: any }>({
        title: "",
        description: "",
        productCategoryId: 0,
        jewelleryTypeId: 1,
        color: 0,
        labOrNat: 0,
        labOrNatDesc: "",
        ayar: 1,
        caratWeight: 1.0,
        weightDesc: "",
        width: 2.5,
        price: 100000,
        code: "",
        countryMaker: 0,
        productGender: 0,
        style: 0,
        clarity: 0,
        diamondColor: 0,
        cut: 0,
        shape: 0,
        gemstone: 0,
        birthdayCategory: 0,
        packingDesc: "",
        sheepingDesc: "",
        setAsGift: false,
        polish: "",
        symmetry: "",
        fluorescence: "",
        dimensions: "",
        table: "",
        depth: "",
        certificate: "",
        certificateUrl: "",
    });


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" && "checked" in e.target ? (e.target as HTMLInputElement).checked : value,
        }));
    };

    const [errors, setErrors] = useState<{ [key: string]: boolean }>({});
    const requiredFields = ["title", "description", "code", "productCategoryId"];
    const [primaryIndex, setPrimaryIndex] = useState<number | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newErrors: { [key: string]: boolean } = {};
        requiredFields.forEach((field) => {
            if (!formData[field] || String(formData[field]).trim() === "") {
                newErrors[field] = true;
            }
        });
        if (images.length === 0) {
            newErrors["images"] = true;
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            alert("Please fill in all required fields.");
            return;
        }

        // Reset errors before submit
        setErrors({});

        const form = new FormData();
        for (const key in formData) {
            form.append(key, String(formData[key]));
            // form.append("jewelleryTypeIds", JSON.stringify(selectedJewelleryTypes));

        }
        const ids = selectedJewelleryTypes.map(j => j.value);


        ids.forEach((id) => {
            form.append("JewelleryTypeIds", String(id));
        });
        form.append("Title", formData.title);
        form.append("Description", formData.description);
        form.append("ProductCategoryId", formData.productCategoryId);
        form.append("Color", formData.color);
        form.append("LabOrNat", formData.labOrNat);
        form.append("LabOrNatDesc", formData.labOrNatDesc);
        form.append("Ayar", formData.ayar);
        form.append("WeightDesc", formData.weightDesc);
        form.append("PackingDesc", formData.packingDesc);
        form.append("Weight", formData.caratWeight); // ⚠️ Backend uses Weight; frontend uses caratWeight
        form.append("Width", formData.width);
        form.append("Price", formData.price);
        form.append("Code", formData.code);
        form.append("CountryMaker", formData.countryMaker);
        form.append("ProductGender", formData.productGender);
        form.append("Style", formData.style);
        form.append("Shape", formData.shape);
        form.append("Cut", formData.cut);
        form.append("DiamondColor", formData.diamondColor);
        form.append("Clarity", formData.clarity);
        form.append("BirthdayCategory", formData.birthdayCategory);
        form.append("Gemstone", formData.gemstone);
        form.append("SheepingDesc", formData.SheepingDesc); // ✅ Fixed casing
        // form.append("SetAsGift", String(formData.setAsGift));
        form.append("Polish", formData.polish);
        form.append("Symmetry", formData.symmetry);
        form.append("Fluorescence", formData.fluorescence);
        form.append("Dimensions", formData.dimensions);
        form.append("Table", formData.table);
        form.append("Depth", formData.depth);
        form.append("Certificate", formData.certificate);

        files.forEach((file, index) => {
            if (file instanceof File) {
                form.append(`Files[${index}].File`, file);
            } else {
                form.append(`Files[${index}].Id`, String(file.id));
            }
            form.append(`Files[${index}].IsPrimary`, "False");  // ✅ true if primary
            form.append(`Files[${index}].ImageType`, "2");
        });
        images.forEach((file, index) => {
            if (file instanceof File) {
                form.append(`Images[${index}].File`, file);
            } else {
                form.append(`Images[${index}].Id`, String(file.id));
            }
            form.append(`Images[${index}].IsPrimary`, String(index === primaryIndex));  // ✅ true if primary
            form.append(`Images[${index}].ImageType`, "1");
        });
        console.log(images, "vvc")

        try {

            const res = await AxiosInstance.post("/Products", form, {
                headers: {
                    "Content-Type": "multipart/form-data",  // ✅ Important for FormData
                },

            });
            alert("Product created successfully!");
            router.push("/admin/ProductTable");


        } catch (error) {
            console.error("Error creating product:", error);
            alert("Something went wrong!");
        }
    };
    const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const rawValue = e.target.value.replace(/,/g, ""); // Remove commas
        if (/^\d*$/.test(rawValue)) {
            setFormData((prev) => ({
                ...prev,
                price: rawValue,
            }));
        }
    };

    type ExistingImage = {
        preview: string;
        isPrimary: boolean;
        id?: number;
        isExisting?: boolean;
    };

    type ImageData = File | ExistingImage;

    const [images, setImages] = useState<ImageData[]>([]);
    const [files, setfiles] = useState<ImageData[]>([]);

    const formatPrice = (value: string | number) => {
        return Number(value).toLocaleString();
    };
    const [jewelleryTypes, setJewelleryTypes] = useState<{ id: any; name: any }[]>([]);
    // const [selectedJewelleryTypes, setSelectedJewelleryTypes] = useState<any[]>([]);
    const [selectedJewelleryTypes, setSelectedJewelleryTypes] = useState<{ value: number; label: string }[]>([]);
    const fieldConfig = [
        { name: "title", label: "Title", type: "text" },
        { name: "description", label: "Description", type: "text" },
        { name: "code", label: "Code", type: "text" },
        { name: "price", label: "Price", type: "text", step: "0.01" },
        { name: "caratWeight", label: "Carat Weight", type: "number", step: "0.001" },
        { name: "weightDesc", label: "Weight Description", type: "text" },
        { name: "width", label: "Width", type: "number", step: "0.01" },
        { name: "labOrNatDesc", label: "Lab/Natural Description", type: "text" },
        { name: "packingDesc", label: "Packing Description", type: "text" },
        { name: "sheepingDesc", label: "Shipping Description", type: "text" },
        { name: "polish", label: "Polish", type: "text" },
        { name: "symmetry", label: "Symmetry", type: "text" },
        { name: "fluorescence", label: "Fluorescence", type: "text" },
        { name: "dimensions", label: "Dimensions", type: "text" },
        { name: "table", label: "Table", type: "text" },
        { name: "depth", label: "Depth", type: "text" },
        { name: "certificate", label: "Certificate", type: "text" },
    ];
    useEffect(() => {
        const fetchJewelleryTypes = async () => {
            try {
                const res = await AxiosInstance.get(
                    `/JewelleryTypes/JewelleryTypes/GetAll`
                );
                setJewelleryTypes(res.data);
            } catch (error) {
                console.error("Error fetching jewellery types:", error);
            }
        };

        fetchJewelleryTypes();
    }, []);



    return (

        <form onSubmit={handleSubmit} className="max-w-7xl mx-auto p-4 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <h3 className="col-span-full text-2xl font-bold mb-4 mt-8">Create a new product</h3>

            {fieldConfig.map(({ name, label, type, step }) => (
                <div key={name}>
                    <label className="block mb-1 font-semibold">
                        {label}
                        {["title", "description", "code"].includes(name) && <span className="text-red-500 ml-1">*</span>}
                    </label>
                    {name === "price" ? (
                        <input
                            name={name}
                            value={formatPrice(formData.price)}
                            onChange={handlePriceChange}
                            type="text"
                            className="border p-2 w-full rounded"
                        />
                    ) : (
                        <input
                            name={name}
                            value={formData[name]}
                            onChange={handleChange}
                            type={type}
                            step={step}
                            className={`border p-2 w-full rounded ${errors[name] ? "border-red-500" : ""}`}

                        />)
                    }{errors[name] && <p className="text-red-500 text-sm mt-1">This field is required</p>}
                </div>
            ))}



            <div className="col-span-full">

                <FileUploader images={files} setImages={setfiles} />

                <label className="block mb-1 font-semibold ">Set as Gift</label>
                <input className="mb-6" type="checkbox" name="setAsGift" checked={formData.setAsGift} onChange={handleChange} />
                {/* Example select field */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label className="block mb-1 font-semibold">
                            Product Category <span className="text-red-500">*</span>
                        </label>
                        <select name="productCategoryId" value={formData.productCategoryId} onChange={handleChange} className={`border p-2 w-full rounded ${errors.productCategoryId ? "border-red-500" : ""}`}>
                            <option value={0}>Choose one...</option>
                            <option value={3}>Ring</option>
                            <option value={4}>Earrings</option>
                            <option value={5}>Bracelets</option>
                            <option value={6}>Necklaces</option>
                            <option value={8}>Diamond</option>
                        </select>
                        {errors.productCategoryId && <p className="text-red-500 text-sm mt-1">Please select a category</p>}
                    </div>
                    <div>

                        <label className="block mb-1 font-semibold">Jewellery Types</label>
                        <Select
                            isMulti
                            options={jewelleryTypes.map(j => ({ value: j.id, label: j.name }))}
                            value={selectedJewelleryTypes}
                            onChange={(selected) => setSelectedJewelleryTypes(selected as any)}
                            className="w-full"
                        />

                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        {/* Select for enums */}
                        <label className="block mb-1 font-semibold">color</label>
                        <select name="color" value={formData.color} onChange={handleChange} className="border p-2 w-full">
                            <option value={0}>Choose one...</option>
                            <option value={1}>Silver</option>
                            <option value={2}>White</option>
                            <option value={3}>Bronz</option>
                            <option value={4}>Gold</option>
                            <option value={5}>Yellow</option>
                            <option value={6}>Rose</option>
                            <option value={7}>Platinum</option>
                        </select>
                    </div>

                    <div>
                        <label className="block mb-1 font-semibold">Ayar</label>
                        <select name="ayar" value={formData.ayar} onChange={handleChange} className="border p-2 w-full">
                            <option value={0}>Choose one...</option>
                            <option value={1}>18k</option>
                        </select>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">

                    <div>
                        <label className="block mb-1 font-semibold">Diamond Type</label>
                        <select name="labOrNat" value={formData.labOrNat} onChange={handleChange} className="border p-2 w-full">
                            <option value={0}>Choose one...</option>
                            <option value={1}>Natural</option>
                            <option value={2}>LabGrown</option>
                        </select>
                    </div>
                    <div>

                        <label className="block mb-1 font-semibold">Country Maker</label>
                        <select name="countryMaker" value={formData.countryMaker} onChange={handleChange} className="border p-2 w-full">
                            <option value={0}>Choose one...</option>
                            <option value={1}>USA</option>
                            <option value={2}>Dubai</option>
                        </select>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">

                    <div>
                        <label className="block mb-1 font-semibold">Product Gender</label>
                        <select name="productGender" value={formData.productGender} onChange={handleChange} className="border p-2 w-full">
                            <option value={0}>Choose one...</option>
                            <option value={1}>Male</option>
                            <option value={3}>Female</option>
                            <option value={2}>Other</option>

                        </select>
                    </div>
                    <div>

                        <label className="block mb-1 font-semibold">Style</label>
                        <select name="style" value={formData.Style} onChange={handleChange} className="border p-2 w-full">
                            <option value={0}>Choose one...</option>
                            <option value={1}>DiamondBand</option>
                            <option value={2}>Halo</option>
                            <option value={3}>Trilogy</option>
                            <option value={4}>Solitaire</option>
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">

                    <div>
                        <label className="block mb-1 font-semibold">Clarity</label>
                        <select name="clarity" value={formData.Clarity} onChange={handleChange} className="border p-2 w-full">
                            <option value={0}>Choose one...</option>
                            <option value={1}>FL</option>
                            <option value={2}>IF</option>
                            <option value={3}>VVS1</option>
                            <option value={3}>VVS2</option>
                            <option value={3}>VS1</option>
                            <option value={3}>VS2</option>
                            <option value={3}>SI1</option>
                            <option value={3}>SI2</option>
                        </select>
                    </div>
                    <div>

                        <label className="block mb-1 font-semibold">Diamond Color</label>
                        <select name="diamondColor" value={formData.DiamondColor} onChange={handleChange} className="border p-2 w-full">
                            <option value={0}>Choose one...</option>
                            <option value={1}>D</option>
                            <option value={2}>E</option>
                            <option value={3}>F</option>
                            <option value={4}>G</option>
                            <option value={5}>H</option>
                            <option value={6}>I</option>
                            <option value={7}>J</option>
                            <option value={8}>K</option>
                        </select>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">

                    <div>
                        <label className="block mb-1 font-semibold">Cut</label>
                        <select name="cut" value={formData.Cut} onChange={handleChange} className="border p-2 w-full">
                            <option value={0}>Choose one...</option>
                            <option value={1}>IDEAL</option>
                            <option value={2}>EXCELLENT</option>
                            <option value={3}>VERYGOOD</option>
                            <option value={4}>GOOD</option>
                        </select>
                    </div>
                    <div>

                        <label className="block mb-1 font-semibold">Shape</label>
                        <select name="shape" value={formData.Shape} onChange={handleChange} className="border p-2 w-full">
                            <option value={0}>Choose one...</option>
                            <option value={1}>Peer</option>
                            <option value={2}>Princess</option>
                            <option value={3}>Oval</option>
                            <option value={4}>Radiant</option>
                            <option value={5}>Emerald</option>
                            <option value={6}>Cushion</option>
                            <option value={7}>Asscher</option>
                            <option value={8}>Marquise</option>
                            <option value={9}>Heart</option>
                            <option value={10}>Round</option>
                        </select>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">

                    <div>
                        <label className="block mb-1 font-semibold">Gemstone</label>
                        <select name="gemstone" value={formData.Gemstone} onChange={handleChange} className="border p-2 w-full">
                            <option value={0}>Choose one...</option>
                            <option value={1}>Blue</option>
                            <option value={2}>Pink</option>
                            <option value={3}>Oval</option>
                            <option value={4}>Ruby</option>
                            <option value={5}>Emerald</option>
                        </select>
                    </div>
                    <div>

                        <label className="block mb-1 font-semibold">Birthday Category</label>
                        <select name="birthdayCategory" value={formData.BirthdayCategory} onChange={handleChange} className="border p-2 w-full">
                            <option value={0}>Choose one...</option>
                            <option value={1}>LetterBracelets</option>
                            <option value={2}>LetterPendants</option>
                            <option value={3}>LetterStuds</option>
                            <option value={4}>ArabicLetterPendants</option>
                        </select>
                    </div>
                </div>

               <ImageUploader images={images} setImages={setImages} primaryIndex={primaryIndex} setPrimaryIndex={setPrimaryIndex} />
                {errors.images && <p className="text-red-500 text-sm mt-2">At least one image is required</p>}

                {/* You can repeat similar patterns for all enums and relations as shown above */}

                <button type="submit" className="col-span-full bg-black text-white px-6 py-2 rounded mt-8">
                    Create Product
                </button>
            </div>
        </form >
    );
};

export default CreateProduct;
