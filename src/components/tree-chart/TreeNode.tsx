import { Home } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  ListItemText,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

function TreeNode({ children, label, className, isMain }: any) {
  return (
    <Grid
      xs={3}
      sx={{
        py: 2,
        position: "relative",
        pb: 10,

        ":first-of-type": {
          ":before": {
            content: "''",
            position: "absolute",
            bottom: 0,
            height: "50%",
            left: "50%",
            width: 0,
            borderLeft: "1px solid black",
            ...(!isMain && {
              display: "none",
            }),
          },
        },

        ":not(:first-of-type)": {
          ":after": {
            content: "''",
            position: "absolute",
            height: 0,
            right: "50%",
            bottom: "30%",
            width: "100%",
            borderTop: "1px solid black",
            ...(!isMain && {
              display: "none",
            }),
          },

          ":before": {
            content: "''",
            position: "absolute",
            top: 0,
            height: "50%",
            right: "50%",
            width: 0,
            borderLeft: "1px solid black",
            ...(isMain && {
              display: "none",
            }),
          },
        },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          height: 0,
          top: 0,
          boxSizing: "border-box",
          right: "50%",
          width: "100%",
          borderBottom: "1px solid black",
          zIndex: 1,
          ...(isMain && {
            display: "none",
          }),
        }}
      />
      <Box
        sx={{
          position: "relative",
          pt: 2,
          zIndex: 2,
          alignItems: "center",
        }}
      >
        <Card
          sx={{
            maxWidth: 345,
            mx: 1,
          }}
        >
          <CardMedia
            sx={{ height: 180 }}
            image="/assets/avatar.jpg"
            title="green iguana"
          />
          <CardContent
            sx={{
              textAlign: "center",
              p: 1,
            }}
          >
            <ListItemText primary={"Lizard"} secondary="(1924-1964)" />
          </CardContent>
          <IconButton
            sx={{
              position: "absolute",
              alignSelf: "center",
              height: 40,
              width: 40,
              bottom: -30,
              left: "calc(50% - 20px)",
              zIndex: 4,
              backgroundColor: "white",
              border: "3px solid #f2f2f2",
              ":hover": {
                bgcolor: "white",
              },
              ...(isMain && {
                display: "none",
              }),
            }}
          >
            <Home />
          </IconButton>
        </Card>
      </Box>
    </Grid>
  );
}

export default TreeNode;
