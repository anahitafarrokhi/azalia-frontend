import { FC, useState } from "react";
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
interface ShapeOption {
  id: any;
  name: string;
  value: string;
  imgSrc: string;
}
interface ShapesStep2 {
  selectedShapeStep2: any,
  setSelectedShapeStep2: any
}
const shapeOptions: ShapeOption[] = [

  { id: 10, name: "Round", value: "ROUND", imgSrc: round.src },
  { id: 1, name: "Pear", value: "PEAR", imgSrc: pear.src },
  { id: 2, name: "Princess", value: "PRINCESS", imgSrc: princess.src },
  { id: 3, name: "Oval", value: "OVAL", imgSrc: oval.src },
  { id: 6, name: "Cushion", value: "cushion", imgSrc: cushion.src },
  { id: 7, name: "Asscher", value: "asscher", imgSrc: asscher.src },
  { id: 5, name: "Emerald", value: "emerald", imgSrc: emerald.src },
  { id: 4, name: "Radiant", value: "radient", imgSrc: radient.src },
  { id: 9, name: "Heart", value: "heart", imgSrc: heart.src },
  { id: 8, name: "Marquise", value: "marquise", imgSrc: marquise.src },
];

const DiamondShapeSelector: FC<ShapesStep2> = ({ selectedShapeStep2, setSelectedShapeStep2 }) => {

  return (
    <div className="mt-8 flex flex-col space-y-4">
      <div className="flex items-center space-x-2">
        <h3 className="text-lg font-semibold">Shape</h3>
        <button className="text-gray-500 hover:text-gray-700">
          <i className="fa fa-question-circle-o text-sm" aria-hidden="true"></i>
        </button>
      </div>

      <div className="grid grid-cols-5  xl:grid-cols-10 gap-[2px]">
        {shapeOptions.map((shape) => (
            console.log(selectedShapeStep2 , shape,"asdasdasdwd"),
          <label key={shape.value} className="cursor-pointer text-center ">
            <input
              type="radio"
              name="diamondShape"
              value={shape.value}
              checked={selectedShapeStep2 === shape.id}
              onChange={() => setSelectedShapeStep2(shape.id)}
              className="hidden"
            />
            <div
              className={`p-2 xl:p-[6px] 2xl:p-2  border-2 rounded-lg transition ${selectedShapeStep2 === shape.id ? "border-blue-500" : "border-gray-300"
                }`}
            >
              <img src={shape.imgSrc} alt={shape.name} className="w-8 h-8 mx-auto" />
              <p className="xl:text-[10px] 2xl:text-xs text-xs mt-1">{shape.name}</p>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
};

export default DiamondShapeSelector;
