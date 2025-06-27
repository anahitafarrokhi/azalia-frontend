import React, { FC, useState } from 'react'
import FilterDropDown from "./FilterDropDown";
import BudgetRange from './BudgetRange';
import CaratRange from './CaratRange';
const FilterItemShape = [
    {
        name: 'Round',
        id: 10,
    },
    {
        name: 'Peer',
        id: 1,
    },
    {
        name: 'Princess',
        id: 2,
    },
    {
        name: 'Oval',
        id: 3,
    },
    {
        name: 'Radiant',
        id: 4,
    },
    {
        name: 'Emerald',
        id: 5,
    },
    {
        name: 'Cushion',
        id: 6,
    },
    {
        name: 'Asscher',
        id: 7,
    },
    {
        name: 'Marquise',
        id: 8,
    },
    {
        name: 'Heart',
        id: 9,
    }
];
const FilterItemColor = [
    {
        name: 'Gold',
        id: 4,
    },
    {
        name: 'Silver',
        id: 1,
    },
    {
        name: 'White',
        id: 2,
    },
    {
        name: 'Bronz',
        id: 3,
    }
];
const FilterItemLabOrNat = [
    {
        name: 'LabGrown',
        id: 2,
    },
    {
        name: 'Natural',
        id: 1,
    }
];

type FilterProps = {
    setItemShape: any;
    setItemLabOrNat: any;
    setItemColor: any;
    setCaratRangeMin: any;
    setCaratRangeMax: any;
    setBudgetRangeMin: any;
    setBudgetRangeMax: any;
    caratRangeMin: any;
    caratRangeMax: any;
    budgetRangeMin: any;
    budgetRangeMax: any;
    setTitleValue: any;
}


const Filter: FC<FilterProps> = ({ setItemShape, setItemLabOrNat, setItemColor, setCaratRangeMin, setCaratRangeMax, setBudgetRangeMin, setBudgetRangeMax,
    caratRangeMin, caratRangeMax, budgetRangeMin, budgetRangeMax,setTitleValue }) => {
    const initialMinPrice = 0.30;
    const initialMaxPrice = 21.00;
    const [selectedShape, setSelectedShape] = useState(0);
    const [selectedLabOrNat, setSelectedLabOrNat] = useState(0);
    const [selectedColor, setSelectedColor] = useState(0);
    const [minInput, setMinInput] = useState(initialMinPrice);
    const [maxInput, setMaxInput] = useState(initialMaxPrice);
    const [localMin, setLocalMin] = useState(budgetRangeMin);
    const [localMax, setLocalMax] = useState(budgetRangeMax);
    return (
        <div>
            <FilterDropDown
                title={'Diamond Type'}
                items={FilterItemLabOrNat}
                setState={(id: any) => {
                    setItemLabOrNat(id);
                    setSelectedLabOrNat(id);
                }}
                selectedItem={selectedLabOrNat}
            />
            <FilterDropDown
                title={'Diamond Shape'}
                items={FilterItemShape}
                setState={(id: any) => {
                    setItemShape(id);
                    setSelectedShape(id);
                }}
                selectedItem={selectedShape}
            />
            <FilterDropDown
                title={'Diamond Colour'}
                items={FilterItemColor}
                setState={(id: any) => {
                    setItemColor(id);
                    setSelectedColor(id);
                }}
                selectedItem={selectedColor}
            />
            {/* <FilterDropDown title={'Categories'} items={FilterItemColor} setState ={setState}/> */}
            <CaratRange title={'Carat Weight'} initialMinPrice={0} initialMaxPrice={5} setCaratRangeMin={setCaratRangeMin} setCaratRangeMax={setCaratRangeMax} caratRangeMin={caratRangeMin} caratRangeMax={caratRangeMax} minInput={minInput} setMinInput={setMinInput} maxInput={maxInput} setMaxInput={setMaxInput} setTitleValue={setTitleValue} />
            <BudgetRange title={'Budget Range (AED)'} initialMinPrice={0} initialMaxPrice={26000} setBudgetRangeMin={setBudgetRangeMin} setBudgetRangeMax={setBudgetRangeMax} budgetRangeMin={budgetRangeMin} budgetRangeMax={budgetRangeMax} localMin={localMin} setLocalMin={setLocalMin} localMax={localMax} setLocalMax={setLocalMax} setTitleValue={setTitleValue} />
        </div>

    )
}
export default Filter;



