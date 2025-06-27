import Image from "next/image";
import React, { useState } from "react";
import Trash from "@/assets/icons/trash.png";



interface DiamondCardProps {
  diamond: any;
  setCurrentStep: (step: number) => void;
  selectedDiamondId: string | null;
  setSelectedDiamondId: (id: string | null) => void;
  setShowDiscountModal: (show: boolean) => void; // ✅ Added prop
  setSelectedDiamond: (diamond: any) => void; // ✅ Added prop
}

const DiamondCard: React.FC<DiamondCardProps> = ({ diamond, setCurrentStep, selectedDiamondId, setSelectedDiamondId, setShowDiscountModal, setSelectedDiamond }) => {
  const isSelected = selectedDiamondId === diamond.id;

  const handleSelectDiamond = () => {
    setSelectedDiamondId(diamond.id); // Set this diamond as selected, deselect others
    setSelectedDiamond(diamond);

  };

  const handleNextStep = () => {
    setCurrentStep(2); // Move to Step 3 when "NEXT STEP" is clicked
  };
  const handleDiscountClick = () => { // ✅ Added function
    setSelectedDiamond(diamond);
    console.log('jj',diamond);
    setShowDiscountModal(true);
  };
  return (
    <div className="border rounded-lg shadow-lg p-4 w-76 bg-white relative">
      <div className="relative w-full h-48">

        <img
          src={diamond.imagePrimary.imageUrl}
          alt={diamond.title}
          width={100}
          height={100} className="w-full h-full object-cover rounded-md"
          loading="lazy"
        />
      </div>









      <div className="mt-3">
        <p className="text-lg font-semibold">
          {diamond.diamondColor} {diamond.carat} {diamond.shape} {diamond.clarity} {diamond.cut}
        </p>
        <p className="text-red-600"> {diamond.price.toLocaleString()} AED</p>
      </div>

      {/* Details */}
      <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
        <div>
          <strong className="font-bold text-sm">symmetry:</strong>
          <span>{diamond.symmetry}</span>
        </div>
        <div>
          <strong className="font-bold text-sm">depth:</strong>
          <span>{diamond.depth}</span>
        </div>
        <div>
          <strong className="font-bold text-sm">dimensions:</strong>
          <span>{diamond.dimensions}</span>
        </div>
        <div>
          <strong className="font-bold text-sm" >fluorescence:</strong>
          <span>{diamond.fluorescence}</span>
        </div>
        <div>
          <strong className="font-bold text-sm" >polish:</strong>
          <span>{diamond.polish}</span>
        </div>
        <div>
          <strong className="font-bold text-sm" >table:</strong>
          <span>{diamond.table}</span>
        </div>

        <div>
          <strong className="font-bold text-sm" >certificate:</strong>
          <span>{diamond.certificate}</span>
        </div>
        <div>
          <strong className="font-bold text-sm" >certificateUrl:</strong>
          <span>{diamond.certificateUrl}</span>
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-2">
        <button className="w-full bg-gray-200 py-2 rounded-md font-medium hover:bg-gray-300 transition" onClick={handleDiscountClick}>
          CHECK FOR DISCOUNT
        </button>

        <div className="relative flex items-center space-x-3">
          {isSelected ? (
            <button
              className="w-full py-2 rounded-md font-medium transition bg-blue-500 text-white hover:bg-blue-600"
              onClick={handleNextStep}
            >
              NEXT STEP
            </button>
          ) : (
            <button
              className="w-full py-2 rounded-md font-medium transition bg-yellow-500 text-white hover:bg-yellow-600"
              onClick={handleSelectDiamond}
            >
              SELECT DIAMOND
            </button>
          )}

          {isSelected && (
            <button
              className="flex items-center justify-center w-9 h-9 border-2 border-gray-300 rounded-full hover:border-red-500 hover:bg-red-100 transition"
              onClick={() => setSelectedDiamondId(null)}
            >
              <Image src={Trash} alt="trash" width={20} height={20} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default DiamondCard;
