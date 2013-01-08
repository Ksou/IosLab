$.index.open();

function OnLoad(){
	// create a local SQLite DB
	Alloy.Globals.scFlow = $.scFlow ; 
	
	var ButtonLeft = Ti.UI.createButton({
		title: 'Back'
		
	}) ;
	
		var StopButton = Ti.UI.createButton({
		title: 'Stop'
		
	}) ;
	
		var ButtonInfo = Ti.UI.createButton({
		title: 'Info'
		
	}) ;
	
	var WinM = $.Main ;
	//WinM.setLeftNavButton(ButtonLeft);
	ButtonLeft.addEventListener("click",Back);
	//ButtonLeft.visible = false ; 
	ButtonInfo.addEventListener("click",function(){
		
		alert("This is the main page, from here you can search for music"); 
	});
	Alloy.Globals.MainWin = WinM ;
	Alloy.Globals.LeftButton = ButtonLeft ; 
	Alloy.Globals.InfoButton = ButtonInfo ;
	
	StopButton.addEventListener("click",function(){
	
	if(Alloy.Globals.Player != null){
		if(Alloy.Globals.Player.playing){
			
			StopButton.title = "Play"	;
			Alloy.Globals.Player.stop() ;
		}
		
		else
		{
			StopButton.title = "Stop"	;
			Alloy.Globals.Player.play() ;
			
		}
		
		
	}
	
	
		
		
	});
	//	Alloy.Globals.MainWin.setLeftNavButton(Alloy.Globals.LeftButton);
	Alloy.Globals.StopButton = StopButton ;	
		if(Ti.Platform.osname == 'iphone' || Ti.Platform.osname == 'ipad' ){
		Alloy.Globals.MainWin.setLeftNavButton(Alloy.Globals.InfoButton);
}
}

function IosCheck(){
	
	
	
	if(Alloy.Globals.Alerts ){
	Alloy.Globals.Alerts = false}
	else
	{
		Alloy.Globals.Alerts  = true ;
	}
	//alert( $.Alerts.value + "is value");
}

function Search (){
//Alloy.Globals.Alerts = 	$.Alerts.value ;
	
	/*
	var LocDB = Ti.Database.open("Songs");
	LocDB.execute('CREATE TABLE IF NOT EXISTS Songs(id INTEGER PRIMARY KEY, title TEXT ,date TEXT );');
	LocDBdb.close();
	*/
	//var yo ;

	// just get JM data , make sure we can still do this . 
	//AJSon = require('CoreFiles/AJSon') ;
	//AJSon = require('CoreFiles/AJSon');
	// Alloy allows Globals , so we just place them all in on array 
if(Ti.Platform.osname == 'iphone' || Ti.Platform.osname == 'ipad' ){
	Alloy.Globals.MainWin.setLeftNavButton(Alloy.Globals.LeftButton);
}
	
	Alloy.Globals.UIStuff = ["TextH","Label1","Button1","tableP","AlertSwitch","AlertLabel"];
	Alloy.Globals.UIStuff[0] = $.GetJson ;
	Alloy.Globals.UIStuff[0].text = ' yo ';
	// Alloy now provides us with globals !
	Alloy.Globals.UIStuff[1] =  $.Label1 ; 
	
	Alloy.Globals.UIStuff[2] = $.Search ; 
	Alloy.Globals.UIStuff[3] = $.tableP ; 
	Alloy.Globals.UIStuff[4] = $.Alerts ;
	Alloy.Globals.UIStuff[5] = $.AL ;
	$.tableP.visible = true ; 
	$.AL.visible = false ;
	$.Alerts.visible = false ; 
		if(Alloy.Globals.Alerts ){
	alert('Search fired ');
	}
	SCson = require('CoreFiles/SCson');
	$.Label1.visible = false ;
	$.Search.visible = false ; 
	//SCson('piano',TextH,$.tableP);
	SCson($.Label1.value);
	//SCson('piano');
}


function Back (){
if(Ti.Platform.osname == 'iphone' || Ti.Platform.osname == 'ipad' ){
Alloy.Globals.MainWin.setLeftNavButton(Alloy.Globals.InfoButton);
}
	//Alloy.Globals.LeftButton.visible = false ; 
	if(Alloy.Globals.Alerts ){
	alert('Fall Back ');
	}
	for(var i = 0; i < Alloy.Globals.UIStuff.length; i++){
	if( i != 3){
	Alloy.Globals.UIStuff[i].visible = true ; 
}
else
{
		Alloy.Globals.UIStuff[i].visible = false ; 
	
}


}
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