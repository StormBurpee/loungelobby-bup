<?php

  use \Psr\Http\Message\ServerRequestInterface as Request;
  use \Psr\Http\Message\ResponseInterface as Response;

  set_time_limit(0);

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

  $container = $app->getContainer();
  $container['ws'] = "http://mywatchseries.to";
  $container['url'] = "http://theloungelobby.com";
  $container['img'] = $tmdbImage;

  $app->get('/featured', function (Request $request, Response $response) {
    $limit = 8;
    $curl = curl_init();
    curl_setopt_array($curl, array(
        CURLOPT_RETURNTRANSFER => 1,
        CURLOPT_URL => "https://api.themoviedb.org/3/tv/popular?api_key=d7d64233b06969210ff543eb263f7798&language=en",
        CURLOPT_USERAGENT => 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3053.3 Safari/537.36'
    ));
    $resp = curl_exec($curl);
    curl_close($curl);

    $shows = json_decode($resp);

    $results;
    $trendinglist;
    $i = 0;

    foreach($shows->results as $show) {
      $show->poster_path = $this->img."/w500".$show->poster_path;
      $show->backdrop_path = $this->img."/w1280".$show->backdrop_path;
      $results[] = $show;
    }

    usort($results, function($b, $a) { return $a->vote_count - $b->vote_count; });

    foreach($results as $show) {
      if($i < $limit) {
        $trendinglist[] = $show;
      }
      $i++;
    }

    $nr = $response->withJson($trendinglist);

    return $nr;
  });

  $app->get('/trending/{limit}', function (Request $request, Response $response) {
    $limit = $request->getAttribute('limit');

    $curl = curl_init();
    curl_setopt_array($curl, array(
        CURLOPT_RETURNTRANSFER => 1,
        CURLOPT_URL => "https://api.themoviedb.org/3/tv/popular?api_key=d7d64233b06969210ff543eb263f7798&language=en",
        CURLOPT_USERAGENT => 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3053.3 Safari/537.36'
    ));
    $resp = curl_exec($curl);
    curl_close($curl);

    $shows = json_decode($resp);

    $trendinglist;
    $i = 0;
    foreach($shows->results as $show) {
      if($i < $limit) {
        $show->poster_path = $this->img."/w500".$show->poster_path;
        $show->backdrop_path = $this->img."/w1280".$show->backdrop_path;
        $trendinglist[] = $show;
      }
      $i++;
    }

    $nr = $response->withJson($trendinglist);

    return $nr;
  });

  $app->get('/airing/{limit}', function (Request $request, Response $response) {
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

    $results;
    $trendinglist;
    $i = 0;

    foreach($shows->results as $show) {
      $show->poster_path = $this->img."/w500".$show->poster_path;
      $show->backdrop_path = $this->img."/w1280".$show->backdrop_path;
      $results[] = $show;
    }

    usort($results, function($b, $a) { return $a->vote_count - $b->vote_count; });

    foreach($results as $show) {
      if($i < $limit) {
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

  $app->get('/show/{showid}/name', function(Request $request, Response $response) {
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
    $nr = $response->withJson(["name"=>$resp->original_name]);
    return $nr;
  });

  $app->get('/show/{showid}/seo', function(Request $request, Response $response) {
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
    $nr = $response->withJson(["name"=>$resp->original_name, "year"=>date("Y", strtotime($resp->first_air_date))]);
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

  $app->get('/show/{showid}/season/{season}/episode/{episode}/links', function(Request $request, Response $response) {
    $ws = $this->ws;
    $url = $this->url;
    $showid = $request->getAttribute('showid');
    $season = $request->getAttribute('season');
    $episode = $request->getAttribute('episode');

    $curl = curl_init();
    curl_setopt_array($curl, array(
        CURLOPT_RETURNTRANSFER => 1,
        CURLOPT_URL => $url."/api/show/$showid/seo",
        CURLOPT_USERAGENT => 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3053.3 Safari/537.36'
    ));
    $resp = json_decode(curl_exec($curl));
    curl_close($curl);

    //$response = $response->withJson($resp->name);
    $name = $resp->name;
    $year = $resp->year;

    $curl = curl_init();
    curl_setopt_array($curl, array(
        CURLOPT_RETURNTRANSFER => 1,
        CURLOPT_URL => $ws."/show/search-shows-json",
        CURLOPT_POST => 1,
        CURLOPT_POSTFIELDS => "term=".$name,
        CURLOPT_USERAGENT => 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3053.3 Safari/537.36'
    ));
    $r = json_decode(curl_exec($curl));
    curl_close($curl);

    $seourl = "";

    foreach($r as $sh) {
      if(strpos(strtolower($sh->value), strtolower($name)) !== false) {
        if(strpos(strtolower($sh->label), $year) !== false) {
          $seourl = $sh->seo_url;
          break;
        }
      }
    }

    $nws = $ws."/episode/".$seourl."_s".$season.'_e'.$episode.".html";

    $html = new DOMDocument();

    $curl = curl_init();
    curl_setopt_array($curl, array(
        CURLOPT_RETURNTRANSFER => 1,
        CURLOPT_URL => $nws
    ));
    curl_setopt($curl ,CURLOPT_USERAGENT,'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2798.0 Safari/537.36');
    $wsr = curl_exec($curl);
    curl_close($curl);
    unset($curl);

    $html->loadHTML($wsr);
    $finder = new DomXPath($html);
    $links = [];
    $eplinks = [];

    $nodes = $finder->query("//*[contains(@title, 'gorillavid.in')]");
    foreach($nodes as $node) {
      $bsf = $node->getAttribute("href");
				$bsfs = explode("?r=", $bsf);
				$bsf = $bsfs[1];

				$bsf = base64_decode($bsf);

				$links[] = $bsf;
    }

    $mh = curl_multi_init();
	  $cnodes = array();
		$j = 0;
    $llk = "";
		foreach($links as $lk)
		{
			$lks = explode(".in/", $lk);
			$lk = $lks[0].".in/embed-".$lks[1]."-960x480.html";
			//echo $lk."<br>";
      $llk = $lk;
      break;
		}

    $cl = curl_init();
    // Set some options - we are passing in a useragent too here
    curl_setopt_array($cl, array(
        CURLOPT_RETURNTRANSFER => 1,
        CURLOPT_HEADER => 0,
        CURLOPT_URL => $llk
    ));
    curl_setopt($cl ,CURLOPT_USERAGENT,'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2798.0 Safari/537.36');
    $llkr = curl_exec($cl);
    curl_close($cl);

    $html = new DOMDocument();
    $html->loadHTML($llkr);
		$finder = new DomXPath($html);
		$nodes = $finder->query("//*[contains(@id, 'player_code')]");

    //$eplinks[] = $nodes[0]->nodeValue;

		foreach($nodes as $node)
		{
      //$eplinks[] = "node".$node;
			$code = $node->nodeValue;
			$vls = explode('sources: [{', $code);
			$vls = explode('}]', $vls[1]);
			$vls = explode("src: '", $vls[0]);
			$vls = explode("',", $vls[1]);
			$vl = $vls[0];
			//echo "<br>Link: ".$vls[0];
			if(strpos($vl, ".mp4") !== false){
				$vls = explode('.mp4"', $vl);
				$vl = $vls[0].".mp4";
			}
			if(strpos($vl, ".flv") !== false){
				$vls = explode('.flv"', $vl);
				$vl = $vls[0].".flv";
			}

			$eplinks[] = $vl;
		}

    $response = $response->withJson($eplinks);

    return $response;
  });

  $app->get('/', function(Request $request, Response $response){
    $response->getBody()->write("LoungeLobby API v4");

    return $response;
  });

  $app->get('/phpinfo', function(Request $request, Response $response){
    $response->getBody()->write(phpinfo());
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
