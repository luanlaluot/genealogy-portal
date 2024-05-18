import { Box } from "@mui/material";
import React, { PropsWithChildren } from "react";
import Header from "./header";

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <Box>
      <Header />

      <Box
        sx={{
          flexGrow: 1,
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
