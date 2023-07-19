import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import VerticalTabs from "./VerticalTabs";
import { mainObj } from "../MainObj";
import { VerticalTabsUser } from "./VerticalTabsUser";
import { useSelector } from "react-redux";
export default function HorizontalTabs() {
  const roleFormData = useSelector((data) => data.admin.formData);
  const [value, setValue] = useState(roleFormData.selectVal);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <TabContext value={value}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
          }}
        >
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Admin Capabilities" value="Admin" />
            <Tab label="Enduser Capabilities" value="User" />
          </TabList>
        </Box>
        <TabPanel value="Admin">
          <VerticalTabs mainObj={mainObj} />
        </TabPanel>
        <TabPanel value="User">
          {/* <VerticalTabs mainObj={mainObj} /> */}
          <VerticalTabsUser mainObj={mainObj} />
        </TabPanel>
      </TabContext>
    </Box>
  );
}