function Controller() {
    function OnLoad() {
        Alloy.Globals.scFlow = $.scFlow;
        var ButtonLeft = Ti.UI.createButton({
            title: "Back"
        }), StopButton = Ti.UI.createButton({
            title: "Stop"
        }), ButtonInfo = Ti.UI.createButton({
            title: "Info"
        }), WinM = $.Main;
        ButtonLeft.addEventListener("click", Back);
        ButtonInfo.addEventListener("click", function() {
            alert("This is the main page, from here you can search for music");
        });
        Alloy.Globals.MainWin = WinM;
        Alloy.Globals.LeftButton = ButtonLeft;
        Alloy.Globals.InfoButton = ButtonInfo;
        StopButton.addEventListener("click", function() {
            if (Alloy.Globals.Player != null) if (Alloy.Globals.Player.playing) {
                StopButton.title = "Play";
                Alloy.Globals.Player.stop();
            } else {
                StopButton.title = "Stop";
                Alloy.Globals.Player.play();
            }
        });
        Alloy.Globals.StopButton = StopButton;
        (Ti.Platform.osname == "iphone" || Ti.Platform.osname == "ipad") && Alloy.Globals.MainWin.setLeftNavButton(Alloy.Globals.InfoButton);
    }
    function IosCheck() {
        Alloy.Globals.Alerts ? Alloy.Globals.Alerts = !1 : Alloy.Globals.Alerts = !0;
    }
    function Search() {
        (Ti.Platform.osname == "iphone" || Ti.Platform.osname == "ipad") && Alloy.Globals.MainWin.setLeftNavButton(Alloy.Globals.LeftButton);
        Alloy.Globals.UIStuff = [ "TextH", "Label1", "Button1", "tableP", "AlertSwitch", "AlertLabel" ];
        Alloy.Globals.UIStuff[0] = $.GetJson;
        Alloy.Globals.UIStuff[0].text = " yo ";
        Alloy.Globals.UIStuff[1] = $.Label1;
        Alloy.Globals.UIStuff[2] = $.Search;
        Alloy.Globals.UIStuff[3] = $.tableP;
        Alloy.Globals.UIStuff[4] = $.Alerts;
        Alloy.Globals.UIStuff[5] = $.AL;
        $.tableP.visible = !0;
        $.AL.visible = !1;
        $.Alerts.visible = !1;
        Alloy.Globals.Alerts && alert("Search fired ");
        SCson = require("CoreFiles/SCson");
        $.Label1.visible = !1;
        $.Search.visible = !1;
        SCson($.Label1.value);
    }
    function Back() {
        (Ti.Platform.osname == "iphone" || Ti.Platform.osname == "ipad") && Alloy.Globals.MainWin.setLeftNavButton(Alloy.Globals.InfoButton);
        Alloy.Globals.Alerts && alert("Fall Back ");
        for (var i = 0; i < Alloy.Globals.UIStuff.length; i++) i != 3 ? Alloy.Globals.UIStuff[i].visible = !0 : Alloy.Globals.UIStuff[i].visible = !1;
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
    $.__views.Main = A$(Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Tab 1",
        id: "Main"
    }), "Window", null);
    OnLoad ? $.__views.Main.on("open", OnLoad) : __defers["$.__views.Main!open!OnLoad"] = !0;
    $.__views.tableP = A$(Ti.UI.createTableView({
        id: "tableP",
        visible: "false"
    }), "TableView", $.__views.Main);
    $.__views.Main.add($.__views.tableP);
    $.__views.Search = A$(Ti.UI.createButton({
        title: "Search",
        top: "30",
        id: "Search"
    }), "Button", $.__views.Main);
    $.__views.Main.add($.__views.Search);
    Search ? $.__views.Search.on("click", Search) : __defers["$.__views.Search!click!Search"] = !0;
    $.__views.AL = A$(Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        text: "Alert Switch",
        top: "80",
        id: "AL"
    }), "Label", $.__views.Main);
    $.__views.Main.add($.__views.AL);
    $.__views.Alerts = A$(Ti.UI.createSwitch({
        id: "Alerts",
        value: "false",
        top: "120",
        title: "Alert Switch"
    }), "Switch", $.__views.Main);
    $.__views.Main.add($.__views.Alerts);
    IosCheck ? $.__views.Alerts.on("change", IosCheck) : __defers["$.__views.Alerts!change!IosCheck"] = !0;
    $.__views.Label1 = A$(Ti.UI.createTextField({
        id: "Label1",
        width: "60",
        hintText: " Search Here "
    }), "TextField", $.__views.Main);
    $.__views.Main.add($.__views.Label1);
    $.__views.__alloyId1 = A$(Ti.UI.createTab({
        window: $.__views.Main,
        title: "Tab 1",
        icon: "KS_nav_ui.png",
        id: "__alloyId1"
    }), "Tab", null);
    $.__views.index.addTab($.__views.__alloyId1);
    $.__views.__alloyId3 = A$(Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Tab 2",
        id: "__alloyId3"
    }), "Window", null);
    var __alloyId4 = [];
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
    }), "Label", null);
    __alloyId4.push($.__views.GetJson);
    $.__views.scrollableView = A$(Ti.UI.createScrollableView({
        views: __alloyId4,
        id: "scrollableView",
        showPagingControl: "true",
        scrollingEnabled: "true",
        width: "auto",
        height: "auto"
    }), "ScrollableView", $.__views.__alloyId3);
    $.__views.__alloyId3.add($.__views.scrollableView);
    $.__views.__alloyId2 = A$(Ti.UI.createTab({
        window: $.__views.__alloyId3,
        title: "Tab 2",
        icon: "KS_nav_views.png",
        id: "__alloyId2"
    }), "Tab", null);
    $.__views.index.addTab($.__views.__alloyId2);
    $.__views.scFlow = A$(Ti.UI.createWindow({
        backgroundColor: "white",
        id: "scFlow"
    }), "Window", null);
    $.__views.__alloyId5 = A$(Ti.UI.createTab({
        window: $.__views.scFlow,
        title: "SC CoverFlow",
        id: "__alloyId5"
    }), "Tab", null);
    $.__views.index.addTab($.__views.__alloyId5);
    $.addTopLevelView($.__views.index);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    __defers["$.__views.Main!open!OnLoad"] && $.__views.Main.on("open", OnLoad);
    __defers["$.__views.Search!click!Search"] && $.__views.Search.on("click", Search);
    __defers["$.__views.Alerts!change!IosCheck"] && $.__views.Alerts.on("change", IosCheck);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;