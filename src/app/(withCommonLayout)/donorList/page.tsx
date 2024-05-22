"use client";

import SearchDonor from "@/components/shared/SearchDonor/SearchDonor";
import { useState } from "react";

const DonorListPage = () => {
  const [searchValue, setSearchValue] = useState({});
  //   console.log(searchValue);
  return (
    <div>
      <SearchDonor search={searchValue} setSearch={setSearchValue} />
    </div>
  );
};

export default DonorListPage;
