function formObject(data) {
    var self = this;
    self.$debug = true;
    // Input Observables
    self.Race = ko.observable();
    self.Age = ko.observable();
    self.Sex = ko.observable();
    self.HDLCholesterolValue = ko.observable();
    self.TotalCholesterolValue = ko.observable();
    self.BloodPressure = ko.observable();
    self.Diabetic = ko.observable();
    self.Smoker = ko.observable();
    self.Hypertension = ko.observable();
   
    // Unit of Measure - System is defaulted to false which equals US units
    self.UnitOfMeasure = ko.observable(false);
    self.UnitOfMeasure.subscribe(function(newValue) {
        var type = ( newValue == true )? 'si':'us';
        var hdl = self.HDLCholesterolValue();
        var totc = self.TotalCholesterolValue();
        var m = .0259;
        
        if(newValue){
          if(hdl != null)
          self.HDLCholesterolValue( (hdl * m).toFixed(4) );
          if(totc != null)
          self.TotalCholesterolValue( (totc * m).toFixed(4) );
        }
        else{
          if(hdl != null)
          self.HDLCholesterolValue( (hdl / m).toFixed(0) );
          if(totc != null)
          self.TotalCholesterolValue( (totc / m ).toFixed(0) );
        }

        // console.log("vlaue set to " + type );
    });
    // Recalculate the Cholesterol Values based on Unit of Measure. The Algorythms are based on US units. 
    self.HDLCholesterol = ko.pureComputed(function() { 
      var i = self.HDLCholesterolValue()
      var m = self.UnitOfMeasure()? .0259: 1;
      var value = i/m
      return value;}, self);
    self.TotalCholesterol = ko.pureComputed(function() { 
      var i = self.TotalCholesterolValue()
      var m = self.UnitOfMeasure()? .0259: 1;
      var value = i/m
      return value;}, self);
        //Subscription to "User Changes" to calculate 10year risks
    self.Age.subscribe( function(newValue){
        self.TenYearRiskCalculations();
    });
    self.Sex.subscribe( function(newValue){
        self.TenYearRiskCalculations();
    });
    self.Race.subscribe( function(newValue){
        self.TenYearRiskCalculations();
    });
    self.BloodPressure.subscribe( function(newValue){
        self.TenYearRiskCalculations();
    });
    self.Diabetic.subscribe( function(newValue){
        self.TenYearRiskCalculations();
    });
    self.Smoker.subscribe( function(newValue){
        self.TenYearRiskCalculations();
    });
    self.Hypertension.subscribe( function(newValue){
        self.TenYearRiskCalculations();
    }); 
    // Subscribing to the Value Not the input to recalc only after the unit has been re-evaluated to US units.
    self.HDLCholesterol.subscribe( function(newValue){
        self.TenYearRiskCalculations();
    });
    self.TotalCholesterol.subscribe( function(newValue){
        self.TenYearRiskCalculations();
    }); 
    
    // stop computed if these are not met
    self.computedValuesAvailable = ko.pureComputed(function() {
        if (self.Sex() != null && self.Age() != null && self.Age() >= 20 && self.Age() <= 79 && self.Race() != null && self.HDLCholesterol() != null && self.HDLCholesterol() >= 20 && self.HDLCholesterol() <= 100 && self.BloodPressure() != null && self.BloodPressure() >= 90 && self.BloodPressure() <= 200 && self.TotalCholesterol() != null && self.TotalCholesterol() >= 130 && self.TotalCholesterol() <= 320) {
            if(self.$debug)console.log("Computed Values are available");
            return true;
        } else {
            if(self.$debug)console.log("Computed Values are not available");
            return false;
        }
    }, self);
    self.isRealNumber = function($object){
        if( !isNaN($object) && $object != null && $object ){
            return true;
        }
        return false;
    }
    self.isAfrican = function() {
        var i = false;
        if (self.Race() == "African American") i = true;
        return i;
    };
    self.isMale = function() {
        var i = false;
        if (self.Sex() == "Male") i = true;
        return i;
    };
    self.isFemale = function() {
        var i = false;
        if (self.Sex() == "Female") i = true;
        return i;
    };
    self.AgeConverted = function() {
        if( self.$debug )console.log(self.Age() + " is the Age");
        return Math.log( self.Age() );
    };
    self.AgeSquared = function() {
        return self.AgeConverted() * self.AgeConverted();
    };
    self.HDLCholesterolConverted = function() {
        return Math.log( self.HDLCholesterol() );
    };
    self.TotalCholesterolConverted = function() {
       return Math.log( self.TotalCholesterol() );
    };
    self.agetc = function() {
        return self.TotalCholesterolConverted() * self.AgeConverted();
    };
    self.agehdl = function() {
        return self.HDLCholesterolConverted() * self.AgeConverted();
    };
    self.agetsbp = function() {
        return self.AgeConverted() * self.trlnsbp();
    };
    self.agentsbp = function() {
        return self.AgeConverted() * self.ntlnsbp();
    };
    self.trlnsbp = function() {
        return Math.log(self.BloodPressure()) * Number(self.Hypertension())
    };
    self.ntlnsbp = function() {
        return Math.log(self.BloodPressure()) * Number(!self.Hypertension())
    };
    self.agesmoke = function() {
        return self.AgeConverted() * Number(self.Smoker());
    };
    self.agedm = function() {
        return self.AgeConverted() * Number(self.Diabetic);
    };
    //Optimal Values
    self.opt_hdl = function() {
        return Math.log(50);
    };
    self.opt_tc = function() {
        return Math.log(170);
    };
    self.opt_agetc = function() {
        return self.opt_tc() * self.AgeConverted();
    };
    self.opt_agehdl = function() {
        return self.opt_hdl() * self.AgeConverted();
    };
    self.opt_agetsbp = function() {
        return self.AgeConverted() * self.opt_trlnsbp();
    };
    self.opt_agentsbp = function() {
        return self.AgeConverted() * self.opt_ntlnsbp();
    };
    self.opt_trlnsbp = function() {
        return Math.log(110) * Number(false)
    };
    self.opt_ntlnsbp = function() {
        return Math.log(110) * Number(!false)
    };
    self.otp_agesmoke = function() {
        return self.AgeConverted() * Number(false);
    };
    self.opt_agedm = function() {
        return self.AgeConverted() * Number(false);
    };
    self.s010 = function() {
        var i;
        if (self.isAfrican() && self.isFemale()) i = 0.95334;
        if (!self.isAfrican() && self.isFemale()) i = 0.96652;
        if (self.isAfrican() && self.isMale()) i = 0.89536;
        if (!self.isAfrican() && self.isMale()) i = 0.91436;
        return i;
    };
    self.mnxb = function() {
        var i;
        if (self.isAfrican() && self.isFemale()) i = 86.6081;
        if (!self.isAfrican() && self.isFemale()) i = -29.1817;
        if (self.isAfrican() && self.isMale()) i = 19.5425;
        if (!self.isAfrican() && self.isMale()) i = 61.1816;
        return i;
    };
    self.predictCalculate = function() {
        var i;
        if (self.isAfrican() && self.isFemale()) i = 17.1141 * self.AgeConverted() + 0.9396 * self.TotalCholesterolConverted() + (-18.9196 * self.HDLCholesterolConverted()) + 4.4748 * self.agehdl() + 29.2907 * self.trlnsbp() + (-6.4321 * self.agetsbp()) + 27.8197 * self.ntlnsbp() + (-6.0873 * self.agentsbp()) + 0.6908 * Number(self.Smoker()) + 0.8738 * Number(self.Diabetic());
        if (!self.isAfrican() && self.isFemale()) i = (-29.799 * self.AgeConverted()) + 4.884 * (self.AgeConverted() * self.AgeConverted()) + 13.54 * self.TotalCholesterolConverted() + (-3.114 * self.agetc()) + (-13.578 * self.HDLCholesterolConverted()) + 3.149 * self.agehdl() + 2.019 * self.trlnsbp() + 1.957 * self.ntlnsbp() + 7.574 * Number(self.Smoker()) + (-1.665 * self.agesmoke()) + 0.661 * Number(self.Diabetic());
        if (self.isAfrican() && self.isMale()) i = 2.469 * self.AgeConverted() + 0.302 * self.TotalCholesterolConverted() + (-0.307 * self.HDLCholesterolConverted()) + 1.916 * self.trlnsbp() + 1.809 * self.ntlnsbp() + 0.549 * Number(self.Smoker()) + 0.645 * Number(self.Diabetic());
        if (!self.isAfrican() && self.isMale()) i = 12.344 * self.AgeConverted() + 11.853 * self.TotalCholesterolConverted() + (-2.664 * self.agetc()) + (-7.99 * self.HDLCholesterolConverted()) + 1.769 * self.agehdl() + 1.797 * self.trlnsbp() + 1.764 * self.ntlnsbp() + 7.837 * Number(self.Smoker()) + (-1.795 * self.agesmoke()) + 0.658 * Number(self.Diabetic());
        return i;
    };
    self.optimalPredictCalculate = function() {
        var i;
        if (self.isAfrican() && self.isFemale() ) i = 17.1141 * self.AgeConverted() + 0.9396 * self.opt_tc() + (-18.9196 * self.opt_hdl()) + 4.4748 * self.opt_agehdl() + 29.2907 * self.opt_trlnsbp() + (-6.4321 * self.opt_agetsbp()) + 27.8197 * self.opt_ntlnsbp() + (-6.0873 * self.opt_agentsbp()) + 0.6908 * Number(false) + 0.8738 * Number(false);
        if (!self.isAfrican() && self.isFemale() ) i = (-29.799 * self.AgeConverted()) + 4.884 * self.AgeSquared() + 13.54 * self.opt_tc() + (-3.114 * self.opt_agetc()) + (-13.578 * self.opt_hdl()) + 3.149 * self.opt_agehdl() + 2.019 * self.opt_trlnsbp() + 1.957 * self.opt_ntlnsbp() + 7.574 * Number(false) + (-1.665 * self.otp_agesmoke()) + 0.661 * Number(false);
        if (self.isAfrican() && self.isMale()) i = 2.469 * self.AgeConverted() + 0.302 * self.opt_tc() + (-0.307 * self.opt_hdl()) + 1.916 * self.opt_trlnsbp() + 1.809 * self.opt_ntlnsbp() + 0.549 * Number(false) + 0.645 * Number(false);
        if (!self.isAfrican() && self.isMale()) i = 12.344 * self.AgeConverted() + 11.853 * self.opt_tc() + (-2.664 * self.opt_agetc()) + (-7.99 * self.opt_hdl()) + 1.769 * self.opt_agehdl() + 1.797 * self.opt_trlnsbp() + 1.764 * self.opt_ntlnsbp() + 7.837 * Number(false) + (-1.795 * self.otp_agesmoke()) + 0.658 * Number(false);
        return i;
    };
    self.TenYearRiskCalculations= function(){
        var valuesAvailable = false;
        if (self.Sex() != null && self.Age() != null && self.Age() >= 20 && self.Age() <= 79 && self.Race() != null && self.HDLCholesterol() != null && self.HDLCholesterol() >= 20 && self.HDLCholesterol() <= 100 && self.BloodPressure() != null && self.BloodPressure() >= 90 && self.BloodPressure() <= 200 && self.TotalCholesterol() != null && self.TotalCholesterol() >= 130 && self.TotalCholesterol() <= 320) {
           valuesAvailable = true;
        }
        if(self.$debug) console.log("Values are available == "+ valuesAvailable);
        if(self.$debug)console.log("ten year risk calculate");
        if(valuesAvailable){
            if(self.$debug)console.log("I am calculating Risk");
            self.predict(self.predictCalculate());
            self.optimalPredict(self.optimalPredictCalculate());
        }
        else{
            if(self.$debug)console.log("I have set Risk to null");
            self.predict(null);
            self.optimalPredict(null); 
        }
    }

    // keeping them as  observalbes to reduce code re write.
    self.predict = ko.observable();
    self.optimalPredict = ko.observable();
    self.cvdPredict = ko.pureComputed(function() {
        if( self.computedValuesAvailable() ){
            return (1 - Math.pow(this.s010(), Math.exp( this.predict() - this.mnxb())));
        }
        return NaN;

    }, self);
    self.optimalCvdPredict = ko.pureComputed(function() {
         if( self.computedValuesAvailable() ){
            return (1 - Math.pow(this.s010(), Math.exp( this.optimalPredict() - this.mnxb())));
        }
        return NaN;
           
    }, self);

// 10 year Calculated Values
    self.TenYearRisk = ko.pureComputed(function() {
        var i = '~%';
        if (self.cvdPredict() != 1 && !isNaN(self.cvdPredict())) {
            var number = self.cvdPredict() * 100
            i = number.toFixed(1) + '%';
        }
        return i;
    }, self);
    self.TenYearOptimal = ko.pureComputed(function() {
        var i = '~%';
        if (self.optimalCvdPredict() != 1 && !isNaN(self.optimalCvdPredict())) {
            var number = self.optimalCvdPredict() * 100
            i = number.toFixed(1) + '%';
        }
        return i;
    }, self);

// Life Time Risk Non Effected By Resart

    self.major = ko.pureComputed(function() {
        var i = (self.TotalCholesterol() >= 240 ? 1 : 0) + (self.BloodPressure() >= 160 ? 1 : 0) + (self.Hypertension() ? 1 : 0) + (self.Smoker() ? 1 : 0) + (self.Diabetic() ? 1 : 0);
        return i;
    }, self);
    self.elevated = ko.pureComputed(function() {
      var i = ((((self.TotalCholesterol() >= 200 && self.TotalCholesterol() < 240) ? 1 : 0) + ((self.BloodPressure() >= 140 && self.BloodPressure() < 160 && self.Hypertension()  == false)?1:0))>=1?1:0) * (self.major() == 0 ? 1 : 0);
       return i;
    }, self);
    self.allOptimal = ko.pureComputed(function() {
        var i = ((  (self.TotalCholesterol() < 180 ? 1 : 0)  + ((self.BloodPressure() < 120 ? 1 : 0)  * (self.Hypertension() ? 0 : 1))) == 2 ? 1 : 0) * (self.major() == 0 ? 1 : 0);
        return i;
    }, self);
    self.notOptimal = ko.pureComputed(function() {
        var i = (((( self.TotalCholesterol() >= 180 && self.TotalCholesterol() < 200) ? 1 : 0) +  ((self.BloodPressure() >= 120 && self.BloodPressure() < 140 && self.Hypertension() == false) ? 1 : 0)) * (self.elevated() == 0 ? 1 : 0) * (self.major() == 0 ? 1 : 0))>=1?1:0;
        return i;
    }, self);
    self.lifeTimeRisk = ko.pureComputed(function() {
        i = "~%";
        if (self.Sex() != null || self.Sex() != undefined ) {
            i = (self.Sex() == "Male") ? '5%' : '8%';
        }
        return i
    }, self);
    self.yourLifeTimeRisk = ko.pureComputed(function() {
        var i = '~';
        //based on flags, provide data based on gender and risk category from lookup table
        if (self.major() > 1) i = self.lookupASCVD("major2");
        if (self.major() == 1) i = self.lookupASCVD("major1");
        if (self.elevated() == 1) i = self.lookupASCVD("elevated");
        if (self.notOptimal() == 1) i = self.lookupASCVD("notOptimal");
        if (self.allOptimal() == 1) i = self.lookupASCVD("allOptimal");
        return i+'%';
    }, self);
    self.lookupASCVD = function(category) {
        if (self.Sex() != null) return eval('self.ascvdTable.' + self.Sex().toLowerCase()+"."+ category + "");
        return '~';
    };

    self.ascvdTable = {
        "female": {
            "major2": 50,
            "major1": 39,
            "elevated": 39,
            "notOptimal": 27,
            "allOptimal": 8
        },
        "male": {
            "major2": 69,
            "major1": 50,
            "elevated": 46,
            "notOptimal": 36,
            "allOptimal": 5
        },
    }
}

