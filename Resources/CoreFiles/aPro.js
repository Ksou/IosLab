function aPro(table, data) {
    alert(Alloy.Globals.SCData[0].waveform_url);
    Alloy.Globals.LeftButton.visible = !0;
    var RowNew = Titanium.UI.createTableViewRow({
        font: {
            fontSize: 40
        },
        title: " Back "
    });
    table.appendRow(RowNew);
    table.addEventListener("click", function(e) {
        if (e.index == table.data[0].rows.length - 1) Back(); else {
            var Sounder, API = "JM", tempString = data[e.index].id;
            Sounder = "http://storage-new.newjamendo.com/download/track/" + tempString + "/mp32";
            if (data[e.index].name == null) {
                API = " SC";
                Sounder = data[e.index].permalink_url + "/download.mp3";
            }
            alert("Playing " + Sounder);
            (Ti.Platform.osname == "android" || Ti.Platform.osname == "iphone" || Ti.Platform.osname == "ipad") && Songer(Sounder);
        }
    });
}

function Songer(Song) {
    var RowPlay = Ti.Media.createAudioPlayer({
        url: Song
    });
    RowPlay.play();
    Alloy.Globals.Player = RowPlay;
    (Ti.Platform.osname == "iphone" || Ti.Platform.osname == "ipad") && Alloy.Globals.MainWin.setRightNavButton(Alloy.Globals.StopButton);
}

function Back() {
    (Ti.Platform.osname == "iphone" || Ti.Platform.osname == "ipad") && Alloy.Globals.MainWin.setLeftNavButton(Alloy.Globals.InfoButton);
    Alloy.Globals.Alerts && alert("Fall Back");
    for (var i = 0; i < Alloy.Globals.UIStuff.length; i++) i != 3 ? Alloy.Globals.UIStuff[i].visible = !0 : Alloy.Globals.UIStuff[i].visible = !1;
}

module.exports = aPro;