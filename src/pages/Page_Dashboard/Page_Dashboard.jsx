import React, { useState } from 'react';
import { Box, Divider, Grid, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import SpaIcon from '@mui/icons-material/Spa';
import RealTimeChart from '../../components/Chart/RealTimeChart';
export default function Page_Dashboard() {
	const [value, setValue] = useState('1');

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<>
			<Box
				sx={{
					fontSize: 50,
					fontWeight: 600,
					color: 'black',
					display: 'inline-flex',
					justifyContent: 'start',
				}}
			>
				Dashboard
			</Box>
			<Grid container spacing={4}>
				<Grid item xs={7}>
					<TabContext value={value}>
						<Box>
							<TabList
								aria-label='Tabs menu'
								onChange={handleChange}
								textColor='primary'
								indicatorColor='primary'
								sx={{
									'& .MuiTabs-indicator': {
										backgroundColor: 'black',
									},
								}}
							>
								<Tab
									label='Temperature'
									value='1'
									sx={{
										textTransform: 'none',
										fontSize: 22,
										marginRight: 1,
										fontWeight: 600,
										color: 'rgba(0, 0, 0, 0.85)',
										'&:hover': {
											color: 'rgba(190, 190, 190, 0.85)',
										},
										'&.Mui-selected': {
											color: 'black',
										},
									}}
									icon={<DeviceThermostatIcon />}
									iconPosition='start'
								/>
								<Tab
									label='Humidity'
									value='2'
									sx={{
										textTransform: 'none',
										fontSize: 22,
										marginRight: 1,
										fontWeight: 600,
										color: 'rgba(0, 0, 0, 0.85)',
										'&:hover': {
											color: 'rgba(190, 190, 190, 0.85)',
										},
										'&.Mui-selected': {
											color: 'black',
										},
									}}
									icon={<WaterDropIcon />}
									iconPosition='start'
								/>
								<Tab
									label='Soil Moisture'
									value='3'
									sx={{
										textTransform: 'none',
										fontSize: 22,
										marginRight: 1,
										fontWeight: 600,
										color: 'rgba(0, 0, 0, 0.85)',
										'&:hover': {
											color: 'rgba(190, 190, 190, 0.85)',
										},
										'&.Mui-selected': {
											color: 'black',
										},
									}}
									icon={<SpaIcon />}
									iconPosition='start'
								/>
							</TabList>
							<Divider
								sx={{ borderColor: 'lightgray' }}
							></Divider>
						</Box>

						<TabPanel value='1'>
							<RealTimeChart
								uri='https://d922-2a09-bac1-7ae0-10-00-246-1a.ngrok-free.app/measurements/temperature/sse'
								label='temperature'
							/>
						</TabPanel>
						<TabPanel value='2'>
							<RealTimeChart
								uri='https://d922-2a09-bac1-7ae0-10-00-246-1a.ngrok-free.app/measurements/humidity/sse'
								label='humidity'
							/>
						</TabPanel>
						<TabPanel value='3'>
							<RealTimeChart
								uri='https://d922-2a09-bac1-7ae0-10-00-246-1a.ngrok-free.app/measurements/moisture/sse'
								label='Moisture'
							/>
						</TabPanel>
					</TabContext>
				</Grid>

				<Grid item xs={5}>
					<Grid item xs={12}>
						Bulb status
					</Grid>
					<Grid item xs={12}>
						Door status
					</Grid>
					<Grid item xs={12}>
						Pumper status
					</Grid>
				</Grid>
			</Grid>
		</>
	);
}
