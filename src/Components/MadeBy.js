import { Box } from "@mui/material";
import React from "react";

const MadeBy = () => {
  const Container = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <Box style={Container}>
      <span>
        <b>Made</b>
        <b style={{ color: "coral" }}>by</b>
        <b style={{ color: "teal" }}>Alpha </b>
        <b style={{ color: "gold" }}>Habib🙏</b>
      </span>
    </Box>
  );
};

export default MadeBy;
