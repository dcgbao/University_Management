import React from 'react';
import { Box, Grid, Paper } from '@mui/material';

export default function DeviceStatus(props) {
	return (
		<Grid item xs={props.xs || 12} sx={props.sx}>
			<Paper
				sx={{
					boxShadow: 10,
					borderRadius: 3,
					height: '100%',
					width: '100%',
					padding: 2,
					display: 'flex',
					justifyContent: 'space-between',
				}}
			>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
					}}
				>
					<h1>{props.data.title}</h1>
					<h4>Current status: {props.data.value}</h4>
				</Box>
				{props.iconComponent}
			</Paper>
		</Grid>
	);
}
