import 'chartjs-adapter-luxon';
import { Line } from 'react-chartjs-2';
import zoomPlugin from 'chartjs-plugin-zoom';
import 'chartjs-adapter-date-fns';
import {
	TimeScale,
	Chart,
	Legend,
	LinearScale,
	LineElement,
	PointElement,
	Tooltip,
} from 'chart.js';
import useFetch from '../../hooks/useFetch';
Chart.register(
	zoomPlugin,
	LineElement,
	TimeScale,
	LinearScale,
	PointElement,
	Tooltip,
	Legend
);

/**
 *
 * @param uri:string the api to fetch data
 * @returns {React.JSX.Element}
 */
function MonitoringChart({ uri }) {
	const { loading, response, error } = useFetch(uri);
	if (loading) return <div>loading....</div>;
	if (error || response?.status === 'fail') return <div>Fail to load</div>;
	if (response) {
		const series = {
			data: response.data.map((datum) => parseFloat(datum.value)),
			backgroundColor: 'rgba(255, 99, 132, 0.5)',
			borderColor: 'rgb(255, 99, 132)',
			borderDash: [8, 4],
			label: response.measurement,
		};
		console.log(`Series: ${JSON.stringify(series)}`);
		return (
			<Line
				data={{
					labels: response.data.map((datum) =>
						parseInt(datum.timestamp)
					),
					datasets: [series],
				}}
				options={{
					scales: {
						x: {
							type: 'time',
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
export default MonitoringChart;
