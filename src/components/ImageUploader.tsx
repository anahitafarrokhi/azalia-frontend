import React, { useRef } from "react";

interface ExistingImage {
    preview: string;
    isPrimary: boolean;
    id?: number;
    isExisting?: boolean;
}

type ImageData = File | ExistingImage;

interface ImageUploaderProps {
    images: ImageData[];
    setImages: (images: ImageData[]) => void;
    primaryIndex: number | null;
    setPrimaryIndex: (index: number | null) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({
    images,
    setImages,
    primaryIndex,
    setPrimaryIndex,
}) => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const files = Array.from(e.target.files);
            const validImages = files.filter((file) => file.type.startsWith("image/"));

            if (validImages.length < files.length) {
                alert("Only image files are allowed.");
            }

            setImages([...images, ...validImages]);
            setPrimaryIndex(null);
        }
    };

    const removeImage = (index: number) => {
        const newImages = images.filter((_, i) => i !== index);
        setImages(newImages);

        if (primaryIndex === index) {
            setPrimaryIndex(null);
        } else if (primaryIndex !== null && primaryIndex > index) {
            setPrimaryIndex(primaryIndex - 1);
        }
    };
console.log(images,'imgggg');
    const handleButtonClick = () => {
        fileInputRef.current?.click();
    };

    return (
        <div className="mt-8">
            <label className="block mb-1 font-semibold">Upload Images</label>

            <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageChange}
                className="hidden"
            />

            <button
                type="button"
                onClick={handleButtonClick}
                className="bg-blue-600 text-white px-4 py-2 rounded"
            >
                Choose Images
            </button>

            <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                {images.map((img, idx) => {
                    const isFile = img instanceof File;
                    const src = isFile ? URL.createObjectURL(img) : (img as ExistingImage).preview;

                    return (
                        <div
                            key={idx}
                            className={`relative border ${primaryIndex === idx ? "border-blue-600" : ""} rounded`}
                        >
                            <img src={src} alt={`Preview ${idx}`} className="w-full h-32 object-cover rounded" />

                            <button
                                type="button"
                                onClick={() => removeImage(idx)}
                                className="absolute top-1 right-1 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center"
                                title="Remove Image"
                            >
                                &times;
                            </button>

                            <button
                                type="button"
                                onClick={() => setPrimaryIndex(idx)}
                                className={`absolute bottom-1 left-1 px-2 py-1 text-xs rounded ${primaryIndex === idx ? "bg-blue-600 text-white" : "bg-gray-300"
                                    }`}
                            >
                                {primaryIndex === idx ? "Primary" : "Set Primary"}
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ImageUploader;


