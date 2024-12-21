import "./RecentDonarCard.css";
import banner from "../../../assets/images/bg-g.png";
import image from "../../../assets/images/user.jpg";
import Image from "next/image";
import { CustomTooltip } from "@/components/shared/MyTooltrip/MyTooltrip";
import rank from "../../../assets/svgs/military-rank-white.png";
import VerifiedIcon from "@mui/icons-material/Verified";
import TokenIcon from "@mui/icons-material/Token";
import ButtonRing from "@/components/Button/Button/ButtonRing";
import Link from "next/link";

const RecentDonarCard = ({ item }: { item: any }) => {
  return (
    <div className="bestUserThumb">
      <div className="bestUserWrapper">
        <div className="bestUserInfo">
          <h1>Donation Count: 10</h1>
          <h2 className="userName">{item.name}</h2>
          <h2 className="">{item.location}</h2>
          <ButtonRing>
            <Link href={`/donorList/details/${item?.id}`}>View</Link>
          </ButtonRing>
          <ButtonRing>Request</ButtonRing>
        </div>
        <div>
          <Image
            src={
              item.userProfile.profileImage
                ? item.userProfile.profileImage.startsWith("http")
                  ? item.userProfile.profileImage
                  : `/${item.userProfile.profileImage}`
                : image // fallback to default image
            }
            alt="avatar"
            height={100}
            width={100}
            className="bestUserImage"
          />

          <div>
            <Image
              src={banner}
              height={100}
              width={100}
              alt="banner"
              className="bannerImage"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentDonarCard;
