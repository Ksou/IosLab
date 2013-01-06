function AddMenu() {
    var win = Ti.UI.createWindow({
        fullscreen: !0
    }), activity = win.activity;
    activity.onCreateOptionsMenu = function(e) {
        var menu = e.menu, menuItem = menu.add({
            title: "Item 1"
        });
        menuItem.icon = "item1.png";
        menuItem.addEventListener("click", function(e) {
            Ti.API.debug("I was clicked");
        });
    };
    return win;
}

module.exports = AddMenu;