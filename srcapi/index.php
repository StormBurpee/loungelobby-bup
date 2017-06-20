<?php

  use \Psr\Http\Message\ServerRequestInterface as Request;
  use \Psr\Http\Message\ResponseInterface as Response;

  require 'vendor/autoload.php';

  $config['displayErrorDetails'] = true;
  $config['addContentLengthHeader'] = false;

  $config['db']['host'] = "35.188.192.143";
  $config['db']['user'] = 'LoungeLobby';
  $config['db']['pass'] = "Harry13.";
  $config['db']['dbname'] = 'loungelobby';

  $tvmaze = "http://api.tvmaze.com";
  $tmdb = "https://api.themoviedb.org/3";
  $tmdbAPI = "d7d64233b06969210ff543eb263f7798";
  $tmdbImage = "https://image.tmdb.org/t/p"; //w500 for width=500
  $trakt = "https://api.trakt.tv";
  $traktCID = "94935e9e9f17ba72fb6a34d35e814cfe1f8419f8f9e904cc955b92d0c6c345cf";

  $app = new \Slim\App(["settings"=>$config]);
  $app->get('/trending/{limit}', function (Request $request, Response $response) {
    $limit = $request->getAttribute('limit');

    $curl = curl_init();
    curl_setopt_array($curl, array(
        CURLOPT_RETURNTRANSFER => 1,
        CURLOPT_URL => "https://api.themoviedb.org/3/tv/on_the_air?api_key=d7d64233b06969210ff543eb263f7798",
        CURLOPT_USERAGENT => 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3053.3 Safari/537.36'
    ));
    $resp = curl_exec($curl);
    curl_close($curl);

    $shows = json_decode($resp);

    $trendinglist;
    $i = 0;
    foreach($shows->results as $show) {
      if($i < $limit) {
        $show->poster_path = $tmdbImage."/w500".$show->poster_path;
        $show->backdrop_path = $tmdbImage."/w1280".$show->backdrop_path;
        $trendinglist[] = $show;
      }
      $i++;
    }

    $nr = $response->withJson($trendinglist);

    return $nr;
  });

  $app->get('/show/{showid}', function(Request $request, Response $response) {
    $showid = $request->getAttribute('showid');
    $curl = curl_init();
    curl_setopt_array($curl, array(
        CURLOPT_RETURNTRANSFER => 1,
        CURLOPT_URL => "https://api.themoviedb.org/3/tv/$showid?api_key=d7d64233b06969210ff543eb263f7798&language=en",
        CURLOPT_USERAGENT => 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3053.3 Safari/537.36'
    ));
    $resp = json_decode(curl_exec($curl));
    curl_close($curl);
    //$response->getBody()->write(json_encode($resp));
    $nr = $response->withJson($resp);
    return $nr;
  });

  $app->get('/show/{showid}/mainmedia', function(Request $request, Response $response) {
    $showid = $request->getAttribute('showid');
    $curl = curl_init();
    curl_setopt_array($curl, array(
        CURLOPT_RETURNTRANSFER => 1,
        CURLOPT_URL => "https://api.themoviedb.org/3/tv/$showid/images?api_key=d7d64233b06969210ff543eb263f7798&language=en",
        CURLOPT_USERAGENT => 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3053.3 Safari/537.36'
    ));
    $image = json_decode(curl_exec($curl));
    curl_close($curl);
    //$response->getBody()->write(json_encode(["https://image.tmdb.org/t/p/w500".$image->posters[0]->file_path, "https://image.tmdb.org/t/p/w1280".$image->backdrops[0]->file_path]));
    $nr = $response->withJson(["poster"=>"https://image.tmdb.org/t/p/w500".$image->posters[0]->file_path, "backdrop"=>"https://image.tmdb.org/t/p/w1280".$image->backdrops[0]->file_path]);
    return $nr;
  });

  $app->get('/show/{showid}/poster', function(Request $request, Response $response) {
    $showid = $request->getAttribute('showid');
    $curl = curl_init();
    curl_setopt_array($curl, array(
        CURLOPT_RETURNTRANSFER => 1,
        CURLOPT_URL => "https://api.themoviedb.org/3/tv/$showid/images?api_key=d7d64233b06969210ff543eb263f7798&language=en",
        CURLOPT_USERAGENT => 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3053.3 Safari/537.36'
    ));
    $image = json_decode(curl_exec($curl));
    curl_close($curl);
    //$response->getBody()->write(json_encode(["https://image.tmdb.org/t/p/w500".$image->posters[0]->file_path, "https://image.tmdb.org/t/p/w1280".$image->backdrops[0]->file_path]));
    $nr = $response->withJson(["poster"=>"https://image.tmdb.org/t/p/w500".$image->posters[0]->file_path]);
    return $nr;
  });

  $app->get('/show/{showid}/posters', function(Request $request, Response $response) {
    $showid = $request->getAttribute('showid');
    $curl = curl_init();
    curl_setopt_array($curl, array(
        CURLOPT_RETURNTRANSFER => 1,
        CURLOPT_URL => "https://api.themoviedb.org/3/tv/$showid/images?api_key=d7d64233b06969210ff543eb263f7798&language=en",
        CURLOPT_USERAGENT => 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3053.3 Safari/537.36'
    ));
    $image = json_decode(curl_exec($curl));
    curl_close($curl);
    foreach($image->posters as $p) {
      $p->file_path = "https://image.tmdb.org/t/p/w500".$p->file_path;
    }
    //$response->getBody()->write(json_encode(["https://image.tmdb.org/t/p/w500".$image->posters[0]->file_path, "https://image.tmdb.org/t/p/w1280".$image->backdrops[0]->file_path]));
    $nr = $response->withJson($image->posters);
    return $nr;
  });

  $app->get('/show/{showid}/backdrop', function(Request $request, Response $response) {
    $showid = $request->getAttribute('showid');
    $curl = curl_init();
    curl_setopt_array($curl, array(
        CURLOPT_RETURNTRANSFER => 1,
        CURLOPT_URL => "https://api.themoviedb.org/3/tv/$showid/images?api_key=d7d64233b06969210ff543eb263f7798&language=en",
        CURLOPT_USERAGENT => 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3053.3 Safari/537.36'
    ));
    $image = json_decode(curl_exec($curl));
    curl_close($curl);
    //$response->getBody()->write(json_encode(["https://image.tmdb.org/t/p/w500".$image->posters[0]->file_path, "https://image.tmdb.org/t/p/w1280".$image->backdrops[0]->file_path]));
    $nr = $response->withJson(["backdrop"=>"https://image.tmdb.org/t/p/w1280".$image->backdrops[0]->file_path]);
    return $nr;
  });

  $app->get('/show/{showid}/backdrops', function(Request $request, Response $response) {
    $showid = $request->getAttribute('showid');
    $curl = curl_init();
    curl_setopt_array($curl, array(
        CURLOPT_RETURNTRANSFER => 1,
        CURLOPT_URL => "https://api.themoviedb.org/3/tv/$showid/images?api_key=d7d64233b06969210ff543eb263f7798&language=en",
        CURLOPT_USERAGENT => 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3053.3 Safari/537.36'
    ));
    $image = json_decode(curl_exec($curl));
    curl_close($curl);
    foreach($image->backdrops as $p) {
      $p->file_path = "https://image.tmdb.org/t/p/w500".$p->file_path;
    }
    //$response->getBody()->write(json_encode(["https://image.tmdb.org/t/p/w500".$image->posters[0]->file_path, "https://image.tmdb.org/t/p/w1280".$image->backdrops[0]->file_path]));
    $nr = $response->withJson($image->backdrops);
    return $nr;
  });

  $app->get('/show/{showid}/seasons', function(Request $request, Response $response) {

  });

  $app->get('/', function(Request $request, Response $response){
    $response->getBody()->write("LoungeLobby API v4");

    return $response;
  });

  $app->run();

  function tmdbCall($extension, $args = "") {

    $curl = curl_init();
    curl_setopt_array($curl, array(
        CURLOPT_RETURNTRANSFER => 1,
        CURLOPT_URL => $tmdb.$extension."?api_key=".$tmdbAPI.$args,
        CURLOPT_USERAGENT => 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3053.3 Safari/537.36'
    ));
    $resp = curl_exec($curl);
    curl_close($curl);

    return json_decode($resp);

  }

?>
