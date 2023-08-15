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
      <b>Made</b> &nbsp;
      <b style={{ color: "coral" }}>by</b> &nbsp;
      <b style={{ color: "teal" }}>Alpha </b>&nbsp;
      <b style={{ color: "gold" }}>Habib🙏</b>&nbsp; &nbsp;
    </Box>
  );
};

export default MadeBy;
