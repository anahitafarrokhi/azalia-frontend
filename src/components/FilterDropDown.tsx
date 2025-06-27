import internal from "node:stream";
import React from "react";
interface FilterItem {
  name: string;
  id: any;
}
type SidebarProps = {
  title: string;
  items: FilterItem[];
  setState: any;
  selectedItem: any;
};

const FilterDropDown: React.FC<SidebarProps> = ({ title, items, setState, selectedItem }) => {
  return (
    <div className="border p-4 w-full bg-white rounded-md shadow">
      <h2 className="font-bold text-lg mb-4">{title}</h2>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li
          key={item.id}
          className={`text-gray-700 hover:text-blue-500 cursor-pointer ${
            item.id === selectedItem ? "font-bold" : ""
          }`}
        >
          <button onClick={() => setState(item.id === selectedItem ? 0 : item.id)}>
            {item.name}
          </button>
        </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterDropDown;
