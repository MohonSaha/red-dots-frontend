"use client";
import { Box, Container, Typography } from "@mui/material";
import "./groupMail.css";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import GroupMailDonorCard from "@/components/UI/GroupMailDonorCard/GroupMailDonorCard";
import GroupRequestForm from "@/components/UI/GroupRequestForm/GroupRequestForm";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import ButtonRing from "@/components/Button/Button/ButtonRing";
import Link from "next/link";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const GroupMailPage = () => {
  const [isMounted, setIsMounted] = useState(false);

  // Set isMounted to true once the client has rendered
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const selectedDonors = useSelector((state: RootState) => state.groupMail);
  const selectedDonorsIds = selectedDonors.map((item) => item.id);

  if (!isMounted) {
    return null; // Or return a loading component
  }

  return (
    <Container>
      <div className="GroupMailWrapper my-10">
        <div className="grid grid-cols-12  gap-8 mt-6">
          <div className="col-span-7 w-[90%]">
            <div className="flex items-center">
              <p className="selectedDonorNumber">
                Total Selected donor{" "}
                <span className="text-flash">{selectedDonors?.length}</span>
              </p>
              <div className="clearCart ml-auto">
                <DeleteOutlinedIcon />
                Clear All
              </div>
            </div>
            {selectedDonors.length === 0 ? (
              <div className="flex items-center gap-6">
                <Typography
                  sx={{ color: "red", fontSize: "24px", fontWeight: "500" }}
                >
                  No Item Found!
                </Typography>
                <ButtonRing>
                  <Link href={"/donorList"}>Add Donor</Link>
                </ButtonRing>
              </div>
            ) : (
              selectedDonors.map((item: any) => (
                <GroupMailDonorCard key={item.id} item={item} />
              ))
            )}
          </div>
          <div className="col-span-5 sticky top-0 left-0">
            <GroupRequestForm donorIds={selectedDonorsIds} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default GroupMailPage;
