function MusicPlayer(Song, SongMeta, JM) {
    var SongInfo = Ti.UI.createAlertDialog({
        cancel: 1,
        buttonNames: [ "Artist Page", "Close" ],
        title: SongMeta.title
    });
    SongInfo.addEventListener("click", function(e) {
        if (e.index === 1) {
            SongInfo.hide();
            RowPlay && RowPlay.stop();
        }
        if (e.index == 0) {
            RowPlay && RowPlay.stop();
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
}

function TimeOut() {}

module.exports = MusicPlayer;