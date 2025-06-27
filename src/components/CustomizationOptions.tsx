import Image from "next/image";
import React, { useState } from "react";
import Diamond from '@/assets/icons/d1.webp';
import Ruby from '@/assets/icons/d2.webp';
import Emerald from '@/assets/icons/d3.webp';
import PinkSapphire from '@/assets/icons/d4.webp';
import BlueSapphire from '@/assets/icons/d5.webp';
import YellowSapphire from '@/assets/icons/d6.webp';
type CustomizationOptionsProps = {
  engraving:any;
  setEngraving:any;
  selectedStone:any;
  setSelectedStone:any;
};
const CustomizationOptions: React.FC<CustomizationOptionsProps> = ({
engraving, setEngraving,selectedStone, setSelectedStone

}) => {

    
    const maxEngravingChars = 10;
    const data = [{
        id: 1,
        title: "Diamond",
        img: Diamond
    },
    {
        id: 2,
        title: "Ruby",
        img: Ruby
    },
    {
        id: 3,
        title: "Emerald",
        img: Emerald
    },
    {
        id: 4,
        title: "Pink Sapphire",
        img: PinkSapphire
    },
    {
        id: 5,
        title: "Blue Sapphire",
        img: BlueSapphire
    },
    {
        id: 6,
        title: "Yellow Sapphire",
        img: YellowSapphire
    }]
    const handleStoneSelect = (stone: any) => {
        setSelectedStone(stone);
    };

    return (
        <div className="grid grid-cols-3 gap-24 p-6">

            <div>

                <h3 className="font-semibold mt-2">Engraving</h3>
                <div className="flex border-b py-2 items-center gap-2">
                    <input
                        type="text"
                        className="border-none w-full focus:outline-none"
                        maxLength={maxEngravingChars}
                        value={engraving}
                        onChange={(e) => setEngraving(e.target.value)}
                    />
                    <button
                        className="text-gray-600"
                        onClick={() => {
                            if (engraving.length + "♥".length <= maxEngravingChars) {
                                setEngraving(engraving + "♥");
                            }
                        }}
                    >
                        ❤️
                    </button>

                    <button
                        className="text-gray-600"
                        onClick={() => {
                            if (engraving.length + "∞".length <= maxEngravingChars) {
                                setEngraving(engraving + "∞");
                            }
                        }}
                    >
                        ∞
                    </button>

                </div>
                <p className="text-sm text-gray-500 mt-1">
                    Characters Remaining: <strong>{Math.max(maxEngravingChars - engraving.length, 0)}</strong>
                </p>
            </div>

            <div>
                <h3 className="font-semibold mt-2">Inner Stone</h3>
                <div className="grid grid-cols-6 gap-2 mt-2">
                    {data.map((stone) => (
                        <div
                            key={stone.title}
                            className={`p-2 border rounded flex flex-col items-center cursor-pointer ${selectedStone === stone.title ? "border-black" : "border-gray-300"}`}
                            onClick={() => handleStoneSelect(stone.title)}
                        >
                            <Image src={stone.img} alt={stone.title} className="w-10 h-10" />
                            <span className={`text-xs mt-1 ${selectedStone === stone.title ? "font-bold" : "text-gray-500"}`}>{stone.title}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CustomizationOptions;
