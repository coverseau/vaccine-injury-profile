
import { Chart, ArcElement, BarController, BarElement, CategoryScale, Legend, LinearScale, PieController, Tooltip } from 'https://cdn.jsdelivr.net/npm/chart.js/+esm';
import ChartDataLabels from 'https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels/+esm';
import AutoColors from 'https://cdn.jsdelivr.net/npm/chartjs-plugin-autocolors/+esm';

import summaryData from './data.mjs';

document.addEventListener("DOMContentLoaded", async () => {
	const textColour = window.getComputedStyle(document.body).getPropertyValue('--bs-body-color');
	Chart.register([
		ArcElement,
		BarController,
		BarElement,
		CategoryScale,
		Legend,
		LinearScale,
		PieController,
		Tooltip
	]);
	Chart.defaults.plugins.legend.display = false;
	Chart.defaults.plugins.legend.labels.color = textColour;
	Chart.defaults.plugins.tooltip.enabled = false;
	Chart.defaults.plugins.datalabels.labels.value.color: textColour;
	drawStates('figure_states', summaryData.demographics.state);
});

function drawStates(id, states) {
	const container = document.getElementById(id);
	if (!!container) {
		const data = {
			labels: [],
			datasets: [{
				label: 'State',
				data: [],
				backgroundColor: []
			}]
		};
		Object.keys(states).forEach(state => {
			if (state != 'N') {
				data.labels.push(state);
				data.datasets[0].data.push(states[state]);
				switch (state) {
					case 'ACT':
						data.datasets[0].backgroundColor.push('#003da5');
						break;
					case 'NSW':
						data.datasets[0].backgroundColor.push('#9bcbeb');
						break;
					case 'NT':
						data.datasets[0].backgroundColor.push('#c25e03');
						break;
					case 'QLD':
						data.datasets[0].backgroundColor.push('#73182c');
						break;
					case 'SA':
						data.datasets[0].backgroundColor.push('#d50032');
						break;
					case 'TAS':
						data.datasets[0].backgroundColor.push('#006747');
						break;
					case 'VIC':
						data.datasets[0].backgroundColor.push('#003c71');
						break;
					case 'WA':
						data.datasets[0].backgroundColor.push('#ffd100');
						break;
				}
			}
		});
		new Chart(
			container,
			{
				type: 'bar',
				data: data,
				options: {
					plugins: {
						legend: {
							//display: true
						},
						datalabels: {
							formatter: (value, context) => {
								return context.chart.data.labels[context.dataIndex] + '\n' + ( context.(100.0 * Number(value)).toFixed(1) + '%' );
							}
						}
					}
				},
				plugins: [ ChartDataLabels ]
			}
		);
	}
}
