function TextLoad(TextPath) {
    var readContents, dir = Ti.Filesystem.getResourcesDirectory(), readFile = Ti.Filesystem.getFile(dir + TextPath), LoadFail;
    if (readFile.exists()) {
        readContents = readFile.read();
        LoadFail = !1;
    } else LoadFail = !0;
    if (LoadFail) {
        var ReturnMe = "Failed to load text";
        return ReturnMe;
    }
    return readContents.text;
}

module.exports = TextLoad;