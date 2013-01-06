function AJSon(trackL, dR) {
    alert("In AJSon");
    trackL == null && alert("No Data ");
    var url = "http://api.jamendo.com/get2/name+id+url+artist/track/json/?searchquery=" + trackL + "=searchweight_desc", xhr = Ti.Network.createHTTPClient({
        onload: function(e) {
            alert("We are in load ");
            Ti.API.debug(this.responseText);
            var data = eval("(" + this.responseText + ")");
            alert(this.responseText);
            dR.text = this.responseText;
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