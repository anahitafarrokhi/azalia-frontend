"use client";
import React from "react";

type ExistingImageDto = {
  id: number;
  imageUrl: string;
  isPrimary: boolean;
  imageType: number;
};

type Props = {
  images: ExistingImageDto[];
  onRemove: (id: number) => void;
  onMakePrimary?: (id: number) => void;
  title?: string;
};

export default function ExistingImagesList({
  images,
  onRemove,
  onMakePrimary,
  title = "Existing Images",
}: Props) {
  if (!images?.length) return null;

  return (
    <div className="space-y-2">
      <h4 className="text-base font-semibold mb-1">{title}</h4>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {images.map((img) => (
          <li
            key={img.id}
            className="border rounded-md p-2 flex flex-col items-center text-center space-y-1"
          >
            {/* Image Preview */}
            <img
              src={normalizeUrl(img.imageUrl)}
              alt={`Image ${img.id}`}
              className="w-24 h-24 object-cover rounded cursor-pointer"
              onClick={() => onMakePrimary && onMakePrimary(img.id)}
              title={img.isPrimary ? "Click to unset primary" : "Click to make primary"}
            />

            {/* Small text link */}
            <a
              href={normalizeUrl(img.imageUrl)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline text-xs truncate max-w-[90px]"
            >
              Image {img.id}
            </a>

            {/* Action buttons smaller */}
            <div className="flex gap-1">
              {onMakePrimary && (
                <button
                  type="button"
                  onClick={() => onMakePrimary(img.id)}
                  className={`text-[10px] px-2 py-0.5 rounded ${
                    img.isPrimary
                      ? "bg-green-600 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {img.isPrimary ? "Unset" : "Primary"}
                </button>
              )}
              <button
                type="button"
                onClick={() => onRemove(img.id)}
                className="text-[10px] px-2 py-0.5 rounded bg-red-600 text-white"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function normalizeUrl(url: string) {
  if (!url) return "";
  let badPart = "http:\\";
  let index = url.indexOf(badPart);
  if (index !== -1) {
    url = url.slice(0, index) + url.slice(index + badPart.length);
  }
  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  }
  return `https://${url.replace(/^\/+/, "")}`;
}
