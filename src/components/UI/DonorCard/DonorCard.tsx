import "./DonorCard.css";
import image from "../../../assets/images/user.jpg";
import Image from "next/image";
import VerifiedIcon from "@mui/icons-material/Verified";
import TokenIcon from "@mui/icons-material/Token";
import { CustomTooltip } from "@/components/shared/MyTooltrip/MyTooltrip";
import { formatBloodType } from "@/utils/formatBloodType";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ButtonRing from "@/components/Button/Button/ButtonRing";
import UserCardSlider from "../UserCardSlider/UserCardSlider";
import Link from "next/link";
import MailIcon from "@mui/icons-material/Mail";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const DonorCard = ({ item }: { item: IUser }) => {
  return (
    <div className="userThumb">
      <div className="userCardWrapper">
        <div>
          <Image
            src={image}
            alt="avatar"
            height={150}
            width={150}
            className="userImage"
          />

          <div className="mt-3 space-x-2">
            <ButtonRing>
              <Link href={`/donorList/details/${item?.id}`}>View</Link>
            </ButtonRing>
            <ButtonRing>Request</ButtonRing>
          </div>
        </div>
        <div className="userInfoWrapper">
          <div className="badge">
            <span>4 Successfull Donation</span>
          </div>
          <div className="flex justify-between items-center">
            <h2 className="capitalize">{item?.name}</h2>
            <div className="iconWrapper">
              <CustomTooltip
                title="Verified Account"
                bgColor="#2e7df8"
                placement="top"
                arrow
              >
                <VerifiedIcon />
              </CustomTooltip>

              {/* <CustomTooltip
                bgColor="#030000"
                title="Complete Donation: 3"
                placement="top"
                arrow
              >
                <TokenIcon />
              </CustomTooltip> */}
              <CustomTooltip
                bgColor="#030000"
                title="Add To Turbo Mail"
                placement="top"
                arrow
              >
                <EmailOutlinedIcon />
              </CustomTooltip>
            </div>
          </div>
          <p className="space-y-1">
            Lorem ipsum dolor sit amet consectetur ko kipkosa, adipisicing elit.
            Magni deserunt.
          </p>
          <div className="userInfo ">
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
          <UserCardSlider item={item} />
        </div>
      </div>
    </div>
  );
};

export default DonorCard;
