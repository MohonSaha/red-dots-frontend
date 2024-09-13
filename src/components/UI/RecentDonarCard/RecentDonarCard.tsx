import "./RecentDonarCard.css";
import banner from "../../../assets/images/hero-banner-2.png";
import image from "../../../assets/images/user.jpg";
import Image from "next/image";
import { CustomTooltip } from "@/components/shared/MyTooltrip/MyTooltrip";
import rank from "../../../assets/svgs/military-rank-white.png";
import VerifiedIcon from "@mui/icons-material/Verified";
import TokenIcon from "@mui/icons-material/Token";
import ButtonRing from "@/components/Button/Button/ButtonRing";
import Link from "next/link";

const RecentDonarCard = ({ item }: { item: IUser }) => {
  return (
    <div className="bestUserThumb">
      <div className={`badge bg-black text-white`}>
        <p>Points: 10</p>
        <div>
          <Image
            src={rank}
            alt="avatar"
            height={17}
            width={17}
            className="rankImage"
          />
        </div>
      </div>

      <div className="bestUserCardWrapper">
        <div className="imageWrapper">
          <Image
            src={banner}
            alt="avatar"
            height={150}
            width={150}
            className="bannerImage"
          />
          <div>
            <Image
              src={image}
              alt="avatar"
              height={150}
              width={150}
              className="bestUserImage"
            />
          </div>
        </div>

        <div className="bestUserInfoWrapper">
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

              <CustomTooltip
                bgColor="#030000"
                title="Complete Donation: 3"
                placement="top"
                arrow
              >
                <TokenIcon />
              </CustomTooltip>
            </div>
          </div>
          <p>
            Lorem2 ipsum dolor sit amet consectetur jodd adipisicing elit. Magni
            enim veritatis.
          </p>

          <div className="mt-3">
            <ButtonRing>
              <Link href={`/donorList/details/${item?.id}`}>View</Link>
            </ButtonRing>
            <ButtonRing>Request</ButtonRing>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentDonarCard;
