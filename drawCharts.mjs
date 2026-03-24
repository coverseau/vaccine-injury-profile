
import { Chart, ArcElement, BarController, BarElement, CategoryScale, Legend, LinearScale, PieController, Tooltip } from 'https://cdn.jsdelivr.net/npm/chart.js/+esm';
import AutoColors from 'https://cdn.jsdelivr.net/npm/chartjs-plugin-autocolors/+esm';

import summaryData from './data.mjs';

const textColour = window.getComputedStyle(document.body).getPropertyValue('--bs-body-color');
const elementColour = 'rgba(' + window.getComputedStyle(document.body).getPropertyValue('--bs-body-color-rgb') + ',0.1)';
const coverseColour = window.getComputedStyle(document.body).getPropertyValue('--coverse-ochre');


document.addEventListener("DOMContentLoaded", async () => {
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
	Chart.defaults.color = textColour;
	Chart.defaults.backgroundColor = elementColour;
	Chart.defaults.borderColor = elementColour;
	Chart.defaults.plugins.legend.display = false;
	Chart.defaults.plugins.tooltip.enabled = false;
	
	drawAges('draw_figure_ages', summaryData.demographics.age);
	drawStates('draw_figure_states', 'draw_table_states', summaryData.demographics.state);
	drawBrands('draw_figure_brands', summaryData.doses);
});

function drawAges(figureID, ages) {
	const figureContainer = document.getElementById(figureID);
	if (!!figureContainer) {
		const data = {
			labels: [],
			datasets: [{
				label: 'Age',
				yAxisID: 'percentage',
				data: [],
				backgroundColor: coverseColour
			}]
		};
		Object.keys(ages).forEach(age => {
			if (age != 'N') {
				data.labels.push(age);
				data.datasets[0].data.push(ages[age]);
			}
		});
		new Chart(
			figureContainer,
			{
				type: 'bar',
				data: data,
				options: {
					plugins: {
						tooltip: {
							enabled: true
						}
					},
					scales: {
						percentage: {
							type: 'linear',
							axis: 'y',
							beginAtZero: true,
							ticks: {
								stepSize: 10,
								callback: function(value, index, ticks) {
										return value + '%';
								}
							}
						}
					}
				}
			}
		);
	}
}

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
				row.appendChild(rowState);
				const rowPercentage = document.createElement('td');
				rowPercentage.className = 'text-end';
				rowPercentage.appendChild(document.createTextNode(states[state] + '%'));
				row.appendChild(rowPercentage);
				tableContainer.appendChild(row);
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
									return context.label + ': ' + context.raw + '%';
								}
							}
						}
					}
				}
			}
		);
	}
}

function drawBrands(figureID, doses) {
	const figureContainer = document.getElementById(figureID);
	if (!!figureContainer) {
		const brands = [];
		const doseNs = [];
		Object.keys(doses).forEach(dose => {
			if (dose != 'N') {
				doseNs.push(Number(dose.slice(4)));
				Object.keys(doses[dose].product).forEach(brand => {
					if (brand != 'N' && !brands.includes(brand)) {
						brands.push(brand);
					}
				});
			}
		});
		console.log(brands);
		console.log(doses);
		const data = {
			labels: [],
			datasets: []
		};
		doseNs.forEach(dose => {
			let postfix = 'th';
			switch (dose) {
				case 1:
					postfix = 'st';
					break;
				case 2:
					postfix = 'nd';
					break;
				case 3:
					postfix = 'rd';
					break;
			}
			data.labels.push(dose + postfix + ' dose');
		});
		brands.forEach(brand => {
			const dataset = {
				label: brand,
				yAxisID: 'percentage',
				data: []
			};
			doseNs.forEach(dose => {
				dataset.data.push(doses['dose' + dose].product[brand]);
			});
			data.datasets.push(dataset);
		});
		console.log(data);
		
	/*
		new Chart(
			figureContainer,
			{
				type: 'bar',
				data: data,
				options: {
					plugins: {
						tooltip: {
							enabled: true
						}
					},
					scales: {
						percentage: {
							type: 'linear',
							axis: 'y',
							beginAtZero: true,
							ticks: {
								stepSize: 10,
								callback: function(value, index, ticks) {
										return value + '%';
								}
							}
						}
					}
				}
			}
		);*/
	}
}
