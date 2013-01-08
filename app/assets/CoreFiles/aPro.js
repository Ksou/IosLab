/**
 * @author Keith Wilson
 */
function aPro(table,data){
	//var ImageA = Alloy.Globals.SCData[0].waveform_url +"";
	
	alert(Alloy.Globals.SCData[0].waveform_url);
	
	if(  false &&  (Ti.Platform.osname == 'iphone' || Ti.Platform.osname == 'ipad' )){// not yet , futher research needed
		//Ti.Platform.osname == 'iphone' || Ti.Platform.osname == 'ipad' ){
	var CoverFlow = Titanium.UI.iOS.createCoverFlowView();
	
	var ArtWork ; // Ti.UI.createView() ;
	for(var i = 0; i < (Alloy.Globals.SCData.length /2) ; i++){
		ArtWork[i] = Ti.UI.createView({ backgroundImage : Alloy.Globals.SCData[i].waveform_url }) ;
		// Alloy.Globals.SCData[i].waveform_url;
	
	}
//var CoverFlow = Titanium.UI.createCoverFlowView();
CoverFlow.add(ArtWork[0]);
var SCView = 	Alloy.Globals.scFlow ;
SCView.add(CoverFlow) ;

}


	Alloy.Globals.LeftButton.visible = true ; 
 //var	bRow = Ti.UI.create
	var RowNew = Titanium.UI.createTableViewRow({
	font:{fontSize:40} ,
	
title : " Back "	
	
});
//RowNew.font.fontSize
table.appendRow(RowNew);
	table.addEventListener('click', function(e){
	//	if()
	
	if(e.index == (table.data[0].rows.length - 1))
{

Back();
//BackE(label,aButton);
//function(){
}
	
else{	
	var	Sounder;
	var API = 'JM';
	var tempString =  data[e.index].id;
  Sounder = 'http://storage-new.newjamendo.com/download/track/'+tempString+'/mp32';
	if(data[e.index].name == null)
	{
 API = ' SC' ; 		
		Sounder = data[e.index].permalink_url   + "/download.mp3" ; 
	}
	
	
	alert('Playing ' + Sounder  ) ; 	
if( Ti.Platform.osname == 'android'|| Ti.Platform.osname == 'iphone' || Ti.Platform.osname == 'ipad' ){
Songer(Sounder)  ; 	
}

}
	/*
		var LocDB = Ti.Database.open("Songs")
	
	var TimeNow = new Date();  //getDate(); 
	LocDB.execute('INSERT INTO Songs  (name,date) VALUES (?,?)',
	 data[e.index].title, TimeNow);
	var	getSQL = LocDB.execute('SELECT*');
	LocDB.close();
	
	
	
	alert(getSQL);
	*/
	});
		
	
	
}

function Songer(Song){

//var tempBool = Alloy.Globals.Played ; 
//alert(tempBool) ;

		var	RowPlay = 		 Ti.Media.createAudioPlayer({url : Song});
			RowPlay.play();
Alloy.Globals.Player = RowPlay ; 
//Alloy.Globals.Played = 1 ; 
//Alloy.Globals.Player 
		if(Ti.Platform.osname == 'iphone' || Ti.Platform.osname == 'ipad' ){
	Alloy.Globals.MainWin.setRightNavButton(Alloy.Globals.StopButton);}

}

function Back (){
		if(Ti.Platform.osname == 'iphone' || Ti.Platform.osname == 'ipad' ){
	Alloy.Globals.MainWin.setLeftNavButton(Alloy.Globals.InfoButton);}
	//Alloy.Globals.LeftButton.visible = false ; 
	if(Alloy.Globals.Alerts ){
	alert('Fall Back');
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


module.exports  = aPro ; 