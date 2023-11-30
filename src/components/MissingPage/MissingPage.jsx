import { Box, Typography } from '@mui/material'
import React from 'react'

export default function MissingPage() {
  return (
    <Box
      sx={{
        height: "75vh",
        width: "100%",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Typography variant='h1'
        sx={{
          fontSize: "40px",
          margin: "0px",
          color: "black",
        }}
      >
        Opps! Page Not Found
      </Typography>

      <Box
        sx={{
          margin: "30px auto",
          fontSize: "126px",
          lineHeight: "126px",
          borderRadius: "30px",
          fontWeight: 600
        }}
      >
        404
      </Box>

      <Typography variant="h5"
        sx={{
          marginTop: '10px',
          fontSize: "25px",
          textAlign: 'center',
          width: '35%',
        }}
      >
        We are sorry, but the page you requested was not found
      </Typography>
    </Box>
  )
}
