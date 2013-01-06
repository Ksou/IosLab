function DataFix(data, Convert) {
    data.prop = "font";
    data.prop = "color";
    data.prop = "backgroundColor";
    var username;
    data.prop = "rightImage";
    data.prop = "backgroundImage";
    var user = [ username ];
    if (Convert) {
        data.prop = "user";
        data.prop = "downloadable";
        data.prop = "title";
    }
    for (var i = 0; i < data.length; i++) {
        if (Convert) {
            data[i].downloadable = !0;
            data[i].title = data[i].name;
        }
        if (data[i].downloadable == 1) {
            data[i].color = "green";
            data[i].rightImage = "text/vON.png";
        } else {
            data[i].rightImage = "text/vOFF.png";
            data[i].color = "red";
        }
        Convert && (data[i].color = "blue");
        data[i].font = {
            fontSize: "17dp"
        };
    }
    return data;
}

module.exports = DataFix;