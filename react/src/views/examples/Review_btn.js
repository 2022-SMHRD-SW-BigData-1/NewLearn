import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function ContainedButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" style={{ position: "relative", left: "82%" }}>
        저장하기
      </Button>
    </Stack>
  );
}
