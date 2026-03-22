
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
	
	drawStates('draw_figure_states', 'draw_table_states', summaryData.demographics.state);
});

function drawStates(figureID, tableID, states) {
	const figureContainer = document.getElementById(figureID);
	const tableContainer = document.getElementById(tableID);
	if (!!figureContainer && !!tableContainer) {
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
				const row = document.createElement('tr');
				const rowState = document.createElement('th');
				rowState.setAttribute('scope', 'row');
				rowState.appendChild(document.createTextNode(state));
				const rowPercentage = document.createElement('td');
				rowState.appendChild(document.createTextNode(( 100.0 * states[state] ).toFixed(1) + '%'));
				row.appendChild(rowState);
				row.appendChild(rowPercentage);
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
			figureContainer,
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
								title: (context) => {
									return null;
								},
								label: (context) => {
									return context.label + ': ' + ( 100.0 * context.raw ).toFixed(1) + '%';
								}
							}
						}
					}
				}
			}
		);
	}
}
