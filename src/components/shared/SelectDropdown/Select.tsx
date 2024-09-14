import React, { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import "./select.css";

interface SelectProps {
  data: { label: string; value: string | undefined | boolean; index: number }[];
  placeholder: string;
  icon?: React.ReactNode;
  onSelect: (selectedValue: string | boolean | undefined) => void; // Add this prop
}

const Select: React.FC<SelectProps> = ({
  data,
  placeholder,
  icon,
  onSelect, // Destructure the onSelect prop
}) => {
  const [isOpenSelect, setIsOpenSelect] = useState(false);
  const [selectedItem, setSelectedItem] = useState<{
    label: string;
    value: string | undefined | boolean;
    index: number;
  } | null>(null);
  const [listData, setListData] = useState(data);

  const openSelect = () => {
    setIsOpenSelect(!isOpenSelect);
    setListData(data);
  };

  const closeSelect = (item: {
    label: string;
    value: string | undefined | boolean;
    index: number;
  }) => {
    setSelectedItem(item);
    setIsOpenSelect(false);
    onSelect(item.value); // Pass selected value back to parent
  };

  const filterList = (e: React.ChangeEvent<HTMLInputElement>) => {
    const keyWord = e.target.value.toLowerCase();
    const filteredList = data.filter((item) =>
      item.label.toLowerCase().includes(keyWord)
    );

    setListData(filteredList);
  };

  return (
    <ClickAwayListener onClickAway={() => setIsOpenSelect(false)}>
      <div className="selectDrop cursor-pointer relative">
        {icon}
        <span className="openSelect" onClick={openSelect}>
          {selectedItem ? selectedItem.label : placeholder}
          {isOpenSelect ? (
            <ArrowDropUpIcon className="arrow" />
          ) : (
            <ArrowDropDownIcon className="arrow" />
          )}
        </span>

        {isOpenSelect && (
          <div className="selectDropdown">
            <div className="dropSearchField">
              <input
                type="text"
                placeholder="Search here..."
                onChange={filterList}
              />
            </div>
            <ul className="searchResults">
              <li
                key={-1}
                onClick={() =>
                  closeSelect({
                    label: placeholder,
                    value: undefined,
                    index: -1,
                  })
                }
                className={selectedItem?.index === -1 ? "active" : ""}
              >
                {placeholder}
              </li>

              {listData.map((item) => (
                <li
                  key={item.index}
                  onClick={() => closeSelect(item)}
                  className={selectedItem?.index === item.index ? "active" : ""}
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </ClickAwayListener>
  );
};

export default Select;
