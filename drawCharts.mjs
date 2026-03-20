
import { Chart, ArcElement, Legend, PieController, Tooltip } from 'https://cdn.jsdelivr.net/npm/chart.js/+esm';
import AutoColors from 'https://cdn.jsdelivr.net/npm/chartjs-plugin-autocolors/+esm';

import summaryData from './data.mjs';

const textColour = window.getComputedStyle(document.body).getPropertyValue('--bs-body-color');

document.addEventListener("DOMContentLoaded", async () => {
	Chart.register([
		ArcElement,
		Legend,
		PieController,
		Tooltip
	]);
	Chart.defaults.plugins.legend.display = false;
	Chart.defaults.plugins.legend.labels.color = textColour;
	Chart.defaults.plugins.tooltip.enabled = false;
	
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
				type: 'pie',
				data: data,
				options: {
					plugins: {
						legend: {
							display: true
						},
						tooltip: {
							enabled: true,
							callbacks: {
								title: () => { return 'WHAAA' + this.title; }
							}
						}
					}
				}
			}
		);
	}
}
