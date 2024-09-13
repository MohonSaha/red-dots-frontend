import "./DailyDonorCard.css";
import image from "../../../assets/images/hero-banner-2.png";
import { Button, Rating } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Image from "next/image";
import Link from "next/link";
// import { Link } from "react-router-dom";

const ProductDaily = () => {
  return (
    <div>
      <div className="dailyDealsWrapper">
        <Image src={image} alt="mo" height={100} width={100} />

        <div className="info">
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
                <Link href="/">Angies Boomchickapop Sweet & Salty Kett...</Link>
              </h4>
              <div className="flex items-center space-x-2 rattingWrapper mt-6">
                <Rating
                  name="half-rating-read"
                  defaultValue={2.5}
                  precision={0.5}
                  readOnly
                />
                <span className="ratingNumber">(2.5)</span>
              </div>
              <span className="brand block">
                By <Link href="/">FlashTime</Link>
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

export default ProductDaily;
