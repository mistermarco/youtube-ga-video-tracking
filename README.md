# youtube-ga-video-tracking
Track plays of Youtube videos using Google Analytics

## How to use
To use within Drupal, add youtube.js (using a module like JS Injector) to the pages containing Youtube videos.

Add videos to a page using the following code:

    <div class="yt-player" videoid="youtube-video-id">&nbsp;</div>

where youtube-video-id is the ID of the Youtube video (e.g. oHg5SJYRHA0)

The Javascript code will replace the div using the Youtube iframe API and send Google Analytics events.

## Extra tags

The videos are embedded using the Youtube Frame API and set not to show related content once the video has stopped playing. (rel = 0)

## Events tracked

* first play on a video (subsequent plays are not tracked, e.g. someone pausing the video and then clicking play again)
* end of videos (if a video is watched to the end)

## Resources
https://developers.google.com/youtube/iframe_api_reference
