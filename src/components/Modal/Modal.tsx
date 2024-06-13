import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { SxProps, Theme } from "@mui/material";
import { FC } from "react";

const style: SxProps<Theme> = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4
};

interface ICustomModalProps {
  isOpen: boolean;
  children: React.ReactNode;
  sx?: SxProps<Theme>;
}

export const CustomModal: FC<ICustomModalProps> = ({
  isOpen,
  children,
  sx
}) => {
  return (
    <Box sx={{ ...sx }} className="modal_container">
      <Modal className="modal" open={isOpen} >
        <Box sx={style}>
          {children}
        </Box>
      </Modal>
    </Box>
  );
};
