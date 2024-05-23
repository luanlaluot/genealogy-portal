import { Box } from "@mui/material";
import React, { PropsWithChildren } from "react";
import Header from "./header";
import Footer from "./footer";

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />

      <Box
        sx={{
          flexGrow: 1,
        }}
      >
        {children}
      </Box>

      <Footer />
    </Box>
  );
}
