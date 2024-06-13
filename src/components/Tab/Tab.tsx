import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { FC } from "react";

interface ICustomTabProps {
  tabsMapper: any[];
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
  tabsLabels?: string[];
  value: number;
}

export const CustomTabs: FC<ICustomTabProps> = ({
  tabsMapper,
  onChange,
  tabsLabels,
  value
}) => {
  return (
    <Box
      className="tabs_container"
      sx={{ width: "100%", bgcolor: "background.paper" }}
    >
      <Tabs value={value} onChange={onChange} centered>
        {tabsMapper.map((tab, i) => {
          return (
            <Tab
              id={tab.id}
              key={tab.id || i}
              className="tab"
              label={`${tabsLabels ? tabsLabels[i] : `Tab ${i + 1}`} `}
            />
          );
        })}
      </Tabs>
    </Box>
  );
};
