import { useState, useEffect,useRef } from "react";

type BudgetRangeProps = {
  title: string;
  widthSize?: boolean;
  initialMinPrice: number;
  initialMaxPrice: number;
  setBudgetRangeMin: (value: number) => void;
  setBudgetRangeMax: (value: number) => void;
  budgetRangeMin: number;
  budgetRangeMax: number;
  localMin:any;
  setLocalMin:any;
  localMax:any;
  setLocalMax:any;
  setTitleValue:any;
};

const BudgetRange: React.FC<BudgetRangeProps> = ({
  initialMinPrice,
  initialMaxPrice,
  title,
  widthSize,
  setBudgetRangeMin,
  setBudgetRangeMax,
  budgetRangeMin, // external state value (used only initially)
  budgetRangeMax,
  localMin,setLocalMin,localMax,setLocalMax,setTitleValue
}) => {
  // Define the slider boundaries and minimum gap
  const sliderMinValue = initialMinPrice;
  const sliderMaxValue = initialMaxPrice;
  const minGap = 5;

  // Local state to hold the current slider values
 
  const [isDragging, setIsDragging] = useState(false);

  // Update slider track styling based on local values
  // const setSliderTrack = () => {
  //   const range = document.querySelector(".slider-track3") as HTMLElement;
  //   console.log(range,"dwadwadawdawsds")
  //   if (range) {
  //     const minPercent =
  //       ((localMin - sliderMinValue) / (sliderMaxValue - sliderMinValue)) *
  //       100;
  //     const maxPercent =
  //       ((localMax - sliderMinValue) / (sliderMaxValue - sliderMinValue)) *
  //       100;
  //     range.style.left = `${minPercent}%`;
  //     range.style.right = `${100 - maxPercent}%`;
  //   }
  // };

  const trackRef = useRef<HTMLDivElement>(null);

const setSliderTrack = () => {
  if (!trackRef.current) return;

  const minPercent =
    ((localMin - sliderMinValue) / (sliderMaxValue - sliderMinValue)) * 100;
  const maxPercent =
    ((localMax - sliderMinValue) / (sliderMaxValue - sliderMinValue)) * 100;

  trackRef.current.style.left = `${minPercent}%`;
  trackRef.current.style.right = `${100 - maxPercent}%`;
};

  useEffect(() => {
    setSliderTrack();
     setTitleValue(title);
  }, [localMin, localMax]);

  // Call parent's setters to update global state (and trigger API call)
  const updateParentRange = () => {
    setBudgetRangeMin(localMin);
    setBudgetRangeMax(localMax);
  };

  // Handlers for slider range changes that only update local state
  const slideMin = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (value >= sliderMinValue && localMax - value >= minGap) {
      setLocalMin(value);
    }
  };

  const slideMax = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (value <= sliderMaxValue && value - localMin >= minGap) {
      setLocalMax(value);
    }
  };

  // When dragging starts and stops, update isDragging and, on stop, update parent state.
  const startDrag = () => {
    setIsDragging(true);
  };

  const stopDrag = () => {
    setIsDragging(false);
    updateParentRange();
  };

  // For number inputs, update local state on change then update parent's state on blur or Enter key
  const handleMinInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value =
      e.target.value === "" ? sliderMinValue : parseInt(e.target.value, 10);
    if (value >= sliderMinValue && value < localMax - minGap) {
      setLocalMin(value);
    }
  };

  const handleMaxInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value =
      e.target.value === "" ? sliderMaxValue : parseInt(e.target.value, 10);
    if (value <= sliderMaxValue && value > localMin + minGap) {
      setLocalMax(value);
    }
  };

  const handleInputBlur = () => {
    updateParentRange();
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      updateParentRange();
    }
  };

  return (
    <div
      className={`${
        widthSize ? "double-slider-box-stepCarat" : "double-slider-box"
      }`}
    >
      <h1 className="font-bold text-lg mb-4">{title}</h1>
      <div className="input-box">
        <div className="min-box">
          <input
            type="number"
            value={localMin}
            onChange={handleMinInput}
            onBlur={handleInputBlur}
            onKeyDown={handleInputKeyDown}
            className="min-input"
            min={sliderMinValue}
            max={localMax - minGap}
          />
        </div>
        <div className="max-box">
          <input
            type="number"
            value={localMax}
            onChange={handleMaxInput}
            onBlur={handleInputBlur}
            onKeyDown={handleInputKeyDown}
            className="max-input"
            min={localMin + minGap}
            max={sliderMaxValue}
          />
        </div>
      </div>
      <div className="range-slider">
        <div ref={trackRef} className="slider-track3"></div>
        <input
          type="range"
          min={sliderMinValue}
          max={sliderMaxValue}
          value={localMin}
          onChange={slideMin}
          onMouseDown={startDrag}
          onMouseUp={stopDrag}
          onTouchStart={startDrag}
          onTouchEnd={stopDrag}
          className="min-val"
        />
        <input
          type="range"
          min={sliderMinValue}
          max={sliderMaxValue}
          value={localMax}
          onChange={slideMax}
          onMouseDown={startDrag}
          onMouseUp={stopDrag}
          onTouchStart={startDrag}
          onTouchEnd={stopDrag}
          className="max-val"
        />
        {isDragging && <div className="min-tooltip">{localMin}</div>}
        {isDragging && <div className="max-tooltip">{localMax}</div>}
      </div>
      {!widthSize && (
        <div className="flex justify-between text-sm mt-1">
          <span>{sliderMinValue}</span>
          <span>{(sliderMinValue + sliderMaxValue) / 4}</span>
          <span>{(sliderMinValue + sliderMaxValue) / 2}</span>
          <span>{(3 * sliderMinValue + sliderMaxValue) / 4}</span>
          <span>{sliderMaxValue}</span>
        </div>
      )}
    </div>
  );
};

export default BudgetRange;
