import { getArrayNumber } from "../../utils/getArrayNumber";
import { Stack, Skeleton } from "@mui/material";

export function StackSkeleton({ value, height, spacing, direction }) {
  return (
    // <Stack spacing={spacing} direction={!direction ? "row" : "column"}>
    getArrayNumber(value).map((i) => (
      <Skeleton
        height={height}
        variant="rounded"
        key={i}
        animation="wave"
      />
    ))
    // </Stack>
  );
}
