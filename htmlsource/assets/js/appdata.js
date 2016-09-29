var appData = {};
var glossary = [
	{
		"label": "Ankle - Brachial Index(ABI)", 
		"definition": "The ratio of the blood pressure in the ankle compared to blood pressure in the arm,  which can predict peripheral artery disease(PAD). "
	}, {
    	"label" :"ASCVD", 
    	"definition": "Heart attack and stroke are usually caused by atherosclerotic cardiovascular disease(ASCVD). ASCVD develops because of a build - up of sticky cholesterol - rich plaque. Over time, this plaque can harden and narrow the arteries. "
    }, {
         "label" :"C-reactive Protein", 
    	"definition": "C-reactive protein (CRP) measures general levels of inflammation in your body.  High levels of CRP are caused by infections and many long-term diseases.  A CRP test,  however,  cannot show where the inflammation is located or what is causing it.  "
    }, {
         "label" :"Cholesterol", 
    	"definition": "Cholesterol is a waxy fat - like substance that travels through the blood.  In and of itself,  cholesterol isn't bad.  It actually helps create the outer coating of our cells and aids the body in making vitamin D and certain hormones. "
    }, {
         "label" :"Coronary Artery Calcium(CAC) Score", 
    	"definition": "A test that shows the presence of plaque or fatty build - up in the heart artery walls. "
    }, {
         "label" :"Coronary Artery Disease", 
    	"definition": "It happens when your coronary arteries--which act like fuel lines to supply blood to the heart--become damaged or diseased.  There is a build-up of fat and cholesterol in the blood that sticks to the inner walls of the arteries (this is also called atherosclerosis).  As this happens,  the arteries can narrow or become blocked.  Keep in mind,  coronary artery disease typically develops over decades; so many people don't even know they have it until it starts causing problems. "
    }, {
         "label" :"Diabetes", 
    	"definition": "When you have type 2 diabetes,  your body does not use or make insulin the way it should.  As a result,  the amount of sugar (glucose) in your blood becomes too high.  Over time,  high blood glucose levels can start to damage the blood vessels in the heart,  eyes,  kidneys,  brain,  and other parts of your body. "
    }, {
         "label" :"HDL", 
    	"definition": "HDL (high-density lipoprotein) cholesterol is sometimes referred to as &quot;good&quot; cholesterol,  because it helps move cholesterol out of the body.  HDL does this by binding with cholesterol in the bloodstream and carrying it back to the liver for disposal.  Higher HDL levels help to lower the risk of cardiovascular disease. "
    }, {
         "label" :"Heart Attack", 
    	"definition": "Your heart muscle needs oxygen and nutrients to work as it should.  A heart attack (your care provider may call it a myocardial infarction) usually occurs when blood flow to the heart is suddenly cut off.  When this happens,  the heart muscle is starved of oxygen-rich blood.  In just a short period of time,  part of the heart can be damaged or die.  That's why immediate care is critical--it can spare your heart and save your life.  If you think you are having a heart attack,  dial 9-1-1 immediately. "
    }, {
         "label" :"High Blood Pressure", 
    	"definition": "Blood pressure is the force of blood moving against the walls of your arteries.  Over time,  elevated blood pressure can weaken your heart,  blood vessels,  kidneys and other parts of your body. "
    }, {
         "label" :"LDL", 
    	"definition": "LDL(low - density lipoprotein) cholesterol is sometimes referred to as &quot;bad &quot;cholesterol. LDL carries mostly fat and only a small amount of protein from the liver to other parts of the body. A higher LDL level is considered a risk factorfor coronary artery disease(CAD) because, under certain conditions, it can cause hardening of the arteries(atherosclerosis). "
    }, {
         "label" :"Metabolic Syndrome", 
    	"definition": "Metabolic syndrome is the combination of high blood pressure, high blood sugar, excess fat around the waist, low HDL( &quot;good&quot;) cholesterol, and high triglycerides. Metabolic syndrome is closely linked to insulin resistance, in which the body cannot use insulin properly. Metabolic syndrome increases your risk for cardiovascular disease, diabetes, and stroke. Weight loss and increased physical activity can help to reduce the risk for metabolic syndrome. "
    }, {
         "label" :"Peripheral Artery Disease(PAD)", 
    	"definition": "Peripheral artery disease (PAD) is a narrowing or blockage of arteries that causes poor blood flow to your legs or arms.  When you walk or exercise,  your leg muscles don't get enough blood and you can get painful cramps. "
    }, {
         "label" :"Statin", 
    	"definition": "Statins are a type of medicine commonly used to treat high cholesterol.  Statins block an enzyme the body needs to produce cholesterol,  thereby lowering the total amount of it in the blood. "
    }, {
         "label" :"Stroke", 
    	"definition": "Your brain is the master control center for your body.  It directs most of what you do--speedily orchestrating your movements,  emotions and ability to think,  talk and learn.  To do this,  your brain needs a steady supply of oxygen and nutrient-rich blood.  That's why if you suffer a stroke--when blood flow to the brain is cut off--brain cells can die very quickly.  Stroke is a leading cause of death and disability in adults.  According to the American Stroke Association,  a stroke occurs every 40 seconds in the United States. "
    }, {
         "label" :"Triglycerides", 
    	"definition": "Triglycerides are a type of fat found in your blood.  Your body uses them for energy.  Some triglycerides are needed for good health. However, high triglycerides may raise your risk of cardiovascular disease and may be a sign of metabolic syndrome. "}];
