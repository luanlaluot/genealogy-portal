"use client";

import OrganizationalChart from "@/components/organizational-chart";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import { Box, Button, Container } from "@mui/material";

export default function HomeBio() {
  return (
    <Box
      sx={{
        position: "relative",
        bgcolor: "#f2f2f2",
      }}
    >
      <Box
        sx={{
          display: "flex",
          position: "relative",
          justifyContent: "center",
        }}
      >
        <Button
          fullWidth={false}
          variant="contained"
          sx={{
            top: -20,
            height: 40,
            borderRadius: 20,
          }}
          startIcon={<OpenInFullIcon />}
        >
          Hide bio
        </Button>
      </Box>

      <Container
        maxWidth="md"
        sx={{
          py: 4,
        }}
      >
        <OrganizationalChart data={SIMPLE_DATA} />
      </Container>
    </Box>
  );
}

const createData = (name: string, group: string, role: string | null) => ({
  name,
  group,
  role,
});

const SIMPLE_DATA = {
  ...createData("tasha mcneill", "root", "ceo, co-founder"),

  children: [
    [
      {
        ...createData("john stone", "product design", "lead"),
      },
      {
        ...createData("john stone", "product design", "lead"),
      },
      {
        ...createData("ponnappa priya", "development", "lead"),
      },
    ],
    [
      {
        ...createData("john stone", "product design", "lead"),
      },
      {
        ...createData("john stone", "product design", "lead"),
      },
    ],

    [
      {
        ...createData("john stone", "product design", "lead"),
      },
      {
        ...createData("john stone", "product design", "lead"),
      },
      {
        ...createData("john stone", "product design", "lead"),
      },
    ],
    [
      {
        ...createData("john stone", "product design", "lead"),
      },
      {
        ...createData("john stone", "product design", "lead"),
      },
      {
        ...createData("john stone", "product design", "lead"),
      },
    ],
    [
      {
        ...createData("john stone", "product design", "lead"),
      },
      {
        ...createData("john stone", "product design", "lead"),
      },
      {
        ...createData("john stone", "product design", "lead"),
      },
    ],
  ],
};
