
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
				data: [],
				backgroundColor: []
			}]
		};
		Object.keys(states).forEach(state => {
			if (state != 'N') {
				data.labels.push(state);
				(data.datasets)[0].data.push(states[state]);
				switch (state) {
					case 'ACT':
						(data.datasets)[0].backgroundColor.push('#003dA5');
						break;
					case 'NSW':
						(data.datasets)[0].backgroundColor.push('#9bcbeb');
						break;
					case 'NT':
						(data.datasets)[0].backgroundColor.push('#c25e03');
						break;
					case 'QLD':
						(data.datasets)[0].backgroundColor.push('#73182c');
						break;
					case 'SA':
						(data.datasets)[0].backgroundColor.push('#d50032');
						break;
					case 'TAS':
						(data.datasets)[0].backgroundColor.push('#006747');
						break;
					case 'VIC':
						(data.datasets)[0].backgroundColor.push('#003c71');
						break;
					case 'WA':
						(data.datasets)[0].backgroundColor.push('#ffd100');
						break;
				}
			}
		});
		new Chart(
			container,
			{
				type: 'pie',
				data: data,
				options: {
					plugins: {
						legend: {
							display: true
						},
						datalabels: {
							display: true,
							formatter: (value) => ( (100.0 * value) + '%' )
						}
					}
				}
			}
		);
	}
}
