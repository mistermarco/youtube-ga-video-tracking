      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      function onYouTubeIframeAPIReady() {

        yt_players = document.getElementsByClassName("yt-player");

        // Assign unique IDs, overriding any that might exist
        for (var i = 0; i < yt_players.length; i++) {
          yt_players[i].id = 'yt-player-' + i;
        }


        // Create the players
        for (var i = 0; i < yt_players.length; i++) {
          yt_players[i].setAttribute('playStarted', '0');
          new YT.Player(yt_players[i].id, {
            videoId: yt_players[i].getAttribute('videoId'),
            playerVars: {'rel' : 0},
            events: {
              'onReady': onPlayerReady,
              'onStateChange': onPlayerStateChange
            }
          });
        }
      }

      function onPlayerReady(event) {
        // nothing to do
      }

      function onPlayerStateChange(event) {
        
        // we only want to log the first press of the play button
        playStarted = event.target.getIframe().getAttribute('playStarted');

        if (event.data == YT.PlayerState.PLAYING && (playStarted != 1)) {
          data = event.target.getVideoData();
          event.target.getIframe().setAttribute('playStarted', '1');
          console.log('playing ' + data.title);
          ga('send', 'event', 'Videos', 'play', data.title);
        }
        if (event.data == YT.PlayerState.ENDED) {
          data = event.target.getVideoData();
          console.log(data.title + ' ended');
          ga('send', 'event', 'Videos', 'end', data.title);
        }
      }
