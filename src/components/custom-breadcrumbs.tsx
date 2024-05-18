import { NavigateNext } from "@mui/icons-material";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import React from "react";

export default function CustomBreadcrumbs({
  values,
}: {
  values: {
    title: string;
    href?: string;
  }[];
}) {
  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      sx={{
        ".MuiBreadcrumbs-separator": {
          color: "grey",
        },
        justifyContent: "center",
        display: "flex",
      }}
    >
      {values.map((child) => {
        if (!child.href) {
          return (
            <Typography
              key={child.title}
              variant="body2"
              textTransform={"uppercase"}
              color="white"
            >
              {child.title}
            </Typography>
          );
        }
        return (
          <Link
            key={child.title}
            underline="hover"
            color="white"
            variant="body2"
            textTransform={"uppercase"}
            href={child.href}
          >
            {child.title}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
}
