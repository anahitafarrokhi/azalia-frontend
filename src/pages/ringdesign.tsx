import React, { useState, useEffect } from "react";
import Steps from '../components/Steps';
import White from '@/assets/icons/white_large.avif';
import Yellow from '@/assets/icons/yellow_large.avif';
import Rosa from '@/assets/icons/rose_large.avif';
import Trilogy from '@/assets/icons/trilogy(1).svg';
import Band from '@/assets/icons/band.svg';
import Halo from '@/assets/icons/halo(1).svg';
import Solitaire from '@/assets/icons/solitaire.svg';
import round from '@/assets/icons/round.png';
import pear from '@/assets/icons/pear.png';
import princess from '@/assets/icons/princess.png';
import cushion from '@/assets/icons/cushion.png';
import asscher from '@/assets/icons/asscher.png';
import oval from '@/assets/icons/oval.png';
import emerald from '@/assets/icons/emerald.png';
import radient from '@/assets/icons/radient.png';
import heart from '@/assets/icons/heart.png';
import marquise from '@/assets/icons/marquise.png';
import SetupProduct from "@/components/SetupProduct";
import ProductGrid from "@/components/ProductGrid";
import SortBy from "@/components/SortBy";
import NextStepButton from "@/components/NextStepButton";
import DiamondList from "@/components/DiamondList";
import CustomizationOptions from "@/components/CustomizationOptions";
import DiscountModal from "@/components/DiscountModal";
import useDebounce from "@/hooks/useDebounce";
import { AxiosInstance } from "@/utils/api";
import { useRouter } from "next/router";
import Productdetail from "@/components/productdetail";
import { useCart } from "@/context/CartProvider";
import ProductDesignFilter from "@/components/ProductDesignFilter";
import DiamondFilter from "@/components/DiamondFilter";
function Modal({ onClose }: { onClose: () => void; }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold text-center">Select a Diamond</h2>
        <p className="text-gray-600 text-center mt-2">
          Please select a diamond to proceed to the next step.
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <button className="bg-black text-white px-4 py-2 rounded-md" onClick={onClose}>
            Choose a Diamond
          </button>
          <button className="bg-gray-300 px-4 py-2 rounded-md" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

const RingDesign: React.FC = () => {
  const { cart } = useCart();
  console.log(cart, 'dd');
  const metals = [
    { id: 2, label: '18K White Gold', icon: White },
    { id: 5, label: '18K Yellow Gold', icon: Yellow },
    { id: 6, label: '18K Rose Gold', icon: Rosa },
    { id: 7, label: 'Platinum', icon: White },
  ];

  const shapes = [
    { id: 10, label: 'Round', icon: round },
    { id: 1, label: 'Pear', icon: pear },
    { id: 2, label: 'Princess', icon: princess },
    { id: 3, label: 'Oval', icon: oval },
    { id: 4, label: 'Radiant', icon: radient },
    { id: 5, label: 'Emerald', icon: emerald },
    { id: 6, label: 'Cushion', icon: cushion },
    { id: 7, label: 'Asscher', icon: asscher },
    { id: 8, label: 'Marquise', icon: marquise },
    { id: 9, label: 'Heart', icon: heart },
  ];

  const styles = [
    { id: 4, label: 'Solitaire', icon: Solitaire },
    { id: 1, label: 'Diamond Band', icon: Band },
    { id: 2, label: 'Halo', icon: Halo },
    { id: 3, label: 'Trilogy', icon: Trilogy },
  ];
  const [selectedShapeStep2, setSelectedShapeStep2] = useState(10);
  const [currentStep, setCurrentStep] = useState(1);
  const [visibleStep, setVisibleStep] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedDiamond, setSelectedDiamond] = useState<string | any>(null); // ✅ NEW: Tracks selected diamond
  const [showModal, setShowModal] = useState(false);
  const [showDiscountModal, setShowDiscountModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [caratRangeMax, setCaratRangeMax] = useState(5);
  const [caratRangeMin, setCaratRangeMin] = useState(0);
  const [budgetRangeMin, setBudgetRangeMin] = useState(0);
  const [budgetRangeMax, setBudgetRangeMax] = useState(26000);
  const [engraving, setEngraving] = useState("");
  const [selectedStone, setSelectedStone] = useState("Blue Sapphire");
  const steps = [
    { stepNumber: 1, title: "Choose a", subtitle: "SETTING" },
    { stepNumber: 2, title: "Choose a", subtitle: "DIAMOND" },
    { stepNumber: 3, title: "Personalise", subtitle: "RING" },
  ];
  const [showFilters, setShowFilters] = useState(false);
  const [showFilters2, setShowFilters2] = useState(false);
  const handleStepClick = (stepNumber: number) => {
    if (stepNumber === 3 && !selectedDiamond) {
      // setShowModal(true); // Show modal if no diamond is selected
      setShowErrorModal(true);
      return;
    }

    const myId = cart.find(item => item.id == selectedProduct.id);
    console.log(myId, 'my');
    if (myId && currentStep === 3 && (stepNumber == 1 || stepNumber == 2)) {
      alert("this item is added to card, you cant have any changes.");
      return;

    }
    if (stepNumber !== currentStep) {
      setIsAnimating(true); // Start animation
      setTimeout(() => {
        setCurrentStep(stepNumber);
        setIsAnimating(false); // End animation after transition
      }, 100); // Match transition duration
    }

  };
  const initialMinPrice = 0.30;
  const initialMaxPrice = 21.00;
  const [selectedValue, setSelectedValue] = useState(0);
  const [titleValue, setTitleValue] = useState("Carat");
  const [minRangeValue, setMinRangeValue] = useState(0);
  const [maxRangeValue, setMaxRangeValue] = useState(10);
  const [selectedMetal, setSelectedMetal] = useState(2);
  const [selectedShape, setSelectedShape] = useState(10);
  const [selectedStyle, setSelectedStyle] = useState(4);
  const [minInput, setMinInput] = useState(initialMinPrice);
  const [maxInput, setMaxInput] = useState(initialMaxPrice);
  const [localMin, setLocalMin] = useState(budgetRangeMin);
  const [localMax, setLocalMax] = useState(budgetRangeMax);
  const debouncedMinInput = useDebounce(minInput, 500);
  const debouncedMaxInput = useDebounce(maxInput, 500);
  const debouncedlocalMin = useDebounce(localMin, 500);
  const debouncedlocalMax = useDebounce(localMax, 500);
  const [isLoading, setIsLoading] = useState(true);
  const [products, setData] = useState<any[]>([]);
  const [diamonds, setDiamondsData] = useState<any[]>([]);
  const debouncedMinRangeValue = useDebounce(minRangeValue, 500);
  const debouncedMaxRangeValue = useDebounce(maxRangeValue, 500);
  const router = useRouter();

  let { JewelleryType }: any = router.query;
  JewelleryType = JewelleryType ? Number(JewelleryType) : 0;
  let { Category }: any = router.query;
  Category = Category ? Number(Category) : 3;

  const [selectedProduct, setSelectedProduct] = useState<any>(null);


  const handleNextStep = () => {
    setCurrentStep(2);
  };


  const ErrorModal = ({ onClose }: { onClose: () => void }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold text-center">Select a Diamond</h2>
        <p className="text-gray-600 text-center mt-2">
          Please select a diamond to proceed to the next step.
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <button className="bg-black text-white px-4 py-2 rounded-md" onClick={onClose}>
            Choose a Diamond
          </button>
          <button className="bg-gray-300 px-4 py-2 rounded-md" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );

  useEffect(() => {
    setTimeout(() => setVisibleStep(currentStep), 300); // Delays step update to match animation
  }, [currentStep]);


  useEffect(() => {

    fetchProductsStep1();
  }, [selectedMetal, selectedShape, selectedStyle, selectedValue]);


  useEffect(() => {
    fetchProductsStep2();

  }, [selectedShapeStep2, debouncedMinInput, debouncedMaxInput, debouncedlocalMin, debouncedlocalMax, debouncedMinRangeValue, debouncedMaxRangeValue, currentStep]);
  const fetchProductsStep1 = async () => {
    try {
      const response = await AxiosInstance.get(
        `/Products/multiRingDesign/${selectedShape}/${selectedStyle}/${selectedMetal}/${selectedValue}/${JewelleryType}/${Category}/0`
      );
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  const fetchProductsStep2 = async () => {
    if (currentStep === 2) {
      try {
        const response = await AxiosInstance.get(
          `/Products/multiRingDiamondDesign/${selectedShapeStep2}/${debouncedMinInput}/${debouncedMaxInput}/${debouncedlocalMin}/${debouncedlocalMax}/${debouncedMinRangeValue}/${debouncedMaxRangeValue}/${titleValue}/${JewelleryType}/8`
        );
        setDiamondsData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
  };


  useEffect(() => {
    if (products && products.length > 0) {
      setSelectedProduct(products[0]);
    }
    else {
      setSelectedProduct(null);
    }
  }, [products]);

  return (
    <>
      <div className="pt-6 space-y-8 container mx-auto mt-10">
        <Steps steps={steps} currentStep={currentStep} onStepClick={handleStepClick} />
        {showModal && <Modal onClose={() => setShowModal(false)} />}
        {/* Show All Options in Step 1 */}
        <div className={`transition-opacity transform duration-100 ${isAnimating ? "opacity-0 scale-90" : "opacity-100 scale-100"}`}>
          {currentStep === 1 && (
            <div key="step1">
              <div className="hidden lg:block">
                <ProductDesignFilter metals={metals} selectedMetal={selectedMetal} setSelectedMetal={setSelectedMetal} shapes={shapes}
                  selectedShape={selectedShape} setSelectedShape={setSelectedShape} styles={styles}
                  selectedStyle={selectedStyle} setSelectedStyle={setSelectedStyle} />
              </div>
              <div className="lg:hidden flex justify-end px-4 mb-4">
                <button
                  onClick={() => setShowFilters(true)}
                  className="flex items-center gap-2 border px-4 py-2 rounded-md text-sm font-medium shadow-sm hover:bg-gray-100"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 4h18M6 12h12M9 20h6" />
                  </svg>
                  Filters
                </button>
              </div>

              <div className="flex container mx-auto py-8">
                {selectedProduct && (
                  <SetupProduct
                    name={selectedProduct.title}
                    description={selectedProduct.description}
                    images={selectedProduct.imagePrimary.imageUrl}
                    metal={selectedProduct.color}
                    shape={selectedProduct.shape}
                    style={selectedProduct.style}
                    code={selectedProduct.code}
                  />
                )}
                <div className="pl-12 w-full">

                  <div className="flex justify-end mb-4">
                    <SortBy
                      selectedValue={selectedValue}
                      setSelectedValue={setSelectedValue}
                    />
                  </div>
                  {products.length > 0 && (
                    <ProductGrid
                      products={products}
                      selectedProduct={selectedProduct}
                      setSelectedProduct={setSelectedProduct}
                      isLoading={isLoading}
                    />
                  )}
                  <NextStepButton onClick={handleNextStep} />
                </div>
              </div>
            </div>
          )}


          {currentStep === 2 && (
            <>
              <div className="hidden lg:block">

                <DiamondFilter selectedShapeStep2={selectedShapeStep2} setSelectedShapeStep2={setSelectedShapeStep2} setTitleValue={setTitleValue} setMinRangeValue={setMinRangeValue} setMaxRangeValue={setMaxRangeValue}
                  setCaratRangeMax={setCaratRangeMax} initialMinPrice={initialMinPrice} initialMaxPrice={initialMaxPrice}
                  setCaratRangeMin={setCaratRangeMin} caratRangeMin={caratRangeMin} minInput={minInput} setMinInput={setMinInput} maxInput={maxInput} caratRangeMax={caratRangeMax} setMaxInput={setMaxInput}
                  setBudgetRangeMax={setBudgetRangeMax} budgetRangeMin={budgetRangeMin} budgetRangeMax={budgetRangeMax} setBudgetRangeMin={setBudgetRangeMin} localMin={localMin} setLocalMin={setLocalMin}
                  localMax={localMax} setLocalMax={setLocalMax} />
              </div>
              <div className="lg:hidden flex justify-end px-4 mb-4">
                <button
                  onClick={() => setShowFilters2(true)}
                  className="flex items-center gap-2 border px-4 py-2 rounded-md text-sm font-medium shadow-sm hover:bg-gray-100"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 4h18M6 12h12M9 20h6" />
                  </svg>
                  Filters
                </button>

              </div>
              <div className="container mx-auto">

                {diamonds.length > 0 && (
                  <DiamondList
                    diamonds={diamonds}
                    selectedDiamond={selectedDiamond}
                    setSelectedDiamond={setSelectedDiamond}
                    setShowDiscountModal={setShowDiscountModal}
                    showDiscountModal={showDiscountModal}
                    setCurrentStep={setCurrentStep}
                    setShowErrorModal={setShowErrorModal}
                    showErrorModal={showErrorModal}
                  />
                )}

              </div>

            </>
          )}
        </div>
        {showErrorModal && <ErrorModal onClose={() => setShowErrorModal(false)} />}
        {showDiscountModal && <DiscountModal diamond={selectedDiamond} onClose={() => setShowDiscountModal(false)} />}
      </div>
      {currentStep === 3 && (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Customization Options Section */}
          <div className="w-full mb-8">
            <CustomizationOptions
              engraving={engraving}
              setEngraving={setEngraving}
              selectedStone={selectedStone}
              setSelectedStone={setSelectedStone}
            />
          </div>

          {/* Product Detail Section */}
          <div className="flex flex-col md:flex-row md:space-x-8 items-center md:items-start">
            <div className="w-full md:w-1/2 lg:w-2/3">
              <Productdetail
                productId={selectedProduct.id}
                engraving={engraving}
                selectedStone={selectedStone}
                diamond={selectedDiamond}
              />
            </div>
          </div>
        </div>

      )}
      {showFilters && (
        <>
          {/* Background Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-40 z-40"
            onClick={() => setShowFilters(false)}
          ></div>

          {/* Modal */}
          <div className="fixed inset-x-0 bottom-0 z-50 flex justify-center items-end sm:items-center">
            <div
              className="w-full sm:w-[90%] max-w-md max-h-[90vh] bg-white rounded-t-xl sm:rounded-xl shadow-lg p-4 transform transition-all duration-300 translate-y-full opacity-0 animate-slide-up overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-4 sticky top-0 bg-white z-10">
                <h2 className="text-lg font-semibold">Filters</h2>
                <button
                  onClick={() => setShowFilters(false)}
                  className="text-2xl text-gray-500"
                >
                  &times;
                </button>
              </div>

              <ProductDesignFilter
                metals={metals}
                selectedMetal={selectedMetal}
                setSelectedMetal={setSelectedMetal}
                shapes={shapes}
                selectedShape={selectedShape}
                setSelectedShape={setSelectedShape}
                styles={styles}
                selectedStyle={selectedStyle}
                setSelectedStyle={setSelectedStyle}
              />
            </div>
          </div>
        </>
      )}
      {showFilters2 && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-40 z-2 items-end lg:hidden"
            onClick={() => setShowFilters2(false)}
          ></div>

          {/* Modal in center with scrollable body */}
          <div className="fixed inset-0 z-[3] flex justify-center items-end lg:hidden">
            <div className="w-full sm:w-[90%] max-w-md max-h-[65vh] bg-white rounded-xl shadow-lg p-4 overflow-y-auto animate-slide-up">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Filters</h2>
                <button
                  onClick={() => setShowFilters2(false)}
                  className="text-2xl text-gray-500"
                >
                  &times;
                </button>
              </div>

              <DiamondFilter
                selectedShapeStep2={selectedShapeStep2}
                setSelectedShapeStep2={setSelectedShapeStep2}
                setTitleValue={setTitleValue}
                setMinRangeValue={setMinRangeValue}
                setMaxRangeValue={setMaxRangeValue}
                setCaratRangeMax={setCaratRangeMax}
                initialMinPrice={initialMinPrice}
                initialMaxPrice={initialMaxPrice}
                setCaratRangeMin={setCaratRangeMin}
                caratRangeMin={caratRangeMin}
                minInput={minInput}
                setMinInput={setMinInput}
                maxInput={maxInput}
                caratRangeMax={caratRangeMax}
                setMaxInput={setMaxInput}
                setBudgetRangeMax={setBudgetRangeMax}
                budgetRangeMin={budgetRangeMin}
                budgetRangeMax={budgetRangeMax}
                setBudgetRangeMin={setBudgetRangeMin}
                localMin={localMin}
                setLocalMin={setLocalMin}
                localMax={localMax}
                setLocalMax={setLocalMax}
              />
            </div>
          </div>
        </>
      )}
    </>


  );
};

export default RingDesign;
