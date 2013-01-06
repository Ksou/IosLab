$.index.open();

function OnLoad(){
	
	
	
	
}

function Search (){
	//var yo ;
	alert('Search fired ');
	// just get JM data , make sure we can still do this . 
	AJSon = require('CoreFiles/AJSon') ;
	//AJSon = require('CoreFiles/AJSon');
	
	var TextH = $.GetJson ;
	
	AJSon('piano',TextH);
	
}




function AJ (trackL,dR){
//	alert(trackL);
// dr stands for direct return 
	alert('In AJSon');
	
	if ( trackL == null){
		alert('No Data ');
		
	}
	//var trackL = 'piano';
//var url = "https://www.appcelerator.com";
var url =	'http://api.jamendo.com/get2/name+id+url+artist/track/json/?searchquery='+
trackL+'=searchweight_desc';	

var xhr = Ti.Network.createHTTPClient({
    onload: function(e) {
        // this.responseText holds the raw text return of the message (used for JSON)
        // this.responseXML holds any returned XML (used for SOAP web services)
        // this.responseData holds any returned binary data
    
    	alert('We are in load ');
        
        Ti.API.debug(this.responseText);
        //alert('success');
    	//alert(this.responseText );
    	var data = eval('('+ this.responseText +')');
    	alert(this.responseText) ; 
    	dR.text = this.responseText ; 
    	//DataFix = require('CoreFiles/DataFix');
    	//data =  DataFix(data,true);
    	//LoadJson = require('CoreFiles/LoadJson');
		//LoadJson (trackL,UiStuff,data);
    
    },
    onerror: function(e) {
        Ti.API.debug(e.error);
        alert('error');
    },
    timeout:5000
});

xhr.open("GET", url);
xhr.send();
}