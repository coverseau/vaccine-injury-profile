
import chartJs from 'https://cdn.jsdelivr.net/npm/chart.js@4.5.1/+esm';
import summaryData from './data.mjs';

document.addEventListener("DOMContentLoaded", async () => {
	drawStates('figure_states', summaryData.demographics.state);
});

function drawStates(id, states) {
	const container = document.GetElementById(id);
	if (!!container) {
		const data = {
			labels: [ ],
			datasets: [{
				label: 'State',
				data: []
			}];
		};
		Object.keys(states).forEach(state => {
			data.labels.push(state);
			data.datasets.data.push(100.0 * states[state]);
		});
		new Chart(
			container,
			{ type: 'pie', data: sate }
		);
	}
}
