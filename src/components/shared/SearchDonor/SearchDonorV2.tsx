import { useEffect, useState } from "react";
import Select from "../SelectDropdown/Select";
import "./SearchDonorV2.css";
import { SearchBloodGroups, SearchDistricts, SearchDonorType } from "@/types";
import { useRouter } from "next/navigation";

const SearchDonorV2 = ({ setQueryString }) => {
  const [selectedBloodGroup, setSelectedBloodGroup] = useState<
    string | undefined
  >();
  const [selectedDonorType, setSelectedDonorType] = useState<
    boolean | undefined
  >();
  const [selectedArea, setSelectedArea] = useState<string | undefined>();
  const [selectedDate, setSelectedDate] = useState<string | undefined>();
  const [searchTerm, setSearchTerm] = useState<{
    bloodType?: string;
    location?: string;
    availability?: boolean;
    date?: string;
  }>({});

  const router = useRouter();

  const handleFilter = () => {
    const filterQuery = {
      bloodType: selectedBloodGroup,
      availability: selectedDonorType,
      searchTerm: selectedArea,
      date: selectedDate,
    };
    // console.log("Filter Query:", filterQuery);
    setSearchTerm(filterQuery);
    // You can now send this `filterQuery` to the backend or use it for local filtering

    const queryString = getQueryString(filterQuery);
    router.push(`?${queryString}`, { shallow: true }); // Update the URL without reloading the page

    setQueryString(queryString);
  };

  // Function to convert searchTerm object to a query string
  const getQueryString = (params: Record<string, any>) => {
    const queryParams = new URLSearchParams();

    Object.keys(params).forEach((key) => {
      if (params[key] !== undefined && params[key] !== null) {
        queryParams.append(key, params[key]);
      }
    });

    return queryParams.toString();
  };

  // Convert searchTerm object to a query string
  // const queryString = getQueryString({
  //   ...searchTerm,
  //   // page,
  //   // limit,
  // });

  return (
    <div className="donorFilterWrapper">
      <div className="headerSearch flex items-center rounded-md">
        <Select
          data={SearchBloodGroups}
          placeholder={"Blood Groups"}
          icon={undefined}
          onSelect={(value) =>
            setSelectedBloodGroup(value as string | undefined)
          }
        />
        <Select
          data={SearchDistricts}
          placeholder={"Select Area"}
          icon={undefined}
          onSelect={(value) => setSelectedArea(value as string | undefined)}
        />

        <Select
          data={SearchDonorType}
          placeholder={"Donor Type"}
          icon={undefined}
          onSelect={(value) =>
            setSelectedDonorType(value as boolean | undefined)
          }
        />
        <div className="dateWrapper">
          <input
            type="date"
            className="custom-date"
            placeholder="Select Date"
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </div>

        <div className="searchButtonWrapper">
          <button onClick={handleFilter} className="searchButton">
            Search Donor
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchDonorV2;
