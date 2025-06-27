import Image from "next/image";

interface SetupProductProps {
  name: string;
  description: string;
  images: any;
  metal: string;
  shape: string;
  style: string;
  code: string;
}

const SetupProduct: React.FC<SetupProductProps> = ({
  name,
  description,
  images,
  metal,
  shape,
  style,
  code,
}) => {
  return (
    <div className="max-w-md bg-white shadow-lg rounded-lg p-8">
      {/* Title */}
      <div className="text-center text-lg font-bold mb-4">{name}</div>

      {/* Selected Image */}
      <div className="relative">
         <img
              src={images}
              alt={name}
              className="w-full h-full rounded-lg"
              loading="lazy"
              width={500} height={500}
            />
      </div>
      
      {/* Description */}
      <div className="mt-4">
        <strong className="block font-bold">Description</strong>
        <p className="text-gray-600">{description}</p>
      </div>

      {/* Details */}
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div>
          <strong className="block font-bold">Metal:</strong>
          <span>{metal}</span>
        </div>
        <div>
          <strong className="block font-bold">Shape:</strong>
          <span>{shape}</span>
        </div>
        <div>
          <strong className="block font-bold">Style:</strong>
          <span>{style}</span>
        </div>
        <div>
          <strong className="block font-bold">Code:</strong>
          <span>{code}</span>
        </div>
      </div>
    </div>
  );
};

export default SetupProduct;
