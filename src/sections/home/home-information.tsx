import CustomBreadcrumbs from "@/components/custom-breadcrumbs";
import { HEADER } from "@/utils/contants";
import { Box, Container, ListItemText, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Image from "next/image";
import React from "react";

export default function HomeInformation() {
  return (
    <Container
      maxWidth="md"
      sx={{
        pt: 4,
        pb: 12,
      }}
    >
      <Grid container spacing={2}>
        <Grid xs={12} md={6}>
          <InfoItem />
        </Grid>
        <Grid xs={12} md={6}>
          <InfoItem />
        </Grid>
        <Grid xs={12}>
          <InfoItem />
        </Grid>

        <Grid xs={12} sx={{ mt: 2 }}>
          <Stack spacing={3}>
            <Stack direction={"row"} spacing={1}>
              {[...Array(4)].map((_, index) => {
                return (
                  <Image
                    key={"info-image-" + index.toString()}
                    alt={"info-image-" + index.toString()}
                    src={"/assets/avatar.jpg"}
                    width={160}
                    height={160}
                  />
                );
              })}
            </Stack>
            <Stack spacing={3}>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                egestas massa quis maximus feugiat. Proin tempus augue eget
                metus mollis, a volutpat arcu luctus.
              </Typography>

              <Typography variant="body2">
                Pellentesque dapibus sem leo, a rutrum arcu elementum ut.
                Pellentesque pretium viverra est, ac lobortis neque rhoncus sed.
                Duis pharetra ante vel venenatis gravida. Nam viverra pulvinar
                felis, sit amet varius mauris molestie non. Phasellus lobortis
                mattis pharetra.
              </Typography>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}

const InfoItem = () => {
  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "column",
        bgcolor: "#f3f3f3",
        py: 2,
        px: 3,
      }}
    >
      <ListItemText
        primary="Place of birth"
        primaryTypographyProps={{
          textTransform: "uppercase",
          variant: "subtitle2",
          color: "grey",
        }}
        secondary={"New York"}
        secondaryTypographyProps={{
          color: "black",
          variant: "body1",
        }}
      />
    </Stack>
  );
};
