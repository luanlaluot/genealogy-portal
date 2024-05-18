import CustomBreadcrumbs from "@/components/custom-breadcrumbs";
import { HEADER } from "@/utils/contants";
import { Box, ListItemText, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function HomeHero() {
  return (
    <Box
      sx={{
        backgroundImage: "url(/assets/images/home-hero-bg.jpg)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Box
        sx={{
          pt: `${HEADER.navHeight}px`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-end",
          height: 1,
        }}
      >
        <Box
          sx={{
            p: 10,
          }}
        >
          <CustomBreadcrumbs
            values={[
              { title: "Home", href: "/" },
              {
                title: "Family members",
              },
            ]}
          />
          <User />
        </Box>
      </Box>
    </Box>
  );
}

const User = () => {
  return (
    <Stack
      direction={"row"}
      sx={{
        py: 4,
      }}
      spacing={2}
    >
      <Image
        alt="user-avatar"
        src={"/assets/avatar.jpg"}
        height={100}
        width={100}
        style={{
          borderRadius: "50%",
          border: "2px solid #fff",
          boxShadow: "0 0 0 1px rgba(0,0,0,.12), 0 2px 4px 0 rgba(0,0,0,.24)",
        }}
      />

      <Stack>
        <Typography variant="h3">Laun Vip</Typography>

        <ListItemText
          primary="July 9 ,1919 - September 1, 1999"
          primaryTypographyProps={{
            color: "white",
          }}
          secondary="(Aged 80)"
          secondaryTypographyProps={{
            color: "white",
          }}
        />
      </Stack>
    </Stack>
  );
};
