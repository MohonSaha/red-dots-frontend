/* eslint-disable @next/next/no-img-element */
"use client";
import "./GroupMailDonorCard.css";
import userImage from "../../../assets/images/user.jpg";
import Image from "next/image";
import { Box } from "@mui/material";
import { formatBloodType } from "@/utils/formatBloodType";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ButtonRing from "@/components/Button/Button/ButtonRing";
import Link from "next/link";

const GroupMailDonorCard = ({ item }: { item: any }) => {
  return (
    <Box>
      <div className="mailUserBoxWrapper">
        <div className="flex items-center justify-between">
          <div>
            <Image
              src={
                item.userProfile.profileImage
                  ? item.userProfile.profileImage.startsWith("http")
                    ? item.userProfile.profileImage
                    : `/${item.userProfile.profileImage}`
                  : userImage // fallback to default image
              }
              // src={userImage}
              alt="user image"
              height={60}
              width={60}
              className="mailUserImage"
            />
          </div>
          <div className="ml-8">
            <h3 className="text-[20px] font-semibold ml-1 capitalize">
              {item?.name}
            </h3>
            <div className="flex items-center space-y-1">
              <BloodtypeIcon />
              <p>
                Blood Group:{" "}
                <span className="text-black">
                  {formatBloodType(item?.bloodType)}
                </span>
              </p>
            </div>
            <div className="flex items-center">
              <LocationOnIcon />
              <p>{item?.location}</p>
            </div>
          </div>

          <div className="space-x-2">
            <ButtonRing>
              <Link href={`/donorList/details/${item?.id}`}>View</Link>
            </ButtonRing>
            <ButtonRing>Remove</ButtonRing>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default GroupMailDonorCard;
