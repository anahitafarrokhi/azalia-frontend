import { useState, useEffect, useRef } from "react";
type StepOption = {
  id: number;
  label: string;
};

type RangeFilterProps = {
  steps: StepOption[];
  title: string;
  setTitleValue: any;
  setMinRangeValue: any;
  setMaxRangeValue: any;
};

const RangeFilter: React.FC<RangeFilterProps> = ({ steps, title, setTitleValue, setMinRangeValue, setMaxRangeValue }) => {
  const minIndex = 0;
  const maxIndex = steps.length - 1;
  const sliderTrackRef = useRef<HTMLDivElement>(null); // Ref for the slider track

  const [minVal, setMinVal] = useState(minIndex);
  const [maxVal, setMaxVal] = useState(maxIndex);
  const [isDragging, setIsDragging] = useState(false);



  const snapToStep = (value: number) => {
    return Math.round(value); // Ensure it always snaps to whole index values
  };

  const slideMin = (e: any) => {
    const value = snapToStep(parseInt(e.target.value, 10));
    if (value >= minIndex && value < maxVal) {
      setMinVal(value);
      setMinRangeValue(steps[value].id);
    }
  };

  const slideMax = (e: any) => {
    const value = snapToStep(parseInt(e.target.value, 10));
    if (value <= maxIndex && value > minVal) {
      setMaxVal(value);
      setMaxRangeValue(steps[value].id);
    }
  };

  const setSliderTrack = () => {
    if (sliderTrackRef.current) {
      const minPercent = (minVal / maxIndex) * 100;
      const maxPercent = (maxVal / maxIndex) * 100;
      sliderTrackRef.current.style.left = `${minPercent}%`;
      sliderTrackRef.current.style.right = `${100 - maxPercent}%`;
    }
  };

  useEffect(() => {
    setSliderTrack();
    setTitleValue(title);
  }, [minVal, maxVal]);

  const startDrag = () => setIsDragging(true);
  const stopDrag = () => setIsDragging(false);

  return (
    <div className="double-slider-box-Steps">
      <h1 className="text-lg font-semibold">{title}</h1>

      <div className="range-slider">
        <div ref={sliderTrackRef} className="slider-track"></div>
        <input
          type="range"
          min={minIndex}
          max={maxIndex}
          step={1}
          value={minVal}
          onChange={slideMin}
          onMouseDown={startDrag}
          onMouseUp={stopDrag}
          onTouchStart={startDrag}
          onTouchEnd={stopDrag}
          className="min-val"
        />
        <input
          type="range"
          min={minIndex}
          max={maxIndex}
          step={1}
          value={maxVal}
          onChange={slideMax}
          onMouseDown={startDrag}
          onMouseUp={stopDrag}
          onTouchStart={startDrag}
          onTouchEnd={stopDrag}
          className="max-val"
        />
        {isDragging && <div className="min-tooltip">{steps[minVal].label}</div>}
        {isDragging && <div className="max-tooltip">{steps[maxVal].label}</div>}
      </div>

      {/* Labels for the steps */}
      <div className="flex justify-between text-sm mt-1">
        {steps.map((step) => (
          <span key={step.id}>{step.label}</span>
        ))}
      </div>
    </div>
  );
};

export default RangeFilter;
