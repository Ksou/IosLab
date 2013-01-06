function Templates(UiType) {
    var UIelement = null;
    if (UiType == "SCView" || UiType == "SCview") UIelement = Titanium.UI.createScrollView({
        contentWidth: "auto",
        contentHeight: "auto",
        top: 55,
        showVerticalScrollIndicator: !0,
        showHorizontalScrollIndicator: !0
    });
    UiType == "Button" && (UIelement = Ti.UI.createButton({
        title: "Get Data",
        height: "auto",
        width: "auto",
        top: 66
    }));
    if (UiType == "Label" || UiType == "label") UIelement = Titanium.UI.createLabel({
        color: "black",
        font: {
            fontSize: "17dp",
            fontFamily: "Helvetica Neue"
        }
    });
    if (UiType == "textF" || UiType == "textf") UIelement = Ti.UI.createTextField({
        color: "#000000",
        height: "auto",
        width: "auto"
    });
    return UIelement;
}

module.exports = Templates;