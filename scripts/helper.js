class Helper {
  playPauseAndUpdate(song) {
    player.playPause(song);
    const totalTime = (song && song.duration) || player.getDuration();
    $('#time-control .total-time').text(player.prettyTime(totalTime));
  }
}

const helper = new Helper();
