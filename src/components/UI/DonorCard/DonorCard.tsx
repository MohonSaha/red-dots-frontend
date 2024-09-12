// import { Box, Button, Stack, Tooltip, Typography } from "@mui/material";
// import Image from "next/image";
// import React, { useState } from "react";
// import avatar from "@/assets/svgs/avatar.png";
// import { formatBloodType } from "@/utils/formatBloodType";
// import { ChevronRight } from "@mui/icons-material";
// import Link from "next/link";

// const DonorCard = ({ item }: { item: IUser }) => {
//   const [showDetails, setShowDetails] = useState(false);

//   const handleShowDetails = () => {
//     setShowDetails(!showDetails);
//   };

//   return (
//     <Box
//       sx={{
//         backgroundColor: "white",
//         padding: "20px",
//         borderRadius: "8px",
//         border: "1px solid #e0e0e0",
//         // width: "350px",
//         boxShadow:
//           "0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1)",
//         transition: "transform 0.3s, box-shadow 0.3s",
//         "&:hover": {
//           transform: "translateY(-5px)",
//           boxShadow:
//             "0 8px 16px rgba(0, 0, 0, 0.2), 0 12px 40px rgba(0, 0, 0, 0.2)",
//         },
//       }}
//     >
//       <Stack
//         direction="row"
//         gap={5}
//         justifyContent="center"
//         alignItems="center"
//       >
//         <Box sx={{ mb: 2 }}>
//           <Image src={avatar} alt="avatar" height={70} width={70} />
//         </Box>
//         <Box>
//           <Stack
//             direction="row"
//             gap={3}
//             justifyContent="center"
//             alignItems="center"
//           >
//             <Box>
//               <Typography>Name</Typography>
//               <Typography>Group</Typography>
//               <Typography>Location</Typography>
//             </Box>
//             <Box>
//               <Typography sx={{ fontWeight: 600 }}>{item?.name}</Typography>
//               <Typography sx={{ fontWeight: 600 }}>
//                 {formatBloodType(item?.bloodType)}
//               </Typography>
//               <Typography sx={{ fontWeight: 600 }}>{item?.location}</Typography>
//             </Box>
//           </Stack>
//         </Box>
//       </Stack>
//       <Stack
//         direction="row"
//         justifyContent="flex-end"
//         alignItems="center"
//         // sx={{ mt: 3 }}
//       >
//         {/* <Typography>Show More</Typography> */}
//         <Tooltip
//           title="Donor Details"
//           placement="left"
//           componentsProps={{
//             tooltip: {
//               sx: {
//                 bgcolor: "#cdd1da5c",
//                 color: "primary.main", // Change text color if necessary
//               },
//             },
//           }}
//         >
//           <Link href={`/donorList/details/${item?.id}`}>
//             <ChevronRight
//               sx={{
//                 cursor: "pointer",
//                 color: "primary.main",
//                 transition: "transform 0.3s",
//                 "&:hover": {
//                   transform: "translateX(5px)",
//                 },
//               }}
//               onClick={handleShowDetails}
//             />
//           </Link>
//         </Tooltip>
//       </Stack>
//     </Box>
//   );
// };

// export default DonorCard;

import "./DonorCard.css";
import image from "../../../assets/images/user.jpg";
import Image from "next/image";
import VerifiedIcon from "@mui/icons-material/Verified";
import LocalPoliceIcon from "@mui/icons-material/LocalPolice";
import TokenIcon from "@mui/icons-material/Token";
import { CustomTooltip } from "@/components/shared/MyTooltrip/MyTooltrip";
import { formatBloodType } from "@/utils/formatBloodType";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ButtonRing from "@/components/Button/Button/ButtonRing";
import UserCardSlider from "../UserCardSlider/UserCardSlider";
import Link from "next/link";

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
              <Link href={`/donorList/details/${item?.id}`}>Viewa</Link>
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
          <p className="space-y-1">
            Lorem ipsum dolor sit amet consectetur ko, adipisicing elit. Magni
            deserunt.
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
