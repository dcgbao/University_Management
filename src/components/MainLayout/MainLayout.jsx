import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import { Box, Container } from '@mui/material'
import Header from '../Header/Header'

export default function MainLayout() {
    return (
        <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Header />
            <Container sx={{ paddingTop: 5 }}>
                <Outlet />
            </Container>
            {/* <Footer /> */}
        </Box>
    )
}
