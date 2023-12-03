// Current Value >= Default Value -> turn on bulb
// columns: Timestamp, Status

import {
  Box,
  Button,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
} from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import MonitoringChart from "../../components/Chart/MonitoringChart";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import axios from "axios";
import { Switch } from "antd";

export default function Page_Devices_Bulb() {
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [timeRange, setTimeRange] = useState("");

  const handleBulbSwitch = () => {
    axios
      .get("http://localhost:4000/devices/bulb/toggle")
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("A: ", new Date(startTime.$d).toJSON());
    console.log("B: ", new Date(endTime.$d).toJSON());
    console.log("C: ", timeRange);
    // if (timeRange === "day" || timeRange === "minute" || timeRange === "second") {

    // }
  };

  // Test Data
  const rows = [
    { timestamp: "11/11/2023 12:01", status: "ON" },
    { timestamp: "11/11/2023 12:02", status: "OFF" },
    { timestamp: "11/11/2023 12:03", status: "OFF" },
    { timestamp: "11/11/2023 12:04", status: "ON" },
    { timestamp: "11/11/2023 12:05", status: "OFF" },
    { timestamp: "11/11/2023 12:06", status: "ON" },
    { timestamp: "11/11/2023 12:07", status: "ON" },
    { timestamp: "11/11/2023 12:08", status: "ON" },
    { timestamp: "11/11/2023 12:09", status: "ON" },
    { timestamp: "11/11/2023 12:10", status: "OFF" },
  ];

  const columns = [
    // {
    //   field: "id",
    //   type: "number",
    //   headerName: "ID",
    //   width: 300,
    //   headerAlign: "center",
    //   align: "center",
    // },
    // {
    //   field: "value",
    //   type: "number",
    //   headerName: "Value (\u00B0C)",
    //   width: 400,
    //   headerAlign: "center",
    //   align: "center",
    //   // editable: true,
    // },
    {
      field: "timestamp",
      type: "string",
      headerName: "Timestamp",
      width: 600,
      headerAlign: "center",
      align: "center",
      // editable: true,
      // flex: 1,
    },
    {
      field: "status",
      type: "string",
      headerName: "Status",
      headerAlign: "center",
      align: "center",
      // editable: true,
      flex: 1,
    },
  ];

  console.log("Time Range: ", timeRange);

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box
          sx={{
            fontSize: 50,
            fontWeight: 600,
            color: "black",
            display: "inline-flex",
            justifyContent: "start",
            marginBottom: 1,
            marginRight: 2,
          }}
        >
          Bulb
        </Box>
        <Switch
          checkedChildren="ON"
          unCheckedChildren="OFF"
          onChange={handleBulbSwitch}
        />
      </Box>
      <Divider sx={{ borderColor: "lightgray" }}></Divider>
      <Box sx={{ marginTop: 2 }}>
        <Grid container spacing={5}>
          <Grid item xs={9}>
            <Box sx={{ display: "flex", marginTop: 0 }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  marginRight: 6,
                }}
              >
                <h4>Choose Time Range</h4>
                <FormControl fullWidth sx={{ marginTop: 1 }}>
                  <InputLabel id="demo-simple-select-label">
                    Time Range
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={timeRange}
                    label="Time Range"
                    onChange={(newValue) => {
                      setTimeRange(newValue.target.value);
                    }}
                  >
                    <MenuItem value={"custom"}>Custom Time Range</MenuItem>
                    <MenuItem value={"day"}>Past 3 days</MenuItem>
                    <MenuItem value={"minute"}>Past 3 minutes</MenuItem>
                    <MenuItem value={"second"}>Past 3 seconds</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              {timeRange === "custom" ? (
                <>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      marginRight: 6,
                    }}
                  >
                    <h4>Choose Start Time</h4>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={["DateTimePicker"]}>
                        <DateTimePicker
                          label="Start Time"
                          sx={{ width: "25%" }}
                          slotProps={{ textField: { required: true } }}
                          value={startTime}
                          onChange={(newValue) => {
                            setStartTime(newValue);
                          }}
                          format="YYYY-MM-DD HH:mm"
                        />
                      </DemoContainer>
                    </LocalizationProvider>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      marginRight: 0,
                    }}
                  >
                    <h4>Choose End Time</h4>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={["DateTimePicker"]}>
                        <DateTimePicker
                          label="End Time"
                          sx={{ width: "25%" }}
                          slotProps={{ textField: { required: true } }}
                          value={endTime}
                          onChange={(newValue) => {
                            setEndTime(newValue);
                          }}
                          format="YYYY-MM-DD HH:mm"
                        />
                      </DemoContainer>
                    </LocalizationProvider>
                  </Box>
                </>
              ) : (
                <></>
              )}
            </Box>
            <Box sx={{ marginTop: 3, textAlign: "left" }}>
              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={{
                  "&:hover": {
                    backgroundColor: "grey",
                  },
                }}
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Paper
              sx={{
                boxShadow: 10,
                borderRadius: 3,
                width: "100%",
                padding: 2,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <h3>Current Status</h3>
                <Box
                  sx={{
                    fontSize: 80,
                    fontWeight: 600,
                    color: "black",
                    display: "inline-flex",
                    justifyContent: "start",
                    marginBottom: 1,
                  }}
                >
                  ON
                </Box>
              </Box>
              <LightbulbIcon fontSize="large" />
            </Paper>
          </Grid>
          <Grid item xs={12} sx={{ marginTop: 6 }}>
            <Box sx={{ minHeight: 400 }}>
              <DataGrid
                autoHeight
                rows={rows}
                columns={columns}
                sx={{
                  "&.MuiDataGrid-root": {
                    borderRadius: 2,
                  },
                  "&.MuiDataGrid-root .MuiDataGrid-cell:focus-within": {
                    outline: "none",
                  },
                  "&.MuiDataGrid-root .MuiDataGrid-columnHeader:focus-within": {
                    outline: "none",
                  },
                  "&.MuiDataGrid-root .MuiDataGrid-columnHeader": {
                    backgroundColor: "#2b3035",
                    color: "white",
                    fontWeight: 700,
                  },
                  "&.MuiDataGrid-root .MuiDataGrid-columnSeparator": {
                    display: "none",
                  },
                  "&.MuiDataGrid-root .MuiDataGrid-sortIcon": {
                    color: "white",
                  },
                  "&.MuiDataGrid-root .MuiCircularProgress-root": {
                    color: "black",
                  },
                  "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                    color: "black",
                  },
                }}
                slots={{
                  toolbar: GridToolbar,
                }}
                slotProps={{
                  toolbar: {
                    showQuickFilter: true,
                    quickFilterProps: {
                      debounceMs: 500,
                      placeholder: "Search...",
                      sx: {
                        width: 300,
                        marginBottom: 1,
                      },
                    },
                  },
                }}
                disableColumnFilter
                disableColumnSelector
                pagination
                pageSizeOptions={[5, 10, 25, 50, 100]}
                initialState={{
                  pagination: {
                    paginationModel: {
                      pageSize: 25,
                    },
                  },
                }}
                getRowId={(row) => row.timestamp}
                disableRowSelectionOnClick
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
