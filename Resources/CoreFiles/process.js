function Process(data, UiStuff) {
    var table = Titanium.UI.createTableView({
        data: data
    }), RowNew = Titanium.UI.createTableViewRow({
        font: {
            fontSize: 40
        },
        title: " Back "
    });
    table.appendRow(RowNew);
    table.addEventListener("click", function(e) {
        if (e.index == table.data[0].rows.length - 1) BackE(UiStuff, table); else {
            JM = !1;
            if (data[e.index].color != "blue") var Closer = data[e.index].permalink_url, Sounder = Closer + "/" + "/download.mp3"; else {
                JM = !0;
                var Sounder = "http://storage-new.newjamendo.com/download/track/" + data[e.index].id + "/mp32";
            }
            if (data[e.index].downloadable == 0) alert(" Sorry we can't play :" + data[e.index].title); else {
                MusicPlayer = require("CoreFiles/MusicPlayer");
                MusicPlayer(Sounder, data[e.index], JM);
            }
        }
    });
    UiStuff.self.remove(UiStuff.label);
    UiStuff.self.remove(UiStuff.aButton);
    UiStuff.self.add(table);
}

function BackE(UiStuff, table) {
    UiStuff.self.remove(table);
    UiStuff.self.add(UiStuff.label);
    UiStuff.self.add(UiStuff.aButton);
}

var JM;

module.exports = Process;