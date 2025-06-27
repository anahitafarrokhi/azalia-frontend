import React, { useState, useEffect } from "react";

interface PictureGalleryProps {
  pictures: string[];
}

const PictureGallery: React.FC<PictureGalleryProps> = ({ pictures }) => {
  const [selectedPicture, setSelectedPicture] = useState<string>("");

  useEffect(() => {
    if (pictures.length > 0) {
      setSelectedPicture(pictures[0]);
    }
  }, [pictures]);

  const handleThumbnailClick = (picture: string) => {
    setSelectedPicture(picture);
  };

  return (
    <div className="flex flex-col md:flex-row gap-4">
      {/* Thumbnails */}
      <div className="flex md:flex-col gap-2">
        {pictures.map((picture, index) => (
          <div
            key={index}
            className={`border-2 rounded overflow-hidden ${selectedPicture === picture ? "border-blue-500" : "border-gray-300"
              }`}
          >
            <img
              src={picture}
              alt={`Thumbnail ${index + 1}`}
              className="w-16 h-16 object-cover cursor-pointer"
              onClick={() => handleThumbnailClick(picture)}
            />
          </div>
        ))}
      </div>

      {/* Main Picture */}
      <div className="flex-1">
        <img
          src={selectedPicture}
          alt="Selected"
          className="w-full h-auto rounded-lg object-contain shadow-md"
        />
      </div>
    </div>
  );
};

export default PictureGallery;
