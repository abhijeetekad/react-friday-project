import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { mainObj } from "../MainObj";
import { CheckListComponent } from "./CheckListComponent";
import { useDispatch, useSelector } from "react-redux";
import { CheckListComponentUser } from "./CheckListComponentUser";
import {
  addUserPreviewData,
  userCheckedListArr,
  userObjStored,
} from "../Utils.jsx/UserSlice";


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const VerticalTabsUser = ({ mainObj }) => {
  const [value, setValue] = useState(0);
  const objRedux = useSelector((data) => {
    console.log(data)
    return data.user.reduxObj
  });
  console.log(objRedux)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: 300,
      }}
    >
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider", alignItems: "start" }}
      >
        {mainObj.map((data) => (
          <Tab key={data.verticalObj.id} label={data.verticalObj.name} />
        ))}
      </Tabs>
      {objRedux.map((data) => (
        <TabPanel value={value} index={data.verticalObj.userTabTitle.index}>
          <Typography variant="body9">
            {data.verticalObj.userTabTitle.name}
          </Typography>
          <div className="p-1"></div>
          <Typography variant="body5">
            Capability Description here lorem ipsum
          </Typography>

          <CheckListComponentUser
            value={value}
            objRedux={objRedux}
            propTab={data.verticalObj}
          />
        </TabPanel>
      ))}
    </Box>
  );
};
export { VerticalTabsUser };
