import React, { useEffect, useRef, useState } from 'react';
import 'chartjs-adapter-luxon';
import StreamingPlugin from 'chartjs-plugin-streaming';
import { Line } from 'react-chartjs-2';
import zoomPlugin from 'chartjs-plugin-zoom';
import useSSE from '../../hooks/useSSE';
import {
	TimeScale,
	Chart,
	Legend,
	LinearScale,
	LineElement,
	PointElement,
	Tooltip,
} from 'chart.js';

Chart.register(
	zoomPlugin,
	LineElement,
	TimeScale,
	LinearScale,
	PointElement,
	Tooltip,
	Legend,
	StreamingPlugin
);

function RealTimeChart({ uri, label }) {
	const chartRef = useRef(null);
	const onMessage = (event) => {
		if (event.data.length === 0) return;
		const eventData = JSON.parse(event.data);
		if (chartRef) {
			chartRef.current.data.datasets[0].data.push({
				x: parseInt(eventData.timestamp),
				y: parseFloat(eventData.data),
			});
		}
	};
	if (!useSSE(uri, onMessage)) {
		return <div>Cannot fetch real-time data</div>;
	} else {
		return (
			<Line
				ref={chartRef}
				data={{
					datasets: [
						{
							data: [],
							backgroundColor: 'rgba(255, 99, 132, 0.5)',
							borderColor: 'rgb(255, 99, 132)',
							borderDash: [8, 4],
							label,
						},
					],
				}}
				options={{
					scales: {
						x: {
							type: 'realtime',
						},
					},
					plugins: {
						zoom: {
							pan: {
								enabled: true,
								mode: 'x',
							},
							zoom: {
								wheel: {
									enabled: true,
								},
								mode: 'x',
							},
						},
					},
				}}
			/>
		);
	}
}

export default RealTimeChart;
