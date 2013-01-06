function json2txt(obj, path) {
    var txt = "";
    for (var key in obj) obj.hasOwnProperty(key) && ("object" == typeof obj[key] ? txt += json2txt(obj[key], path + (path ? "." : "") + key) : txt += path + "." + key + "	" + obj[key] + "\n");
    return txt;
}

module.exports = json2txt;