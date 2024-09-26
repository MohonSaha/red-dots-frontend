import React, { useState } from "react";
import {
  CldUploadWidget,
  CloudinaryUploadWidgetInfo,
  CloudinaryUploadWidgetResults,
} from "next-cloudinary";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

interface ImageUploaderProps {
  label?: string;
  onUploadSuccess?: (result: any) => void;
  buttonLabel?: string;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({
  label = "Upload Image",
  onUploadSuccess,
  buttonLabel = "Upload",
}) => {
  const [fileName, setFileName] = useState<string | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  // Function to handle successful upload
  const handleUploadSuccess = (result: CloudinaryUploadWidgetResults) => {
    const imageInfo: CloudinaryUploadWidgetInfo | undefined | any =
      result?.info; // Extract info object from the result
    if (imageInfo) {
      setFileName(imageInfo?.original_filename); // Set the file name
      setImageUrl(imageInfo?.secure_url); // Set the uploaded image URL

      if (onUploadSuccess) {
        onUploadSuccess(imageInfo); // Pass image info to parent if needed
      }
    }
  };

  console.log(fileName, imageUrl);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        border: "2px dashed #ccc",
        borderRadius: "8px",
        padding: "8px 10px",
        cursor: "pointer",
        width: "100%",
      }}
    >
      <CldUploadWidget
        signatureEndpoint="/api/sign-image" // Adjust this to your API route
        onSuccess={(result: CloudinaryUploadWidgetResults) =>
          handleUploadSuccess(result)
        }
      >
        {({ open }) => (
          <Box
            onClick={() => open()}
            sx={{ textAlign: "center", cursor: "pointer" }}
          >
            {imageUrl ? (
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Image
                  width={80}
                  height={80}
                  src={imageUrl}
                  alt="Uploaded"
                  style={{
                    width: "30px",
                    height: "20px",
                    objectFit: "cover",
                    borderRadius: "4px",
                    marginRight: "20px",
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{ fontWeight: 600, color: "#5052fd" }}
                >
                  {fileName}
                </Typography>
              </Box>
            ) : (
              <Typography
                variant="body2"
                sx={{ color: "#aaa", fontWeight: 500 }}
              >
                {buttonLabel}
              </Typography>
            )}
          </Box>
        )}
      </CldUploadWidget>
    </Box>
  );
};

export default ImageUploader;
