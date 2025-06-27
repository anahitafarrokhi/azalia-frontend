import { useState } from "react";

interface SortByProps {
  setSelectedValue:any,
  selectedValue:any
}

const SortBy: React.FC<SortByProps> = ({ selectedValue,setSelectedValue }) => {

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedValue(value);
  };

  return (
    <div className="relative flex items-center space-x-2">
      {/* Dropdown */}
      <select
        name="sort_by"
        className="appearance-none border border-gray-300 rounded-md px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        value={selectedValue}
        onChange={handleChange}
        aria-label="Sort by"
      >
        <option disabled value="0">Sort by</option>
        <option value="1">Alphabetically, A-Z</option>
        <option value="2">Alphabetically, Z-A</option>
        <option value="3">Price, low to high</option>
        <option value="4">Price, high to low</option>
      </select>

      {/* Filter Icon */}
      <span className="filter-icon cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="18"
          fill="none"
          viewBox="0 0 17 18"
        >
          <path
            d="M7.14855 15.4114C7.19436 15.44 7.24616 15.4539 7.29795 15.4539C7.34111 15.4539 7.3836 15.4439 7.42344 15.4247L9.99578 14.1531C10.0921 14.1053 10.1531 14.0071 10.1531 13.8988L10.1538 8.8711L15.2101 4.12894C15.2672 4.07583 15.2997 4.00079 15.2997 3.92245V2.139C15.2997 1.9823 15.1729 1.85547 15.0162 1.85547H1.9847C1.828 1.85547 1.70117 1.98229 1.70117 2.139V3.92245C1.70117 4.0008 1.73371 4.07583 1.79081 4.12894L7.01436 9.01984L7.01502 15.1705C7.01502 15.2687 7.06549 15.3597 7.14849 15.4115L7.14855 15.4114ZM2.26752 3.7996V2.42181H14.7326V3.7996L9.67635 8.54176C9.61925 8.59554 9.58671 8.66991 9.58671 8.74825V13.7223L7.58144 14.7143V8.89697C7.58144 8.81862 7.5489 8.74359 7.4918 8.69048L2.26752 3.7996Z"
            fill="black"
          ></path>
        </svg>
      </span>
    </div>
  );
};

export default SortBy;
