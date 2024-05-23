import { cx } from "@emotion/css";
import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import * as React from "react";

function TreeRow({ children, isMain = false, isLast = false, label }: any) {
  return (
    <Grid
      container
      sx={{
        position: "relative",
      }}
    >
      {!isMain && (
        <Grid
          xs={3}
          sx={{
            position: "relative",
            ":before": {
              content: "''",
              position: "absolute",
              top: 0,
              height: "100%",
              left: "50%",
              width: 0,
              borderLeft: "1px solid black",
              ...(isLast && {
                display: "none",
              }),
            },
          }}
        />
      )}
      {children}
    </Grid>
  );
}

export default TreeRow;
