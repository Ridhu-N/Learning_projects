import React from "react";
import { Stack } from "@mui/material";

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? "1px solid red" : " ",
        backgroundColor: "#fff",
        width: "270px",
        height: "280px",
        cursor: "pointer",
        gap: "40px",
        marginTop:'30px'
      }}
      onClick ={()=>{
        setBodyPart(item);
        window.scrollTo({top:'1800px',left:'100px',behavior:'smooth'})
      }}
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/3306/3306838.png"
        alt="gymimg"
        style={{
          width: "100px",
          height: "100px",
        }}
      ></img>
      <p style={{ color: "#3A1212", fontSize: "16px", fontWeight: "bold" }}>
        {" "}
        {item}
      </p>
    </Stack>
  );
};

export default BodyPart;
