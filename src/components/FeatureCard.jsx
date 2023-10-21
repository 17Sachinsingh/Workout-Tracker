import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const FeatureCard = ({ title, description, imageUrl }) => {
  return (
    <Card
      variant="outlined"
      sx={{
        display: "flex",
        marginBottom: 20,
        borderRadius: 3,
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        backgroundColor: " #f3f3f3",
        flex: "0 0 calc(50% - 10px)",
        flexDirection: "row",
        transition: "transform 0.2s, box-shadow 0.2s, background-color 0.2s",
        maxHeight: "200px", /* Adjust the max height as needed */
      }}
    >
      <img
        src={imageUrl}
        alt="Feature"
        style={{
          width: "50%",
          height: "auto",
          objectFit: "cover",
          borderRadius: "10px 0 0 10px",
          maxHeight: "200px", /* Adjust the max height for the image */
        }}
      />
      <CardContent sx={{ flex: 1, borderRadius: "0 10px 10px 0", padding: 2 }}>
        <Typography variant="h5" component="div" sx={{ fontSize: "14px" }}>
          {title}
        </Typography>
        <Typography color="textSecondary" sx={{ fontSize: "12px" }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
