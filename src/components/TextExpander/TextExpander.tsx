import { FC, ReactNode, useState } from "react";
import { Box, Button, Card, SxProps, Theme } from "@mui/material";

interface ITextExpanderProps {
  children?: ReactNode;
  charLimit?: number;
  expanded?: boolean;
  sx?: SxProps<Theme>;
  btnShowText?: string;
  btnHideText?: string;
}

export const TextExpander: FC<ITextExpanderProps> = ({
  children,
  charLimit = 50,
  expanded = false,
  sx,
  btnShowText = "show text",
  btnHideText = "hide text"
}) => {
  const [isShow, setIsShow] = useState(expanded);

  const showMoreHandler = () => {
    setIsShow(!isShow);
  };

  if (typeof children !== "string" || !children) {
    console.error("please use children as string");
    return null;
  }

  const isLongStr = children.length > charLimit;

  const displayedText = isShow
    ? children
    : children.substring(0, charLimit) + `${isLongStr ? "..." : ""}`;

  return (
    <Card sx={{ margin: "10px", ...sx }}>
      <Box className="text_container" sx={{ padding: "10px" }}>
        <span className="text_style">{displayedText}</span>
        <span className="button_container">
          {isLongStr && (
            <Button
              className="button"
              sx={{ padding: "0 10px" }}
              onClick={showMoreHandler}
            >
              {isShow ? btnHideText : btnShowText}
            </Button>
          )}
        </span>
      </Box>
    </Card>
  );
};
