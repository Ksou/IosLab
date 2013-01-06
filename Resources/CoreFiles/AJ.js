function AJ(trackL, UiStuff) {
    trackL == null && alert("No Data ");
    var url = "http://api.jamendo.com/get2/name+id+url+artist/track/json/?searchquery=" + trackL + "=searchweight_desc", xhr = Ti.Network.createHTTPClient({
        onload: function(e) {
            Ti.API.debug(this.responseText);
            var data = eval("(" + this.responseText + ")");
            DataFix = require("CoreFiles/DataFix");
            data = DataFix(data, !0);
            LoadJson = require("CoreFiles/LoadJson");
            LoadJson(trackL, UiStuff, data);
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

module.exports = AJ;