
import { Chart, ArcElement, Legend, PieController, Tooltip } from 'https://cdn.jsdelivr.net/npm/chart.js/+esm';
import summaryData from './data.mjs';

document.addEventListener("DOMContentLoaded", async () => {
	Chart.register([
		ArcElement,
		Legend,
		PieController,
		Tooltip
	]);
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
		window.alert(JSON.stringify(data));
		new Chart(
			container,
			{
				type: 'pie',
				data: data
			}
		);
	}
}
