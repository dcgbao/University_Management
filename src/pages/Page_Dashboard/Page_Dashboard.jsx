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

export default function Page_Dashboard() {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
                onChange={handleChange}
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
                uri="http://localhost:4000/measurements/temperature/sse"
                label="Temperature"
              />
            </TabPanel>
            <TabPanel value="2">
              <RealTimeChart
                uri="http://localhost:4000/measurements/humidity/sse"
                label="Humidity"
              />
            </TabPanel>
            <TabPanel value="3">
              <RealTimeChart
                uri="http://localhost:4000/measurements/moisture/sse"
                label="Moisture"
              />
            </TabPanel>
          </TabContext>
        </Grid>

        <Grid item xs={4}>
          <Grid item xs={12}>
            <Paper
              sx={{
                boxShadow: 10,
                borderRadius: 3,
                height: "100%",
                width: "100%",
                padding: 2,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <h1>Bulb</h1>
                <h3>Status: ON</h3>
              </Box>
              <LightbulbIcon fontSize="large" />
            </Paper>
          </Grid>
          <Grid item xs={12} sx={{ marginTop: "40px" }}>
            <Paper
              sx={{
                boxShadow: 10,
                borderRadius: 3,
                height: "100%",
                width: "100%",
                padding: 2,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <h1>Door</h1>
                <h3>Status: ON</h3>
              </Box>
              <MeetingRoomIcon fontSize="large" />
            </Paper>
          </Grid>
          <Grid item xs={12} sx={{ marginTop: "40px" }}>
            <Paper
              sx={{
                boxShadow: 10,
                borderRadius: 3,
                height: "100%",
                width: "100%",
                padding: 2,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <h1>Pumper</h1>
                <h3>Status: ON</h3>
              </Box>
              <HardwareIcon fontSize="large" />
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