var statins = [
		{
			id: "1", 
			name: "Atorvastatin (Lipitor&reg;)", 
			dose:[
				{
					name: "Low Intensity Dose", 
					type: "doselow", 
					value: "--", 
					htmlText: "--"
				}, 
				{
					name: "Moderate Intensity Dose", 
					type: "dosemedium", 
					value: "10 (20) mg", 
					htmlText: "<b>10</b> <i>(20)</i> <b>mg</b>"
				}, 
				{
					name: "High Intensity Dose", 
					type: "dosehigh", 
					value: "(40*)&ndash;80 mg", 
					htmlText: "<b>(40<strong>*</strong>)&ndash;80 mg</b>"
				}, 
				{
					name: "Other", 
					type: "other", 
					value: "other", 
					htmlText: "Only the doses above are covered in Cholesterol Guideline"
				}
			], 
			characteristics:[
				{
					name: "Half-life (h)", 
					type:"halflife", 
					value: "14 (Mean plasma elimination) 20-30 (inhibitory activity for HMG-CoA reductase is 20 to 30 hours due to the contribution of active metabolites)"
				}, 
				{
					name: "Lipophilic?", 
					type: 'lipophilic', 
					value: "Yes"
				}, 
				{
					name: "Optimal Frequency", 
					type:"timeofday", 
					value: "Any time of day/evening - Food not required"
				}, 
				{
					name: "P-glycoprotein substrate?", 
					type: "pglycoprotein", 
					value: "Yes"
				}, 
				{
					name: "Pregnancy Category X", 
					type: 'pregnancy', 
					value: "Yes"
				}, 
				{
					name: "Primary Metabolism", 
					type: 'metabolism', 
					value: "CYP3A4"
				}, 	
			], 
		}, 
		{
			id:"2", 
			name:"Fluvastatin (Lescol&reg;)", 
			dose:[
				{
					name:'Low Intensity Dose', 
					type:'doselow', 
					value: "20&ndash;40 mg", 
					htmlText: "<i>20&ndash;40 mg</i>"
				}, 
				{
					name:'Moderate Intensity Dose', 
					type:'dosemedium', 
					value: "40 mg BID", 
					htmlText: "<b>40 mg</b> BID"
				}, 
				{
					name:'High Intensity Dose', 
					type:'dosehigh', 
					value: "--", 
					htmlText: "--"
				}, 
				{
					name:'Other', 
					type:'other', 
					value: "other", 
					htmlText: "Only the doses above are covered in Cholesterol Guideline"
				}
			], 
			characteristics:[
				{
					name: "Half-life (h)", 
					type:"halflife", 
					value: "3"
				}, 
				{
					name: "Lipophilic?", 
					type: 'lipophilic', 
					value: "Yes"
				}, 
				{
					name: "Optimal Frequency", 
					type:"timeofday", 
					value: "Evening/bedtime - Food not required"
				}, 
				{
					name: "P-glycoprotein substrate?", 
					type: "pglycoprotein", 
					value: "No"
				}, 
				{
					name: "Pregnancy Category X", 
					type: 'pregnancy', 
					value: "Yes"
				}, 
				{
					name: "Primary Metabolism", 
					type: 'metabolism', 
					value: "(75%) CYP2C9; (5%) CYP2C8; and 20% CYP3A4"
				}, 
			], 
		}, 
		{
			id:"3", 
			name:"Fluvastatin XL (Lescol XL&reg;)", 
			dose:[
				{
					name:'Low Intensity Dose', 
					type:'doselow', 
					value: "--", 
					htmlText: "--"
				}, 
				{
					name:'Moderate Intensity Dose', 
					type:'dosemedium', 
					value: "80 mg ", 
					htmlText: "<i>80 mg</i>"
				}, 
				{
					name:'High Intensity Dose', 
					type:'dosehigh', 
					value: "--", 
					htmlText: "--"
				}, 
				{
					name:'Other', 
					type:'other', 
					value: "other", 
					htmlText: "Only the doses above are covered in Cholesterol Guideline"
				}
			], 
			characteristics:[
				{
					name: "Half-life (h)", 
					type:"halflife", 
					value: "9"
				}, 
				{
					name: "Lipophilic?", 
					type: 'lipophilic', 
					value: "Yes" 
				}, 
				{
					name: "Optimal Frequency", 
					type:"timeofday", 
					value: "Any time of day/evening-food not required"
				}, 
				{
					name: "P-glycoprotein substrate?", 
					type: "pglycoprotein", 
					value: "No"
				}, 
				{
					name: "Pregnancy Category X", 
					type: 'pregnancy', 
					value: "Yes"
				}, 
				{
					name: "Primary Metabolism", 
					type: 'metabolism', 
					value: "(75%) CYP2C9; (5%) CYP2C8; and 20% CYP3A4"
				}, 
			]
		}, 
		{
			id:"4", 
			name:"Lovastatin (Mevacor&reg;)", 
			dose:[
				{
					name:'Low Intensity Dose', 
					type:'doselow', 
					value: "20 mg", 
					htmlText: "<b>20 mg</b>"
				}, 
				{
					name:'Moderate Intensity Dose', 
					type:'dosemedium', 
					value: "40 mg", 
					htmlText: "<b>40 mg</b>"
				}, 
				{
					name:'High Intensity Dose', 
					type:'dosehigh', 
					value: "--", 
					htmlText: "--"
				}, 
				{
					name:'Other', 
					type:'other', 
					value: "Other", 
					htmlText: "Only the doses above are covered in Cholesterol Guideline"
				}, 
			], 
			characteristics:[
				{
					name: "Half-life (h)", 
					type:"halflife", 
					value: "1. 1-1. 7"
				}, 
				{
					name: "Lipophilic?", 
					type: 'lipophilic', 
					value: "Yes"
				}, 
				{
					name: "Optimal Frequency", 
					type:"timeofday", 
					value: "Evening/bedtime - Food required except for Altoprev extended-release formulation"
				}, 
				{
					name: "P-glycoprotein substrate?", 
					type: "pglycoprotein", 
					value: "Yes"
				}, 
				{
					name: "Pregnancy Category X", 
					type: 'pregnancy', 
					value: "Yes"
				}, 
				{
					name: "Primary Metabolism", 
					type: 'metabolism', 
					value: "CYP3A4"
				}, 
			]
		}, 
		{
			id:"5", 
			name:"Pitavastatin (Livalo&reg;)", 
			dose:[
				{
					name:'Low Intensity Dose', 
					type:'doselow', 
					value: "1 mg", 
					htmlText: "<i>1 mg</i>"
				}, 
				{
					name:'Moderate Intensity Dose', 
					type:'dosemedium', 
					value: "2-4 mg", 
					htmlText: "<i>2-4 mg</i>"
				}, 
				{
					name:'High Intensity Dose', 
					type:'dosehigh', 
					value: "--", 
					htmlText: "--"
				}, 
				{
					name:'Other', 
					type:'other', 
					value: "Other", 
					htmlText: "Only the doses above are covered in Cholesterol Guideline"
				}, 
			], 
			characteristics:[
				{
					name: "Half-life (h)", 
					type:"halflife", 
					value: "12"
				}, 
				{
					name: "Lipophilic?", 
					type: 'lipophilic', 
					value: "Yes"
				}, 
				{
					name: "Optimal Frequency", 
					type:"timeofday", 
					value: "Any time of day/evening - Food not required"
				}, 
				{
					name: "P-glycoprotein substrate?", 
					type: "pglycoprotein", 
					value: "No"
				}, 
				{
					name: "Pregnancy Category X", 
					type: 'pregnancy', 
					value: "Yes"
				}, 
				{
					name: "Primary Metabolism", 
					type: 'metabolism', 
					value: "Minimal CYP2C9 and CYP2C8"
				}, 
			]
		}, 
		{
			id:"6", 
			name:"Pravastatin (Pravachol&reg;)", 
			dose:[
				{
					name:'Low Intensity Dose', 
					type:'doselow', 
					value: "10&ndash;20 mg", 
					htmlText: "<b>10&ndash;20 mg</b>"
				}, 
				{
					name:'Moderate Intensity Dose', 
					type:'dosemedium', 
					value: "40 (80) mg", 
					htmlText: "<b>40 (80)</b> mg"
				}, 
				{
					name:'High Intensity Dose', 
					type:'dosehigh', 
					value: "--", 
					htmlText: "--"
				}, 
				{
					name:'Other', 
					type:'other', 
					value: "Other", 
					htmlText: "Only the doses above are covered in Cholesterol Guideline"
				}, 
			], 
			characteristics:[
				{
					name: "Half-life (h)", 
					type:"halflife", 
					value: "1. 8"
				}, 
				{
					name: "Lipophilic?", 
					type: 'lipophilic', 
					value: "No"
				}, 
				{
					name: "Optimal way to take Time of day Food required?", 
					type:"timeofday", 
					value: "Any time of day/evening - Food not required"
				}, 
				{
					name: "P-glycoprotein substrate?", 
					type: "pglycoprotein", 
					value: "No"
				}, 
				{
					name: "Pregnancy Category X", 
					type: 'pregnancy', 
					value: "Yes"
				}, 
				{
					name: "Primary Metabolism", 
					type: 'metabolism', 
					value: "Minimal CYP450 metabolism"
				}, 
			]
		}, 
		{
			id:"7", 
			name:"Rosuvastatin (Crestor&reg;)", 
			dose:[
				{
					name:'Low Intensity Dose', 
					type:'doselow', 
					value: "--", 
					htmlText: "--"
				}, 
				{
					name:'Moderate Intensity Dose', 
					type:'dosemedium', 
					value: "(5) 10mg", 
					htmlText: "<i>(5)</i> <b>10 mg</b>"
				}, 
				{
					name:'High Intensity Dose', 
					type:'dosehigh', 
					value: "20 (40)mg", 
					htmlText: "<b>20</b> <i>(40)</i> <b>mg</b>"
				}, 
				{
					name:'Other', 
					type:'other', 
					value: "other", 
					htmlText: "Only the doses above are covered in Cholesterol Guideline"
				}
			], 
			characteristics:[
				{
					name: "Half-life (h)", 
					type:"halflife", 
					value: "19"
				}, 
				{
					name: "Lipophilic?", 
					type: 'lipophilic', 
					value: "No"
				}, 
				{
					name: "Optimal Frequency", 
					type:"timeofday", 
					value: "Any time of day/evening - Food not required"
				}, 
				{
					name: "P-glycoprotein substrate?", 
					type: "pglycoprotein", 
					value: "No"
				}, 
				{
					name: "Pregnancy Category X", 
					type: 'pregnancy', 
					value: "Yes"
				}, 
				{
					name: "Primary Metabolism", 
					type: 'metabolism', 
					value: "Minimal CYP2C9"
				}, 
			]
		}, 
		{
			id:"8", 
			name:"Simvastatin (Zocor&reg;)", 
			alert:[
				{
					dose:'80', 
					warning:'Simvastatin &ndash; Initiation at 80mg daily or increase of up to 80mg daily may cause harm (III,  A). '
				}, 
			], 	
			dose:[
				{
					name:'Low Intensity Dose', 
					type:'doselow', 
					value: "10 mg", 
					htmlText: "<i>10 mg</i>"
				}, 
				{
					name:'Moderate Intensity Dose', 
					type:'dosemedium', 
					value: "20-40** mg", 
					htmlText: "<b>20-40<strong>**</strong> mg</b>"
					
				}, 
				{
					name:'Other', 
					type:'other', 
					value: "other", 
					htmlText: "Only the doses above are covered in Cholesterol Guideline"
				}
			], 
			characteristics:[
				{
					name: "Half-life (h)", 
					type:"halflife", 
					value: "1. 9"
				}, 
				{
					name: "Lipophilic?", 
					type: 'lipophilic', 
					value: "Yes"
				}, 
				{
					name: "Optimal Frequency", 
					type:"timeofday", 
					value: "Evening/bedtime - Food not required"
				}, 
				{
					name: "P-glycoprotein substrate?", 
					type: "pglycoprotein", 
					value: "Yes"
				}, 
				{
					name: "Pregnancy Category X", 
					type: 'pregnancy', 
					value: "Yes"
				}, 
				{
					name: "Primary Metabolism", 
					type: 'metabolism', 
					value: "CYP3A4"
				}, 
			]
		}
	]    	