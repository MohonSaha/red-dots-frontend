import "./DailyDonorCard.css";
import image from "../../../assets/images/bg-g.png";
import { Button, Rating } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Image from "next/image";
import Link from "next/link";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import CoronavirusOutlinedIcon from "@mui/icons-material/CoronavirusOutlined";
import { formatBloodType } from "@/utils/formatBloodType";
// import { Link } from "react-router-dom";

const DailyDonorCard = ({ item }: { item: any }) => {
  console.log(item);
  return (
    <div>
      <div className="dailyDealsWrapper">
        <Image
          src={image}
          alt="mo"
          height={100}
          width={100}
          style={{
            border: "6px solid  #d3ddb0",
          }}
        />

        <div className="info">
          <div className="bloodGroupBig">
            <h1>{formatBloodType(item.bloodType)}</h1>
          </div>
          <div className="countdown">
            <div>
              <p className="countdown-value">17</p>
              <p className="countdown-label">Days</p>
            </div>
            <div>
              <p className="countdown-value">13</p>
              <p className="countdown-label">Hours</p>
            </div>
            <div>
              <p className="countdown-value">37</p>
              <p className="countdown-label">Mins</p>
            </div>
            <div>
              <p className="countdown-value">32</p>
              <p className="countdown-label">Sec</p>
            </div>
          </div>
          <div className="infoWrapper">
            <div className="infoCard">
              <h4 className="title ">
                <Link href="/">
                  We are in urgent need of {formatBloodType(item.bloodType)}{" "}
                  blood for a patient who is fighting for their life!
                </Link>
              </h4>
              <span className="brand block">
                <CoronavirusOutlinedIcon />
                {item.reason}
              </span>
              <span className="brand block">
                <CalendarMonthOutlinedIcon /> {item.dateOfDonation}
              </span>
              <div className="flex items-center space-x-2 rattingWrapper mt-6">
                <span className="brand block">
                  <LocalHospitalOutlinedIcon /> {item.hospitalName}
                </span>
              </div>
              <span className="brand block">
                <LocationOnOutlinedIcon /> {item.hospitalAddress}
              </span>

              <div className="flex items-center mt-6">
                <div className="flex items-center">
                  <span className="price font-bold">৳80</span>
                  <span className="oldPrice">৳100</span>
                </div>

                <div className="ml-auto">
                  <Button className="bg-flash myTransition">
                    <ShoppingCartOutlinedIcon /> Add
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyDonorCard;
