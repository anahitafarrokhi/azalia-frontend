import React from 'react'
import CaratRange from './CaratRange'
import RangeFilter from './RangeFilter'
import DiamondShapeSelector from './DiamondShapeSelector'
import BudgetRange from './BudgetRange'

interface DiamondFilterProps {
    selectedShapeStep2: number;
  setSelectedShapeStep2: any;
  setTitleValue:any;
  setMinRangeValue: any;
  setMaxRangeValue: any;
  setCaratRangeMax: any;
  initialMinPrice: number;
  initialMaxPrice: number;
  setCaratRangeMin: any;
  caratRangeMin: number;
  minInput: number;
  setMinInput: any;
  maxInput: number;
  caratRangeMax: number;
  setMaxInput: any;
  setBudgetRangeMax: any;
  budgetRangeMin: number;
  budgetRangeMax: number;
  setBudgetRangeMin: any;
  localMin: number;
  setLocalMin: any;
  localMax: number;
  setLocalMax:any;
}
const DiamondFilter: React.FC<DiamondFilterProps> = ({ selectedShapeStep2, setSelectedShapeStep2, setTitleValue, setMinRangeValue, setMaxRangeValue, setCaratRangeMax, initialMinPrice,
    initialMaxPrice, setCaratRangeMin, caratRangeMin, minInput, setMinInput, maxInput, caratRangeMax, setMaxInput, setBudgetRangeMax, budgetRangeMin, budgetRangeMax, setBudgetRangeMin
    , localMin, setLocalMin, localMax, setLocalMax
}) => {

    return (
        <div className="container w-[95%] md:w-100 mx-auto grid md:grid-cols-1 lg:grid-cols-2 grid-cols-1 gap-x-24">
            <DiamondShapeSelector selectedShapeStep2={selectedShapeStep2} setSelectedShapeStep2={setSelectedShapeStep2} />
            <RangeFilter steps={[{ id: 1, label: "IDEAL" }, { id: 2, label: "EXCELLENT" }, { id: 3, label: "VERY GOOD" }, { id: 4, label: "GOOD" }]}
                title={"Cut"} setTitleValue={setTitleValue} setMinRangeValue={setMinRangeValue} setMaxRangeValue={setMaxRangeValue} />
            <RangeFilter steps={[{ id: 1, label: "D" }, { id: 2, label: "E" }, { id: 3, label: "F" }, { id: 4, label: "G" }, { id: 5, label: "H" }, { id: 6, label: "I" }, { id: 7, label: "J" }, { id: 8, label: "K" }]}
                title={"Colour"} setTitleValue={setTitleValue} setMinRangeValue={setMinRangeValue} setMaxRangeValue={setMaxRangeValue} />
            <RangeFilter steps={[{ id: 1, label: "FL" }, { id: 2, label: "IF" }, { id: 3, label: "VVS1" }, { id: 4, label: "VVS2" }, { id: 5, label: "VS1" }, { id: 6, label: "VS2" }, { id: 7, label: "SI1" }, { id: 8, label: "SI2" }]}
                title={"Clarity"} setTitleValue={setTitleValue} setMinRangeValue={setMinRangeValue} setMaxRangeValue={setMaxRangeValue} />
            <div className="double-slider-box-Steps">
                <CaratRange title={"Carat"} widthSize={true} initialMinPrice={initialMinPrice} initialMaxPrice={initialMaxPrice} setCaratRangeMin={setCaratRangeMin}
                    setCaratRangeMax={setCaratRangeMax} caratRangeMin={caratRangeMin} caratRangeMax={caratRangeMax}
                    minInput={minInput} setMinInput={setMinInput} maxInput={maxInput} setMaxInput={setMaxInput} setTitleValue={setTitleValue} />
            </div>
            <div className="double-slider-box-Steps">
                <BudgetRange title={'Budget Range (AED)'} widthSize={true} initialMinPrice={0} initialMaxPrice={26000} setBudgetRangeMin={setBudgetRangeMin}
                    setBudgetRangeMax={setBudgetRangeMax} budgetRangeMin={budgetRangeMin} budgetRangeMax={budgetRangeMax}
                    localMin={localMin} setLocalMin={setLocalMin} localMax={localMax} setLocalMax={setLocalMax} setTitleValue={setTitleValue}
                />
            </div>
        </div>
    )
}
export default DiamondFilter;

