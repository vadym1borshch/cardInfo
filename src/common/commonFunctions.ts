import { SxProps, Theme } from "@mui/material";

export const splitStyles = (
  extStyle?: SxProps<Theme>,
  defStyle?: SxProps<Theme>
): SxProps<Theme> => {
  return {
    ...defStyle,
    ...extStyle
  } as SxProps<Theme>;
};
