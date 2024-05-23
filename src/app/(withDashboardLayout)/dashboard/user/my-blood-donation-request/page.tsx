"use client";
import { useGetMyRequestsQuery } from "@/redux/api/requestApi";

const MyDonationRequestPage = () => {
  const { data } = useGetMyRequestsQuery({});

  console.log(data);

  return (
    <div>
      <h1>Request by me</h1>
    </div>
  );
};

export default MyDonationRequestPage;
