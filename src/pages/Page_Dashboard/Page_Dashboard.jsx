import React, { useState } from "react";
import { Box, Divider, Grid, Paper, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import SpaIcon from "@mui/icons-material/Spa";
import RealTimeChart from "../../components/Chart/RealTimeChart";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import HardwareIcon from "@mui/icons-material/Hardware";
import useSSE from "../../hooks/useSSE";
import DeviceStatus from "../../components/DeviceStatus";
export default function Page_Dashboard() {
  const [value, setValue] = useState("1");
  const [bulbStatus] = registerDeviceStatus("devices/bulb/sse");
  const [doorStatus] = registerDeviceStatus("devices/door/sse");
  const [pumperStatus] = registerDeviceStatus("devices/pumper/sse");
  return (
    <>
      <Box
        sx={{
          fontSize: 50,
          fontWeight: 600,
          color: "black",
          display: "inline-flex",
          justifyContent: "start",
        }}
      >
        Dashboard
      </Box>
      <Grid container spacing={5}>
        <Grid item xs={8}>
          <TabContext value={value}>
            <Box>
              <TabList
                aria-label="Tabs menu"
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                textColor="primary"
                indicatorColor="primary"
                sx={{
                  "& .MuiTabs-indicator": {
                    backgroundColor: "black",
                  },
                }}
              >
                <Tab
                  label="Temperature"
                  value="1"
                  sx={{
                    textTransform: "none",
                    fontSize: 26,
                    marginRight: 2,
                    fontWeight: 600,
                    color: "rgba(0, 0, 0, 0.85)",
                    "&:hover": {
                      color: "rgba(190, 190, 190, 0.85)",
                    },
                    "&.Mui-selected": {
                      color: "black",
                    },
                  }}
                  icon={<DeviceThermostatIcon fontSize="large" />}
                  iconPosition="start"
                />
                <Tab
                  label="Humidity"
                  value="2"
                  sx={{
                    textTransform: "none",
                    fontSize: 26,
                    marginRight: 2,
                    fontWeight: 600,
                    color: "rgba(0, 0, 0, 0.85)",
                    "&:hover": {
                      color: "rgba(190, 190, 190, 0.85)",
                    },
                    "&.Mui-selected": {
                      color: "black",
                    },
                  }}
                  icon={<WaterDropIcon fontSize="large" />}
                  iconPosition="start"
                />
                <Tab
                  label="Soil Moisture"
                  value="3"
                  sx={{
                    textTransform: "none",
                    fontSize: 26,
                    marginRight: 2,
                    fontWeight: 600,
                    color: "rgba(0, 0, 0, 0.85)",
                    "&:hover": {
                      color: "rgba(190, 190, 190, 0.85)",
                    },
                    "&.Mui-selected": {
                      color: "black",
                    },
                  }}
                  icon={<SpaIcon fontSize="large" />}
                  iconPosition="start"
                />
              </TabList>
              <Divider sx={{ borderColor: "lightgray" }}></Divider>
            </Box>

            <TabPanel value="1">
              <RealTimeChart
                uri="measurements/temperature/sse"
                label="Temperature"
              />
            </TabPanel>
            <TabPanel value="2">
              <RealTimeChart uri="measurements/humidity/sse" label="Humidity" />
            </TabPanel>
            <TabPanel value="3">
              <RealTimeChart uri="measurements/moisture/sse" label="Moisture" />
            </TabPanel>
          </TabContext>
        </Grid>

        <Grid item xs={4}>
          <DeviceStatus
            sx={{ marginTop: "40px" }}
            iconComponent={<LightbulbIcon fontSize="large" />}
            data={{
              title: "Bulb",
              value: bulbStatus,
            }}
          ></DeviceStatus>
          <DeviceStatus
            sx={{ marginTop: "40px" }}
            iconComponent={<MeetingRoomIcon fontSize="large" />}
            data={{
              title: "Door",
              value: doorStatus,
            }}
          ></DeviceStatus>
          <DeviceStatus
            sx={{ marginTop: "40px" }}
            iconComponent={<HardwareIcon fontSize="large" />}
            data={{
              title: "Pumper",
              value: pumperStatus,
            }}
          ></DeviceStatus>
        </Grid>
      </Grid>
    </>
  );
}
function registerDeviceStatus(url) {
  const [status, setStatus] = useState("UNDEFINED");
  if (
    !useSSE(url, (event) => {
      if (!event || !event.data.length) return;
      const status = Number(JSON.parse(event?.data)?.data);
      console.log(`Status: ${status}`);
      setStatus(status ? "ON" : "OFF");
    })
  ) {
    console.log("Cannot track the device");
  }
  return [status, setStatus];
}
