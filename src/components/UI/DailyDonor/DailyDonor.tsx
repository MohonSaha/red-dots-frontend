import Link from "next/link";
import "./DailyDonor.css";
import KeyboardDoubleArrowRightOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";
import ProductDaily from "@/components/shared/DailyDonorCard/DailyDonorCard";
import { Box, Container } from "@mui/material";

const DailyDeals = () => {
  return (
    <Container>
      <div className="DailyDeals">
        <div className="container-fluid">
          <div className="flex justify-between items-center text-slate-600">
            <h2 className="sectionHeading mt-0 mb-0 ">Deals Of The Day</h2>
            <Link href="/" className="mr-2">
              <span className="font-semibold">All Deals</span>
              <KeyboardDoubleArrowRightOutlinedIcon className="" />
            </Link>
          </div>

          <div className="grid grid-cols-3 mt-6 gap-8 ">
            <ProductDaily />
            <ProductDaily />
            <ProductDaily />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default DailyDeals;
