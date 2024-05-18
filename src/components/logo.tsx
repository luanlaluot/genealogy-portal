import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function Logo() {
  return (
    <Box
      component={"img"}
      src="/logos/logo.png"
      sx={{
        width: 200,
        padding: 2,
        position: "relative",
      }}
    />
  );
}
