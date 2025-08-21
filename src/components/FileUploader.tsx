import React, { useRef, useState } from "react";



type ImageData = File | ExistingImage;

interface ExistingImage {
    isPrimary: boolean;
    preview: string;
    id?: number;
    isExisting?: boolean;
}
interface FileUploaderProps {
    images: ImageData[];
    setImages: (images: ImageData[]) => void;
}
const FileUploader: React.FC<FileUploaderProps> = ({ images, setImages }) => {
    //const [previews, setPreviews] = useState<string[]>([]);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const files = Array.from(e.target.files);
            // const validImages = files.filter(file => file.type.startsWith("image/"));

            // if (validImages.length < files.length) {
            //     alert("Only image files are allowed.");
            // }

            setImages(files);
            const previewUrls = files.map(file => file.name);
            //  setPreviews(previewUrls);
        }
    };

    const removeImage = (index: number) => {
        const newImages = images.filter((_, i) => i !== index);
        //  const newPreviews = previews.filter((_, i) => i !== index);
        setImages(newImages);
        //setPreviews(newPreviews);


    };

    const handleButtonClick = () => {
        fileInputRef.current?.click();
    };

    return (
        <div className="mt-8">
            <label className="block mb-1 font-semibold">Upload Files</label>

            <input
                ref={fileInputRef}
                type="file"
                //accept="image/*"
                multiple
                onChange={handleImageChange}
                className="hidden"
            />

            <button
                type="button"
                onClick={handleButtonClick}
                className="bg-blue-600 text-white px-4 py-2 rounded"
            >
                Choose Files
            </button>

            <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                {images.map((img, idx) => {
                    const isFile = img instanceof File;
                    const src = isFile ? URL.createObjectURL(img) : (img as ExistingImage).preview;

                    return (
                        <div
                            key={idx}
                            className={`relative border rounded`}
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


                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default FileUploader;
