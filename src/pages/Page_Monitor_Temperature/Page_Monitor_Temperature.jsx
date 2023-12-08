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
const env = import.meta.env;
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import axios from "axios";

export default function Page_Monitor_Temperature() {
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [timeRange, setTimeRange] = useState(null);

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
    { timestamp: "11/11/2023 12:01", value: 25.2 },
    { timestamp: "11/11/2023 12:02", value: 25 },
    { timestamp: "11/11/2023 12:03", value: 25.5 },
    { timestamp: "11/11/2023 12:04", value: 25.6 },
    { timestamp: "11/11/2023 12:05", value: 25.6 },
    { timestamp: "11/11/2023 12:06", value: 25.6 },
    { timestamp: "11/11/2023 12:07", value: 25 },
    { timestamp: "11/11/2023 12:08", value: 25.7 },
    { timestamp: "11/11/2023 12:09", value: 25.8 },
    { timestamp: "11/11/2023 12:10", value: 26.0 },
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
      field: "value",
      type: "number",
      headerName: "Value (\u00B0C)",
      width: 400,
      headerAlign: "center",
      align: "center",
      // editable: true,
      flex: 1,
    },
  ];

  console.log("Time Range: ", timeRange);

  return (
    <>
      <Box
        sx={{
          fontSize: 50,
          fontWeight: 600,
          color: "black",
          display: "inline-flex",
          justifyContent: "start",
          marginBottom: 1,
        }}
      >
        Temperature
      </Box>
      <Divider sx={{ borderColor: "lightgray" }}></Divider>
      <Box sx={{ marginTop: 2 }}>
        <Grid container spacing={5}>
          <Grid item xs={9}>
            <div>
              <MonitoringChart
                uri={`${env.VITE_API_BASE_URL}/measurements/temperature`}
              ></MonitoringChart>
            </div>
            <Box sx={{ display: "flex", marginTop: 3 }}>
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
            {/* <Paper
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
                <h3>Current Value</h3>
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
                  {25} {"\u00B0C"}
                </Box>
              </Box>
              <DeviceThermostatIcon fontSize="large" />
            </Paper> */}
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
