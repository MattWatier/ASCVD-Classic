var gaRecordMissingRecommendation = function(){
	console.log('gaRecordMissingRecommendation');
	gaWrapper('send', 'event', 'Navigate', 'Clicked tab', 'Missing Required');
}

var gaRecordRecommendation = function(){
	console.log('gaRecordRecommendation');
	var $tag = "undefined";
	var $race = appmodel.Form().Race();
	var $age = appmodel.Form().Age();
	var $sex = appmodel.Form().Sex();
	var $hdl = appmodel.Form().HDLCholesterol();
	var $tot = appmodel.Form().TotalCholesterol();
	var $bp = appmodel.Form().BloodPressure();
	var $unit = appmodel.Form().UnitOfMeasure()?'US Measure':'SI Measure';
	var $rec = appmodel.recommendationType().tag;
		gaWrapper('send', 'event', 'Primary Function', 'Clicked tab', 'Recommendation');
		gaWrapper('send', 'event', 'Patient', 'Selected', $sex);	
		gaWrapper('send', 'event', 'Patient', 'Selected', $race);	
		gaWrapper('send', 'event', 'Units', 'Selected', $unit);	
		gaWrapper('send', 'event', 'Primary Function', 'Calculated', $rec);	

	if($age){
		$tag = "undefined";
		if($age >= 20 && $age <= 29){ $tag = "Age 20-29"}
		else if($age >= 30 && $age <= 39){ $tag = "Age 30-39"}
		else if($age >= 40 && $age <= 49){ $tag = "Age 40-49"}
		else if($age >= 50 && $age <= 59){ $tag = "Age 50-59"}
		else if($age >= 60 && $age <= 69){ $tag = "Age 60-69"}
		else if($age >= 70 && $age <= 75){ $tag = "Age 70-75"}
		else if($age >= 76 && $age <= 79){ $tag = "Age 76-79"}
		gaWrapper('send', 'event', 'Patient', 'Selected', $tag);	
	}
	if($tot){
		$tag = "undefined"
		if($tot >= 130 && $tot <= 139){ $tag = "TChol 130-139 mm HG"; }
		else if($tot >= 140 && $tot <= 159){ $tag = "TChol 140-159 mgdl"; }
		else if($tot >= 160 && $tot <= 179){ $tag = "TChol 160-179 mgdl"; }
		else if($tot >= 180 && $tot <= 199){ $tag = "TChol 180-199 mgdl"; }
		else if($tot >= 200 && $tot <= 219){ $tag = "TChol 200-219 mgdl"; }
		else if($tot >= 220 && $tot <= 239){ $tag = "TChol 220-239 mgdl"; }
		else if($tot >= 240 && $tot <= 259){ $tag = "TChol 240-259 mgdl"; }
		else if($tot >= 260 && $tot <= 279){ $tag = "TChol 260-279 mgdl"; }
		else if($tot >= 280 && $tot <= 299){ $tag = "TChol 280-299 mgdl"; }
		else if($tot >= 300 && $tot <= 320){ $tag = "TChol 300-320 mgdl"; }
		gaWrapper('send', 'event', 'Patient', 'Selected', $tag);	
	}
	if(appmodel.Form().HDLCholesterol()){
		$tag = "undefined"
		if($hdl >= 20 && $hdl <= 29){$tag = "HDL 20-29 mgdl";}
		else if($hdl >= 30 && $hdl <= 39){$tag = "HDL 30-39 mgdl";}
		else if($hdl >= 40 && $hdl <= 49){$tag = "HDL 40-49 mgdl";}
		else if($hdl >= 50 && $hdl <= 59){$tag = "HDL 50-59 mgdl";}
		else if($hdl >= 60 && $hdl <= 69){$tag = "HDL 60-69 mgdl";}
		else if($hdl >= 70 && $hdl <= 79){$tag = "HDL 70-79 mgdl";}
		else if($hdl >= 80 && $hdl <= 89){$tag = "HDL 80-89 mgdl";}
		else if($hdl >= 90 && $hdl <= 100){$tag = "HDL 90-100 mgdl";}
		gaWrapper('send', 'event', 'Patient', 'Selected', $tag);	

	}
	if($bp){
		$tag = "undefined"
		if($bp >= 90 && $bp <= 109){ $tag = "SBP 90-109 mm HG"; }
		else if($bp >= 110 && $bp <= 119){ $tag = "SBP 110-119 mm HG"; }
		else if($bp >= 120 && $bp <= 129){ $tag = "SBP 120-129 mm HG"; }
		else if($bp >= 130 && $bp <= 139){ $tag = "SBP 130-139 mm HG"; }
		else if($bp >= 140 && $bp <= 149){ $tag = "SBP 140-149 mm HG"; }
		else if($bp >= 150 && $bp <= 159){ $tag = "SBP 150-159 mm HG"; }
		else if($bp >= 160 && $bp <= 180){ $tag = "SBP 160-180 mm HG"; }
		else if($bp >= 181 && $bp <= 200){ $tag = "SBP 181-200 mm HG"; }
		gaWrapper('send', 'event', 'Patient', 'Selected', $tag);	
	}
		
	if(appmodel.Form().Hypertension())
		gaWrapper('send', 'event', 'Patient', 'Selected', 'Hypertension');
	if(appmodel.Form().Diabetic())
		gaWrapper('send', 'event', 'Patient', 'Selected', 'Diabetic');
	if(appmodel.Form().Smoker())
		gaWrapper('send', 'event', 'Patient', 'Selected', 'Smoker');		
		gaWrapper('send', 'event', 'Recommendation', 'Recommendation', appmodel.recommendationType().tag);

}
