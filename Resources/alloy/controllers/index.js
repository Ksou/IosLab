function Controller() {
    function OnLoad() {}
    function Search() {
        alert("Search fired ");
        AJSon = require("CoreFiles/AJSon");
        var TextH = $.GetJson;
        AJSon("piano", TextH);
    }
    function AJ(trackL, dR) {
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
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.index = A$(Ti.UI.createTabGroup({
        id: "index"
    }), "TabGroup", null);
    $.__views.__alloyId2 = A$(Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Tab 1",
        id: "__alloyId2"
    }), "Window", null);
    $.__views.Search = A$(Ti.UI.createButton({
        title: "Search",
        top: "30",
        id: "Search"
    }), "Button", $.__views.__alloyId2);
    $.__views.__alloyId2.add($.__views.Search);
    Search ? $.__views.Search.on("click", Search) : __defers["$.__views.Search!click!Search"] = !0;
    $.__views.__alloyId3 = A$(Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        text: "I am Window 1",
        id: "__alloyId3"
    }), "Label", $.__views.__alloyId2);
    $.__views.__alloyId2.add($.__views.__alloyId3);
    $.__views.__alloyId1 = A$(Ti.UI.createTab({
        window: $.__views.__alloyId2,
        title: "Tab 1",
        icon: "KS_nav_ui.png",
        id: "__alloyId1"
    }), "Tab", null);
    $.__views.index.addTab($.__views.__alloyId1);
    $.__views.__alloyId5 = A$(Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Tab 2",
        id: "__alloyId5"
    }), "Window", null);
    $.__views.GetJson = A$(Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        text: "Waiting for JSON",
        id: "GetJson"
    }), "Label", $.__views.__alloyId5);
    $.__views.__alloyId5.add($.__views.GetJson);
    $.__views.__alloyId4 = A$(Ti.UI.createTab({
        window: $.__views.__alloyId5,
        title: "Tab 2",
        icon: "KS_nav_views.png",
        id: "__alloyId4"
    }), "Tab", null);
    $.__views.index.addTab($.__views.__alloyId4);
    $.__views.win = A$(Ti.UI.createWindow({
        backgroundColor: "#fff",
        id: "win"
    }), "Window", null);
    $.__views.__alloyId6 = A$(Ti.UI.createTab({
        window: $.__views.win,
        title: "Map",
        id: "__alloyId6"
    }), "Tab", null);
    $.__views.index.addTab($.__views.__alloyId6);
    $.addTopLevelView($.__views.index);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    __defers["$.__views.Search!click!Search"] && $.__views.Search.on("click", Search);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;