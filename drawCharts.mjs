
import { Chart, ArcElement, Colors, Legend, PieController, Tooltip } from 'https://cdn.jsdelivr.net/npm/chart.js/+esm';
import ChartDataLabels from 'https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels/+esm';
import summaryData from './data.mjs';

document.addEventListener("DOMContentLoaded", async () => {
	Chart.register([
		ArcElement,
		ChartDataLabels,
		Colors,
		Legend,
		PieController,
		Tooltip
	]);
	Chart.options.tooltops.enabled = true;
	drawStates('figure_states', summaryData.demographics.state);
});

function drawStates(id, states) {
	const container = document.getElementById(id);
	if (!!container) {
		const data = {
			labels: [],
			datasets: [{
				label: 'State',
				data: []
			}]
		};
		Object.keys(states).forEach(state => {
			if (state != 'N') {
				data.labels.push(state);
				(data.datasets)[0].data.push(states[state]);
			}
		});
		new Chart(
			container,
			{
				type: 'pie',
				data: data,
				options: {
					plugins: {
						datalabels: {
							formatter: (value, ctx) => {
								return (100.0 * value).toFixed(1) + '%';
							}
						}
					}
				}
			}
		);
	}
}
