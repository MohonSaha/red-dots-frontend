import { useState } from "react";
import Select from "../SelectDropdown/Select";
import "./SearchDonorV2.css";
import SearchIcon from "@mui/icons-material/Search";
import ButtonRing from "@/components/Button/Button/ButtonRing";
import { Button, Container } from "@mui/material";
import { SearchBloodGroups, SearchDistricts, SearchDonorType } from "@/types";
import DatePickerWithIcon from "../DatePicker/DatePicker";

const SearchDonorV2 = () => {
  const categoriesNames = [
    "Clothing and Beauty",
    "Soft Drinks",
    "Fish and Seafood",
    "Pet food & toy",
    "Fast food",
    "Baking material",
    "Vegetables",
    "Fresh fruit",
    "Bread and juice",
    "Milk and Dairies",
    "Soft Drinks",
    "Clothing and Beauty",
    "Fish and Seafood",
    "Fast food",
    "Pet food & toy",
  ];
  // eslint-disable-next-line no-unused-vars
  const [categories, setCategories] = useState(categoriesNames);

  return (
    <div className="donorFilterWrapper">
      <div className="headerSearch flex items-center rounded-md">
        <Select
          data={SearchBloodGroups}
          placeholder={"Blood Groups"}
          icon={undefined}
        />
        <Select
          data={SearchDistricts}
          placeholder={"Select Area"}
          icon={undefined}
        />
        <Select
          data={SearchDonorType}
          placeholder={"Donor Type"}
          icon={undefined}
        />

        <div className="dateWrapper">
          <input
            type="date"
            className="custom-date"
            placeholder="Select Date"
          />
        </div>

        {/* <div className="search">
          <input type="text" placeholder="Search for items..." />
          <SearchIcon className="searchIcons cursor-pointer" icon={false} />
        </div> */}

        <div className="searchButtonWrapper">
          <button className="searchButton">Search Donor</button>
        </div>
      </div>
    </div>
  );
};

export default SearchDonorV2;
