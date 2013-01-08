function AJSon(trackL, dataGot) {
    Alloy.Globals.Alerts && alert("In AJSon");
    trackL == null && alert("No Data ");
    var url = "http://api.jamendo.com/get2/name+id+url+artist/track/json/?searchquery=" + Alloy.Globals.UIStuff[3].value + "=searchweight_desc", xhr = Ti.Network.createHTTPClient({
        onload: function(e) {
            if (Alloy.Globals.Alerts) {
                alert("We are in AJSon");
                alert(this.responseText);
            }
            Ti.API.debug(this.responseText);
            var data = eval("(" + this.responseText + ")");
            DataFix = require("CoreFiles/DataFix");
            data = DataFix(data, !0);
            var JoinData = data.concat(dataGot);
            Alloy.Globals.UIStuff[3].data = JoinData;
            aPro = require("CoreFiles/aPro");
            aPro(Alloy.Globals.UIStuff[3], JoinData);
        },
        onerror: function(e) {
            Ti.API.debug(e.error);
            alert("error");
        },
        timeout: 5000
    });
    xhr.open("GET", url);
    xhr.send();
}

module.exports = AJSon;