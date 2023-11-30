import { Box, Divider, Grid, Paper } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import React from "react";
import MonitoringChart from "../../components/Chart/MonitoringChart";
export default function Page_Monitor_SoilMoisture() {
  // Test Data
  const rows = [
    { id: 1, value: 25.2, timestamp: "11/11/2023 12:00" },
    { id: 2, value: 25.2, timestamp: "11/11/2023 12:00" },
    { id: 3, value: 25.5, timestamp: "11/11/2023 12:00" },
    { id: 4, value: 25.6, timestamp: "11/11/2023 12:00" },
    { id: 5, value: 25.6, timestamp: "11/11/2023 12:00" },
    { id: 6, value: 25.6, timestamp: "11/11/2023 12:00" },
    { id: 7, value: 25.7, timestamp: "11/11/2023 12:00" },
    { id: 8, value: 25.7, timestamp: "11/11/2023 12:00" },
    { id: 9, value: 25.8, timestamp: "11/11/2023 12:00" },
    { id: 10, value: 26.0, timestamp: "11/11/2023 12:00" },
  ];

  const columns = [
    {
      field: "id",
      type: "number",
      headerName: "ID",
      width: 300,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "value",
      type: "number",
      headerName: "Value (%)",
      width: 400,
      headerAlign: "center",
      align: "center",
      // editable: true,
    },
    {
      field: "timestamp",
      type: "string",
      headerName: "Timestamp",
      width: 400,
      headerAlign: "center",
      align: "center",
      // editable: true,
      flex: 1,
    },
  ];

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
        Soil Moisture
      </Box>
      <Divider sx={{ borderColor: "lightgray" }}></Divider>
      <Box sx={{ marginTop: 2 }}>
        <Grid container spacing={4}>
          <Grid item xs={7}>
            <MonitoringChart uri="http://localhost:4000/soil-moisture/monitor" />
          </Grid>
          <Grid item xs={5}>
            <Paper
              sx={{
                boxShadow: 10,
                borderRadius: 3,
                height: "100%",
                width: "100%",
                padding: 2,
              }}
            >
              <h4>Current Value</h4>
            </Paper>
          </Grid>
          <Grid item xs={12} sx={{ marginTop: 10 }}>
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
                getRowId={(row) => row.id}
                disableRowSelectionOnClick
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
