import Image from "next/image";
import React, { useState } from "react";
import UpIcon from '@/assets/icons/img_upload.webp';
import UploadDreamImage from "@/assets/images/SEO.webp";
import AboutImage from "@/components/AboutImage";
import homescreen_img from '@/assets/images/homescreen_img.jpg';

export default function UploadYourDreamRing() {
    const [dragActive, setDragActive] = useState(false);
    const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
    const [uploadedImages, setUploadedImages] = useState<string[]>([]);
    const [formData, setFormData] = useState({
        name: "",
        number: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);


    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDragActive(true);
    };

    const handleDragLeave = () => {
        setDragActive(false);
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDragActive(false);
        const files = e.dataTransfer.files;
        if (files.length) {
            for (let i = 0; i < files.length; i++) {
                processFile(files[i]);
            }
        }
    };

    const processFile = (file: File) => {
        const validTypes = ["image/jpeg", "image/jpg", "image/png"];
        if (!validTypes.includes(file.type)) {
            alert("Please upload a valid image file (JPEG, JPG, PNG).");
            return;
        }

        if (file.size > 1024 * 1024) {
            alert("One of your images is larger than 1MB. Please upload a smaller image.");
            return;
        }

        const reader = new FileReader();
        reader.onload = () => {
            const result = reader.result as string;
            setUploadedImages(prev => [...prev, result]);
            setUploadedFiles(prev => [...prev, file]); // Store the file too
        };
        reader.readAsDataURL(file);
    };


    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files) {
            for (let i = 0; i < files.length; i++) {
                processFile(files[i]);
            }
        }
    };

    const handleRemoveImage = (index: number) => {
        setUploadedImages(prev => prev.filter((_, i) => i !== index));
        setUploadedFiles(prev => prev.filter((_, i) => i !== index));
    };

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const oversized = uploadedFiles.some(file => file.size > 1024 * 1024);
        if (oversized) {
            alert("One or more images exceed 1MB. Please remove them before submitting.");
            setIsSubmitting(false);
            return;
        }

        const payload = {
            firstName: formData.name,
            whatsapp: formData.number,
            email: formData.email,
            message: formData.message,
            images: uploadedImages,
        };

        try {
            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (response.status === 413) {
                alert("Your image is too large. Please upload smaller files.");
                return;
            }

            if (!response.ok) {
                alert("Something went wrong while sending your request.");
                return;
            }

            alert("Email sent successfully!");
            setFormData({ name: "", number: "", email: "", message: "" });
            setUploadedImages([]);
            setUploadedFiles([]);
        } catch (error) {
            console.error("Submission error:", error);
            alert("An unexpected error occurred.");
        } finally {
            setIsSubmitting(false);
        }
    };


    return (
        <div>
            <AboutImage text={"Your Vision, Our Creation"} href={homescreen_img} />
            <div className="max-w-5xl mx-auto p-6 mt-10">
                <h3 className="text-center text-xl font-bold mb-2">
                    Found a Ring You Adore?
                </h3>
                <p className="text-center text-gray-600 mb-6">
                    Share an image or screenshot of your favorite ring design, and we’ll craft a personalized quote to turn your dream into reality.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Upload Section */}
                    <div
                        className={`border-2 rounded-lg p-4 h-96 flex flex-col items-center justify-center transition relative ${dragActive ? "border-blue-500" : "border-gray-300"
                            } bg-gray-100`}
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                    >
                        <div className="text-center">
                            <Image
                                src={UpIcon}
                                alt="Upload"
                                className="w-16 mx-auto mb-4"
                                width={100}
                                height={100}
                            />
                            <h4 className="text-lg font-semibold">Add Photos</h4>
                            <p className="text-gray-500">or Drag & Drop</p>
                            <p className="text-sm text-gray-400 mt-2">
                                Supports: JPEG, JPG, PNG
                            </p>
                            <input
                                type="file"
                                accept="image/jpeg, image/jpg, image/png"
                                className="hidden"
                                onChange={handleFileChange}
                                id="fileInput"
                                multiple
                            />
                            <button
                                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                                onClick={() =>
                                    document.getElementById("fileInput")?.click()
                                }
                            >
                                Browse
                            </button>
                        </div>
                        {/* Display Uploaded Images */}
                        {uploadedImages.length > 0 && (
                            <div className="absolute inset-0 overflow-auto p-4 bg-white bg-opacity-75">
                                <div className="grid grid-cols-2 gap-4">
                                    {uploadedImages.map((img, index) => (
                                        <div key={index} className="relative">
                                            <Image
                                                src={img}
                                                alt={`Uploaded ${index + 1}`}
                                                className="object-contain w-full h-40 rounded"
                                                width={200}
                                                height={160}
                                            />
                                            <button
                                                onClick={() => handleRemoveImage(index)}
                                                className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs"
                                            >
                                                X
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Form Section */}
                    <form
                        className="space-y-4 bg-white p-4 shadow-md rounded-lg"
                        onSubmit={handleSubmit}
                    >
                        <h5 className="text-lg font-semibold">Your Details</h5>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="First Name*"
                            required
                            className="w-full border p-2 rounded"
                        />
                        <input
                            type="tel"
                            name="number"
                            value={formData.number}
                            onChange={handleInputChange}
                            placeholder="Mobile Number*"
                            required
                            className="w-full border p-2 rounded"
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Your Email*"
                            required
                            className="w-full border p-2 rounded"
                        />
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="Anything you’d like us to know?"
                            rows={6}
                            className="w-full border p-2 rounded"
                        ></textarea>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-black text-white py-2 rounded"
                        >
                            {isSubmitting ? "Submitting..." : "SUBMIT REQUEST"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
