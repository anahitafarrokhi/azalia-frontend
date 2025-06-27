import React, { useState } from "react";

import DiamondCard from "./DiamondCard";
import DiamondVideo from '@/assets/images/DiamondVideo.png';
import DiscountModal from "./DiscountModal";


interface DiamondListProps {
  setCurrentStep: (step: number) => void;
  selectedDiamond: any; // Add this line to accept selected diamond data
  setSelectedDiamond: (diamond: any) => void;
  setShowDiscountModal: (show: boolean) => void;
  showDiscountModal: boolean;
  setShowErrorModal: (show: boolean)=> void;
  showErrorModal: boolean;
  diamonds :any

}


  const DiamondList: React.FC<DiamondListProps> = ({ 
    setCurrentStep, 
    selectedDiamond, // Now properly included
    setSelectedDiamond, 
    setShowDiscountModal, 
    showDiscountModal,
    setShowErrorModal,
    showErrorModal ,
    diamonds
  }) => {
    const [selectedDiamondId, setSelectedDiamondId] = useState<string | null>(null);
 

  return (
    <>
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4">Showing {diamonds.length} Round Diamonds</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {diamonds.map((diamond:any) => (
            // <DiamondCard key={diamond.id} diamond={diamond} setCurrentStep={setCurrentStep} setSelectedDiamond={setSelectedDiamond} onCheckDiscount={setShowDiscountModal} showDiscountModal={showDiscountModal} />
            <DiamondCard
            key={diamond.id}
            diamond={diamond}
            setCurrentStep={setCurrentStep}
            selectedDiamondId={selectedDiamondId}
            setSelectedDiamondId={setSelectedDiamondId}
            setShowDiscountModal={setShowDiscountModal}
            setSelectedDiamond={setSelectedDiamond}
          />
          ))}
        </div>
        {/* {showDiscountModal && <DiscountModal diamond={selectedDiamond} onClose={() => setShowDiscountModal(false)} />} */}
      </div>
      
    </>

  );
};

export default DiamondList;