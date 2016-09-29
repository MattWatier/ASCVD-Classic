var formData = {
	sex:[
    {
      "label":"Male",
      "value":"m"
    },{
      "label":"Female",
      "value":"f"
    }
	],
  diabetic:[
    {
      "label":"Yes",
      "value":"true"
    },{
      "label":"No",
      "value":"false"
    }
  ],
    smoker:[
    {
      "label":"Yes",
      "value":"true"
    },{
      "label":"No",
      "value":"false"
    }
  ],
    hypertension:[
    {
      "label":"Yes",
      "value":"true"
    },{
      "label":"No",
      "value":"false"
    }
  ],
 infotext:{
  scorebar:{"text":"Optimal risk factors include: Total cholesterol of 170 mg/dL (4.40 mmol/L), HDL-cholesterol of 50 mg/dL (1.30 mmol/L), Systolic BP of 110 mm Hg, Not taking medications for hypertension, Not a diabetic, Not a smoker",}
 },
  race:[
      {
      "label":"White",
      "value":"wh"
      },{
      "label":"African American",
      "value":"aa"
      },{
      "label":"Other",
      "value":"o"
      }
    ],
    notifications: {
      blank:[{
        'status':'',
        'message':''
      }],
      sex:[{
        'status':'warning',
        'message':'Sex is Missing'
      }],
      age:[{
        'id':0,
        'status':'warning',
        'message':'Age is Missing'
      },{
        'id':1,
        'status':'error',
         'message':'Must enter age between 20-79 years' 

      },{
        'id':2,
        'status':'highlighted',
        'message':'This calculator only provides 10-year risk estimates for individuals 40 to 79 years of age.'
      },{
        'id':3,
        'status':'highlighted',
        'message':'Lifetime Risk Calculator only provides lifetime risk estimates for individuals 20 to 59 years of age.'
      }],
      race:[{
        'status':'warning',
        'message':'Race is Missing'
      },{
        'status':'highlighted',
        'message':'See the Estimate Warning below'
      }],
      totalCholesterol:[{
         'status':'warning',
        'message':'Total Cholesterol is Missing'
      },{
        'status':'error',
        'message':'Must enter Total Cholesterol between 130 - 320 mg/dL'
      },{
        'status':'error',
        'message':'Must enter Total Cholesterol between 3.367 - 8.288 mmol/L'
      }],
      hdlCholesterol:[
      {
        'status':'warning',
        'message':'HDL-Cholesterol is Missing'
      },
      {        
        'status':'error',
        'message':'Must enter HDL-Cholesterol between  20 - 100 mg/dL'
      },
      {        
        'status':'error',
        'message':'Must enter HDL-Cholesterol between0.518 - 2.59 mmol/L'
      }],
      bloodPresure:[{
        'status':'warning',
        'message':'Systolic Blood Pressure is Missing'
      },{
        'status':'error',
        'message':'Must enter Systolic Blood Pressure between 90-200 mm Hg'
      }]
      ,
      allData:[{
        'status':'warning',
        'message':'There is missing data. The inputs below have been highlighted.'
      },{
        'status':'error',
        'message':'There are errors on the page.  The inputs below have been highlighted.'
      }]
       
    },
    recommendationText : {
        YHM:
            {
                'title' : "Consider High-Intensity Statin",
                "tag": "REC Consider High",
                "param": 'Risk >= 7.5 & Diabetic, Age 40-75',
                'content': '<p>It is reasonable to evaluate the potential for ASCVD benefits and for adverse effects, for drug-drug interactions, and to consider patient preferences when deciding to initiate, continue, or intensify statin therapy. (IIa C)</p><p> Moderate-intensity statin therapy should be initiated or continued for adults 40 to 75 years of age with diabetes mellitus. (I A)</p><p> High-intensity statin therapy is reasonable for adults 40 to 75 years of age with diabetes mellitus with a &#8805;7.5% estimated 10-year ASCVD risk unless contraindicated. (IIa B)</p>',
                'ldlcontent':'<h2>Response to LDL-lowering Therapy</h2><h3> Monitoring</h3><p> Monitor response of patient to high intensity statin therapy in combination with adherence to lifestyle recommendations.</p><h3> Anticipated Response</h3><p> If during the course of therapy, patient achieves anticipated response to therapy, with &ge; 50% reduction in LDL-C (and may consider on-treatment LDL-C &lt; 100 mg/dL or non-HDL-C &lt; 130 mg/dL), it is reasonable to continue current therapy and continue to monitor adherence to medications and lifestyle, and ongoing LDL-C response to therapy.</p><h3> Less-Than-Anticipated Response</h3><ul><li> If patient with diabetes has a less-than-anticipated response on maximally tolerated statin, with &lt; 50% reduction in LDL-C (and may consider on treatment LDL-C &ge; 100 mg/dL or non-HDL-C &ge; 130 mg/dL), intensification of lifestyle modification should be addressed and statin adherence should be evaluated, including the number of missed statin doses per month and consideration of barriers to adherence. Other major ASCVD risk factors, including tobacco use and elevated blood pressure, should be addressed and controlled as well.</li><li> If, after these interventions, the patient still has less-than-anticipated response (&lt; 50% reduction in LDL-C (and may consider on treatment LDL-C &ge; 100 mg/dL or non-HDL-C &ge; 130 mg/dL), additional clinical approaches may be warranted. The clinician and patient should enter into a discussion focused on shared decision making regarding the addition of a non-statin medication to the current regimen.</li><li> For full guidance and next steps, please see the 2016 ACC Expert Consensus Decision Pathway on the Role of Non-Statin Therapies for LDL-Cholesterol Lowering in the Management of Atherosclerotic Cardiovascular Disease Risk.</li></ul><p> <a class="link" target="_blank" href="http://content.onlinejacc.org/article.aspx?articleid=2510936"> 1 Lloyd-Jones DM, Morris PB, Ballantyne CM, et al. 2016 ACC Expert Consensus Decision Pathway on the Role of Non-Statin Therapies for LDL-Cholesterol Lowering in the Management of Atherosclerotic Cardiovascular Disease Risk: A Report of the American College of Cardiology Task Force on Clinical Expert Consensus Documents. <i> J Am Coll Cardiol. </i> 2016;():. doi:10.1016/j.jacc.2016.03.519. </a></p>',
                'email': "Moderate-intensity statin therapy should be initiated or continued for adults 40 to 75 years of age with diabetes mellitus. (I A) High-intensity statin therapy is reasonable for adults 40 to 75 years of age with diabetes mellitus with a ≥7.5% estimated 10-year ASCVD risk unless contraindicated. (IIa B) It is reasonable to evaluate the potential for ASCVD benefits and for adverse effects, for drug-drug interactions, and to consider patient preferences when deciding to initiate, continue, or intensify statin therapy. (IIa C)"

            },
        YLM:
            {
                'title' : "Moderate-Intensity Statin Recommended ",
                "tag": "REC Yes Moderate",
                "param": 'Risk < 7.5 & Diabetic, Age 40-75',
                'content': '<p>It is reasonable to evaluate the potential for ASCVD benefits and for adverse effects, for drug-drug interactions, and to consider patient preferences when deciding to initiate, continue, or intensify statin therapy. (IIa C)</p><p> Moderate-intensity statin therapy should be initiated or maintained for adults 40 to 75 years of age with diabetes mellitus. (I A)</p>',
                'ldlcontent':'<h2>Response to LDL-lowering Therapy</h2><h3>Monitoring</h3><p> Monitor response of patient to moderate-intensity statin therapy in combination with adherence to lifestyle recommendations.</p><h3>Anticipated Response</h3><p> If during the course of therapy, patient achieves anticipated response to therapy, with 30%-49% reduction in LDL-C (and may consider LDL-C &lt; 100 mg/dL or non-HDL-C &lt; 130 mg/dL), it is reasonable to continue current therapy and continue to monitor adherence to medications and lifestyle, and ongoing LDL-C response to therapy.</p><h3>Less-Than-Anticipated Response</h3><ul><li> If patient with diabetes has less-than-anticipated response, with &lt; 30% reduction in LDL-C (and may consider on treatment LDL-C &ge; 100 mg/dL or non-HDL-C &ge; 130 mg/dL), intensification of lifestyle modification should be addressed and statin adherence should be evaluated, including the number of missed statin doses per month and consideration of barriers to adherence. Other major ASCVD risk factors, including tobacco use and elevated blood pressure, should be addressed and controlled as well.</li><li> If, after these interventions, the patient still has less-than-anticipated response, with &lt; 30% reduction in LDL-C (and may consider on treatment LDL-C &ge; 100 mg/dL or non-HDL-C &ge; 130 mg/dL), the patient and clinician may consider increasing the statin dose to a high-intensity statin.</li><li> If patient still has a less-than-anticipated response on maximally-tolerated statin, with &lt; 30% reduction in LDL-C (and may consider on treatment LDL-C &ge; 100 mg/dL or non-HDL-C &ge; 130 mg/dL), additional clinical approaches may be warranted. The clinician and patient should enter into a discussion focused on shared decision making regarding the addition of a non-statin medication to the current regimen.</li><li> For full guidance, please see the 2016 ACC Expert Consensus Decision Pathway on the Role of Non-Statin Therapies for LDL-Cholesterol Lowering in the Management of Atherosclerotic Cardiovascular Disease Risk.</li></ul><p> <a class="link" target="_blank" href="http://content.onlinejacc.org/article.aspx?articleid=2510936"> 1 Lloyd-Jones DM, Morris PB, Ballantyne CM, et al. 2016 ACC Expert Consensus Decision Pathway on the Role of Non-Statin Therapies for LDL-Cholesterol Lowering in the Management of Atherosclerotic Cardiovascular Disease Risk: A Report of the American College of Cardiology Task Force on Clinical Expert Consensus Documents. <i> J Am Coll Cardiol. </i> 2016;():. doi:10.1016/j.jacc.2016.03.519. </a></p>',
                'email': "Moderate-intensity statin therapy should be initiated or contained for adults 40 to 75 yeras of age with diabetes mellitus. (I A) It is reasonable to evaluate the potential for ASCVD benefits and for adverse effects, for drug-drug interactions, and to consider patient preferences when deciding to initiate, continue, or intensify statin therapy. (IIa C)"

            },
        Y_H:
            {
                'title' : "Not In A Statin Benefit Group Due To Age > 75 Years",
                "tag": "REC No Over 75yrs and Diabetic",
                'content': "<p> In adults with diabetes mellitus, who are &lt;40 or &gt;75 years of age, it is reasonable to evaluate the potential for ASCVD benefits and for adverse effects, for drug-drug interactions, and to consider patient preferences when deciding to initiate, continue, or intensify statin therapy. (IIa C)</p>",
                'ldlcontent':'',
                'email': "In adults with diabetes mellitus, who are <40 or >75 years of age, it is reasonable to evaluate the potential for ASCVD benefits and for adverse effects, for drug-drug interactions, and to consider patient preferences when deciding to initiate, continue, or intensify statin therapy. (IIa C)"

            },
        Y_L:
            {
                'title' : "Not In A Statin Benefit Group Due To Age <40 Years",
                "tag":"REC No Under 40yrs and Diabetic",
                'content': "<p> In adults with LDL-C &lt; 190 mg/dL who are not otherwise identified in a statin benefit group, or for whom after quantitative risk assessment a risk-based treatment decision is uncertain, additional factors may be considered to inform treatment decision making. In these individuals, statin therapy for primary prevention may be considered after evaluation of the potential for ASCVD risk-reduction benefits, adverse effects, and drug- drug interactions and consider patient preferences. (IIb C)</p><p> Additional factors to consider may include primary LDL-C &#8805;160 mg/dL (4.14 mmol/L) or other evidence of genetic hyperlipidemias, family history of premature ASCVD with onset &lt;55 years of age in a first degree male relative or &lt;65 years of age in a first degree female relative, high-sensitivity C-reactive protein &#8805;2 mg/L (19.05nmol/L), CAC score &#8805;300 Agatston units or &#8805;75 percentile for age, sex, and ethnicity, ankle-brachial index &lt;0.9, or elevated lifetime risk of ASCVD. Additional factors may be identified in the future. (IIb C)</p><p> In adults with diabetes mellitus, who are &lt;40 or &gt;75 years of age, it is reasonable to evaluate the potential for ASCVD benefits and for adverse effects, for drug-drug interactions, and to consider patient preferences when deciding to initiate, continue, or intensify statin therapy. (IIa C)</p>",
                'ldlcontent':'',
                'email': "In adults with diabetes mellitus, who are <40 or >75 years of age, it is reasonable to evaluate the potential for ASCVD benefits and for adverse effects, for drug-drug interactions, and to consider patient preferences when deciding to initiate, continue, or intensify statin therapy. (IIa C)"

            },
        NHM:
            {
                'title' : "Moderate to High-Intensity Statin Recommended",
                "tag": "REC Yes Mod to High",
                "param": '>= 7.5% Risk, No Diabetic, Age 40-75',
                'content': '<p>It is reasonable to evaluate the potential for ASCVD benefits and for adverse effects, for drug-drug interactions, and to consider patient preferences when deciding to initiate, continue, or intensify statin therapy. (IIa C)</p><p> Adults 40 to 75 years of age with LDL-C 70 to 189 mg/dL (1.81 - 4.9 mmol/L) with no diabetes and estimated 10-year ASCVD risk ≥7.5% should be treated with moderate to high-intensity statin therapy. (I A)</p><p> Before initiating statin therapy, it is reasonable for clinicians and patients to engage in a discussion which considers the potential for ASCVD risk reduction benefits and for adverse effects, for drug-drug interactions, and patient preferences for treatment. (IIa C)</p><p> In individuals for whom after quantitative risk assessment a risk-based treatment decision is uncertain, additional factors may be considered to inform treatment decision making. These factors may include primary LDL–C &ge;160 mg/dL (4.14 mmol/L) or other evidence of genetic hyperlipidemias, family history of premature ASCVD with onset &lt;55 years of age in a first degree male relative or &lt;65 years of age in a first degree female relative, high-sensitivity C-reactive protein &ge;2 mg/L (19.05nmol/L), CAC score ≥300 Agatston units or ≥75 percentile for age, sex, and ethnicity, ankle-brachial index &lt;0.9, or elevated lifetime risk of ASCVD. Additional factors may be identified in the future.(IIb C)</p>',
                'ldlcontent':'<h2>Response to LDL-lowering Therapy</h2><h3>Monitoring</h3><p>Monitor response of patient to maximally-tolerated statin therapy in combination with adherence to lifestyle recommendations.</p><p> Several high-risk markers that may be informative when considering treatment for primary prevention patients with 10-year ASCVD risk &ge;&nbsp;7.5% but without diabetes include: 10-year ASCVD risk &gt;&nbsp;20%; primary LDL-C &ge;&nbsp;160 mg /dL at baseline; other major ASCVD risk factor(s) that are poorly controlled; family history of premature ASCVD with or without elevated lipoprotein(a); evidence of accelerated subclinical atherosclerosis (e.g., coronary artery calcification); elevated hs-CRP; and other risk-modifying conditions, such as CKD, HIV, and chronic inflammatory disorders.</p><h3>Anticipated Response</h3><p> If during the course of therapy, patient achieves anticipated response to therapy, with 30%-49% reduction in LDL-C (and may consider LDL-C &lt;&nbsp;100 mg/dL), it is reasonable to continue current therapy and continue to monitor adherence to medications and lifestyle, and ongoing LDL-C response to therapy.</p><h3>Less-Than-Anticipated Response</h3><ul><li> If a patient has a less-than-anticipated response to moderate-intensity statin therapy, with &lt;&nbsp;30% reduction in LDL-C (and may consider LDL-C &ge;&nbsp;100 mg/dL) or has high risk markers, additional clinical approaches are warranted. First, the clinician and patient should address statin adherence by assessing the number of missed statin doses per month and evaluating any barriers to adherence. Patients unable to tolerate even a moderate-intensity statin should be evaluated for statin intolerance and considered for referral to a lipid specialist. The clinician and patient should attempt to intensify lifestyle modification and soluble dietary fibers; phytosterols may be considered as part of this approach. Other major ASCVD risk factors, including tobacco use and elevated blood pressure, should be addressed and controlled as well.</li><li> If, after these interventions, the patient still has less-than-anticipated response to a moderate intensity statin with &lt;&nbsp;30% reduction in LDL-C (and may consider LDL-C &ge;&nbsp;100 mg/dL) the statin dose should be increased to a high-intensity statin (if this has not already been done), especially if high-risk markers are present.</li><li> If escalation to high-intensity statin (or initial high-intensity statin therapy) does not result in &ge;&nbsp;50% reduction in LDL-C (and may consider LDL-C &lt;&nbsp;100 mg/dL) and if high-risk markers are present, the clinician and patient should enter into a discussion focused on shared decision making regarding the addition of a non-statin medication to their regimen.</li><li> For full guidance, please see the 2016 ACC Expert Consensus Decision Pathway on the Role of Non-Statin Therapies for LDL-Cholesterol Lowering in the Management of Atherosclerotic Cardiovascular Disease Risk.</li></ul><p> <a class="link" target="_blank" href="http://content.onlinejacc.org/article.aspx?articleid=2510936"><sup>1</sup>Lloyd-Jones DM, Morris PB, Ballantyne CM, et al. 2016 ACC Expert Consensus Decision Pathway on the Role of Non-Statin Therapies for LDL-Cholesterol Lowering in the Management of Atherosclerotic Cardiovascular Disease Risk: A Report of the American College of Cardiology Task Force on Clinical Expert Consensus Documents. <i> J Am Coll Cardiol. </i> 2016;():. doi:10.1016/j.jacc.2016.03.519. </a></p>',
                'email': "Adults 40 to 75 years of age with LDL-C 70 to 189 mg/dL (1.81 - 4.9 mmol/L) with no diabetes and estimated 10-year ASCVD risk ≥7.5% should be treated with moderate to high-intensity statin therapy. (I A) Before initiating statin therapy, it is reasonable for clinicians and patients to engage in a discussion which considers the potential for ASCVD risk reduction benefits and for adverse effects, for drug-drug interactions, and patient preferences for treatment. (IIa C) In individuals for whom after quantitative risk assessment a risk-based treatment decision is uncertain, additional factors may be considered to inform treatment decision making.  These factors may include primary LDL–C &ge;160 mg/dL (4.14 mmol/L) or other evidence of genetic hyperlipidemias, family history of premature ASCVD with onset <55 years of age in a first degree male relative or <65 years of age in a first degree female relative, high-sensitivity C-reactive protein >2 mg/L (19.05nmol/L), CAC score ≥300 Agatston units or ≥75 percentile for age, sex, and ethnicity, ankle-brachial index <0.9, or elevated lifetime risk of ASCVD. Additional factors may be identified in the future.(IIb C)"

            },
        NMM:
            {
                'title' : "Consider Moderate-Intensity Statin",
                "tag": "REC Consider Mod",
                'content': '<p> It is reasonable to offer treatment with a moderate-intensity statin to adults 40 to 75 years of age with no diabetes and 10-year risk of of &gt;5% to &lt;7.5%. (IIa B) </p> <p> Before initiating statin therapy, it is reasonable for clinicians and patients to engage in a discussion which considers the potential for ASCVD risk reduction benefits and for adverse effects, for drug-drug interactions, and patient preferences for treatment. (IIa C) </p> <p> In individuals for whom after quantitative risk assessment a risk-based treatment decision is uncertain, additional factors may be considered to inform treatment decision making. These factors may include primary LDL–C ≥160 mg/dL (4.14 mmol/L) or other evidence of genetic hyperlipidemias, family history of premature ASCVD with onset &lt;55 years of age in a first degree male relative or &lt;65 years of age in a first degree female relative, high-sensitivity C-reactive protein ≥2 mg/L (19.05nmol/L), CAC score ≥300 Agatston units or ≥75 percentile for age, sex, and ethnicity, ankle-brachial index &lt;0.9, or elevated lifetime risk of ASCVD. Additional factors may be identified in the future. (IIb C) </p>',
                'ldlcontent':'<h2> Response to LDL-lowering Therapy</h2><h3> Monitoring</h3><p> Monitor response of patient with to moderate intensity statin therapy in combination with adherence to lifestyle recommendations.</p><p> Several high-risk markers that may be informative when considering treatment for primary prevention patients with 10-year ASCVD risk &gt;7.5% but without diabetes , include: 10-year ASCVD risk &gt; 20%; primary LDL-C &gt; 160 mg /dL at baseline; other major ASCVD risk factor(s) that are poorly controlled; family history of premature ASCVD with or without elevated lipoprotein(a); evidence of accelerated subclinical atherosclerosis (e.g., coronary artery calcification); elevated hs-CRP; and other risk-modifying conditions, such as CKD, HIV, and chronic inflammatory disorders.</p><h3> Anticipated Response</h3><p> If during the course of therapy, patient achieves anticipated response to therapy, with a 30% to &lt;50% reduction in LDL-C (and may consider LDL-C &lt;100 mg/dL), it is reasonable to continue current therapy and continue to monitor adherence to medications and lifestyle, and ongoing LDL-C response to therapy.</p><h3> Less-Than-Anticipated Response</h3><ul><li> If a patient has a less-than-anticipated response to statin therapy, with &lt;30% reduction in LDL-C (and may consider LDL-C &gt; 100 mg/dL) or has &gt; 1 high risk markers, additional clinical approaches are warranted. First, the clinician and patient should address statin adherence by assessing the number of missed statin doses per month and evaluating any barriers to adherence. Patients unable to tolerate even a moderate-intensity statin should be evaluated for statin intolerance and considered for referral to a lipid specialist. The clinician and patient should attempt to intensify lifestyle modification and soluble dietary fibers; phytosterols may be considered as part of this approach. Other major ASCVD risk factors, including tobacco use and elevated blood pressure, should be addressed and controlled as well.</li><li> If, after these interventions, the patient still has less-than-anticipated response to a moderate intensity statin &lt;30% reduction in LDL-C (and may consider LDL-C &gt; 100 mg/dL) the statin should be increased to a high-intensity statin (if this has not already been done), especially if high-risk markers are present.</li><li> If escalation to high-intensity statin (or initial high-intensity statin therapy) does not result in &gt;50% reduction in LDL-C (and may consider LDL-C &#8805;100 mg/dL) and if high-risk markers are present, the clinician and patient should enter into a discussion focused on shared decision making regarding the addition of a non-statin medication to their regimen.</li><li> For full guidance, please see the 2016 ACC Expert Consensus Decision Pathway on the Role of Non-Statin Therapies for LDL-Cholesterol Lowering in the Management of Atherosclerotic Cardiovascular Disease Risk.</li></ul><p> <a class="link" target="_blank" href="http://content.onlinejacc.org/article.aspx?articleid=2510936"> 1 Lloyd-Jones DM, Morris PB, Ballantyne CM, et al. 2016 ACC Expert Consensus Decision Pathway on the Role of Non-Statin Therapies for LDL-Cholesterol Lowering in the Management of Atherosclerotic Cardiovascular Disease Risk: A Report of the American College of Cardiology Task Force on Clinical Expert Consensus Documents. <i> J Am Coll Cardiol. </i> 2016;():. doi:10.1016/j.jacc.2016.03.519. </a></p>',
                'email': "It is reasonable to offer treatment with a moderate-intensity statin to adults 40 to 75 years of age with no diabetes and 10-year risk of of 5% to >7.5%. (IIa B)Before initiating statin therapy, it is reasonable for clinicians and patients to engage in a discussion which considers the potential for ASCVD risk reduction benefits and for adverse effects, for drug-drug interactions, and patient preferences for treatment. (IIa C) In individuals for whom after quantitative risk assessment a risk-based treatment decision is uncertain, additional factors may be considered to inform treatment decision making.  These factors may include primary LDL-C &ge;160 mg/dL (4.14 mmol/L) or other evidence of genetic hyperlipidemias, family history of premature ASCVD with onset <55 years of age in a first degree male relative or <65 years of age in a first degree female relative, high-sensitivity C-reactive protein ≥2 mg/L (19.05nmol/L), CAC score ≥300 Agatston units or ≥75 percentile for age, sex, and ethnicity, ankle-brachial index <0.9, or elevated lifetime risk of ASCVD. Additional factors may be identified in the future. (IIb C)"
        
            },
        N_H:
            {
                
                'title' : "Not In Statin Benefit Group Due To Age > 75 Years",
                "tag": "REC No Over 75yrs",
                'content': "<p>Before initiating statin therapy, it is reasonable for clinicians and patients to engage in a discussion which considers the potential for ASCVD risk reduction benefits and for adverse effects, for drug-drug interactions, and patient preferences for treatment. (IIa C) </p> ",
                'ldlcontent':'',
                'email': "Before initiating statin therapy, it is reasonable for clinicians and patients to engage in a discussion which considers the potential for ASCVD risk reduction benefits and for adverse effects, for drug-drug interactions, and patient preferences for treatment. (IIa C)"
       
            },
        NL_:
            {
                'title' : "Not In Statin Benefit Group Due To 10-Year ASCVD Risk <5%",
                "tag": "REC No 10yr Risk Over 5",
                'content': "<p>In individuals for whom after quantitative risk assessment a risk-based treatment decision is uncertain, additional factors may be considered to inform treatment decision making.  These factors may include primary LDL&ndash;C &#8805;160 mg/dL (4.14 mmol/L) or other evidence of genetic hyperlipidemias, family history of premature ASCVD with onset &lt;55 years of age in a first degree male relative or &lt;65 years of age in a first degree female relative, high-sensitivity C-reactive protein &ge;2 mg/L (19.05nmol/L), CAC score &#8805;300 Agatston units or &#8805;75 percentile for age, sex, and ethnicity, ankle-brachial index &lt;0.9, or elevated lifetime risk of ASCVD. Additional factors may be identified in the future. (IIb C) </p>",
                'ldlcontent':'',
                'email': "In individuals for whom after quantitative risk assessment a risk-based treatment decision is uncertain, additional factors may be considered to inform treatment decision making.  These factors may include primary LDL-C &ge;160 mg/dL (4.14 mmol/L) or other evidence of genetic hyperlipidemias, family history of premature ASCVD with onset <55 years of age in a first degree male relative or <65 years of age in a first degree female relative, high-sensitivity C-reactive protein ≥2 mg/L (19.05nmol/L), CAC score ≥300 Agatston units or ≥75 percentile for age, sex, and ethnicity, ankle-brachial index <0.9, or elevated lifetime risk of ASCVD. Additional factors may be identified in the future. (IIb C)"
        
            },
        N_L:
            {
                'title' : "Not In Statin Benefit Group Due To Age < 40 Years",
                "tag": "REC No Under 40yrs",
                'content': "<p> In adults with LDL-C &lt; 190 mg/dL who are not otherwise identified in a statin benefit group, or for whom after quantitative risk assessment a risk-based treatment decision is uncertain, additional factors may be considered to inform treatment decision making. In these individuals, statin therapy for primary prevention may be considered after evaluation of the potential for ASCVD risk-reduction benefits, adverse effects, and drug– drug interactions and consider patient preferences. (IIb C)</p><p> Additional factors to consider may include primary LDL–C ≥160 mg/dL (4.14 mmol/L) or other evidence of genetic hyperlipidemias, family history of premature ASCVD with onset &lt;55 years of age in a first degree male relative or &lt;65 years of age in a first degree female relative, high-sensitivity C-reactive protein ≥2 mg/L (19.05nmol/L), CAC score ≥300 Agatston units or ≥75 percentile for age, sex, and ethnicity, ankle-brachial index &lt;0.9, or elevated lifetime risk of ASCVD. Additional factors may be identified in the future. (IIb C)</p><p> Before initiating statin therapy, it is reasonable for clinicians and patients to engage in a discussion which considers the potential for ASCVD risk reduction benefits and for adverse effects, for drug-drug interactions, and patient preferences for treatment. (IIa C)</p>",
                'ldlcontent':'',
                'email': "Before initiating statin therapy, it is reasonable for clinicians and patients to engage in a discussion which considers the potential for ASCVD risk reduction benefits and for adverse effects, for drug-drug interactions, and patient preferences for treatment. (IIa C) In individuals for whom after quantitative risk assessment a risk-based treatment decision is uncertain, additional factors may be considered to inform treatment decision making.  These factors may include primary LDL-C &ge;160 mg/dL (4.14 mmol/L) or other evidence of genetic hyperlipidemias, family history of premature ASCVD with onset <55 years of age in a first degree male relative or <65 years of age in a first degree female relative, high-sensitivity C-reactive protein >2 mg/L (19.05nmol/L), CAC score ≥300 Agatston units or ≥75 percentile for age, sex, and ethnicity, ankle-brachial index <0.9, or elevated lifetime risk of ASCVD. Additional factors may be identified in the future. (IIb C)"
        
            }
    }
	}