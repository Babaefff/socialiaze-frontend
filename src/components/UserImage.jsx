import { Box } from "@mui/material";

const UserImage = ({ image, size = "60px" }) => {
  console.log(image);

  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user"
        src={`${process.env.REACT_APP_ENDPOINT}/assets/${image}`}
      ></img>
    </Box>
  );
};

export default UserImage;
