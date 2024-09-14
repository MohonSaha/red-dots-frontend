"use client";
import { Container } from "@mui/material";
import "./groupMail.css";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import DonorLoadingPage from "../donorList/loading";
import GroupMailDonorCard from "@/components/UI/GroupMailDonorCard/GroupMailDonorCard";

const GroupMailPage = () => {
  const selectedDonors = useSelector((state: RootState) => state.groupMail);
  console.log(selectedDonors);

  return (
    <Container>
      <div className="GroupMailWrapper">
        <div className="grid grid-cols-12  gap-4 mt-6">
          <div className=" col-span-8">
            {selectedDonors &&
              selectedDonors.map((item: any) => (
                <GroupMailDonorCard key={item.id} item={item} />
              ))}
          </div>
          <div className="col-span-4">
            <h1>green</h1>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default GroupMailPage;
