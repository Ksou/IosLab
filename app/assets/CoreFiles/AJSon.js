function AJSon (trackL,dataGot){
//	alert(trackL);
// dr stands for direct return 
	if(Alloy.Globals.Alerts ){
	alert('In AJSon');
}
	if ( trackL == null){
		alert('No Data ');
		
	}
	//var trackL = 'piano';
//var url = "https://www.appcelerator.com";
var url =	'http://api.jamendo.com/get2/name+id+url+artist/track/json/?searchquery='+
Alloy.Globals.UIStuff[3].value+'=searchweight_desc';	

var xhr = Ti.Network.createHTTPClient({
    onload: function(e) {
if(Alloy.Globals.Alerts  ){
    	alert('We are in AJSon');
     alert(this.responseText );
       }
        Ti.API.debug(this.responseText);
        //alert('success');
    	
    	var data = eval('('+ this.responseText +')');
    //	alert(this.responseText) ; 
    //	Alloy.Globals.UIStuff = [TextH,Label1,Button1];
    	//dR.text
    	
    	//Alloy.Globals.UIStuff[TextH].text  = this.responseText ; 
		// fix this data to make it usable 
		DataFix = require('CoreFiles/DataFix');
		data =  DataFix(data,true);
		var JoinData = data.concat(dataGot);
			// make table local 
		//var	table = Alloy.Globals.UIStuff[3] ; 
			Alloy.Globals.UIStuff[3].data = JoinData ; 
   		aPro = require ('CoreFiles/aPro');
   		
   		aPro(Alloy.Globals.UIStuff[3],JoinData);
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

module.exports = AJSon ; 