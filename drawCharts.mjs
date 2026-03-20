
import { Chart, ArcElement, Legend, PieController, Tooltip } from 'https://cdn.jsdelivr.net/npm/chart.js/+esm';
import DataLabels from 'https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels/+esm';
import AutoColors from 'https://cdn.jsdelivr.net/npm/chartjs-plugin-autocolors/+esm';

import summaryData from './data.mjs';

document.addEventListener("DOMContentLoaded", async () => {
	Chart.register([
		ArcElement,
		AutoColors,
		DataLabels,
		Legend,
		PieController,
		Tooltip
	]);
	Chart.defaults.plugins.autocolors.enabled = true;
	Chart.defaults.plugins.legend.display = true;
	Chart.defaults.plugins.tooltip.enabled = true;
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
						autocolors: {
							mode: 'data'
						}/*,
						datalabels: {
							formatter: (value, context) => {
								return (100.0 * value).toFixed(1) + '%';
							}
						}*/
					}
				}
			}
		);
	}
}
