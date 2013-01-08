function SCson(trackL) {
    Alloy.Globals.UIStuff[4].value && alert("In SCson");
    TextLoad = require("CoreFiles/TextLoad");
    var SCid = TextLoad("text/SCid.txt"), urlPrime = "http://api.soundcloud.com/tracks.json?client_id=" + SCid + " &q= " + trackL + "&limit=15", dlXhr = Titanium.Network.createHTTPClient({
        timeout: 500000
    });
    dlXhr.onload = function() {
        var data = eval("(" + this.responseText + ")");
        DataFix = require("CoreFiles/DataFix");
        data = DataFix(data, !1);
        Alloy.Globals.SCData = data;
        AJSon = require("CoreFiles/AJSon");
        AJSon(trackL, data);
        JsonText(this.responseText);
    };
    dlXhr.open("GET", urlPrime);
    dlXhr.send();
    dlXhr.onerror = function() {
        alert(" Can not establish a connection , please verify your internet connection and try again ");
    };
}

function JsonText(JSONRaw) {
    Alloy.Globals.UIStuff[0].text = JSONRaw;
}

module.exports = SCson;