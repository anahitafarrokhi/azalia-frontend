import React, { useState } from 'react';
import Image from "next/image";

interface ProductDesignFilterProps {
  metals: any;
  selectedMetal: number;
  setSelectedMetal: any;
  shapes: any;
  selectedShape: number;
  setSelectedShape: any;
  styles: any;
  selectedStyle: number;
  setSelectedStyle: any;
}

const ProductDesignFilter: React.FC<ProductDesignFilterProps> = ({
  metals,
  selectedMetal,
  setSelectedMetal,
  shapes,
  selectedShape,
  setSelectedShape,
  styles,
  selectedStyle,
  setSelectedStyle
}) => {
  const [activeTab, setActiveTab] = useState<'metal' | 'shape' | 'style'>('metal') as any;

  const renderOptions = (
    options: Array<any>,
    selected: any | null,
    colNum: boolean,
    setSelected: (id: any) => void
  ) => {
    return (
      <div
        className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 ${
          colNum ? 'lg:grid-cols-5' : 'lg:grid-cols-2'
        } gap-2`}
      >
        {options.map((option) => (
          <div
            key={option.id}
            className={`p-2 border rounded-lg text-center cursor-pointer transition ${
              selected === option.id ? "border-black" : "border-gray-300"
            }`}
            onClick={() => setSelected(option.id)}
          >
            <Image
              src={option.icon}
              className={`mx-auto ${colNum ? 'w-10' : ''}`}
              alt={option.label}
              width={60}
              height={60}
            />
            <div className="mt-2 font-medium text-[10px]  sm:text-xs md:text-sm lg:text-[10px] lg:text-[10px]">
              {option.label}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      {/* Mobile Tabs */}
      <div className="lg:hidden flex justify-between items-center border-b border-gray-300 mb-4 px-2">
        {['metal', 'shape', 'style'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as 'metal' | 'shape' | 'style')}
            className={`py-2 px-4 font-semibold text-sm border-b-2 transition-all ${
              activeTab === tab ? 'border-black text-black' : 'border-transparent text-gray-400'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
       
      </div>

      {/* Mobile: Tab Content */}
      <div className="lg:hidden">
        {activeTab === 'metal' && (
          <div className="space-y-4">
            {renderOptions(metals, selectedMetal, false, setSelectedMetal)}
          </div>
        )}
        {activeTab === 'style' && (
          <div className="space-y-4">
            {renderOptions(styles, selectedStyle, false, setSelectedStyle)}
          </div>
        )}
        {activeTab === 'shape' && (
          <div className="space-y-4">
            {renderOptions(shapes, selectedShape, true, setSelectedShape)}
          </div>
        )}
      </div>

      {/* Desktop Grid View */}
      <div className="hidden lg:grid grid-cols-3 gap-6">
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-center">Select Metal</h2>
          {renderOptions(metals, selectedMetal, false, setSelectedMetal)}
        </div>
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-center">Select Shape</h2>
          {renderOptions(shapes, selectedShape, true, setSelectedShape)}
        </div>
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-center">Select Style</h2>
          {renderOptions(styles, selectedStyle, false, setSelectedStyle)}
        </div>
      </div>
    </>
  );
};

export default ProductDesignFilter;
