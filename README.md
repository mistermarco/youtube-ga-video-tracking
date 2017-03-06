# youtube-ga-video-tracking
Track plays of Youtube videos using Google Analytics

To use within Drupal, add youtube.js (using a module like JS Injector) to the pages containing Youtube videos.

Add videos to a page using the following code:
<div class="yt-player" videoid="ZYsWoROxYvI">&nbsp;</div>

The Javascript code will replace the div using the Youtube iframe API and send Google Analytics events.

The following events are tracked:

* first play on a video (subsequent plays are not tracked, e.g. someone pausing the video and then clicking play again)
* end of videos (if a video is watched to the end)
