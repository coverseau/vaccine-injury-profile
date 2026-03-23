
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
			reacted: 368,
			product: {
				N: 593,
				Pfizer: 396,
				Moderna: 28,
				AstraZeneca: 164,
				Novavax: 5,
				other: 0
			},
			averageDate: new Date(2021, 7, 23),
			onset: {
				N: 354,
				"0-5 minutes": 22,
				"6-30 minutes": 24,
				"31-59 minutes": 4,
				"1-12 hours": 96,
				"13-23 hours": 14,
				"1-7 days": 142,
				"8-14 days": 34,
				"15-30 days": 10,
				"1-3 months": 7,
				"4-12 months": 1,
				"more than 1 year": 0
			}
		},
		dose2: {
			N: 505,
			reacted: 362,
			product: {
				N: 476,
				Pfizer: 323,
				Moderna: 21,
				AstraZeneca: 122,
				Novavax: 9,
				other: 1
			},
			averageDate: new Date(2021, 9, 2),
			onset: {
				N: 331,
				"0-5 minutes": 12,
				"6-30 minutes": 16,
				"31-59 minutes": 5,
				"1-12 hours": 74,
				"13-23 hours": 19,
				"1-7 days": 140,
				"8-14 days": 25,
				"15-30 days": 11,
				"1-3 months": 22,
				"4-12 months": 6,
				"more than 1 year": 2
			}
		},
		dose3: {
			N: 273,
			reacted: 178,
			product: {
				N: 237,
				Pfizer: 158,
				Moderna: 55,
				AstraZeneca: 8,
				Novavax: 15,
				other: 1
			},
			averageDate: new Date(2022, 1, 6),
			onset: {
				N: 156,
				"0-5 minutes": 9,
				"6-30 minutes": 8,
				"31-59 minutes": 2,
				"1-12 hours": 37,
				"13-23 hours": 10,
				"1-7 days": 54,
				"8-14 days": 12,
				"15-30 days": 8,
				"1-3 months": 14,
				"4-12 months": 1,
				"more than 1 year": 1
			}
		},
		dose4: {
			N: 117,
			reacted: 41,
			product: {
				N: 73,
				Pfizer: 43,
				Moderna: 19,
				AstraZeneca: 2,
				Novavax: 7,
				other: 2
			},
			averageDate: new Date(2022, 6, 16),
			onset: {
				N: 35,
				"0-5 minutes": 0,
				"6-30 minutes": 3,
				"31-59 minutes": 0,
				"1-12 hours": 6,
				"13-23 hours": 4,
				"1-7 days": 15,
				"8-14 days": 0,
				"15-30 days": 2,
				"1-3 months": 4,
				"4-12 months": 1,
				"more than 1 year": 0
			}
		},
		dose5: {
			N: 41,
			reacted: 1,
			product: {
				N: 10,
				Pfizer: 5,
				Moderna: 4,
				AstraZeneca: 0,
				Novavax: 1,
				other: 0
			},
			averageDate: new Date(2023, 4, 25),
			onset: {
				N: 4,
				"0-5 minutes": 0,
				"6-30 minutes": 0,
				"31-59 minutes": 0,
				"1-12 hours": 3,
				"13-23 hours": 0,
				"1-7 days": 1,
				"8-14 days": 0,
				"15-30 days": 0,
				"1-3 months": 0,
				"4-12 months": 0,
				"more than 1 year": 0
			}
		}
	},
	covid19AfterAdverseReaction: {
		N: 536,
		"I felt better": 8,
		"I got worse": 249,
		"No change in my symptoms": 61,
		"N/A": 218
	},
	mandated: {
		N: 263,
		"yes": 134,
		"no": 107,
		"no (but bullied/coerced by workplace)": 22
	},
	covid19: {
		N: 515,
		yes: 314,
		no: 201,
		negativeSerology: 48,
		priorToShots: 15,
		betweenShots: 36
	}
}

export default summaryData;
