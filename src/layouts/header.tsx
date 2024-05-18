import Logo from "@/components/logo";
import { SearchOutlined } from "@mui/icons-material";
import { AppBar, Box, IconButton, Stack, Toolbar } from "@mui/material";
import Nav from "./nav";
import { HEADER } from "@/utils/contants";

export default function Header() {
  return (
    <AppBar
      sx={{
        height: HEADER.navHeight,
        borderBottom: "0.2px solid #f8f8f8",
        backgroundColor: "transparent",
      }}
    >
      <Toolbar>
        <Logo />

        <Box sx={{ flexGrow: 1 }} />

        <Stack direction={"row"} spacing={1}>
          <Nav />

          <IconButton>
            <SearchOutlined
              sx={{
                color: "white",
              }}
            />
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
