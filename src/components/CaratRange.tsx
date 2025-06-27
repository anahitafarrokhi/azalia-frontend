import React, { useState, useEffect,useRef } from "react";

type CaratRangeProps = {
  title: string;
  widthSize?: boolean;
  initialMinPrice: number;
  initialMaxPrice: number;
  setCaratRangeMin: (value: number) => void;
  setCaratRangeMax: (value: number) => void;
  caratRangeMin: number;
  caratRangeMax: number;
  minInput: any;
  setMinInput: any;
  maxInput: any;
  setMaxInput: any;
  setTitleValue:any;

};

const CaratRange: React.FC<CaratRangeProps> = ({
  title,
  widthSize,
  initialMinPrice,
  initialMaxPrice,
  setCaratRangeMin,
  setCaratRangeMax,
  minInput, setMinInput, maxInput, setMaxInput,setTitleValue
}) => {
  const sliderMinValue = initialMinPrice;
  const sliderMaxValue = initialMaxPrice;
  const minGap = 0.1;

  // Local states for slider values that update during dragging
  const [localMin, setLocalMin] = useState(initialMinPrice);
  const [localMax, setLocalMax] = useState(initialMaxPrice);

  console.log(localMin, 'localMin', localMax, 'localMax', minInput, 'minInput', maxInput, 'maxInput',)
  // When the user stops dragging or leaves an input field,
  // update the parent's state so the API is called.
  const updateParent = () => {
    setCaratRangeMin(Number(localMin.toFixed(1)));
    setCaratRangeMax(Number(localMax.toFixed(1)));
  };

  const slideMin = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (value >= sliderMinValue && localMax - value >= minGap) {
      setLocalMin(value);
      setMinInput(value);
    }
  };

  const slideMax = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (value <= sliderMaxValue && value - localMin >= minGap) {
      setLocalMax(value);
      setMaxInput(value);
    }
  };

  const trackRef2 = useRef<HTMLDivElement>(null);

  // Update the slider track appearance using local state values.
const setSliderTrack = () => {
  if (!trackRef2.current) return;

  const minPercent =
    ((localMin - sliderMinValue) / (sliderMaxValue - sliderMinValue)) * 100;
  const maxPercent =
    ((localMax - sliderMinValue) / (sliderMaxValue - sliderMinValue)) * 100;

  trackRef2.current.style.left = `${minPercent}%`;
  trackRef2.current.style.right = `${100 - maxPercent}%`;
};

  useEffect(() => {
    setSliderTrack();
     setTitleValue(title);

  }, [localMin, localMax]);

  const handleMinInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value === "" ? sliderMinValue : parseFloat(e.target.value);
    if (value >= sliderMinValue && value < localMax - minGap) {
      setMinInput(value);
      setLocalMin(value);
    }
  };

  const handleMaxInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value === "" ? sliderMaxValue : parseFloat(e.target.value);
    if (value <= sliderMaxValue && value > localMin + minGap) {
      setMaxInput(value);
      setLocalMax(value);
    }
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, type: string) => {
    if (e.key === "Enter") {
      updateParent();
    }
  };

  const handleBlur = () => {
    updateParent();
  };

  const startDrag = () => {
    // No update needed here during dragging.
  };

  const stopDrag = () => {
    // Commit the value when dragging stops.
    updateParent();
  };

  return (
    <div className={widthSize ? 'double-slider-box-stepCarat' : 'double-slider-box'}>
      <h1 className="font-bold text-lg mb-4">{title}</h1>
      <div className="input-box flex justify-between mb-4">
        <div className="min-box">
          <input
            type="number"
            value={minInput}
            step="0.1"
            onChange={handleMinInput}
            onKeyDown={(e) => handleInputKeyDown(e, "min")}
            onBlur={handleBlur}
            className="w-16 p-2 border rounded text-center"
            min={sliderMinValue}
            max={localMax - minGap}
          />
        </div>
        <div className="max-box">
          <input
            type="number"
            value={maxInput}
            step="0.1"
            onChange={handleMaxInput}
            onKeyDown={(e) => handleInputKeyDown(e, "max")}
            onBlur={handleBlur}
            className="w-16 p-2 border rounded text-center"
            min={localMin + minGap}
            max={sliderMaxValue}
          />
        </div>
      </div>
      <div className="range-slider relative w-full h-2 bg-gray-300 rounded">
        <div ref={trackRef2} className="slider-track2 absolute h-full bg-blue-500 rounded"></div>
        <input
          type="range"
          min={sliderMinValue}
          max={sliderMaxValue}
          value={localMin}
          step="0.1"
          onChange={slideMin}
          onMouseDown={startDrag}
          onMouseUp={stopDrag}
          onTouchStart={startDrag}
          onTouchEnd={stopDrag}
          className="absolute w-full h-2 bg-transparent pointer-events-none appearance-none"
        />
        <input
          type="range"
          min={sliderMinValue}
          max={sliderMaxValue}
          value={localMax}
          step="0.1"
          onChange={slideMax}
          onMouseDown={startDrag}
          onMouseUp={stopDrag}
          onTouchStart={startDrag}
          onTouchEnd={stopDrag}
          className="absolute w-full h-2 bg-transparent pointer-events-none appearance-none"
        />
      </div>
      {
        !widthSize && (
          <div className="flex justify-between text-sm mt-2">
            {[0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0].map((mark) => (
              <span key={mark}>{mark}</span>
            ))}
          </div>
        )
      }
    </div>
  );
};

export default CaratRange;