function viewModel() {
    var self = this;
    self.$debug = true;
    self.FormData = formData;
    self.AppData = appData;
    self.Statins = ko.observableArray(statins);
    self.Glossary = glossary;
    self.glossaryItems = ko.observableArray();
    for(var i in self.Glossary) {
        self.glossaryItems.push( self.Glossary[i] );
    }
    self.glossaryQuery = ko.observable('');
    self.Form = ko.observable(new formObject());
    self.glossaryQuery.subscribe( function(value) {
        self.glossaryItems.removeAll();
        for(var i in self.Glossary) {
          if(self.Glossary[i].label.toLowerCase().indexOf( value.toLowerCase() ) >= 0) {
            self.glossaryItems.push( self.Glossary[i] );
          }
        }
      });

    self.validate = ko.observable(false);
    
    self.sexValidation = ko.pureComputed(function() {
        if (self.Form().Sex() == null && self.validate() == true) {
            return self.FormData.notifications.sex[0];
        } else {
            return self.FormData.notifications.blank[0];
        }
    }, self);
    self.ageValidation = ko.pureComputed(function() {
        if (self.Form().Age() == null && self.validate() == true) {
            return self.FormData.notifications.age[0];
        } else if (self.Form().Age() != null && (self.Form().Age() > 79 || self.Form().Age() < 20)) {
            return self.FormData.notifications.age[1];
        } else if (self.Form().Age() != null && self.Form().Age() >= 20 && self.Form().Age() < 40) {
            return self.FormData.notifications.age[2];
        } else if (self.Form().Age() != null && self.Form().Age() > 59 && self.Form().Age() <= 79) {
            return self.FormData.notifications.age[3];
        } else {
            return self.FormData.notifications.blank[0];
        }
    }, self);
    self.raceValidation = ko.pureComputed(function() {
        if (self.Form().Race() == null && self.validate() == true) {
            return self.FormData.notifications.race[0];
        } else if (self.Form().Race() != null && self.Form().Race() == "Other") {
            return self.FormData.notifications.race[1];
        } else {
            return self.FormData.notifications.blank[0];
        }
    }, self);
    self.hdlValidation = ko.pureComputed(function() {
        var i = self.FormData.notifications.blank[0];
        if (isNaN( self.Form().HDLCholesterol() ) && self.validate() == true) {
            i = self.FormData.notifications.hdlCholesterol[0];

        } 
        else if (self.Form().HDLCholesterol() != null && (self.Form().HDLCholesterol() < 20 || self.Form().HDLCholesterol() > 100)) {
            i = self.Form().UnitOfMeasure()? self.FormData.notifications.hdlCholesterol[2]:self.FormData.notifications.hdlCholesterol[1];

        } else {
            i = self.FormData.notifications.blank[0];

        }
        return i;
    }, self);
    self.totalCholesterolValidation = ko.pureComputed(function() {
        var i = self.FormData.notifications.blank[0];
        if (isNaN(self.Form().TotalCholesterol())  && self.validate() == true) {
            i = self.FormData.notifications.totalCholesterol[0];
        } else if (self.Form().TotalCholesterol() != null && (self.Form().TotalCholesterol() < 130 || self.Form().TotalCholesterol() > 320)) {
            i = self.Form().UnitOfMeasure()? self.FormData.notifications.totalCholesterol[2]: self.FormData.notifications.totalCholesterol[1];
        } else {
            i = self.FormData.notifications.blank[0]; 
        }
        return i;
    }, self);
    self.bloodPresureValidation = ko.pureComputed(function() {
        if (self.Form().BloodPressure() == null && self.validate() == true) {
            return self.FormData.notifications.bloodPresure[0];
        } else if (self.Form().BloodPressure() != null && (self.Form().BloodPressure() < 90 || self.Form().BloodPressure() > 200)) {
            return self.FormData.notifications.bloodPresure[1];
        } else {
            return self.FormData.notifications.blank[0];
        }
    }, self);
    self.isRaceOther = ko.pureComputed(function() {
        if (self.Form().Race() != null) {
            return self.Form().Race() == "Other" ? true : false;
        } else {
            return false;
        }
    }, self);
    self.recommendationUnlock = ko.pureComputed(function() {
        if (self.Form().Sex() != null && self.Form().Age() != null && self.Form().Age() >= 20 && self.Form().Age() <= 79 && self.Form().Race() != null && self.Form().HDLCholesterol() != null && self.Form().HDLCholesterol() >= 20 && self.Form().HDLCholesterol() <= 100 && self.Form().BloodPressure() != null && self.Form().BloodPressure() >= 90 && self.Form().BloodPressure() <= 200 && self.Form().TotalCholesterol() != null && self.Form().TotalCholesterol() >= 130 && self.Form().TotalCholesterol() <= 320) {
            console.log("recommendationUnlock is unlocked");
            return true;
        } else {
            console.log("recommendationUnlock is locked");
            return false;
        }
    }, self);
    self.allDataValidation = ko.pureComputed(function() {
        var i = self.FormData.notifications.blank[0];
        if (self.ageValidation().status == 'highlighted'){}
        if (self.validate == true || self.sexValidation().status == 'warning' || self.ageValidation().status == 'warning' || self.raceValidation().status == 'warning' || self.hdlValidation().status == 'warning' || self.totalCholesterolValidation().status == 'warning' || self.bloodPresureValidation().status == 'warning') {
            i = self.FormData.notifications.allData[0];
            
        }
        if (self.sexValidation().status == 'error' || self.raceValidation().status == 'error' || self.ageValidation().status == 'error' || self.hdlValidation().status == 'error' || self.totalCholesterolValidation().status == 'error' || self.bloodPresureValidation().status == 'error') {
            i = self.FormData.notifications.allData[1];
            
        }
        remakeSticky();
        return i;
    }, self);
    self.recommendationType = ko.pureComputed(function(){
      var i = '';
      var age = self.Form().Age();
      var cvRisk = null;
      if ( self.Form().cvdPredict() != 1 && !isNaN( self.Form().cvdPredict() ) ) {
        var number = self.Form().cvdPredict() * 100
        cvRisk = number.toFixed(1);
        console.log('cvRisk'+ cvRisk);
        }
      if(cvRisk != null)
        {
          if(self.Form().Diabetic()) {
                  if (age > 75) {i = self.FormData.recommendationText.Y_H; }
                  if (age < 40) {i = self.FormData.recommendationText.Y_L; } 
                  if (age >= 40 && age <= 75) {
                    if (cvRisk < 7.5) { i = self.FormData.recommendationText.YLM;}
                    else { i = self.FormData.recommendationText.YHM;}
                  }
          }else {
            if (age >= 40 && age <= 75) {
                if (cvRisk < 5) {i = self.FormData.recommendationText.NL_;}
                else if (cvRisk < 7.5 && cvRisk >= 5) {   
                    i = self.FormData.recommendationText.NMM;} 
                else {
                    i = self.FormData.recommendationText.NHM;}
                }
            if (age > 75) {i = self.FormData.recommendationText.N_H;}
            if (age < 40) {i = self.FormData.recommendationText.N_L;}
          }
       }
      return i;

    },self);



    self.resetAll = function() {
        self.validate(false);
        self.Form().Race(undefined);
        self.Form().Age(undefined);
        self.Form().Sex(null);
        self.Form().HDLCholesterolValue(undefined);
        self.Form().TotalCholesterolValue(undefined);
        self.Form().BloodPressure(undefined);
        self.Form().Diabetic(undefined);
        self.Form().Smoker(undefined);
        self.Form().Hypertension(undefined);
        if($debug)console.log("Reset");
        

    };
    self.numberTrim = function(value,unit){
        var number = value;
        if(number == null){console.log("number Null"); number = 0;}
        number = parseFloat(number).toFixed(4);
        if(!unit){number = parseFloat(number).toFixed(0);}
        return number;
    }
   
};
var appmodel = new viewModel();
// ko.applyBindings(appmodel);
// This is a simple *viewmodel* - JavaScript that defines the data and behavior of your UI
// var viewModel = {
// };
// extend viewModel with a $__page__ that points to pager.page that points to a new Page
pager.Href.hash = '#!/';
pager.extendWithPage(appmodel);

// apply your bindings
ko.applyBindings(appmodel);
// run this method - listening to hashchange
pager.start();
$('.panzoom-element img').unveil();






