import React, { useEffect, useRef, useState } from "react";
import Filter from "@/components/Filter";
import AllRecentEngagementRings from "@/components/AllRecentEngagementRings";
import AboutImage from "@/components/AboutImage";
import faqimg from "@/assets/images/FAQ.png";
import { AxiosInstance } from "@/utils/api";
import { useRouter } from "next/router";

export default function RecentlyMadeRings() {
  const [itemShape, setItemShape] = useState(0);
  const [itemLabOrNat, setItemLabOrNat] = useState(0);
  const [itemColor, setItemColor] = useState(0);
  const [caratRangeMin, setCaratRangeMin] = useState(0);
  const [caratRangeMax, setCaratRangeMax] = useState(5);
  const [budgetRangeMin, setBudgetRangeMin] = useState(0);
  const [budgetRangeMax, setBudgetRangeMax] = useState(26000);
  const [data, setData] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [titleValue, setTitleValue] = useState("");
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  const router = useRouter();
  let { JewelleryType }: any = router.query;
  JewelleryType = JewelleryType ? Number(JewelleryType) : 0;
  let { Category }: any = router.query;
  Category = Category ? Number(Category) : 3;

  useEffect(() => {
    if (!router.isReady) return;

    if (JewelleryType === undefined || Category === undefined) return;

    const fetchProducts = async () => {
      try {
        const response = await AxiosInstance.get(
          `/Products/multi/${itemShape}/${itemLabOrNat}/${itemColor}/${caratRangeMin}/${caratRangeMax}/${budgetRangeMin}/${budgetRangeMax}/${JewelleryType}/${Category}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [
    itemShape,
    itemLabOrNat,
    itemColor,
    caratRangeMin,
    caratRangeMax,
    budgetRangeMin,
    budgetRangeMax,
    JewelleryType,
    Category,
    router.isReady,
  ]);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setShowMobileFilter(false);
      }
    };

    if (showMobileFilter) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMobileFilter]);

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      {/* Top Image Section */}
      {JewelleryType === 0 && Category === 3 && (
        <AboutImage text={"Rings"} href={faqimg} />
      )}
      {JewelleryType === 10 && Category === 0 && (
        <AboutImage text={"Wedding Ring"} href={faqimg} />
      )}
      {JewelleryType === 6 && Category === 0 && (
        <AboutImage text={"Engagement Rings"} href={faqimg} />
      )}
      {Category === 4 && JewelleryType === 0 && (
        <AboutImage text={"Earrings"} href={faqimg} />
      )}
      {Category === 5 && JewelleryType === 0 && (
        <AboutImage text={"Bracelets"} href={faqimg} />
      )}
      {Category === 6 && JewelleryType === 0 && (
        <AboutImage text={"Necklaces"} href={faqimg} />
      )}

      {/* Mobile Filter Button */}
      <div className="md:hidden flex justify-end px-4 mb-4 mt-4">
        <button
          onClick={() => setShowMobileFilter(true)}
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

      {/* Filter + Product Grid */}
      <div className="mt-12 flex flex-col gap-10 md:flex-row md:gap-6 lg:gap-10 xl:gap-14 container mx-auto">
        {/* Desktop Filter Sidebar */}
        <div className="hidden md:block w-full md:w-1/3 lg:w-1/4 px-2 sm:px-0">
          <Filter
            setItemShape={setItemShape}
            setItemLabOrNat={setItemLabOrNat}
            setItemColor={setItemColor}
            setCaratRangeMin={setCaratRangeMin}
            setCaratRangeMax={setCaratRangeMax}
            setBudgetRangeMin={setBudgetRangeMin}
            setBudgetRangeMax={setBudgetRangeMax}
            caratRangeMin={caratRangeMin}
            caratRangeMax={caratRangeMax}
            budgetRangeMin={budgetRangeMin}
            budgetRangeMax={budgetRangeMax}
            setTitleValue={setTitleValue}
          />
        </div>

        {/* Product List */}
        <div className="w-full md:w-2/3 lg:w-3/4 px-2 sm:px-0">
          <AllRecentEngagementRings data={data} isLoading={isLoading} />
        </div>
      </div>

      {/* Mobile Filter Modal */}
      {showMobileFilter && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setShowMobileFilter(false)}
          ></div>

          {/* Sliding Filter Panel */}
          <div className="fixed inset-x-0 bottom-0 z-50 flex justify-center items-end sm:items-center">
            <div ref={modalRef} className="w-full sm:w-[90%] max-w-md bg-white rounded-t-xl sm:rounded-xl shadow-lg p-4 transform transition-all duration-300 translate-y-full opacity-0 animate-slide-up max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Filters</h2>
                <button
                  onClick={() => setShowMobileFilter(false)}
                  className="text-2xl text-gray-500"
                >
                  &times;
                </button>




              </div>
              <Filter
                setItemShape={setItemShape}
                setItemLabOrNat={setItemLabOrNat}
                setItemColor={setItemColor}
                setCaratRangeMin={setCaratRangeMin}
                setCaratRangeMax={setCaratRangeMax}
                setBudgetRangeMin={setBudgetRangeMin}
                setBudgetRangeMax={setBudgetRangeMax}
                caratRangeMin={caratRangeMin}
                caratRangeMax={caratRangeMax}
                budgetRangeMin={budgetRangeMin}
                budgetRangeMax={budgetRangeMax}
                setTitleValue={setTitleValue}
              />
            </div>
          </div>
        </>
      )}

    </div>
  );
}
