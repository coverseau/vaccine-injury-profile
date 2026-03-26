
const summaryData = {
	"demographics": {
		"N": 594,
		"required": 525,
		"sex": {
			"N": 594,
			"female": 386,
			"male": 208
		},
		"age": {
			"N": 535,
			"10-19": 1.31,
			"20-29": 5.23,
			"30-39": 17.2,
			"40-49": 23.2,
			"50-59": 26.7,
			"60-69": 17.4,
			"70-79": 7.29,
			"80-89": 1.68
		},
		"state": {
			"N": 594,
			"ACT": 3.03,
			"NSW": 28.6,
			"NT": 1.18,
			"QLD": 20.4,
			"SA": 7.58,
			"TAS": 2.02,
			"VIC": 2.61,
			"WA": 11.1
		}
	},
	"doses": {
		"dose1": {
			"N": 594,
			"product": {
				"N": 593,
				"Pfizer": 66.7,
				"Moderna": 4.71,
				"AstraZeneca": 27.6,
				"Novavax": 0.842,
				"other": 0.0
			},
			"date": {
				"N": 468,
				"January-March 2021": 3.03,
				"April-June 2021": 17.3,
				"July-September 2021": 33.7,
				"October-December 2021": 19.5,
				"January-March 2022": 2.19,
				"April-June 2022": 0.505,
				"July-September 2022": 1.68,
				"October-December 2022": 0.505,
				"January-March 2023": 0.0,
				"April-June 2023": 0.168,
				"July-September 2023": 0.0,
				"October-December 2023": 0.0,
				"January-March 2024": 0.0,
				"April-June 2024": 0.0,
				"July-September 2024": 0.0,
				"October-December 2024": 0.168
			},
			"onset": {
				"N": 354,
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
		"dose2": {
			"N": 505,
			"product": {
				"N": 496,
				"Pfizer": 54.4,
				"Moderna": 3.54,
				"AstraZeneca": 20.5,
				"Novavax": 1.52,
				"other": 0.168
			},
			"date": {
				"N": 381,
				"January-March 2021": 0.505,
				"April-June 2021": 5.22,
				"July-September 2021": 29.3,
				"October-December 2021": 21.7,
				"January-March 2022": 4.55,
				"April-June 2022": 1.01,
				"July-September 2022": 0.673,
				"October-December 2022": 0.673,
				"January-March 2023": 0.168,
				"April-June 2023": 0.0,
				"July-September 2023": 0.0,
				"October-December 2023": 0.168,
				"January-March 2024": 0.0,
				"April-June 2024": 0.0,
				"July-September 2024": 0.0,
				"October-December 2024": 0.168
			},
			"onset": {
				"N": 331,
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
		"dose3": {
			"N": 273,
			"product": {
				"N": 237,
				"Pfizer": 26.6,
				"Moderna": 9.26,
				"AstraZeneca": 1.35,
				"Novavax": 2.53,
				"other": 0.168
			},
			"date": {
				"N": 185,
				"January-March 2021": 0.0,
				"April-June 2021": 0.0,
				"July-September 2021": 0.0,
				"October-December 2021": 7.74,
				"January-March 2022": 19.0,
				"April-June 2022": 1.85,
				"July-September 2022": 1.52,
				"October-December 2022": 0.505,
				"January-March 2023": 0.168,
				"April-June 2023": 0.0,
				"July-September 2023": 0.0,
				"October-December 2023": 0.0,
				"January-March 2024": 0.168,
				"April-June 2024": 0.0,
				"July-September 2024": 0.0,
				"October-December 2024": 0.168
			},
			"onset": {
				"N": 156,
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
		"dose4": {
			"N": 117,
			"product": {
				"N": 73,
				"Pfizer": 7.2,
				"Moderna": 3.2,
				"AstraZeneca": 0.34,
				"Novavax": 1.2,
				"other": 0.34
			},
			"date": {
				"N": 53,
				"January-March 2021": 0.0,
				"April-June 2021": 0.0,
				"July-September 2021": 0.0,
				"October-December 2021": 0.0,
				"January-March 2022": 0.17,
				"April-June 2022": 2.69,
				"July-September 2022": 4.55,
				"October-December 2022": 0.84,
				"January-March 2023": 0.0,
				"April-June 2023": 0.34,
				"July-September 2023": 0.17,
				"October-December 2023": 0.17,
				"January-March 2024": 0.0,
				"April-June 2024": 0.0,
				"July-September 2024": 0.0,
				"October-December 2024": 0.0
			},
			"onset": {
				"N": 35,
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
		"dose5": {
			"N": 41,
			"product": {
				"N": 10,
				"Pfizer": 0.84,
				"Moderna": 0.67,
				"AstraZeneca": 0.0,
				"Novavax": 0.17,
				"other": 0.0
			},
			"date": {
				"N": 9,
				"January-March 2021": 0.0,
				"April-June 2021": 0.0,
				"July-September 2021": 0.0,
				"October-December 2021": 0.0,
				"January-March 2022": 0.0,
				"April-June 2022": 0.0,
				"July-September 2022": 0.0,
				"October-December 2022": 0.0,
				"January-March 2023": 0.5,
				"April-June 2023": 0.8,
				"July-September 2023": 0.0,
				"October-December 2023": 0.0,
				"January-March 2024": 0.0,
				"April-June 2024": 0.2,
				"July-September 2024": 0.0,
				"October-December 2024": 0.0
			},
			"onset": {
				"N": 4,
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
	},
	"symptoms": {
		"severity": {
			"N": 577,
			"fatigue": {
				"N": 531,
				"minimal": 2.08,
				"mild": 5.20,
				"moderate": 10.6,
				"moderately severe": 19.9,
				"severe": 49.9,
				"N/A": 4.33
			},
			"exercise intolerance": {
				"N": 522,
				"minimal": 1.91,
				"mild": 3.81,
				"moderate": 9.36,
				"moderately severe": 18.0,
				"severe": 52.3,
				"N/A": 5.03
			},
			"brain fog": {
				"N": 518,
				"minimal": 3.29,
				"mild": 5.72,
				"moderate": 19.9,
				"moderately severe": 20.8,
				"severe": 32.9,
				"N/A": 7.11
			},
			"dizziness": {
				"N": 519,
				"minimal": 5.72,
				"mild": 14.3,
				"moderate": 18.5,
				"moderately severe": 17.0,
				"severe": 23.7,
				"N/A": 10.6
			},
			"insomnia": {
				"N": 513,
				"minimal": 9.53,
				"mild": 9.01,
				"moderate": 16.5,
				"moderately severe": 13.3,
				"severe": 23.4,
				"N/A": 17.2
			},
			"sleep disturbances": {
				"N": 517,
				"minimal": 5.89,
				"mild": 9.19,
				"moderate": 17.7,
				"moderately severe": 18.2,
				"severe": 28.6,
				"N/A": 10.1
			},
			"excessive sleep": {
				"N": 503,
				"minimal": 14.4,
				"mild": 9.01,
				"moderate": 13.2,
				"moderately severe": 11.4,
				"severe": 15.1,
				"N/A": 24.1
			},
			"paralysis": {
				"N": 493,
				"minimal": 7.97,
				"mild": 6.07,
				"moderate": 4.86,
				"moderately severe": 5.55,
				"severe": 5.20,
				"N/A": 55.8
			},
			"seizures": {
				"N": 491,
				"minimal": 9.88,
				"mild": 2.77,
				"moderate": 1.56,
				"moderately severe": 2.43,
				"severe": 2.95,
				"N/A": 65.5
			},
			"head pressure": {
				"N": 505,
				"minimal": 5.55,
				"mild": 9.71,
				"moderate": 14.7,
				"moderately severe": 12.5,
				"severe": 19.8,
				"N/A": 25.3
			},
			"new headaches": {
				"N": 510,
				"minimal": 6.76,
				"mild": 8.49,
				"moderate": 17.2,
				"moderately severe": 14.9,
				"severe": 22.2,
				"N/A": 18.9
			},
			"memory loss": {
				"N": 508,
				"minimal": 7.63,
				"mild": 14.0,
				"moderate": 17.0,
				"moderately severe": 15.4,
				"severe": 14.6,
				"N/A": 19.4
			},
			"new severe anxiety": {
				"N": 499,
				"minimal": 6.24,
				"mild": 5.55,
				"moderate": 15.9,
				"moderately severe": 15.9,
				"severe": 21.3,
				"N/A": 21.5
			},
			"feeling off-balance, or in motion while at rest": {
				"N": 515,
				"minimal": 6.59,
				"mild": 8.84,
				"moderate": 18.0,
				"moderately severe": 14.4,
				"severe": 20.8,
				"N/A": 20.6
			},
			"tinnitus": {
				"N": 504,
				"minimal": 6.59,
				"mild": 8.49,
				"moderate": 12.1,
				"moderately severe": 10.1,
				"severe": 14.7,
				"N/A": 35.4
			},
			"sensitivity to sound": {
				"N": 502,
				"minimal": 6.59,
				"mild": 9.53,
				"moderate": 13.9,
				"moderately severe": 10.7,
				"severe": 15.1,
				"N/A": 31.2
			},
			"sensitivity to light": {
				"N": 502,
				"minimal": 7.28,
				"mild": 9.01,
				"moderate": 14.0,
				"moderately severe": 11.3,
				"severe": 13.2,
				"N/A": 32.2
			},
			"visual disturbances": {
				"N": 501,
				"minimal": 8.14558058925477,
				"mild": 11.0918544194107,
				"moderate": 14.21143847487,
				"moderately severe": 10.5719237435009,
				"severe": 11.7850953206239,
				"N/A": 31.0225303292894
			},
			"temporary blindness": {
				"N": 492,
				"minimal": 10.3986135181976,
				"mild": 3.29289428076257,
				"moderate": 1.55979202772964,
				"moderately severe": 1.38648180242634,
				"severe": 1.21317157712305,
				"N/A": 67.4176776429809
			},
			"glaucoma": {
				"N": 485,
				"minimal": 8.66551126516464,
				"mild": 1.38648180242634,
				"moderate": 1.03986135181976,
				"moderately severe": 0.866551126516464,
				"severe": 0.866551126516464,
				"N/A": 71.2305025996534
			},
			"dry eyes": {
				"N": 501,
				"minimal": 8.31889081455806,
				"mild": 8.14558058925477,
				"moderate": 10.5719237435009,
				"moderately severe": 7.45233968804159,
				"severe": 6.93240901213172,
				"N/A": 45.4072790294627
			},
			"nerve pain": {
				"N": 508,
				"minimal": 4.50606585788562,
				"mild": 5.19930675909879,
				"moderate": 11.0918544194107,
				"moderately severe": 13.8648180242634,
				"severe": 28.2495667244367,
				"N/A": 25.1299826689775
			},
			"tremors": {
				"N": 498,
				"minimal": 9.53206239168111,
				"mild": 8.14558058925477,
				"moderate": 10.051993067591,
				"moderately severe": 8.83882149046794,
				"severe": 11.9584055459272,
				"N/A": 37.7816291161178
			},
			"muscle twitching": {
				"N": 511,
				"minimal": 8.14558058925477,
				"mild": 11.0918544194107,
				"moderate": 14.5580589254766,
				"moderately severe": 12.8249566724437,
				"severe": 13.5181975736568,
				"N/A": 28.42287694974
			},
			"internal vibrations": {
				"N": 501,
				"minimal": 6.93240901213172,
				"mild": 8.14558058925477,
				"moderate": 10.7452339688042,
				"moderately severe": 9.53206239168111,
				"severe": 12.8249566724437,
				"N/A": 38.6481802426343
			},
			"tingling / numbness in extremities": {
				"N": 518,
				"minimal": 5.37261698440208,
				"mild": 7.97227036395147,
				"moderate": 14.9046793760832,
				"moderately severe": 15.5979202772964,
				"severe": 26.1698440207972,
				"N/A": 19.7573656845754
			},
			"burning sensation on skin": {
				"N": 510,
				"minimal": 7.97227036395147,
				"mild": 6.93240901213172,
				"moderate": 9.53206239168111,
				"moderately severe": 7.62564991334489,
				"severe": 18.0242634315425,
				"N/A": 38.3015597920277
			},
			"joint pain / arthritis": {
				"N": 510,
				"minimal": 3.98613518197574,
				"mild": 7.79896013864818,
				"moderate": 14.7313691507799,
				"moderately severe": 15.5979202772964,
				"severe": 22.5303292894281,
				"N/A": 23.7435008665511
			},
			"muscle aches": {
				"N": 510,
				"minimal": 3.81282495667244,
				"mild": 7.2790294627383,
				"moderate": 18.7175043327556,
				"moderately severe": 18.1975736568458,
				"severe": 25.3032928942808,
				"N/A": 15.0779896013865
			},
			"muscle weakness": {
				"N": 511,
				"minimal": 4.8526863084922,
				"mild": 8.31889081455806,
				"moderate": 15.9445407279029,
				"moderately severe": 17.3310225303293,
				"severe": 27.0363951473137,
				"N/A": 15.0779896013865
			},
			"unstable joints": {
				"N": 495,
				"minimal": 7.2790294627383,
				"mild": 7.45233968804159,
				"moderate": 10.2253032928943,
				"moderately severe": 9.8786828422877,
				"severe": 12.4783362218371,
				"N/A": 38.474870017331
			},
			"muscle loss": {
				"N": 500,
				"minimal": 7.10571923743501,
				"mild": 8.66551126516464,
				"moderate": 15.5979202772964,
				"moderately severe": 11.9584055459272,
				"severe": 15.4246100519931,
				"N/A": 27.9029462738302
			},
			"heaviness in legs": {
				"N": 507,
				"minimal": 7.10571923743501,
				"mild": 7.62564991334489,
				"moderate": 14.9046793760832,
				"moderately severe": 10.051993067591,
				"severe": 21.8370883882149,
				"N/A": 26.3431542461005
			},
			"adrenaline surges": {
				"N": 494,
				"minimal": 6.58578856152513,
				"mild": 6.93240901213172,
				"moderate": 9.7053726169844,
				"moderately severe": 12.1317157712305,
				"severe": 11.265164644714,
				"N/A": 38.9948006932409
			},
			"chest pain": {
				"N": 511,
				"minimal": 4.67937608318891,
				"mild": 7.62564991334489,
				"moderate": 14.5580589254766,
				"moderately severe": 16.2911611785095,
				"severe": 27.5563258232236,
				"N/A": 17.8509532062392
			},
			"myocarditis": {
				"N": 480,
				"minimal": 5.54592720970537,
				"mild": 3.81282495667244,
				"moderate": 2.4263431542461,
				"moderately severe": 5.02599653379549,
				"severe": 7.2790294627383,
				"N/A": 59.0987868284229
			},
			"pericarditis": {
				"N": 485,
				"minimal": 5.37261698440208,
				"mild": 2.4263431542461,
				"moderate": 4.33275563258232,
				"moderately severe": 5.37261698440208,
				"severe": 13.8648180242634,
				"N/A": 52.686308492201
			},
			"heart palpitations": {
				"N": 510,
				"minimal": 3.63951473136915,
				"mild": 6.75909878682842,
				"moderate": 14.7313691507799,
				"moderately severe": 19.0641247833622,
				"severe": 27.5563258232236,
				"N/A": 16.6377816291161
			},
			"shortness of breath": {
				"N": 512,
				"minimal": 4.33275563258232,
				"mild": 9.18544194107452,
				"moderate": 15.2512998266898,
				"moderately severe": 18.8908145580589,
				"severe": 28.0762564991335,
				"N/A": 12.998266897747
			},
			"high heart rate": {
				"N": 507,
				"minimal": 5.19930675909879,
				"mild": 7.10571923743501,
				"moderate": 13.6915077989601,
				"moderately severe": 17.6776429809359,
				"severe": 24.9566724436742,
				"N/A": 19.2374350086655
			},
			"low blood pressure": {
				"N": 484,
				"minimal": 8.14558058925477,
				"mild": 6.23916811091854,
				"moderate": 8.31889081455806,
				"moderately severe": 5.71923743500867,
				"severe": 7.62564991334489,
				"N/A": 47.8336221837088
			},
			"high blood pressure": {
				"N": 477,
				"minimal": 5.19930675909879,
				"mild": 5.71923743500867,
				"moderate": 10.3986135181976,
				"moderately severe": 10.9185441941075,
				"severe": 9.01213171577123,
				"N/A": 41.421143847487
			},
			"persistent cough": {
				"N": 484,
				"minimal": 9.7053726169844,
				"mild": 7.2790294627383,
				"moderate": 9.53206239168111,
				"moderately severe": 5.19930675909879,
				"severe": 6.41247833622184,
				"N/A": 45.7538994800693
			},
			"heartburn / indigestion": {
				"N": 483,
				"minimal": 7.97227036395147,
				"mild": 8.49220103986135,
				"moderate": 13.3448873483536,
				"moderately severe": 9.35875216637782,
				"severe": 9.53206239168111,
				"N/A": 35.0086655112652
			},
			"dry mouth": {
				"N": 479,
				"minimal": 6.58578856152513,
				"mild": 8.14558058925477,
				"moderate": 12.4783362218371,
				"moderately severe": 5.37261698440208,
				"severe": 9.53206239168111,
				"N/A": 40.9012131715771
			},
			"abdominal / stomach pain": {
				"N": 483,
				"minimal": 6.75909878682842,
				"mild": 10.5719237435009,
				"moderate": 13.3448873483536,
				"moderately severe": 9.18544194107452,
				"severe": 12.3050259965338,
				"N/A": 31.5424610051993
			},
			"nausea": {
				"N": 479,
				"minimal": 8.31889081455806,
				"mild": 9.18544194107452,
				"moderate": 13.3448873483536,
				"moderately severe": 11.0918544194107,
				"severe": 11.6117850953206,
				"N/A": 29.4627383015598
			},
			"diarrhoea": {
				"N": 487,
				"minimal": 8.49220103986135,
				"mild": 9.53206239168111,
				"moderate": 10.7452339688042,
				"moderately severe": 7.10571923743501,
				"severe": 8.49220103986135,
				"N/A": 40.0346620450607
			},
			"loss of bowel control": {
				"N": 481,
				"minimal": 9.53206239168111,
				"mild": 4.67937608318891,
				"moderate": 2.25303292894281,
				"moderately severe": 3.63951473136915,
				"severe": 4.67937608318891,
				"N/A": 58.578856152513
			},
			"constipation": {
				"N": 491,
				"minimal": 8.31889081455806,
				"mild": 5.02599653379549,
				"moderate": 9.35875216637782,
				"moderately severe": 6.93240901213172,
				"severe": 7.10571923743501,
				"N/A": 48.3535528596187
			},
			"bloody or black tar-like stool": {
				"N": 490,
				"minimal": 8.49220103986135,
				"mild": 3.11958405545927,
				"moderate": 3.11958405545927,
				"moderately severe": 1.73310225303293,
				"severe": 3.63951473136915,
				"N/A": 64.8180242634315
			},
			"excessive gas": {
				"N": 416,
				"minimal": 8.31889081455806,
				"mild": 6.75909878682842,
				"moderate": 10.5719237435009,
				"moderately severe": 4.67937608318891,
				"severe": 4.15944540727903,
				"N/A": 37.6083188908146
			},
			"increased thirst": {
				"N": 415,
				"minimal": 6.23916811091854,
				"mild": 6.58578856152513,
				"moderate": 11.9584055459272,
				"moderately severe": 7.2790294627383,
				"severe": 5.89254766031196,
				"N/A": 33.9688041594454
			},
			"frequent urination": {
				"N": 416,
				"minimal": 5.37261698440208,
				"mild": 5.89254766031196,
				"moderate": 13.3448873483536,
				"moderately severe": 8.66551126516464,
				"severe": 7.62564991334489,
				"N/A": 31.1958405545927
			},
			"loss of bladder control": {
				"N": 415,
				"minimal": 7.79896013864818,
				"mild": 3.98613518197574,
				"moderate": 5.71923743500867,
				"moderately severe": 2.4263431542461,
				"severe": 3.98613518197574,
				"N/A": 48.0069324090121
			},
			"abnormal glucose levels": {
				"N": 407,
				"minimal": 5.89254766031196,
				"mild": 2.77296360485269,
				"moderate": 2.94627383015598,
				"moderately severe": 2.25303292894281,
				"severe": 2.4263431542461,
				"N/A": 54.2461005199307
			},
			"discolouring of skin / eyes": {
				"N": 413,
				"minimal": 7.2790294627383,
				"mild": 5.02599653379549,
				"moderate": 4.67937608318891,
				"moderately severe": 3.46620450606586,
				"severe": 2.59965337954939,
				"N/A": 48.526863084922
			},
			"discolouration in fingertips / toes": {
				"N": 410,
				"minimal": 6.93240901213172,
				"mild": 5.19930675909879,
				"moderate": 5.71923743500867,
				"moderately severe": 3.98613518197574,
				"severe": 3.11958405545927,
				"N/A": 46.1005199306759
			},
			"bulging veins": {
				"N": 413,
				"minimal": 7.2790294627383,
				"mild": 4.67937608318891,
				"moderate": 5.71923743500867,
				"moderately severe": 4.50606585788562,
				"severe": 3.11958405545927,
				"N/A": 46.2738301559792
			},
			"poor circulation": {
				"N": 490,
				"minimal": 8.31889081455806,
				"mild": 5.37261698440208,
				"moderate": 11.4384748700173,
				"moderately severe": 10.051993067591,
				"severe": 11.9584055459272,
				"N/A": 37.7816291161178
			},
			"swelling of extremities": {
				"N": 486,
				"minimal": 10.051993067591,
				"mild": 7.45233968804159,
				"moderate": 6.75909878682842,
				"moderately severe": 6.23916811091854,
				"severe": 8.31889081455806,
				"N/A": 45.4072790294627
			},
			"swollen lymph nodes": {
				"N": 355,
				"minimal": 5.89254766031196,
				"mild": 4.67937608318891,
				"moderate": 10.7452339688042,
				"moderately severe": 5.19930675909879,
				"severe": 5.19930675909879,
				"N/A": 29.8093587521664
			},
			"persistent sore throat": {
				"N": 357,
				"minimal": 7.97227036395147,
				"mild": 6.06585788561525,
				"moderate": 4.8526863084922,
				"moderately severe": 3.29289428076257,
				"severe": 2.94627383015598,
				"N/A": 36.7417677642981
			},
			"heat intolerance": {
				"N": 353,
				"minimal": 3.63951473136915,
				"mild": 5.71923743500867,
				"moderate": 9.53206239168111,
				"moderately severe": 9.18544194107452,
				"severe": 6.41247833622184,
				"N/A": 26.6897746967071
			},
			"skin redness, hives, petechia or rashes": {
				"N": 363,
				"minimal": 5.71923743500867,
				"mild": 4.50606585788562,
				"moderate": 7.79896013864818,
				"moderately severe": 6.23916811091854,
				"severe": 6.93240901213172,
				"N/A": 31.7157712305026
			},
			"new food allergies / intolerances": {
				"N": 360,
				"minimal": 4.50606585788562,
				"mild": 4.15944540727903,
				"moderate": 4.50606585788562,
				"moderately severe": 4.33275563258232,
				"severe": 8.66551126516464,
				"N/A": 36.2218370883882
			},
			"anaphylaxis": {
				"N": 355,
				"minimal": 4.8526863084922,
				"mild": 2.4263431542461,
				"moderate": 0.693240901213172,
				"moderately severe": 0.519930675909879,
				"severe": 1.21317157712305,
				"N/A": 51.8197573656846
			},
			"hair loss": {
				"N": 359,
				"minimal": 4.50606585788562,
				"mild": 5.54592720970537,
				"moderate": 9.18544194107452,
				"moderately severe": 4.50606585788562,
				"severe": 3.63951473136915,
				"N/A": 34.8353552859619
			},
			"chills": {
				"N": 357,
				"minimal": 5.89254766031196,
				"mild": 5.71923743500867,
				"moderate": 13.6915077989601,
				"moderately severe": 5.89254766031196,
				"severe": 3.81282495667244,
				"N/A": 26.8630849220104
			},
			"irregular menstrual cycle": {
				"N": 480,
				"minimal": 5.54592720970537,
				"mild": 3.11958405545927,
				"moderate": 5.54592720970537,
				"moderately severe": 3.29289428076257,
				"severe": 7.10571923743501,
				"N/A": 58.578856152513
			},
			"resurgence of latent disease (e.g. shingles, EBV, cancer, autoimmune disease, etc.)": {
				"N": 472,
				"minimal": 5.03,
				"mild": 2.60,
				"moderate": 4.51,
				"moderately severe": 5.03,
				"severe": 16.5,
				"N/A": 48.2
			}
		},
		"other": {
			
		},
		"position": {
			"N": 594,
			"left": 21.5,
			"right": 9.26,
			"varies": 16.8,
			"no difference": 29.6
		},
		"improving": {
			"N": 564,
			"yes": 7.62,
			"slowly improving": 21.3,
			"no": 26.8,
			"getting worse": 17.6,
			"fluctuating": 26.8,
			"month": [
				4,
				6,
				5,
				13,
				11,
				9,
				30,
				7,
				17,
				10,
				13,
				7,
				20,
				7,
				7,
				4,
				3,
				0,
				6,
				2,
				1,
				0,
				1,
				0,
				6,
				0,
				0,
				0,
				0,
				1,
				1,
				0,
				0,
				0,
				0,
				0,
				1
			]
		}
	}
}

export default summaryData;
