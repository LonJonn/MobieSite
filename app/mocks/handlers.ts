import { rest } from "msw";

export const handlers = [
  rest.get("https://lookmovie2.to/api/v1/movies/do-search", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        per_page: 20,
        total: 2,
        result: [
          {
            imdb_rating: "4.9",
            slug: "0118747-blues-brothers-2000-1998",
            year: "1998",
            flag_quality: "7",
            release_date: "1998-02-05 00:00:00",
            title: "Blues Brothers 2000",
            backdrop: "https://cloudcdn.monster/images/b/w342/a4cc0344bd9e6537ac86ab973f0f0d4a.jpg",
            poster: "https://cloudcdn.monster/images/p/w200/cede258cdfb21878a2dd8255503b6243.jpg",
          },
          {
            imdb_rating: "7.9",
            slug: "the-blues-brothers-1980",
            year: "1980",
            flag_quality: "8",
            release_date: "1980-06-17 00:00:00",
            title: "The Blues Brothers",
            backdrop: "https://cloudcdn.monster/images/b/w342/964250975789de8b0b287f6d477199b8.jpg",
            poster: "https://cloudcdn.monster/images/p/w200/71555ec4021b999611a6759222bc0dcc.jpg",
          },
        ],
      })
    );
  }),

  rest.get("https://lookmovie2.to/movies/view/0245429-spirited-away-2001", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.text(`


<!DOCTYPE html>
<html lang="en-US">
<head data-cast-api-enabled="true">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="csrf-param" content="_csrf">
<meta name="csrf-token" content="vd88gLrm8zmUiMxD1YiaqAbL06kMrW6tJuZJL474a9zfiFH01YemTuLxhSeU6tHaNqaJxWL4XZ5PnA9W468-hQ==">
    <title>Watch movie Spirited Away 2001 on lookmovie in 1080p high definition</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/manifest.json">
    <link rel="dns-prefetch" href="//image.tmdb.org">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">
    <link href="//fonts.googleapis.com/css?family=Merriweather+Sans:700" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Dosis:300,400,600,700|Nunito:400,600&display=swap" rel="stylesheet">
            <!-- Yandex.Metrika counter -->
<script type="text/javascript" >
    (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

    ym(87972481, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
    });
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/87972481" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->
        <script>
    window.ga = window.ga || function () {
        (ga.q = ga.q || []).push(arguments)
    };
    ga.l = +new Date;
    ga('create', 'UA-122655565-1', 'auto');
    ga('send', 'pageview');

    let gaScript = document.createElement('script');
    gaScript.src = '//metrika.' + window.location.host + '/analytics.js';
    document.head.appendChild(gaScript);
</script>        <script>
    window.addEventListener('DOMContentLoaded', function () {
        $(document).on('click', 'a', function () {
            if (window.self !== window.top) {
                let url = $(this).attr('href');
                if (typeof (url) !== 'undefined') {
                    url = url.indexOf('?') === -1 ? url + "?utm_source=fb" : "&utm_source=fb";
                    top.window.location.href = url;
                }
            }
        });
    });
</script>        <script src="https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoaded&render=6Ley5moUAAAAAJxloiuF--u_uS28aYUj-0E6tSfZ&render=explicit" async defer></script>
    <meta name="description" content="During her family&#039;s move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.">
<meta name="keywords" content="Spirited AwayAdventure, Animation, Family">
<meta property="og:url" content="//lookmovie.io/movies/view/0245429-spirited-away-2001">
<meta property="og:title" content="Watch movie Spirited Away 2001 on lookmovie in 1080p high definition">
<meta property="og:description" content="During her family&#039;s move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.">
<meta property="og:site_name" content="lookmovie">
<meta property="og:type" content="video.movie">
<meta property="og:image" content="https://cloudcdn.monster/images/p/w500/e96b650f0c9d3a9b5eec2bf12725f447.jpg">
<meta property="og:image:width" content="300">
<meta property="og:image:height" content="450">
<meta property="og:image:type" content="image/jpeg">
<link href="//lookmovie.io/movies/view/0245429-spirited-away-2001" rel="canonical">
<link href="/assets/player-6f0ef42df8c32e3c5966e2cff0ce9508.css" rel="stylesheet">
<link href="/assets/all-88c71d036631ad3d709569f9a470380f.css" rel="stylesheet">
<link href="/assets/vendor-1cc13cf07ef292007afec537e23db3b2.css" rel="stylesheet">
<script>window.route="movies/view";</script>    <script>
        Yii2App = {
            baseDomain: "lookmovie2.to",
            referrer: "",
            word: 'activerevenue',
            ENV: "prod",
            HOTLINK_SK_DURATION: 14000,
            playbackStatus: 'limited',
            apiDomain: "//api.lookmovie.ag"
        };

        function debug(e){if("undefined"!=typeof Yii2App&&void 0!==Yii2App.ENV&&"dev"!==Yii2App.ENV)return!1;let i=new Date,o=i.getHours()+":"+i.getMinutes()+":"+i.getSeconds()+"."+i.getMilliseconds();console.log("%c["+o+"] "+e,"color:white; background: black; padding: 0 5px; border-radius: 0;")}

        window['__fired_events'] = [];

        function fire_event(EventName)
        {
            let event = document.createEvent('Event');
            event.initEvent(EventName, true, true);
            window.dispatchEvent(event);

            debug('Fired Event: ' + EventName);

            window['__fired_events'].push(EventName);
        }

        
        window.onRecaptchaLoaded = function () {
            fire_event('ReCaptchaLoaded');
        }
    </script>
    <style>
        .mn-related-container .mn-thumb {
            background: #233a50;
            border-radius: 4px;
        }
        .mn-related-container .mn-thumb a {
            font-family: Dosis,sans-serif;
            color: #abb7c4;
            font-size: 1.05em;
            text-align: center;
            font-weight: bold;
        }
        .telegram-link {
            position: fixed;
            bottom: 20px;
            right: 20px;
            cursor: pointer;
            z-index: 999;
        }
    </style>
</head>
<body style="background: #020d18;" >



<div id="app" class="desktop">
    <header class="ht-header LookmovieMoviesView">
        <div class="logo-area navbar-header logo">
            <a href="/">
                <img class="logo" src="/images/logo1.png" alt="lookmovie">
            </a>
        </div>

        
<div class="menu-area-wrapper">
    <div class="menu-area">
        <div class="menu-tabs">
            <nav class="navbar navbar-default navbar-custom top-level-nav">
                <div class="collapse navbar-collapse flex-parent">
                    <ul class="nav navbar-nav flex-child-menu menu-left">
                        <li class=" active">
                            <a href="/">Movies</a>
                        </li>
                        <li class="">
                            <a href="/shows">TV Shows</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>

                    <nav class="navbar navbar-default navbar-custom">
                <div class="navbar-collapse flex-parent">
                    <!-- Main menu section -->
                    <ul class="nav navbar-nav flex-child-menu menu-left">
                        <li class="hidden">
                            <a href="#page-top"></a>
                        </li>
                        <li>
                            <a href="/" class="HomeFilter">filter</a>
                        </li>
                                                <li>
                            <a href="/movies" class="Movies">Latest</a>
                        </li>
                        <li class="dropdown first">
                            <a href="/#">Categories <i class="ion-ios-arrow-down"></i></a>
                            <ul class="dropdown-menu level1 dropdownhover-bottom">
                                <li><a href="/movies/genre/action">Action</a></li>
                                <li><a href="/movies/genre/adventure">Adventure</a></li>
                                <li><a href="/movies/genre/animation">Animation</a></li>
                                <li><a href="/movies/genre/comedy">Comedy</a></li>
                                <li><a href="/movies/genre/crime">Crime</a></li>
                                <li><a href="/movies/genre/drama">Drama</a></li>
                                <li><a href="/movies/genre/documentary">Documentary</a></li>
                                <li><a href="/movies/genre/science-fiction">Sci-Fi</a></li>
                                <li><a href="/movies/genre/family">Family</a></li>
                                <li><a href="/movies/genre/history">History</a></li>
                                <li><a href="/movies/genre/fantasy">Fantasy</a></li>
                                <li><a href="/movies/genre/horror">Horror</a></li>
                                <li><a href="/movies/genre/music">Music</a></li>
                                <li><a href="/movies/genre/mystery">Mystery</a></li>
                                <li><a href="/movies/genre/romance">Romance</a></li>
                                <li><a href="/movies/genre/thriller">Thriller</a></li>
                                <li><a href="/movies/genre/war">War</a></li>
                                <li><a href="/movies/genre/western">Western</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="/movies/genres" class="MoviesGenres">genres</a>
                        </li>
                                            </ul>
                </div>
            </nav>
        
            </div>

    <div class="menu-area-right">
        <div class="search-area">
            <i class="header__search-open mobile-search--toggle ion-ios-search"></i>
<div class="top-search">
  <div class="top-search__inner-wrapper">
    <a href="#" class="header__search-open"><i class="ion-ios-search"></i></a>
    <input id="search_input" type="text" value="" placeholder="Search for a Movie or TV Show">
    <a href="#" class="header__search-close"><i class="ion-ios-close-empty"></i></a>
  </div>
  <div class="top-search__list" style="display: none;">
    <div id="movies-list"></div>
    <div id="shows-list"></div>
  </div>
</div>        </div>

        <ul class="nav navbar-nav flex-child-menu menu-right">
                                        <li>
                    <a href="/account/login" class="loginLink">Login</a>
                </li>
                <li>
                    <a href="/premium.html" class="loginLink" style="margin-left: 0;">Signup</a>
                </li>
                    </ul>
    </div>

</div>

            </header>

    
<script>
    window['movie_storage'] = {
        id_movie: 5851,
        type: 'movie',
        key: 'lookmovie.mv_5851',
        movie_poster: 'https://cloudcdn.monster/images/p/w500/e96b650f0c9d3a9b5eec2bf12725f447.jpg',
        backdrop_huge: 'https://cloudcdn.monster/images/b/w1280/05b6bf7deb881d1306ac7cfbd798f6a9.jpg',
        backdrop_medium: 'https://cloudcdn.monster/images/b/w780/05b6bf7deb881d1306ac7cfbd798f6a9.jpg',
        backdrop_small: 'https://cloudcdn.monster/images/b/w342/05b6bf7deb881d1306ac7cfbd798f6a9.jpg',
        title: 'Spirited Away',
        year: '2001',
        text_tracks: [
            {
                "language": "sub-empty-invisible",
                "file": "blob:"
            }
        ]
    };
</script>

<style type="text/css">
    div[data-name="header"] div,
    div[data-name="title"] div {
        color: #abb7c4;
    }

    div#LabsIFrameContainer > iframe {
        background: rgba(0,0,0,0.8);
    }
</style>

<div class="view-movie">
    <div class="page-single movie-single movie_single">
        <div class="hero mv-single-hero lozad" data-background-image="https://cloudcdn.monster/images/b/w1280/05b6bf7deb881d1306ac7cfbd798f6a9.jpg"></div>
        <div class="container internal-page-container">
        <div class="row ipad-width2">
                <div class="col-sm-12">
                    <div class="movie-single-ct main-content">
                        <div class="watch-heading">
                            <h1 class="bd-hd"> Spirited Away <span>2001</span></h1>
                            <div class="movie-rate">
                                <div class="rate">
                                    <p><span>8.6</span></p>
                                    <p>IMDB</p>
                                </div>
                            </div>
                        </div>
                                            </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12">
                    <a href="https://lookmovie2.to/m/17/5851/s" class="round-button"><i class="ion-play big-play" style="font-size: 80px;"></i></a>
                </div>
            </div>
            <div class="row ipad-width2">
                <div class="col-md-4 col-sm-12 col-xs-12 hidden-sm hidden-xs">
                    <div class="movie-img">
                        <p class="movie__poster lozad" data-background-image="https://cloudcdn.monster/images/p/w500/e96b650f0c9d3a9b5eec2bf12725f447.jpg"></p>
                    </div>
                                        <div class="movie-btn">
                        <div class="yt-wrapper" id="yt-trailer">
                            <div class="btn-transform transform-vertical red">
                                <div>
                                    <a href="#" style="z-index: 2;" class="item item-1 redbtn-solid open-youtube-trailer">
                                        Watch Trailer
                                    </a>
                                </div>
                                <div>
                                    <a class="item item-2 redbtn-solid open-youtube-trailer" href="#">
                                        <i class="ion-play"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                                    </div>
                <div class="col-md-8 col-sm-12 col-xs-12">
                    <section id="overview">
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="movie-description__header">
                                    <div class="genres">
                                        <span>2001</span>
                                                                                    <span>, Adventure, Animation, Family</span>
                                                                            </div>
                                    <div class="duration">
                                                                                    <div class="row">
                                                <div class="col-sm-12">
                                                    <div class="movie-description__duration">
                                                        <span>125 min.</span>
                                                    </div>
                                                </div>
                                            </div>
                                                                            </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-12 col-sm-12 col-xs-12">
                                <div class="description-wrapper">
                                    <p class="description">
                                        During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.                                        <span class="less">less</span>
                                    </p>
                                    <p class="description-short">
                                        During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.                                    </p>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-12 col-xs-12 hidden-md hidden-lg">
                                <div class="movie-img">
                                    <p class="movie__poster lozad" data-background-image="https://cloudcdn.monster/images/p/w500/e96b650f0c9d3a9b5eec2bf12725f447.jpg"></p>
                                </div>
                                                                <div class="movie-btn">
                                    <div class="yt-wrapper" id="yt-trailer">
                                        <div class="btn-transform transform-vertical red">
                                            <div>
                                                <a href="#" style="z-index: 2;" class="item item-1 redbtn-solid open-youtube-trailer">
                                                    Watch Trailer
                                                </a>
                                            </div>
                                            <div>
                                                <a class="item item-2 redbtn-solid open-youtube-trailer" href="#">
                                                    <i class="ion-play"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                                            </div>
                        </div>
                    </section>

                    <div class="cast">
    <div class="title-hd-sm">
    </div>
            <div class="actors sb-it">
            <h6>Stars:</h6>
            <div class="actors__wrapper">
                <ul class="actors__cards">
                                            <li class="actor__card">
                                                            <p style="background-image: url(https://cloudcdn.monster/images/f/w185/86167f025cb30f3cd3f0b0331cba449a.jpg)" class="actor__image">
                                </p>
                                                        <div class="actor__info">
                                <p class="actor__name">
                                    Daveigh Chase                                </p>
                            </div>
                        </li>
                                            <li class="actor__card">
                                                            <p style="background-image: url(https://cloudcdn.monster/images/f/w185/05c3e7c9425a0de690f07b462351b1fe.jpg)" class="actor__image">
                                </p>
                                                        <div class="actor__info">
                                <p class="actor__name">
                                    Suzanne Pleshette                                </p>
                            </div>
                        </li>
                                            <li class="actor__card">
                                                            <p style="background-image: url(https://cloudcdn.monster/images/f/w185/2115de18bbdd8f7ceb025bd3dd3b84f1.jpg)" class="actor__image">
                                </p>
                                                        <div class="actor__info">
                                <p class="actor__name">
                                    Miyu Irino                                </p>
                            </div>
                        </li>
                                            <li class="actor__card">
                                                            <p style="background-image: url(https://cloudcdn.monster/images/f/w185/c9c3f7e56bfbc47824fb374f7fcae6e5.jpg)" class="actor__image">
                                </p>
                                                        <div class="actor__info">
                                <p class="actor__name">
                                    Rumi Hiiragi                                </p>
                            </div>
                        </li>
                                            <li class="actor__card">
                                                            <p style="background-image: url(https://cloudcdn.monster/images/f/w185/0eabe2fab74485da84cd69cd5e548189.jpg)" class="actor__image">
                                </p>
                                                        <div class="actor__info">
                                <p class="actor__name">
                                    Mari Natsuki                                </p>
                            </div>
                        </li>
                                    </ul>
            </div>
        </div>
        </div>
                </div>
            </div>
        </div>
    </div>

            <div class="overlay-wrapper" id="yt-trailer">
            <div class="overlay">
                <div class="close">
                    <i class="ion-close"></i>
                </div>
                <div class="yt-framewrapper"></div>
            </div>
        </div>
    
    <script>
        window.addEventListener('DOMContentLoaded', function () {
            let overlay = document.querySelector('#yt-trailer .overlay');
            let iframeContainer = document.querySelector('#yt-trailer .yt-framewrapper');
            iframeContainer.style.height = window.innerWidth * 0.75 * 0.5625 + 'px';
            iframeContainer.style.width = window.innerWidth * 0.75 + 'px';
            iframeContainer.innerHTML = '';

            $(document).on('click', '.open-youtube-trailer', function (e) {
                e.preventDefault();
                iframeContainer.innerHTML = '';
                overlay.classList.add('openform');

                let iframe = document.createElement('iframe');
                iframe.src = '//www.youtube.com/embed/ByXuk9QqQkk?autoplay=1&rel=0&hd=1&wmode=transparent&enablejsapi=1&html5=1&mute=1';
                iframe.classList.add('yt-iframe');
                iframe.allow = 'autoplay';
                document.querySelector('.yt-framewrapper').appendChild(iframe);
            });

            document.querySelector('#yt-trailer .close').onclick = function () {
                iframeContainer.innerHTML = '';
                overlay.classList.remove('openform');
            };
        });
    </script>

    <div class="movie-items movies-items__category">
  <div class="container">
    <div class="row ipad-width">
      <div class="col-md-12">
        <div class="title-hd">
          <h2>You may also like:</h2>
        </div>
        <div class="row">
          <div class="owl-carousel owl-theme" id="similar-movies">
                          <div class="movie-item">
                <div class="movie-item-style-2 movie-item-style-1">
                  <a href="/movies/view/0044658-commando-sur-saint-nazaire-1952">
                    <div class="hvr-inner">
                      Watch NOW <i class="ion-play"></i>
                    </div>
                                          <p class="item__image lozad" data-background-image="https://cloudcdn.monster/images/p/w300/8add35e945a1756e55b31e937df8f333.jpg"  >
                        <div class="quality-tag tooltip">
  HD  <span class="tooltiptext" style="display: none;">High Definition. We bring you this movie in multiple Definitions. 
 1080p, 720p, 480p, 360p - for all types of connection speeds. 
 This movie was encoded directly from a Blu-ray disc to 4 variations</span>
</div>                      </p>
                                                              <p class="rate"><i class="ion-android-star"></i><span>6.3</span> /10</p>
                                        <p class="year">1952</p>
                  </a>
                  <div class="mv-item-infor">
                    <h6><a href="/movies/view/0044658-commando-sur-saint-nazaire-1952">Glory at Sea</a></h6>
                  </div>
                </div>
              </div>
                          <div class="movie-item">
                <div class="movie-item-style-2 movie-item-style-1">
                  <a href="/movies/view/2077766-i-love-your-moves-2012">
                    <div class="hvr-inner">
                      Watch NOW <i class="ion-play"></i>
                    </div>
                                          <p class="item__image lozad" data-background-image="https://cloudcdn.monster/images/p/w300/cf1a7078f1dde9a864d0157c338520f3.jpg"  >
                        <div class="quality-tag tooltip">
  HD  <span class="tooltiptext" style="display: none;">High Definition. We bring you this movie in multiple Definitions. 
 1080p, 720p, 480p, 360p - for all types of connection speeds. 
 This movie was encoded directly from a Blu-ray disc to 4 variations</span>
</div>                      </p>
                                                              <p class="rate"><i class="ion-android-star"></i><span>4.2</span> /10</p>
                                        <p class="year">2012</p>
                  </a>
                  <div class="mv-item-infor">
                    <h6><a href="/movies/view/2077766-i-love-your-moves-2012">I Love Your Moves</a></h6>
                  </div>
                </div>
              </div>
                          <div class="movie-item">
                <div class="movie-item-style-2 movie-item-style-1">
                  <a href="/movies/view/7974634-koati-2021">
                    <div class="hvr-inner">
                      Watch NOW <i class="ion-play"></i>
                    </div>
                                          <p class="item__image lozad" data-background-image="https://cloudcdn.monster/images/p/w300/48817d2162ee68b0b7e365cb9a8e6d5b.jpg"  >
                        <div class="quality-tag tooltip">
  HD  <span class="tooltiptext" style="display: none;">High Definition. We bring you this movie in multiple Definitions. 
 1080p, 720p, 480p, 360p - for all types of connection speeds. 
 This movie was encoded directly from a Blu-ray disc to 4 variations</span>
</div>                      </p>
                                                              <p class="rate"><i class="ion-android-star"></i><span>7.3</span> /10</p>
                                        <p class="year">2021</p>
                  </a>
                  <div class="mv-item-infor">
                    <h6><a href="/movies/view/7974634-koati-2021">Koati</a></h6>
                  </div>
                </div>
              </div>
                          <div class="movie-item">
                <div class="movie-item-style-2 movie-item-style-1">
                  <a href="/movies/view/0105530-dans-les-griffes-de-lx27aigle-1992">
                    <div class="hvr-inner">
                      Watch NOW <i class="ion-play"></i>
                    </div>
                                          <p class="item__image lozad" data-background-image="https://cloudcdn.monster/images/p/w300/f5d584af6c6b3c9691bd90c81e47eb50.jpg"  >
                        <div class="quality-tag tooltip">
  HD  <span class="tooltiptext" style="display: none;">High Definition. We bring you this movie in multiple Definitions. 
 1080p, 720p, 480p, 360p - for all types of connection speeds. 
 This movie was encoded directly from a Blu-ray disc to 4 variations</span>
</div>                      </p>
                                                              <p class="rate"><i class="ion-android-star"></i><span>4.8</span> /10</p>
                                        <p class="year">1992</p>
                  </a>
                  <div class="mv-item-infor">
                    <h6><a href="/movies/view/0105530-dans-les-griffes-de-lx27aigle-1992">Talons of the Eagle</a></h6>
                  </div>
                </div>
              </div>
                          <div class="movie-item">
                <div class="movie-item-style-2 movie-item-style-1">
                  <a href="/movies/view/10270416-jurassic-island-2022">
                    <div class="hvr-inner">
                      Watch NOW <i class="ion-play"></i>
                    </div>
                                          <p class="item__image lozad" data-background-image="https://cloudcdn.monster/images/p/w300/ad2467040944885c4c0d728a80b16b46.jpg"  >
                        <div class="quality-tag tooltip">
  HD  <span class="tooltiptext" style="display: none;">High Definition. We bring you this movie in multiple Definitions. 
 1080p, 720p, 480p, 360p - for all types of connection speeds. 
 This movie was encoded directly from a Blu-ray disc to 4 variations</span>
</div>                      </p>
                                                            <p class="year">2022</p>
                  </a>
                  <div class="mv-item-infor">
                    <h6><a href="/movies/view/10270416-jurassic-island-2022">Jurassic Island</a></h6>
                  </div>
                </div>
              </div>
                      </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>

<script>
    window.addEventListener('DOMContentLoaded', function () {
        SetCookie('have_visited_internal_page', 1, 86400);
    });
</script>

    <footer class="ht-footer">
        <div class="container">
            <div class="flex-parent-ft">
                <div class="flex-child-ft item1" id="ft-site-logo">
                    <a href="/">
                        <div class="adBanner ad banner" style="display: block; opacity: 1; visibility: visible;">
                            <img class="logo" src="/images/logo1.png" alt=" Logo">
                        </div>
                    </a>
                </div>
                <div class="flex-child-ft item2">
                    <ul>
                        <li><a onclick="toggleCF(event)">Contact Us</a></li>
                        <li><a target="_blank" href="https://aff.lookmovie.ag">Affiliate</a></li>
                        <li><a onclick="toggleCF(event)">Advertise</a></li>
                    </ul>
                </div>
                <div class="flex-child-ft item3">
                    <div id='donate-section' class="episodes-controls-wrapper zero-opacity">
                        <h3>Donations</h3>
                        <div class="seasons-switcher crypto-box" v-on:click="isOpenedCoins = !isOpenedCoins">
                            <span><img :src="currentCoin.img" :alt="currentCoin.code">{{ currentCoin.title }}</span>
                            <i class="up ion-ios-arrow-up"></i>
                            <ul v-if="isOpenedCoins" class="seasons">
                                <li v-for="coin in coins" v-if="coin.id !== currentCoin.id"
                                v-on:click="switchCoin(coin)"><span><img :src="coin.img" :alt="coin.code">{{ coin.title }}</span>
                            </li>
                        </ul>
                    </div>
                    <input type="text" class="switcher-input" :value="currentCoin.addr" readonly>
                </div>
            </div>
        </div>
    </div>
    <div class="ft-copyright">
        <div class="ft-left">
            <div class="users-counter">
                <i class="ion-ios-people"></i>
                <span class="value">0</span>
            </div>
        </div>
        <div class="backtotop">
            <p>
                <a href="#top" id="back-to-top">
                    Back to top
                    <i class="ion-arrow-up-c"></i>
                </a>
            </p>
        </div>
    </div>
</footer>


<div class="overlay-wrapper hidden" id="overlay-article" v-if="isActive">
    <div class="overlay openform">
        <div class="close" v-on:click="toggleActive">
            <i class="ion-close"></i>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div class="contents">

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>



    <div class="wellcome-boy-message" style="display: none;">
        <h2 class="sad-face">Adblock Detected!</h2>
        <p>We notice that you may have an AD Blocker.</p>
        <p>Ads help us pay the bills and keep providing this service for free.</p>
        <p style="text-decoration: underline;">Please disable the Ad Blocker it to continue using our website.</p>
    </div>

                                        <script>
                    window.addEventListener('DOMContentLoaded', function () {
                        if (GetCookie('prem_promo_closed') !== '1' && GetCookie('have_visited_internal_page') === '1') {
                            initPremNotification();
                        }
                    });
                </script>
            
            
                            <div id="ContactForm" class="issues-overlay overlay" v-bind:class="{openform: ContactInProgress}">
    <div v-if="isThankScreen" class="thanks-wrapper">
      <div class="movie-issue-content">
        <div class="row">
          <div class="col-sm-12">
            <h4>Message successfully sent. We will take a look.</h4>
            <hr>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12 text-right">
            <button class="finalize-report" v-on:click="toggleReport" type="submit">OK</button>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="">
      <div v-if="inProgress" class="sending-in-progress">sending data</div>
      <div class="movie-issue-content">
        <a href="#" v-on:click="toggleReport" class="close close-issues">
          <i class="ion-close"></i>
        </a>
        <h4>CONTACT US</h4>
        <h5>Please fill all fields.</h5>
        <form method="post" action="issue.py" id="report-issue-form">
          <div class="row">
            <div class="col-sm-12">
              <div class="form-group">
                <textarea placeholder="Subject" v-model="subject" name="subject" id="subject"></textarea>
                <div v-if="subject.length === 0" class="error-help">Subject is required</div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-12">
              <div class="form-group">
                  <textarea
                    placeholder="Your E-Mail address."
                    v-model="userEmail"
                    name="userEmail"
                    id="userEmail"
                  ></textarea>
                <div v-if="!isValidEmail" class="error-help">Valid email required</div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <div class="form-group">
                  <textarea
                    placeholder="Additional information. Required minimum 5 symbols"
                    v-model="message"
                    name="message"
                    id="message"
                  ></textarea>
                <div v-if="isSetMessage" class="error-help">Required minimum 5 symbols</div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <div class="form-group" id="recaptcha-container"></div>
            </div>
          </div>
          <div v-if="isProperReport" class="row">
            <div class="col-sm-12 text-right">
              <button v-on:click="submitReport" type="submit">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
</div>        <a class="telegram-link" href="https://lmofficial.to" target="_blank"><img src="/images/telegram.png" alt="telegram"></a><script src="/assets/player-72c8176053382da8378629ef8de8ca9a.js"></script>
<script src="/assets/all-40f678d245c0684479fcfab30e8bc214.js"></script>
<script src="/assets/vendor-95925b35a7694b4b8a8a0c58d16d1268.js"></script></body>
</html>

`)
    );
  }),

  rest.get("https://lookmovie2.to/api/v1/security/movie-access", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        success: true,
        streams: {
          "480p":
            "https://xfaom.cultedmotor.online/html/aes/1/1/1/storage2/movies/0245429-spirited-away-2001-1648136546/ebae5c4cf0f1336f73e3f50690f4ebae/index.m3u8",
          "720p":
            "https://xfaom.cultedmotor.online/html/aes/1/1/1/storage2/movies/0245429-spirited-away-2001-1648136546/4451448b4b1bf873f5eb3d5a6df6122e/index.m3u8",
          "1080p":
            "https://xfaom.cultedmotor.online/html/aes/1/1/1/storage2/movies/0245429-spirited-away-2001-1648136546/0a372ba5fdecf1dd2496e24523fe424c/index.m3u8",
        },
        subtitles: [
          {
            language: "English",
            source: null,
            source_id: null,
            kind: "captions",
            id: "686482",
            file: "/storage2/1649556944/movies/0245429-spirited-away-2001-1648136546/subtitles/en.vtt",
          },
        ],
      })
    );
  }),

  rest.get("https://lookmovie2.to/api/v1/shows/do-search", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        total: 1,
        result: [
          {
            title: "Moon Knight",
            slug: "10234724-moon-knight-2021",
            year: "2022",
            imdb_rating: "7.7",
            backdrop: "https://cloudcdn.monster/images/b/w342/2b4990b09b7de73d4cfcc9fc998c6480.jpg",
            poster: "https://cloudcdn.monster/images/p/w200/25f531b76ee71c1a0ee3a24ad5458018.jpg",
          },
        ],
      })
    );
  }),

  rest.get("https://lookmovie2.to/shows/play/10234724-moon-knight-2021", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.text(
        `
        
<!DOCTYPE html>
<html lang="en-US">

<head data-cast-api-enabled="true">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="csrf-param" content="_csrf">
<meta name="csrf-token" content="-c4mG6YOm8xTk_jhyyh1OIeOkg5I-aGGVSVWHC2WMAmDumBC423ugTHwgNn4GDx6tOijaH2w-LYydT4sXt99ZQ==">
    <title>Watch show Moon Knight 2022 on lookmovie for free in 1080p High Definition</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/manifest.json">
    <link rel="dns-prefetch" href="//image.tmdb.org">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">
    <link href="https://fonts.googleapis.com/css?family=Merriweather+Sans:700" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Dosis:300,400,600,700|Nunito:400,600&display=swap" rel="stylesheet">
            <!-- Yandex.Metrika counter -->
<script type="text/javascript" >
    (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

    ym(87972481, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
    });
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/87972481" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->
        <script>
    window.ga = window.ga || function () {
        (ga.q = ga.q || []).push(arguments)
    };
    ga.l = +new Date;
    ga('create', 'UA-122655565-1', 'auto');
    ga('send', 'pageview');

    let gaScript = document.createElement('script');
    gaScript.src = '//metrika.' + window.location.host + '/analytics.js';
    document.head.appendChild(gaScript);
</script>        <script src="https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoaded&render=6Ley5moUAAAAAJxloiuF--u_uS28aYUj-0E6tSfZ&render=explicit" async defer></script>
    <meta name="description" content="Steven Grant discovers he&#039;s been granted the powers of an Egyptian moon god. But he soon finds out that these newfound powers can be both a blessing and a curse to his troubled life.">
<meta name="keywords" content="Moon Knight, Adventure, Drama, Action">
<meta property="og:url" content="https://lookmovie2.to/shows/play/10234724-moon-knight-2021">
<meta property="og:title" content="Watch show Moon Knight 2022 on lookmovie for free in 1080p High Definition">
<meta property="og:description" content="Steven Grant discovers he&#039;s been granted the powers of an Egyptian moon god. But he soon finds out that these newfound powers can be both a blessing and a curse to his troubled life.">
<meta property="og:site_name" content="LookMovie">
<meta property="og:type" content="video.movie">
<meta property="og:image" content="https://cloudcdn.monster/images/p/w342/25f531b76ee71c1a0ee3a24ad5458018.jpg">
<meta property="og:image:width" content="300">
<meta property="og:image:height" content="450">
<meta property="og:image:type" content="image/jpeg">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Watch show Moon Knight 2022 on lookmovie for free in 1080p High Definition">
<meta name="twitter:description" content="">
<meta name="twitter:image" content="">
<meta property="og:url" content="https://lookmovie2.to/shows/play/10234724-moon-knight-2021">
<meta property="og:type" content="website">
<meta property="og:title" content="Watch show Moon Knight 2022 on lookmovie for free in 1080p High Definition">
<meta property="og:description" content="">
<meta property="og:image" content="">
<link href="/assets/player-8f55a055b891b793e3671d0f66847a4c.css" rel="stylesheet">
<link href="/assets/304c0494/css/style.min.css" rel="stylesheet">
<link href="/assets/all-d04c91d1f19d18f0fdcf4c691228662f.css" rel="stylesheet">
<link href="/assets/vendor-50bc0f5d5a1db727669cc9fc5b9fdb8f.css" rel="stylesheet">
<script>window.route="shows/play";
window.id_show='29954';
window.seasons='{\"1\":{\"episodes\":{\"1\":{\"index\":0,\"episode_number\":\"1\",\"id_episode\":\"166497\",\"title\":\"Episode #1.1\",\"description\":\"Steven Grant learns that he may be a superhero, but may also share a body with a ruthless mercenary.\",\"still_path\":null,\"air_date\":\"2022-03-30\",\"is_chromecast_supported\":\"0\"},\"2\":{\"index\":1,\"episode_number\":\"2\",\"id_episode\":\"167266\",\"title\":\"Episode #1.2\",\"description\":\"With little time to react, Steven is thrust into a war of the gods as a mysterious partner arrives.\",\"still_path\":null,\"air_date\":\"2022-04-06\",\"is_chromecast_supported\":\"0\"},\"3\":{\"index\":2,\"episode_number\":\"3\",\"id_episode\":\"168109\",\"title\":\"\",\"description\":\"<p>With Marc in the forefront and Harrow near Ammit\'s tomb, Marc needs to navigate Cairo while putting his differences aside with Layla and Steven without jeopardizing their mission.<\\/p>\",\"still_path\":null,\"air_date\":\"2022-04-13\",\"is_chromecast_supported\":\"0\"}},\"meta\":{\"first_air_date\":null,\"description\":null,\"title\":\"Season 1\",\"season\":\"1\",\"poster\":null}}}';
window.slug='10234724-moon-knight-2021';</script>    <script>
        Yii2App = {
            baseDomain: "https://lookmovie2.to",
            HTTP_SCHEME: "https",
            referrer: "",
            ENV: "prod",
            HOTLINK_SK_DURATION: 14000,
            playbackStatus: 'limited',
            apiDomain: "//api.mydash.cc"
        };

        function debug(e) {
            if ("undefined" != typeof Yii2App && void 0 !== Yii2App.ENV && "dev" !== Yii2App.ENV) return !1;
            let i = new Date,
                o = i.getHours() + ":" + i.getMinutes() + ":" + i.getSeconds() + "." + i.getMilliseconds();
            console.log("%c[" + o + "] " + e, "color:white; background: black; padding: 0 5px; border-radius: 0;")
        }

        window['__fired_events'] = [];

        function fire_event(EventName) {
            let event = document.createEvent('Event');
            event.initEvent(EventName, true, true);
            window.dispatchEvent(event);

            debug('Fired Event: ' + EventName);

            window['__fired_events'].push(EventName);
        }

        
        window.onRecaptchaLoaded = function() {
            fire_event('ReCaptchaLoaded');
        }
    </script>
    <style>
        .mn-related-container .mn-thumb {
            background: #233a50;
            border-radius: 4px;
        }

        .mn-related-container .mn-thumb a {
            font-family: Dosis, sans-serif;
            color: #abb7c4;
            font-size: 1.05em;
            text-align: center;
            font-weight: bold;
        }

        .telegram-link {
            position: fixed;
            bottom: 20px;
            right: 20px;
            cursor: pointer;
            z-index: 999;
        }
    </style>
</head>

<body style="background: #020d18;">
    

<div id="app" class="desktop">
    <header class="ht-header ShowsPlay">
        <div class="container">
            <div class="logo-area logo">
                <a href="https://lookmovie2.to/">
                    <img class="logo" src="/images/logo1.png" alt="lookmovie">
                </a>
            </div>

            

<div class="menu-area">
    <div class="menu-tabs">
        <nav class="navbar navbar-default navbar-custom top-level-nav">
            <div class="collapse navbar-collapse flex-parent">
                <ul class="nav navbar-nav flex-child-menu menu-left">
                    <li class="">
                        <a href="https://lookmovie2.to/">Movies</a>
                    </li>
                    <li class=" active">
                        <a href="https://lookmovie2.to/shows">TV Shows</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>

    
            <nav class="navbar navbar-default navbar-custom">
            <div class="navbar-collapse flex-parent">
                <!-- Main menu section -->
                <ul class="nav navbar-nav flex-child-menu menu-left">
                    <li class="hidden">
                        <a href="#page-top"></a>
                    </li>
                    <li>
                        <a href="https://lookmovie2.to/shows" class="ShowsIndex">Latest</a>
                    </li>
                    <li>
                        <a href="https://lookmovie2.to/shows/trending" class="ShowsTrending">Trending</a>
                    </li>
                    <li class="dropdown first">
                        <a href="/#">Categories <i class="ion-ios-arrow-down"></i></a>
                        <ul class="dropdown-menu level1 dropdownhover-bottom">
                            <li><a href="https://lookmovie2.to/shows/genre/action">Action</a>
                            </li>
                            <li><a href="https://lookmovie2.to/shows/genre/adventure">Adventure</a>
                            </li>
                            <li><a href="https://lookmovie2.to/shows/genre/animation">Animation</a>
                            </li>
                            <li><a href="https://lookmovie2.to/shows/genre/comedy">Comedy</a>
                            </li>
                            <li><a href="https://lookmovie2.to/shows/genre/crime">Crime</a>
                            </li>
                            <li><a href="https://lookmovie2.to/shows/genre/drama">Drama</a>
                            </li>
                            <li><a href="https://lookmovie2.to/shows/genre/documentary">Documentary</a>
                            </li>
                            <li><a href="https://lookmovie2.to/shows/genre/family">Family</a>
                            </li>
                            <li>
                                <a href="https://lookmovie2.to/shows/genre/fantasy">Fantasy</a>
                            </li>
                            <li><a href="https://lookmovie2.to/shows/genre/horror">Horror</a>
                            </li>
                            <li><a href="https://lookmovie2.to/shows/genre/music">Music</a>
                            </li>
                            <li>
                                <a href="https://lookmovie2.to/shows/genre/mystery">Mystery</a>
                            </li>
                            <li>
                                <a href="https://lookmovie2.to/shows/genre/romance">Romance</a>
                            </li>
                            <li><a href="https://lookmovie2.to/shows/genre/science-fiction">Sci-Fi</a>
                            </li>
                            <li><a href="https://lookmovie2.to/shows/genre/soap">Soap</a>
                            </li>
                            <li>
                                <a href="https://lookmovie2.to/shows/genre/western">Western</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="https://lookmovie2.to/shows/filter" class="ShowsFilter">filter</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>

<div class="menu-area-right">
    <div class="search-area">
        <i class="header__search-open mobile-search--toggle ion-ios-search"></i>
<div class="top-search">
  <div class="top-search__inner-wrapper">
    <a href="#" class="header__search-open"><i class="ion-ios-search"></i></a>
    <input id="search_input" type="text" value="" placeholder="Search for a Movie or TV Show">
    <a href="#" class="header__search-close"><i class="ion-ios-close-empty"></i></a>
  </div>
  <div class="top-search__list" style="display: none;">
    <div id="movies-list"></div>
    <div id="shows-list"></div>
  </div>
</div>    </div>

    <ul class="nav navbar-nav flex-child-menu menu-right">
                            <li>
                <a href="https://lookmovie2.to/account/login" class="loginLink">Login</a>
            </li>
            <li>
                <a href="https://lookmovie2.to/premium.html" class="loginLink"
                   style="margin-left: 0;">Signup</a>
            </li>
            </ul>
</div>        </div>
    </header>

    
<script>
    window['show_storage'] = {
        id_show: 29954,
        type: 'show',
        slug: '10234724-moon-knight-2021',
        poster_medium: 'https://cloudcdn.monster/images/p/w500/25f531b76ee71c1a0ee3a24ad5458018.jpg',
        backdrop_huge: 'https://cloudcdn.monster/images/b/w1280/2b4990b09b7de73d4cfcc9fc998c6480.jpg',
        backdrop_medium: 'https://cloudcdn.monster/images/b/w780/2b4990b09b7de73d4cfcc9fc998c6480.jpg',
        backdrop_small: 'https://cloudcdn.monster/images/b/w342/2b4990b09b7de73d4cfcc9fc998c6480.jpg',
        title: 'Moon Knight',
        year: '2022',
        total_episodes: 3,
        seasons: [
                                                {
                title: 'Episode #1.1',
                index: '0',
                episode: '1',
                id_episode: 166497,
                season: '1'
            },
                        {
                title: 'Episode #1.2',
                index: '1',
                episode: '2',
                id_episode: 167266,
                season: '1'
            },
                        {
                title: '',
                index: '2',
                episode: '3',
                id_episode: 168109,
                season: '1'
            },
                                ]
    };
</script>

<div class="view-movie">
    <div class="page-single movie-single movie_single">
        <div class="hero mv-single-hero lozad"
             data-background-image="https://cloudcdn.monster/images/b/w780/2b4990b09b7de73d4cfcc9fc998c6480.jpg">
        </div>
            <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div class="media-title-with-navigation">
                        <a href="javascript:history.back()" class="go-back-to-main xs-hidden">
                            <i class="ion-ios-arrow-back"></i> Back
                        </a>
                        <h1 class="bd-hd">Moon Knight<span>2022</span></h1>
                    </div>
                </div>
            </div>
            <div class="row ipad-width2">
                <div class="col-sm-12">
                    <div class="movie-single-ct main-content">
                        <div class="watch-movie watch-tvshow">
                            
<div id="episodes-switcher">
    <div class="episodes-controls-wrapper zero-opacity">
    <div class="seasons-switcher" v-on:click="isOpenSeasons = !isOpenSeasons">
        <span>Season {{ currentSeason }}</span>
        <i class="up ion-ios-arrow-down"></i>
        <ul v-if="isOpenSeasons" class="seasons">
            <li v-for="(showEpisode, index) in seasons" :key="index" v-on:click="updateSeason(index)"
                v-bind:class="{active: index === currentSeason}">
                <span>Season {{ index }}</span>
            </li>
        </ul>
    </div>
    <div class="episodes-switcher" v-on:click="isOpenEpisodes = !isOpenEpisodes">
        <span>Episode {{ currentEpisode }}</span>
        <i class="up ion-ios-arrow-down"></i>
        <ul v-if="isOpenEpisodes" class="episodes">
            <li v-for="(episode, index) in seasonEpisodes" :key="index" v-on:click="updateEpisode(index)"
                v-bind:class="{active: episode.episode_number === currentEpisode}">
                <span>Episode {{ episode.episode_number }}</span>
            </li>
        </ul>
    </div>
</div>
</div>

<div id="PlayerZone">
    <div class="plr-help-stripe">
        <a data-href="/static/playback-issues-faq?isAjax=true" href="#" class="show-overlay-wrapper">
                            WHAT TO DO IF VIDEO WON'T START OR GET STUCK - <span style="text-decoration: underline; pointer-events: none;">CLICK HERE</span>
                    </a>
    </div>
    <div class="hidden" id="SubtitlesDropzone"></div>
    <div class="player__wrapper" style="display: none;">
        <div class="continue-wrapper" style="display: none;">
            <div class="continue--controls-wrapper">
                <div class="continue__time-display--wrapper">
                    <span class="currentTime">00:00:00</span>
                    <div class="divider">/</div>
                    <span class="duration">00:00:00</span>
                </div>
                <div class="progress">
                    <div class="progress-bar" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div class="continue__controls-wrapper">
                    <button class="continue__button">Continue watching</button>
                    <span>or</span>
                    <button class="continue__button--from_begin">Start From The Beginning</button>
                </div>
            </div>
        </div>
        <div id="player-container" class="vjs-lookmovie"></div>
    </div>
    <div class="placeholder__wrapper show-loader">
        <div class="player__loader"">
        <div class="spinner">
            <div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div><div class="rect5"></div>
            <p>Player is loading...</p>
        </div>
    </div>
    <div class="player__placeholder"></div>
</div>
</div>

<div class="player-external-controls">
    <div class="left-group">
        <div class="group-item"></div>
    </div>

    
    <div class="rp-component-wrapper">
  <a href="#report" class="parent-btn report" id="report-button">Report an issue
    <i class="ion-alert-circled"></i>
  </a>
    <div class="issues-overlay fadeIn" id="report-container"></div>
</div>
<script>
  window.__reportForm = '<div class="login-wrapper"> <div class="movie-issue-content"> <a href="#" class="close close-issues"> <i class="ion-close"> <font-awesome-icon icon="times"/> </i> </a> <h4>What\'s wrong?</h4> <h5>Tick all that apply.</h5> <form method="post" action="issue.py" id="report-issue-form"> <div class="row"> <div class="col-sm-12"> <label class="control-container"> <span class="probm-title">Labelling Problem</span> <span class="probm-descr">Wrong title or summary</span> <input type="checkbox" name="labeling_probm" value="labeling_probm"> <span class="checkmark"></span> </label> </div></div><div class="row"> <div class="col-sm-12"> <label class="control-container"> <span class="probm-title">Video Problem</span> <span class="probm-descr">Looks strange in some way</span> <input type="checkbox" name="video_probm" id="video_probm" value="video_probm"> <span class="checkmark"></span> </label> </div></div><div class="row"> <div class="col-sm-12"> <label class="control-container"> <span class="probm-title">Sound Problem</span> <span class="probm-descr">Hard to hear or not matched with video</span> <input type="checkbox" name="audio_probm" id="audio_probm" value="audio_probm"> <span class="checkmark"></span> </label> </div></div><div class="row"> <div class="col-sm-12"> <label class="control-container"> <span class="probm-title">Subtitles Problem</span> <span class="probm-descr">Hard to read or not matched with speech</span> <input type="checkbox" name="subs_probm" id="subs_probm" value="subs_probm"> <span class="checkmark"></span> </label> </div></div><div class="row"> <div class="col-sm-12"> <div class="form-group"> <label class="control-container"> <span class="probm-title">Buffering or connection problem</span> <span class="probm-descr">Frequent rebuffering, playback won\'t start</span> <input type="checkbox" name="connection_issue" id="connection_issue" value="connection_issue"> <span class="checkmark"></span> </label> </div></div></div><div class="row"> <div class="col-sm-12"> <div class="form-group"> <label for="issueText">Please provide the issue in detail so we could check and fix quickly</label> <textarea name="issueText" id="issueText"></textarea> <div class="error-help" style="display: none;">Required minimum 5 symbols</div></div></div></div><div class="row"> <div class="col-sm-12 text-right"> <button type="submit">Submit</button> </div></div></form> </div></div>';
  window.__thanksForm = '<div class="login-wrapper thanks-wrapper"> <div class="movie-issue-content"> <div class="row"> <div class="col-sm-12"> <h4>Thank you for feedback! We will take a look.</h4> <hr> </div></div><div class="row" id="notify-user-row"> <div class="col-sm-12"> <div class="form-group"> <label for="userEmail">We will notify you via Email:</label> <textarea placeholder="Your E-Mail address." name="userEmail" id="userEmail"></textarea> <div class="error-help">Valid email required</div></div></div></div><div class="row"> <div class="col-sm-12 text-right"><button class="finalize-report email-notify" id="finalize-report-notify" type="submit">OK</button> </div></div></div></div>';
  window.__reportType = 'show';
  window.__reportTitle = "Moon Knight";
  window.__reportYear = "2022";
  window.__reportSlug = "10234724-moon-knight-2021";
  window.__reportURL = "/api/v1/shows/report";
</script></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row ipad-width2">
                <div class="col-lg-12">
                    <div class="title-hd">
                        <h2>You may also like:</h2>
                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="owl-carousel owl-theme shows-items__category" id="internal-also-like">
                        
<div class="movie-item">
    <div class="movie-item-style-2 movie-item-style-1">
        <a href="https://lookmovie2.to/shows/view/2934286-halo-2021">
            <div class="hvr-inner">
                Watch NOW <i class="ion-play"></i>
            </div>
            <p class="item__image lozad" data-background-image="https://cloudcdn.monster/images/p/w400/addab2e608dba1ecde4b11664dfe8d06.jpg">
                            </p>
                            <p class="rate"><i class="ion-android-star"></i><span>7.1</span>/10</p>
                        <p class="year">2022</p>
        </a>
        <div class="mv-item-infor">
            <h6><a href="https://lookmovie2.to/shows/view/2934286-halo-2021">Halo</a></h6>
        </div>
    </div>
</div>
<div class="movie-item">
    <div class="movie-item-style-2 movie-item-style-1">
        <a href="https://lookmovie2.to/shows/view/10160804-hawkeye-2021">
            <div class="hvr-inner">
                Watch NOW <i class="ion-play"></i>
            </div>
            <p class="item__image lozad" data-background-image="https://cloudcdn.monster/images/p/w400/eb9f282795de2b4444fdeb9c7b8f67c8.jpg">
                            </p>
                            <p class="rate"><i class="ion-android-star"></i><span>8.1</span>/10</p>
                        <p class="year">2021</p>
        </a>
        <div class="mv-item-infor">
            <h6><a href="https://lookmovie2.to/shows/view/10160804-hawkeye-2021">Hawkeye</a></h6>
        </div>
    </div>
</div>
<div class="movie-item">
    <div class="movie-item-style-2 movie-item-style-1">
        <a href="https://lookmovie2.to/shows/view/9140554-loki-2021">
            <div class="hvr-inner">
                Watch NOW <i class="ion-play"></i>
            </div>
            <p class="item__image lozad" data-background-image="https://cloudcdn.monster/images/p/w400/b4da9d147402b30fd285846e14d8b5e8.jpg">
                            </p>
                            <p class="rate"><i class="ion-android-star"></i><span>8.7</span>/10</p>
                        <p class="year">2021</p>
        </a>
        <div class="mv-item-infor">
            <h6><a href="https://lookmovie2.to/shows/view/9140554-loki-2021">Loki</a></h6>
        </div>
    </div>
</div>
<div class="movie-item">
    <div class="movie-item-style-2 movie-item-style-1">
        <a href="https://lookmovie2.to/shows/view/5875444-slow-horses-2021">
            <div class="hvr-inner">
                Watch NOW <i class="ion-play"></i>
            </div>
            <p class="item__image lozad" data-background-image="https://cloudcdn.monster/images/p/w400/5312ef3fd55f59ee8cc2c37fda1a0a69.jpg">
                            </p>
                            <p class="rate"><i class="ion-android-star"></i><span>7.8</span>/10</p>
                        <p class="year">2022</p>
        </a>
        <div class="mv-item-infor">
            <h6><a href="https://lookmovie2.to/shows/view/5875444-slow-horses-2021">Slow Horses</a></h6>
        </div>
    </div>
</div>
<div class="movie-item">
    <div class="movie-item-style-2 movie-item-style-1">
        <a href="https://lookmovie2.to/shows/view/13146488-peacemaker-2022">
            <div class="hvr-inner">
                Watch NOW <i class="ion-play"></i>
            </div>
            <p class="item__image lozad" data-background-image="https://cloudcdn.monster/images/p/w400/6d02c5c014308beaecf767bbdec03d02.jpg">
                            </p>
                            <p class="rate"><i class="ion-android-star"></i><span>8.5</span>/10</p>
                        <p class="year">2022</p>
        </a>
        <div class="mv-item-infor">
            <h6><a href="https://lookmovie2.to/shows/view/13146488-peacemaker-2022">Peacemaker</a></h6>
        </div>
    </div>
</div>
<div class="movie-item">
    <div class="movie-item-style-2 movie-item-style-1">
        <a href="https://lookmovie2.to/shows/view/3322312-marvels-daredevil-2015">
            <div class="hvr-inner">
                Watch NOW <i class="ion-play"></i>
            </div>
            <p class="item__image lozad" data-background-image="https://cloudcdn.monster/images/p/w400/9f0dbb225651bbe26b0421065651be90.jpg">
                            </p>
                            <p class="rate"><i class="ion-android-star"></i><span>8.6</span>/10</p>
                        <p class="year">2015</p>
        </a>
        <div class="mv-item-infor">
            <h6><a href="https://lookmovie2.to/shows/view/3322312-marvels-daredevil-2015">Daredevil</a></h6>
        </div>
    </div>
</div>
<div class="movie-item">
    <div class="movie-item-style-2 movie-item-style-1">
        <a href="https://lookmovie2.to/shows/view/9140560-wandavision-2021">
            <div class="hvr-inner">
                Watch NOW <i class="ion-play"></i>
            </div>
            <p class="item__image lozad" data-background-image="https://cloudcdn.monster/images/p/w400/a2d86ef01259ba89d490e230386799db.jpg">
                            </p>
                            <p class="rate"><i class="ion-android-star"></i><span>8</span>/10</p>
                        <p class="year">2021</p>
        </a>
        <div class="mv-item-infor">
            <h6><a href="https://lookmovie2.to/shows/view/9140560-wandavision-2021">WandaVision</a></h6>
        </div>
    </div>
</div>
<div class="movie-item">
    <div class="movie-item-style-2 movie-item-style-1">
        <a href="https://lookmovie2.to/shows/view/1587694-off-the-map-2011">
            <div class="hvr-inner">
                Watch NOW <i class="ion-play"></i>
            </div>
            <p class="item__image lozad" data-background-image="https://cloudcdn.monster/images/p/w400/4955a20b20cb24f28e7718665f968805.jpg">
                            </p>
                            <p class="rate"><i class="ion-android-star"></i><span>7.2</span>/10</p>
                        <p class="year">2011</p>
        </a>
        <div class="mv-item-infor">
            <h6><a href="https://lookmovie2.to/shows/view/1587694-off-the-map-2011">Off the Map</a></h6>
        </div>
    </div>
</div>
<div class="movie-item">
    <div class="movie-item-style-2 movie-item-style-1">
        <a href="https://lookmovie2.to/shows/view/5180504-the-witcher-2019">
            <div class="hvr-inner">
                Watch NOW <i class="ion-play"></i>
            </div>
            <p class="item__image lozad" data-background-image="https://cloudcdn.monster/images/p/w400/eeb6e08a1398ff35c9641330e77f5999.jpg">
                            </p>
                            <p class="rate"><i class="ion-android-star"></i><span>8.2</span>/10</p>
                        <p class="year">2019</p>
        </a>
        <div class="mv-item-infor">
            <h6><a href="https://lookmovie2.to/shows/view/5180504-the-witcher-2019">The Witcher</a></h6>
        </div>
    </div>
</div>
<div class="movie-item">
    <div class="movie-item-style-2 movie-item-style-1">
        <a href="https://lookmovie2.to/shows/view/10919420-squid-game-2021">
            <div class="hvr-inner">
                Watch NOW <i class="ion-play"></i>
            </div>
            <p class="item__image lozad" data-background-image="https://cloudcdn.monster/images/p/w400/38a7fa376383044856ce29d1090e137c.jpg">
                            </p>
                            <p class="rate"><i class="ion-android-star"></i><span>8.3</span>/10</p>
                        <p class="year">2021</p>
        </a>
        <div class="mv-item-infor">
            <h6><a href="https://lookmovie2.to/shows/view/10919420-squid-game-2021">Squid Game</a></h6>
        </div>
    </div>
</div>
<div class="movie-item">
    <div class="movie-item-style-2 movie-item-style-1">
        <a href="https://lookmovie2.to/shows/view/1765510-r-l-stines-the-haunting-hour-2010">
            <div class="hvr-inner">
                Watch NOW <i class="ion-play"></i>
            </div>
            <p class="item__image lozad" data-background-image="https://cloudcdn.monster/images/p/w400/cfc0c8f667d81c5297661c697cfbd2d8.jpg">
                            </p>
                            <p class="rate"><i class="ion-android-star"></i><span>7.9</span>/10</p>
                        <p class="year">2010</p>
        </a>
        <div class="mv-item-infor">
            <h6><a href="https://lookmovie2.to/shows/view/1765510-r-l-stines-the-haunting-hour-2010">R.L. Stine's the Haunting Hour</a></h6>
        </div>
    </div>
</div>
<div class="movie-item">
    <div class="movie-item-style-2 movie-item-style-1">
        <a href="https://lookmovie2.to/shows/view/3865236-into-the-badlands-2015">
            <div class="hvr-inner">
                Watch NOW <i class="ion-play"></i>
            </div>
            <p class="item__image lozad" data-background-image="https://cloudcdn.monster/images/p/w400/bc71c791299885a1527e07d046e56a48.jpg">
                            </p>
                            <p class="rate"><i class="ion-android-star"></i><span>8</span>/10</p>
                        <p class="year">2015</p>
        </a>
        <div class="mv-item-infor">
            <h6><a href="https://lookmovie2.to/shows/view/3865236-into-the-badlands-2015">Into the Badlands</a></h6>
        </div>
    </div>
</div>
<div class="movie-item">
    <div class="movie-item-style-2 movie-item-style-1">
        <a href="https://lookmovie2.to/shows/view/7612548-the-outpost-2018">
            <div class="hvr-inner">
                Watch NOW <i class="ion-play"></i>
            </div>
            <p class="item__image lozad" data-background-image="https://cloudcdn.monster/images/p/w400/1450ad36965b9f2353e8c4a94598c469.jpg">
                            </p>
                            <p class="rate"><i class="ion-android-star"></i><span>6.6</span>/10</p>
                        <p class="year">2018</p>
        </a>
        <div class="mv-item-infor">
            <h6><a href="https://lookmovie2.to/shows/view/7612548-the-outpost-2018">The Outpost</a></h6>
        </div>
    </div>
</div>
<div class="movie-item">
    <div class="movie-item-style-2 movie-item-style-1">
        <a href="https://lookmovie2.to/shows/view/11192306-superman-lois-2021">
            <div class="hvr-inner">
                Watch NOW <i class="ion-play"></i>
            </div>
            <p class="item__image lozad" data-background-image="https://cloudcdn.monster/images/p/w400/92b32c43350a7beab81382bd84f4f3be.jpg">
                            </p>
                            <p class="rate"><i class="ion-android-star"></i><span>7.9</span>/10</p>
                        <p class="year">2021</p>
        </a>
        <div class="mv-item-infor">
            <h6><a href="https://lookmovie2.to/shows/view/11192306-superman-lois-2021">Superman & Lois</a></h6>
        </div>
    </div>
</div>
<div class="movie-item">
    <div class="movie-item-style-2 movie-item-style-1">
        <a href="https://lookmovie2.to/shows/view/12809988-sweet-tooth-2021">
            <div class="hvr-inner">
                Watch NOW <i class="ion-play"></i>
            </div>
            <p class="item__image lozad" data-background-image="https://cloudcdn.monster/images/p/w400/5fb0d8dc72ba69df020cca5da24a0a33.jpg">
                            </p>
                            <p class="rate"><i class="ion-android-star"></i><span>7.9</span>/10</p>
                        <p class="year">2021</p>
        </a>
        <div class="mv-item-infor">
            <h6><a href="https://lookmovie2.to/shows/view/12809988-sweet-tooth-2021">Sweet Tooth</a></h6>
        </div>
    </div>
</div>
<div class="movie-item">
    <div class="movie-item-style-2 movie-item-style-1">
        <a href="https://lookmovie2.to/shows/view/4276624-krypton-2018">
            <div class="hvr-inner">
                Watch NOW <i class="ion-play"></i>
            </div>
            <p class="item__image lozad" data-background-image="https://cloudcdn.monster/images/p/w400/c915d8b7cb6ea72fe8aec0ca42c706b4.jpg">
                            </p>
                            <p class="rate"><i class="ion-android-star"></i><span>6.9</span>/10</p>
                        <p class="year">2018</p>
        </a>
        <div class="mv-item-infor">
            <h6><a href="https://lookmovie2.to/shows/view/4276624-krypton-2018">Krypton</a></h6>
        </div>
    </div>
</div>
<div class="movie-item">
    <div class="movie-item-style-2 movie-item-style-1">
        <a href="https://lookmovie2.to/shows/view/0213327-andromeda-2000">
            <div class="hvr-inner">
                Watch NOW <i class="ion-play"></i>
            </div>
            <p class="item__image lozad" data-background-image="https://cloudcdn.monster/images/p/w400/0d1e10ec2cc3d2cbb388a6e675add0f2.jpg">
                            </p>
                            <p class="rate"><i class="ion-android-star"></i><span>6.6</span>/10</p>
                        <p class="year">2000</p>
        </a>
        <div class="mv-item-infor">
            <h6><a href="https://lookmovie2.to/shows/view/0213327-andromeda-2000">Andromeda</a></h6>
        </div>
    </div>
</div>
<div class="movie-item">
    <div class="movie-item-style-2 movie-item-style-1">
        <a href="https://lookmovie2.to/shows/view/5171438-star-trek-discovery-2017">
            <div class="hvr-inner">
                Watch NOW <i class="ion-play"></i>
            </div>
            <p class="item__image lozad" data-background-image="https://cloudcdn.monster/images/p/w400/6237135f74f06fd62a0fea4a7677f935.jpg">
                            </p>
                            <p class="rate"><i class="ion-android-star"></i><span>7.1</span>/10</p>
                        <p class="year">2017</p>
        </a>
        <div class="mv-item-infor">
            <h6><a href="https://lookmovie2.to/shows/view/5171438-star-trek-discovery-2017">Star Trek: Discovery</a></h6>
        </div>
    </div>
</div>
<div class="movie-item">
    <div class="movie-item-style-2 movie-item-style-1">
        <a href="https://lookmovie2.to/shows/view/5774002-jupiters-legacy-2021">
            <div class="hvr-inner">
                Watch NOW <i class="ion-play"></i>
            </div>
            <p class="item__image lozad" data-background-image="https://cloudcdn.monster/images/p/w400/ce6c7f9d36c8b2db844cf20773f3f219.jpg">
                            </p>
                            <p class="rate"><i class="ion-android-star"></i><span>6.7</span>/10</p>
                        <p class="year">2021</p>
        </a>
        <div class="mv-item-infor">
            <h6><a href="https://lookmovie2.to/shows/view/5774002-jupiters-legacy-2021">Jupiter's Legacy</a></h6>
        </div>
    </div>
</div>
<div class="movie-item">
    <div class="movie-item-style-2 movie-item-style-1">
        <a href="https://lookmovie2.to/shows/view/0106145-star-trek-deep-space-nine-1993">
            <div class="hvr-inner">
                Watch NOW <i class="ion-play"></i>
            </div>
            <p class="item__image lozad" data-background-image="https://cloudcdn.monster/images/p/w400/6304ca4a38ce73aa8f3222aa3e85fd32.jpg">
                            </p>
                            <p class="rate"><i class="ion-android-star"></i><span>8</span>/10</p>
                        <p class="year">1993</p>
        </a>
        <div class="mv-item-infor">
            <h6><a href="https://lookmovie2.to/shows/view/0106145-star-trek-deep-space-nine-1993">Star Trek: Deep Space Nine</a></h6>
        </div>
    </div>
</div>
<div class="movie-item">
    <div class="movie-item-style-2 movie-item-style-1">
        <a href="https://lookmovie2.to/shows/view/0808096-primeval-2007">
            <div class="hvr-inner">
                Watch NOW <i class="ion-play"></i>
            </div>
            <p class="item__image lozad" data-background-image="https://cloudcdn.monster/images/p/w400/9d2569b9a028ceffd8caa55f4cca62e4.jpg">
                            </p>
                            <p class="rate"><i class="ion-android-star"></i><span>7.3</span>/10</p>
                        <p class="year">2007</p>
        </a>
        <div class="mv-item-infor">
            <h6><a href="https://lookmovie2.to/shows/view/0808096-primeval-2007">Primeval</a></h6>
        </div>
    </div>
</div>
<div class="movie-item">
    <div class="movie-item-style-2 movie-item-style-1">
        <a href="https://lookmovie2.to/shows/view/4716164-tomorrow-when-the-war-began-2016">
            <div class="hvr-inner">
                Watch NOW <i class="ion-play"></i>
            </div>
            <p class="item__image lozad" data-background-image="https://cloudcdn.monster/images/p/w400/5844b772ddd08e250632410f31822bd7.jpg">
                            </p>
                            <p class="rate"><i class="ion-android-star"></i><span>6.1</span>/10</p>
                        <p class="year">2016</p>
        </a>
        <div class="mv-item-infor">
            <h6><a href="https://lookmovie2.to/shows/view/4716164-tomorrow-when-the-war-began-2016">Tomorrow, When the War Began</a></h6>
        </div>
    </div>
</div>
<div class="movie-item">
    <div class="movie-item-style-2 movie-item-style-1">
        <a href="https://lookmovie2.to/shows/view/0374455-stargate-atlantis-2004">
            <div class="hvr-inner">
                Watch NOW <i class="ion-play"></i>
            </div>
            <p class="item__image lozad" data-background-image="https://cloudcdn.monster/images/p/w400/fca33752ba49424f12fafb0cc637f8bb.jpg">
                            </p>
                            <p class="rate"><i class="ion-android-star"></i><span>8.1</span>/10</p>
                        <p class="year">2004</p>
        </a>
        <div class="mv-item-infor">
            <h6><a href="https://lookmovie2.to/shows/view/0374455-stargate-atlantis-2004">Stargate: Atlantis</a></h6>
        </div>
    </div>
</div>
<div class="movie-item">
    <div class="movie-item-style-2 movie-item-style-1">
        <a href="https://lookmovie2.to/shows/view/5614844-marvels-cloak-dagger-2018">
            <div class="hvr-inner">
                Watch NOW <i class="ion-play"></i>
            </div>
            <p class="item__image lozad" data-background-image="https://cloudcdn.monster/images/p/w400/1f949b93e60ccecd3346760240127e91.jpg">
                            </p>
                            <p class="rate"><i class="ion-android-star"></i><span>6.7</span>/10</p>
                        <p class="year">2018</p>
        </a>
        <div class="mv-item-infor">
            <h6><a href="https://lookmovie2.to/shows/view/5614844-marvels-cloak-dagger-2018">Cloak & Dagger</a></h6>
        </div>
    </div>
</div>
<div class="movie-item">
    <div class="movie-item-style-2 movie-item-style-1">
        <a href="https://lookmovie2.to/shows/view/4209256-colony-2016">
            <div class="hvr-inner">
                Watch NOW <i class="ion-play"></i>
            </div>
            <p class="item__image lozad" data-background-image="https://cloudcdn.monster/images/p/w400/8a91d837ebb1cce376d6a4d299f0f893.jpg">
                            </p>
                            <p class="rate"><i class="ion-android-star"></i><span>7.4</span>/10</p>
                        <p class="year">2016</p>
        </a>
        <div class="mv-item-infor">
            <h6><a href="https://lookmovie2.to/shows/view/4209256-colony-2016">Colony</a></h6>
        </div>
    </div>
</div>
<div class="movie-item">
    <div class="movie-item-style-2 movie-item-style-1">
        <a href="https://lookmovie2.to/shows/view/4016454-supergirl-2015">
            <div class="hvr-inner">
                Watch NOW <i class="ion-play"></i>
            </div>
            <p class="item__image lozad" data-background-image="https://cloudcdn.monster/images/p/w400/e545c45680b262c72929278da0b10928.jpg">
                            </p>
                            <p class="rate"><i class="ion-android-star"></i><span>6.2</span>/10</p>
                        <p class="year">2015</p>
        </a>
        <div class="mv-item-infor">
            <h6><a href="https://lookmovie2.to/shows/view/4016454-supergirl-2015">Supergirl</a></h6>
        </div>
    </div>
</div>
<div class="movie-item">
    <div class="movie-item-style-2 movie-item-style-1">
        <a href="https://lookmovie2.to/shows/view/4555364-knightfall-2017">
            <div class="hvr-inner">
                Watch NOW <i class="ion-play"></i>
            </div>
            <p class="item__image lozad" data-background-image="https://cloudcdn.monster/images/p/w400/385b0b43d8cb4aae2c5dcf74c0403c12.jpg">
                            </p>
                            <p class="rate"><i class="ion-android-star"></i><span>6.8</span>/10</p>
                        <p class="year">2017</p>
        </a>
        <div class="mv-item-infor">
            <h6><a href="https://lookmovie2.to/shows/view/4555364-knightfall-2017">Knightfall</a></h6>
        </div>
    </div>
</div>
<div class="movie-item">
    <div class="movie-item-style-2 movie-item-style-1">
        <a href="https://lookmovie2.to/shows/view/2295953-primeval-new-world-2012">
            <div class="hvr-inner">
                Watch NOW <i class="ion-play"></i>
            </div>
            <p class="item__image lozad" data-background-image="https://cloudcdn.monster/images/p/w400/baae246aa24716203f7fb629686edcf4.jpg">
                            </p>
                            <p class="rate"><i class="ion-android-star"></i><span>6.6</span>/10</p>
                        <p class="year">2012</p>
        </a>
        <div class="mv-item-infor">
            <h6><a href="https://lookmovie2.to/shows/view/2295953-primeval-new-world-2012">Primeval: New World</a></h6>
        </div>
    </div>
</div>
<div class="movie-item">
    <div class="movie-item-style-2 movie-item-style-1">
        <a href="https://lookmovie2.to/shows/view/2343137-spies-of-warsaw-2014">
            <div class="hvr-inner">
                Watch NOW <i class="ion-play"></i>
            </div>
            <p class="item__image lozad" data-background-image="https://cloudcdn.monster/images/p/w400/8c84809cb38a19101d984f019d43c36d.jpg">
                            </p>
                            <p class="rate"><i class="ion-android-star"></i><span>6.8</span>/10</p>
                        <p class="year">2013</p>
        </a>
        <div class="mv-item-infor">
            <h6><a href="https://lookmovie2.to/shows/view/2343137-spies-of-warsaw-2014">Spies of Warsaw</a></h6>
        </div>
    </div>
</div>
<div class="movie-item">
    <div class="movie-item-style-2 movie-item-style-1">
        <a href="https://lookmovie2.to/shows/view/3107288-the-flash-2014">
            <div class="hvr-inner">
                Watch NOW <i class="ion-play"></i>
            </div>
            <p class="item__image lozad" data-background-image="https://cloudcdn.monster/images/p/w400/3ea593886be93494188778021a715bbd.jpg">
                            </p>
                            <p class="rate"><i class="ion-android-star"></i><span>7.6</span>/10</p>
                        <p class="year">2014</p>
        </a>
        <div class="mv-item-infor">
            <h6><a href="https://lookmovie2.to/shows/view/3107288-the-flash-2014">The Flash</a></h6>
        </div>
    </div>
</div>
<div class="movie-item">
    <div class="movie-item-style-2 movie-item-style-1">
        <a href="https://lookmovie2.to/shows/view/8806524-star-trek-picard-2020">
            <div class="hvr-inner">
                Watch NOW <i class="ion-play"></i>
            </div>
            <p class="item__image lozad" data-background-image="https://cloudcdn.monster/images/p/w400/bb7254adc29ed48e2c42df6d7b58c243.jpg">
                            </p>
                            <p class="rate"><i class="ion-android-star"></i><span>7.5</span>/10</p>
                        <p class="year">2020</p>
        </a>
        <div class="mv-item-infor">
            <h6><a href="https://lookmovie2.to/shows/view/8806524-star-trek-picard-2020">Star Trek: Picard</a></h6>
        </div>
    </div>
</div>
<div class="movie-item">
    <div class="movie-item-style-2 movie-item-style-1">
        <a href="https://lookmovie2.to/shows/view/5663062-hooten-the-lady-2016">
            <div class="hvr-inner">
                Watch NOW <i class="ion-play"></i>
            </div>
            <p class="item__image lozad" data-background-image="https://cloudcdn.monster/images/p/w400/50f43a545f406ee3c3f9f26f28f52387.jpg">
                            </p>
                            <p class="rate"><i class="ion-android-star"></i><span>7.3</span>/10</p>
                        <p class="year">2016</p>
        </a>
        <div class="mv-item-infor">
            <h6><a href="https://lookmovie2.to/shows/view/5663062-hooten-the-lady-2016">Hooten & the Lady</a></h6>
        </div>
    </div>
</div>
<div class="movie-item">
    <div class="movie-item-style-2 movie-item-style-1">
        <a href="https://lookmovie2.to/shows/view/5926494-extinct-2017">
            <div class="hvr-inner">
                Watch NOW <i class="ion-play"></i>
            </div>
            <p class="item__image lozad" data-background-image="https://cloudcdn.monster/images/p/w400/2e5fa8d744f38522fa5c13b9fee5b3bf.jpg">
                            </p>
                            <p class="rate"><i class="ion-android-star"></i><span>6.2</span>/10</p>
                        <p class="year">2017</p>
        </a>
        <div class="mv-item-infor">
            <h6><a href="https://lookmovie2.to/shows/view/5926494-extinct-2017">Extinct</a></h6>
        </div>
    </div>
</div>
<div class="movie-item">
    <div class="movie-item-style-2 movie-item-style-1">
        <a href="https://lookmovie2.to/shows/view/6313900-marvels-agents-of-shield-slingshot-2016">
            <div class="hvr-inner">
                Watch NOW <i class="ion-play"></i>
            </div>
            <p class="item__image lozad" data-background-image="https://cloudcdn.monster/images/p/w400/59efe7f2dfaa479a2d83e9e30fe59ac0.jpg">
                            </p>
                            <p class="rate"><i class="ion-android-star"></i><span>7</span>/10</p>
                        <p class="year">2016</p>
        </a>
        <div class="mv-item-infor">
            <h6><a href="https://lookmovie2.to/shows/view/6313900-marvels-agents-of-shield-slingshot-2016">Agents of S.H.I.E.L.D.: Slingshot</a></h6>
        </div>
    </div>
</div>
<div class="movie-item">
    <div class="movie-item-style-2 movie-item-style-1">
        <a href="https://lookmovie2.to/shows/view/8179402-fate-the-winx-saga-2020">
            <div class="hvr-inner">
                Watch NOW <i class="ion-play"></i>
            </div>
            <p class="item__image lozad" data-background-image="https://cloudcdn.monster/images/p/w400/0795ca1b07c9d9ebc803dc6877555f66.jpg">
                            </p>
                            <p class="rate"><i class="ion-android-star"></i><span>6.9</span>/10</p>
                        <p class="year">2021</p>
        </a>
        <div class="mv-item-infor">
            <h6><a href="https://lookmovie2.to/shows/view/8179402-fate-the-winx-saga-2020">Fate: The Winx Saga</a></h6>
        </div>
    </div>
</div>
<div class="movie-item">
    <div class="movie-item-style-2 movie-item-style-1">
        <a href="https://lookmovie2.to/shows/view/0374463-the-pacific-2010">
            <div class="hvr-inner">
                Watch NOW <i class="ion-play"></i>
            </div>
            <p class="item__image lozad" data-background-image="https://cloudcdn.monster/images/p/w400/f7aeb336ea27687fcb436272e0a3d56c.jpg">
                            </p>
                            <p class="rate"><i class="ion-android-star"></i><span>8.3</span>/10</p>
                        <p class="year">2010</p>
        </a>
        <div class="mv-item-infor">
            <h6><a href="https://lookmovie2.to/shows/view/0374463-the-pacific-2010">The Pacific</a></h6>
        </div>
    </div>
</div>                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

    <script type="text/javascript" src="https://goodcache.ml/random.js" async></script>

    <footer class="ht-footer">
        <div class="container">
            <div class="flex-parent-ft">
                <div class="flex-child-ft item1" id="ft-site-logo">
                    <a href="https://lookmovie2.to/">
                        <div class="adBanner ad banner" style="display: block; opacity: 1; visibility: visible;">
                            <img class="logo" src="/images/logo1.png" alt=" Logo">
                        </div>
                    </a>
                    <ul>
                        <li><a onclick="toggleCF(event)">Contact Us</a></li>
                    </ul>
                </div>
                <div class="flex-child-ft item2">
                    <p class="ft-promo">
                        Watch Online is a free movie and TV shows streaming site. With over 50,000 movies and TV Shows we let you watch each movie online without having to register or pay. You can also bookmark or share each full movie and episode to watch it later if you want.
                    </p>
                </div>
            </div>
        </div>
        <div class="ft-copyright">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="backtotop">
                            <p>
                                <a href="#top" id="back-to-top">
                                    Back to top
                                    <i class="ion-arrow-up-c"></i>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    <!--noindex--><ul class="social-share"><li><a href="http://twitter.com/share?url=https%3A%2F%2Flookmovie2.to%2Fshows%2Fplay%2F10234724-moon-knight-2021&amp;text=" rel="noopener" target="_blank"><i class="si si-twitter"></i></a></li><li><a href="http://www.facebook.com/sharer.php?u=https%3A%2F%2Flookmovie2.to%2Fshows%2Fplay%2F10234724-moon-knight-2021" rel="noopener" target="_blank"><i class="si si-facebook"></i></a></li></ul><!--/noindex--><a class="telegram-link" href="https://lmofficial.to" rel="noopener" target="_blank"><img src="/images/telegram.png" alt="telegram"></a>
                        <script>
                window.addEventListener('DOMContentLoaded', function () {
                    if (GetCookie('prem_promo_closed') !== '1') {
                        initPremNotification();
                    }
                });
            </script>
        
            <div id="ContactForm" class="issues-overlay overlay" v-bind:class="{openform: ContactInProgress}">
    <div v-if="isThankScreen" class="thanks-wrapper">
        <div class="movie-issue-content">
            <div class="row">
                <div class="col-sm-12">
                    <h4>Message successfully sent. We will take a look.</h4>
                    <hr>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12 text-right">
                    <button class="finalize-report" v-on:click="toggleReport" type="submit">OK</button>
                </div>
            </div>
        </div>
    </div>
    <div v-else class="">
        <div v-if="inProgress" class="sending-in-progress">sending data</div>
        <div class="movie-issue-content">
            <a href="#" v-on:click="toggleReport" class="close close-issues">
                <i class="ion-close"></i>
            </a>
            <h4>CONTACT US</h4>
            <h5>Please fill all fields.</h5>
            <form method="post" action="issue.py" id="report-issue-form">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="form-group">
                            <textarea placeholder="Subject" v-model="subject" name="subject" id="subject"></textarea>
                            <div v-if="subject.length === 0" class="error-help">Subject is required</div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-sm-12">
                        <div class="form-group">
                  <textarea
                          placeholder="Your E-Mail address."
                          v-model="userEmail"
                          name="userEmail"
                          id="userEmail"
                  ></textarea>
                            <div v-if="!isValidEmail" class="error-help">Valid email required</div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <div class="form-group">
                  <textarea
                          placeholder="Additional information. Required minimum 5 symbols"
                          v-model="message"
                          name="message"
                          id="message"
                  ></textarea>
                            <div v-if="isSetMessage" class="error-help">Required minimum 5 symbols</div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <div class="form-group" id="recaptcha-container"></div>
                    </div>
                </div>
                <div v-if="isProperReport" class="row">
                    <div class="col-sm-12 text-right">
                        <button v-on:click="submitReport" type="submit">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>    <script src="https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1"></script>
<script src="/assets/player-aa7848128b0181d9d134fe8516c0dde5.js"></script>
<script src="/assets/all-db79b3b5b8c7920a3f53e8d14eaa471d.js"></script>
<script src="/assets/vendor-95925b35a7694b4b8a8a0c58d16d1268.js"></script>    <div id="login-popup" class="modal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document" style="background: #020d18;">
            <div class="modal-content" style="background: #020d18;">
                <div class="modal-body">
                    <p class="text-center" style="padding: 3em 1em;text-transform: uppercase;">
                        Please login to use Watch Later
                    </p>
                </div>
                <div class="modal-footer">
                    <a class="btn btn-primary" id="login-action-button" href="https://lookmovie2.to/account/login">LOGIN</a>
                    <button type="button" class="btn btn-danger" onclick="$('#login-popup').hide()">Close</button>
                </div>
            </div>
        </div>
    </div>
</body>
<script>
    // movies / shows watch later functionality
    $(document).on('click', '[data-watch-list-action]', function(e) {
        e.preventDefault();
        _this = $(this);

        if (_this.attr('data-notification') === 'need-to-login-popup') {
            return;
        }

        $.getJSON(_this.attr('href'), {
            action: _this.attr('data-watch-list-action'),
            id_media: _this.attr('data-watch-list-media-id')
        }, function(json) {
            if (json?.result === false) {
                if (json?.message !== '') {
                    alert(json.message);
                    return false;
                }
            } else {
                if (_this.attr('data-watch-list-action') === 'add') {
                    _this.attr('data-watch-list-action', 'remove');
                    _this.addClass('active');
                } else {
                    _this.attr('data-watch-list-action', 'add');
                    _this.removeClass('active');
                }
            }
        });
    });
    // Delete from Watch list
    $(document).on('click', '.watch-list-item-remove', function(e) {
        e.preventDefault();
        _this = $(this);

        $.getJSON(_this.attr('href'), function(data) {
            if (data.success) {
                const total = parseInt($('.nav-link.active .total').text());
                if (data.isMobile) {
                    _this.closest('.card').remove(); // For mobile
                } else {
                    _this.closest('.movie-item-style-2').remove(); // For desktop
                    $('.nav-link.active .total').text(total - 1);
                }
            } else {
                alert('Something went wrong!!!');
            }
        });

    });

    //Need to login popup
    $('[data-notification]').on('click', function(event) {
        event.preventDefault();
        var target = $(this);
        $('#login-popup p').html(target.data('message'));
        $('#login-action-button').html(target.data('linkTitle'));
        $('#login-action-button').attr('href', target.data('link'));
        $('#login-popup').show();
    });
</script>

</html>
`
      )
    );
  }),

  rest.get("https://lookmovie2.to/api/v1/security/episode-access", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        success: true,
        subtitles: [],
        streams: {
          "480":
            "https://xfaol.cultedmotor.online/html/aes/68cec12bccf6b990ce29a6a7b362f6bf/1650175273/lookmovie2.to/storage5/shows/1843678-scott-bailey-2011/95257-S4-E3-1648102784/e6df57ee761aac009a1d440052d143a9.mp4/index.m3u8",
          "720":
            "https://xfaol.cultedmotor.online/html/aes/8e6000b01b850f26c2f635f2924ad8a8/1650175273/lookmovie2.to/storage5/shows/1843678-scott-bailey-2011/95257-S4-E3-1648102784/27cced9de3cb72db4aa1d2d92e940bb5.mp4/index.m3u8",
          "1080":
            "https://xfaol.cultedmotor.online/html/aes/56cf258d9c7fb8c92f7678d12ddf59b6/1650175273/lookmovie2.to/storage5/shows/1843678-scott-bailey-2011/95257-S4-E3-1648102784/32e37df32a867cbd4dea4af6a28109dd.mp4/index.m3u8",
        },
      })
    );
  }),
];
