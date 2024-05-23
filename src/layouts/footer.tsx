import { Box, Container, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Link from "next/link";

const NAV = [
  {
    title: "col1",
    children: [
      {
        title: "Members Directory",
        href: "#",
      },
      {
        title: "Members Directory",
        href: "#",
      },
      {
        title: "Members Directory",
        href: "#",
      },
    ],
  },
  {
    title: "col2",
    children: [
      {
        title: "Members Directory",
        href: "#",
      },
      {
        title: "Members Directory",
        href: "#",
      },
      {
        title: "Members Directory",
        href: "#",
      },
    ],
  },
  {
    title: "col3",
    children: [],
  },
];

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        color: "black",
      }}
    >
      <Container
        sx={{
          py: 6,
        }}
      >
        <Grid container spacing={4}>
          <Grid xs={5}>
            <Typography variant="body2">
              {
                "Lewis family roots reach back to the late 19th century England. Founded by John Lewis, the middle-class entrepreneur, who married Mary Wright and together they started a family which now spans over four generations. "
              }
            </Typography>
          </Grid>
          <Grid xs={7} container>
            {NAV.map((item) => {
              return (
                <Grid key={item.title} xs={4}>
                  <Stack spacing={1}>
                    {item.children.map((child) => {
                      return (
                        <Link key={child.title} href={child.href}>
                          <Typography
                            variant="body2"
                            sx={{
                              ":hover": {
                                fontWeight: 800,
                              },
                            }}
                          >
                            {child.title}
                          </Typography>
                        </Link>
                      );
                    })}
                  </Stack>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Container>
      <Users />
    </Box>
  );
}

const Users = () => {
  return (
    <Box
      display={"grid"}
      gridTemplateColumns={{
        xs: "repeat(10, 1fr)",
      }}
    >
      {[...Array(20)].map((x, index) => {
        return (
          <Box
            key={"footer-image" + index.toString()}
            component={"img"}
            src="/assets/avatar.jpg"
            sx={{
              width: 1,
            }}
          />
        );
      })}
    </Box>
  );
};
