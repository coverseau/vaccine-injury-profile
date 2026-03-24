
const summaryData = {
	demographics: {
		N: 594,
		required: 525,
		sex: {
			N: 594,
			female: 386,
			male: 208,
		},
		age: {
			N: 535,
			'10-19': 1.31,
			'20-29': 5.23,
			'30-39': 17.2,
			'40-49': 23.2,
			'50-59': 26.7,
			'60-69': 17.4,
			'70-79': 7.29,
			'80-89': 1.68,
		},
		state: {
			N: 594,
			ACT: 3.03,
			NSW: 28.6,
			NT: 1.18,
			QLD: 20.4,
			SA: 7.58,
			TAS: 2.02,
			VIC: 2.61,
			WA: 11.1
		}
	},
	doses: {
		dose1: {
			N: 594,
			product: {
				N: 593,
				Pfizer: 66.7,
				Moderna: 4.71,
				AstraZeneca: 27.6,
				Novavax: 0.842,
				other: 0.0
			},
			date: {
				N: 468,
				'January-March 2021': 3.03,
				'April-June 2021': 17.3,
				'July-September 2021': 33.7,
				'October-December 2021': 19.5,
				'January-March 2022': 2.19,
				'April-June 2022': 0.505,
				'July-September 2022': 1.68,
				'October-December 2022': 0.505,
				'January-March 2023': 0.0,
				'April-June 2023': 0.168,
				'July-September 2023': 0.0,
				'October-December 2023': 0.0,
				'January-March 2024': 0.0,
				'April-June 2024': 0.0,
				'July-September 2024': 0.0,
				'October-December 2024': 0.168
			}
			onset: {
				N: 354,
				"0-5 minutes": 3.70,
				"6-30 minutes": 4.04,
				"31-59 minutes": 0.673,
				"1-12 hours": 16.16,
				"13-23 hours": 2.36,
				"1-7 days": 23.9,
				"8-14 days": 5.72,
				"15-30 days": 1.68,
				"1-3 months": 1.18,
				"4-12 months": 0.168,
				"more than 1 year": 0.0
			}
		},
		dose2: {
			N: 505,
			product: {
				N: 496,
				Pfizer: 54.4,
				Moderna: 3.54,
				AstraZeneca: 20.5,
				Novavax: 1.52,
				other: 0.168
			},
			date: {
				N: 381,
				'January-March 2021': 0.505,
				'April-June 2021': 5.22,
				'July-September 2021': 29.3,
				'October-December 2021': 21.7,
				'January-March 2022': 4.55,
				'April-June 2022': 1.01,
				'July-September 2022': 0.673,
				'October-December 2022': 0.673,
				'January-March 2023': 0.168,
				'April-June 2023': 0.0,
				'July-September 2023': 0.0,
				'October-December 2023': 0.168,
				'January-March 2024': 0.0,
				'April-June 2024': 0.0,
				'July-September 2024': 0.0,
				'October-December 2024': 0.168
			}
			onset: {
				N: 331,
				"0-5 minutes": 2.02,
				"6-30 minutes": 2.69,
				"31-59 minutes": 0.842,
				"1-12 hours": 12.29,
				"13-23 hours": 3.20,
				"1-7 days": 23.6,
				"8-14 days": 4.21,
				"15-30 days": 1.85,
				"1-3 months": 3.70,
				"4-12 months": 1.01,
				"more than 1 year": 0.337
			}
		},
		dose3: {
			N: 273,
			product: {
				N: 237,
				Pfizer: 26.6,
				Moderna: 9.26,
				AstraZeneca: 1.35,
				Novavax: 2.53,
				other: 0.168
			},
			date: {
				N: 185,
				'January-March 2021': 0.0,
				'April-June 2021': 0.0,
				'July-September 2021': 0.0,
				'October-December 2021': 7.74,
				'January-March 2022': 19.0,
				'April-June 2022': 1.85,
				'July-September 2022': 1.52,
				'October-December 2022': 0.505,
				'January-March 2023': 0.168,
				'April-June 2023': 0.0,
				'July-September 2023': 0.0,
				'October-December 2023': 0.0,
				'January-March 2024': 0.168,
				'April-June 2024': 0.0,
				'July-September 2024': 0.0,
				'October-December 2024': 0.168
			}
			onset: {
				N: 156,
				"0-5 minutes": 1.52,
				"6-30 minutes": 1.35,
				"31-59 minutes": 0.337,
				"1-12 hours": 6.23,
				"13-23 hours": 1.68,
				"1-7 days": 9.09,
				"8-14 days": 2.02,
				"15-30 days": 1.35,
				"1-3 months": 2.36,
				"4-12 months": 0.168,
				"more than 1 year": 0.168
			}
		},
		dose4: {
			N: 117,
			product: {
				N: 73,
				Pfizer: 7.2,
				Moderna: 3.2,
				AstraZeneca: 0.34,
				Novavax: 1.2,
				other: 0.34
			},
			date: {
				N: 53,
				'January-March 2021': 0.0,
				'April-June 2021': 0.0,
				'July-September 2021': 0.0,
				'October-December 2021': 0.0,
				'January-March 2022': 0.17,
				'April-June 2022': 2.69,
				'July-September 2022': 4.55,
				'October-December 2022': 0.84,
				'January-March 2023': 0.0,
				'April-June 2023': 0.34,
				'July-September 2023': 0.17,
				'October-December 2023': 0.17,
				'January-March 2024': 0.0,
				'April-June 2024': 0.0,
				'July-September 2024': 0.0,
				'October-December 2024': 0.0
			}
			onset: {
				N: 35,
				"0-5 minutes": 0.0,
				"6-30 minutes": 0.51,
				"31-59 minutes": 0.0,
				"1-12 hours": 1.0,
				"13-23 hours": 0.67,
				"1-7 days": 2.53,
				"8-14 days": 0.0,
				"15-30 days": 0.34,
				"1-3 months": 0.67,
				"4-12 months": 0.17,
				"more than 1 year": 0.0
			}
		},
		dose5: {
			N: 41,
			product: {
				N: 10,
				Pfizer: 0.84,
				Moderna: 0.67,
				AstraZeneca: 0.0,
				Novavax: 0.17,
				other: 0.0
			},
			date: {
				N: 9,
				'January-March 2021': 0.0,
				'April-June 2021': 0.0,
				'July-September 2021': 0.0,
				'October-December 2021': 0.0,
				'January-March 2022': 0.0,
				'April-June 2022': 0.0,
				'July-September 2022': 0.0,
				'October-December 2022': 0.0,
				'January-March 2023': 0.5,
				'April-June 2023': 0.8,
				'July-September 2023': 0.0,
				'October-December 2023': 0.0,
				'January-March 2024': 0.0,
				'April-June 2024': 0.2,
				'July-September 2024': 0.0,
				'October-December 2024': 0.0
			}
			onset: {
				N: 4,
				"0-5 minutes": 0.0,
				"6-30 minutes": 0.0,
				"31-59 minutes": 0.0,
				"1-12 hours": 0.5,
				"13-23 hours": 0.0,
				"1-7 days": 0.2,
				"8-14 days": 0.0,
				"15-30 days": 0.0,
				"1-3 months": 0.0,
				"4-12 months": 0.0,
				"more than 1 year": 0.0
			}
		}
	}
}

export default summaryData;
