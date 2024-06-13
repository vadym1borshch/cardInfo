import { SxProps, Theme } from "@mui/material";

const scrollStyle: SxProps<Theme> = {
  "&::-webkit-scrollbar": {
    width: "3px"
  },
  "&::-webkit-scrollbar-track": {
    background: "#f1f1f1"
  },
  "&::-webkit-scrollbar-thumb": {
    background: "#888",
    borderRadius: "5px"
  },
  "&::-webkit-scrollbar-thumb:hover": {
    background: "#555"
  }
};

export const mainContainerStyles: SxProps<Theme> = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  "& .tabs_container": {
    "& .Mui-selected": {
      backgroundColor: "darkblue",
      color: "white",
      "&:hover": {
        backgroundColor: "darkblue"
      }
    },
    "& .MuiTabs-indicator": {
      display: "none"
    },
    "& .MuiTabs-flexContainer": {
      flexWrap: "wrap"
    },
    "& button": {
      padding: "0",
      minWidth: "60px",
      margin: "5px 10px",
      borderRadius: "5px",
      "&:hover": {
        backgroundColor: "lightsalmon",
        color: "white"
      }
    }
  },
  "& .descriptions_container": {
    "& .header": {
      margin: "10px 30px"
    },
    "& .text_container": {
      maxHeight: "200px",
      overflowY: "auto",
      ...scrollStyle,
      "& button": {
        color: "darkorange",
        margin: "0 10px",
        "&:hover": {
          color: "white",
          backgroundColor: "orange"
        }
      }
    },
    "& .likes_container": {
      display: "flex",
      alignItems: "center",
      justifyContent: "end",
      "& .likes_container_button": {
        minWidth: 0,
        borderRadius: "50%",
        margin: "0 10px",
        "& .material-icons": {
          lineHeight: 0,
          color: "red"
        }
      }
    }
  },
  "& .actions_container": {
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    flexWrap: "wrap",
    "& .actions_container_delete_button": {
      backgroundColor: "red",
      color: "white",
      "&:disable": {
        backgroundColor: "gray"
      }
    },
    "& .actions_container_modal_button": {
      color: "darkgreen"
    },
    "& button": {
      margin: "0 0 10px 10px"
    }
  },
  "& .add_card_container": {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "10px 0",
    "& button": {
      backgroundColor: "green",
      color: "white",
      "&:hover": {
        backgroundColor: "green",
        color: "white"
      }
    }
  }
};
export const modalChildrenContainerStyles: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  "& .MuiOutlinedInput-root": {
    width: "200px",
    "& textarea": {
      ...scrollStyle
    }
  }
};
export const addCardContainerChildrenModal: SxProps<Theme> = {
  "& .MuiInputBase-root ": {
    marginBottom: "10px"
  }
};
