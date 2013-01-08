function MusicPlayer(Song, SongMeta, JM) {
    if (Ti.Platform.osname == "android" || Ti.Platform.osname == "iphone" || Ti.Platform.osname == "ipad") var RowPlay = Ti.Media.createAudioPlayer({
        url: Song
    });
    var SongInfo = Ti.UI.createAlertDialog({
        cancel: 1,
        buttonNames: [ "Artist Page", "Close" ],
        title: SongMeta.title
    });
    SongInfo.addEventListener("click", function(e) {
        if (e.index === 1) {
            SongInfo.hide();
            if (RowPlay) {
                RowPlay.stop();
                Ti.Platform.osname == "android" && RowPlay.release();
            }
        }
        if (e.index == 0) {
            if (RowPlay) {
                RowPlay.stop();
                Ti.Platform.osname == "android" && RowPlay.release();
            }
            if (!JM) {
                var SGu = SongMeta.user.permalink_url;
                Titanium.Platform.openURL(SGu);
            } else Titanium.Platform.openURL("http://www.jamendo.com/en/");
        }
        if (e.index == 2 && RowPlay) {
            RowPlay.stop();
            RowPlay.release();
        }
    });
    SongInfo.show();
    (Ti.Platform.osname == "android" || Ti.Platform.osname == "iphone" || Ti.Platform.osname == "ipad") && RowPlay.play();
}

function TimeOut() {}

module.exports = MusicPlayer;