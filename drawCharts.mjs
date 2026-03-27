
import { Chart, ArcElement, BarController, BarElement, CategoryScale, Legend, LinearScale, PieController, Tooltip } from 'https://cdn.jsdelivr.net/npm/chart.js/+esm';
import AutoColors from 'https://cdn.jsdelivr.net/npm/chartjs-plugin-autocolors/+esm';

import summaryData from './data.mjs';

const textColour = window.getComputedStyle(document.body).getPropertyValue('--bs-body-color');
const elementColour = 'rgba(' + window.getComputedStyle(document.body).getPropertyValue('--bs-body-color-rgb') + ',0.1)';

const coverseColour = window.getComputedStyle(document.body).getPropertyValue('--coverse-ochre');
const coverseRed = window.getComputedStyle(document.body).getPropertyValue('--coverse-red');
const coverseYellow = window.getComputedStyle(document.body).getPropertyValue('--coverse-yellow');
const coverseLightBlue = window.getComputedStyle(document.body).getPropertyValue('--coverse-light-blue');
const coverseGreen = window.getComputedStyle(document.body).getPropertyValue('--coverse-green');
const colourGray = '#c9cbcf';

document.addEventListener("DOMContentLoaded", async () => {
	Chart.register([
		ArcElement,
		AutoColors,
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
	Chart.defaults.plugins.autocolors.enabled = false;
	Chart.defaults.plugins.legend.display = false;
	Chart.defaults.plugins.tooltip.enabled = false;
	
	drawAges('draw_figure_ages', summaryData.demographics.age);
	drawStates('draw_figure_states', 'draw_table_states', summaryData.demographics.state);
	drawBrands('draw_figure_brands', summaryData.doses);
	drawDates('draw_figure_dates', summaryData.doses);
	drawOnset('draw_figure_onset', summaryData.doses);
	drawSymptoms('draw_figure_symptoms', summaryData.symptoms.severity);
	drawImprovement('draw_figure_improvement', summaryData.improvement.month);
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
				const rowState = document.createElement('td');
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
				case 5:
					postfix += '+';
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
			switch (brand.toLowerCase()) {
				case 'pfizer':
					dataset.backgroundColor = '#2b01be';
					break;
				case 'moderna':
					dataset.backgroundColor = '#e51937';
					break;
				case 'astrazeneca':
					dataset.backgroundColor = '#efab00';
					break;
				case 'novavax':
					dataset.backgroundColor = '#172959';
					break;
				case 'other':
					dataset.backgroundColor = colourGray;
					break;
			}
			doseNs.forEach(dose => {
				dataset.data.push(doses['dose' + dose].product[brand]);
			});
			data.datasets.push(dataset);
		});
		
		new Chart(
			figureContainer,
			{
				type: 'bar',
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
									return context.label;
								},
								label: (context) => {
									return context.dataset.label + ': ' + context.raw + '%';
								}
							}
						}
					},
					scales: {
						x: {
							stacked: true
						},
						percentage: {
							type: 'linear',
							axis: 'y',
							stacked: true,
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

function drawDates(figureID, doses) {
	const figureContainer = document.getElementById(figureID);
	if (!!figureContainer) {
		const dates = [];
		Object.keys(doses).forEach(dose => {
			if (dose != 'N') {
				Object.keys(doses[dose].date).forEach(d => {
					if (d != 'N' && !dates.includes(d)) {
						dates.push(d);
					}
				});
			}
		});
		const data = {
			labels: dates,
			datasets: []
		};
		Object.keys(doses).forEach(dose => {
			const dN = Number(dose.slice(4));
			let postfix = 'th';
			switch (dN) {
				case 1:
					postfix = 'st';
					break;
				case 2:
					postfix = 'nd';
					break;
				case 3:
					postfix = 'rd';
					break;
				case 5:
					postfix += '+';
					break;
			}
			const dataset = {
				label: dN + postfix + ' dose',
				yAxisID: 'percentage',
				data: []
			};
			Object.keys(doses[dose].date).forEach(d => {
				if (d != 'N') {
					dataset.data.push(doses[dose].date[d]);
				}
			});
			data.datasets.push(dataset);
		});
		
		new Chart(
			figureContainer,
			{
				type: 'bar',
				data: data,
				options: {
					plugins: {
						autocolors: {
							enabled: true
						},
						legend: {
							display: true
						},
						tooltip: {
							enabled: true,
							callbacks: {
								label: (context) => {
									return context.dataset.label + ': ' + context.raw + '%';
								}
							}
						}
					},
					scales: {
						x: {
							stacked: true,
							ticks: {
								minRotation: 90,
								maxRotation: 90
							}
						},
						percentage: {
							type: 'linear',
							axis: 'y',
							beginAtZero: true,
							stacked: true,
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

function drawOnset(figureID, doses) {
	const figureContainer = document.getElementById(figureID);
	if (!!figureContainer) {
		const times = [];
		Object.keys(doses).forEach(dose => {
			if (dose != 'N') {
				Object.keys(doses[dose].onset).forEach(time => {
					if (time != 'N' && !times.includes(time)) {
						times.push(time);
					}
				});
			}
		});
		const data = {
			labels: times,
			datasets: []
		};
		Object.keys(doses).forEach(dose => {
			const dN = Number(dose.slice(4));
			let postfix = 'th';
			switch (dN) {
				case 1:
					postfix = 'st';
					break;
				case 2:
					postfix = 'nd';
					break;
				case 3:
					postfix = 'rd';
					break;
				case 5:
					postfix += '+';
					break;
			}
			const dataset = {
				label: dN + postfix + ' dose',
				yAxisID: 'percentage',
				data: []
			};
			Object.keys(doses[dose].onset).forEach(time => {
				if (time != 'N') {
					dataset.data.push(doses[dose].onset[time]);
				}
			});
			data.datasets.push(dataset);
		});
		
		new Chart(
			figureContainer,
			{
				type: 'bar',
				data: data,
				options: {
					plugins: {
						autocolors: {
							enabled: true
						},
						legend: {
							display: true
						},
						tooltip: {
							enabled: true,
							callbacks: {
								label: (context) => {
									return context.dataset.label + ': ' + context.raw + '%';
								}
							}
						}
					},
					scales: {
						x: {
							stacked: true,
							ticks: {
								minRotation: 90,
								maxRotation: 90
							}
						},
						percentage: {
							type: 'linear',
							axis: 'y',
							beginAtZero: true,
							stacked: true,
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

function drawSymptoms(figureID, symptomSeverities) {
	const figureContainer = document.getElementById(figureID);
	figureContainer.style.height = '120rem';
	figureContainer.style.width = 'calc(100% - 3rem)';
	if (!!figureContainer) {
		const symptoms = [];
		const severities = [];
		Object.keys(symptomSeverities).forEach(symptom => {
			if (symptom != 'N') {
				symptoms.push(symptom);
				Object.keys(symptomSeverities[symptom]).forEach(severity => {
					if (severity != 'N' && !severities.includes(severity)) {
						severities.push(severity);
					}
				});
			}
		});
		if (severities.length) {
			const s = [...severities];
			for (let i=0; i<s.length; i++) {
				if (s[i] == "N/A") {
					severities[severities.length - 1] = s[i];
				} else {
					severities[i] = s[s.length - 2 - i];
				}
			}
		}
		
		const data = {
			labels: [],
			datasets: []
		};
		symptoms.forEach(symptom => {
			if (symptom == "resurgence of latent disease (e.g. shingles, EBV, cancer, autoimmune disease, etc.)") {
				const symptomArray = [ "resurgence of latent disease (e.g. shingles,", "EBV, cancer, autoimmune disease, etc.)" ];
				data.labels.push(symptomArray);
			} else {
				data.labels.push(symptom);
			}
		});
		severities.forEach(severity => {
			const dataset = {
				label: severity,
				axis: 'x',
				//xAxisID: 'percentage',
				data: []
			};
			switch (severity) {
				   case "severe":
					   dataset.backgroundColor = coverseRed;
					   break;
				   case "moderately severe":
					   dataset.backgroundColor = coverseColour;
					   break;
				   case "moderate":
					   dataset.backgroundColor = coverseYellow;
					   break;
				   case "mild":
					   dataset.backgroundColor = coverseLightBlue;
					   break;
				   case "minimal":
					   dataset.backgroundColor = coverseGreen;
					   break;
				   case "N/A":
					   dataset.backgroundColor = colourGray;
					   break;
			   }
			symptoms.forEach(symptom => {
				dataset.data.push(symptomSeverities[symptom][severity]);
			});
			data.datasets.push(dataset);
		});
		
		console.log(data);
		
		new Chart(
			figureContainer,
			{
				type: 'bar',
				data: data,
				options: {
					indexAxis: 'y',
					plugins: {
						legend: {
							display: true
						},
						tooltip: {
							enabled: true,
							callbacks: {
								title: (context) => {
									return context.label;
								},
								label: (context) => {
									return context.dataset.label + ': ' + context.raw + '%';
								}
							}
						}
					},
					scales: {
						x: {
							stacked: true,
							ticks: {
								stepSize: 10,
								callback: function(value, index, ticks) {
										return value + '%';
								}
							}
						},
						y: {
							stacked: true,
							ticks: {
								display: true,
								autoSkip: false
							}
						}
					}
				}
			}
		);
	}
}

function drawImprovement(figureID, months) {
	const figureContainer = document.getElementById(figureID);
	if (!!figureContainer) {
		const data = {
			labels: [...Array(months.length).keys()],
			datasets: [{
				label: 'Month',
				yAxisID: 'percentage',
				data: months,
				backgroundColor: coverseColour
			}]
		};
		new Chart(
			figureContainer,
			{
				type: 'bar',
				data: data,
				options: {
					plugins: {
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
