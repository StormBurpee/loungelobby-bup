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
  $container['mysqli'] = new mysqli($config['db']['host'], $config['db']['user'], $config['db']['pass'], $config['db']['dbname']);

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
    $resp->poster_path = $this->img."/w500".$resp->poster_path;
    $resp->backdrop_path = $this->img."/w1280".$resp->backdrop_path;
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

  $app->get("/show/{showid}/episodes/{seasoncount}", function(Request $request, Response $response) {
    $showid = $request->getAttribute('showid');
    $seasoncount = $request->getAttribute('seasoncount');
    $seasonstring = "";
    $seasons = [];
    for($i = 1; $i <= $seasoncount; $i++) {
      $seasons[] = "season/".$i;
    }
    $seasonstring = join(",", $seasons);

    $curl = curl_init();
    curl_setopt_array($curl, array(
        CURLOPT_RETURNTRANSFER => 1,
        CURLOPT_URL => "https://api.themoviedb.org/3/tv/$showid?api_key=d7d64233b06969210ff543eb263f7798&language=en&append_to_response=$seasonstring",
        CURLOPT_USERAGENT => 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3053.3 Safari/537.36'
    ));
    $resp = json_decode(curl_exec($curl), true);
    curl_close($curl);
    $ss = ["img_path"=>$this->img."/w500", "seasons" => []];

    for($i = 1; $i <= $seasoncount; $i++) {
      $resp["season/$i"]["episodes"] = array_reverse($resp["season/$i"]["episodes"]);
      $ss["seasons"][] = $resp["season/$i"];
    }

    $ss["seasons"] = array_reverse($ss["seasons"]);

    $nse = json_decode(json_encode($ss));

    foreach($nse->seasons as $season) {
      foreach($season->episodes as $episode) {
        if($episode->air_date > date("Y-m-d")) {
          $episode->showep = false;
        } else {
          $episode->showep = true;
        }
      }
    }

    $nr = $response->withJson($nse);
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
    //miscellanious show fixes
    if($resp->original_name == "Madam Secretary")
      $resp->original_name = "Madame Secretary";
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

    $vl = ["link"=>$eplinks[0]];

    $response = $response->withJson($vl);

    return $response;
  });

  $app->get('/search/{term}', function(Request $request, Response $response){
    $term = rawurlencode($request->getAttribute('term'));
    $curl = curl_init();
    curl_setopt_array($curl, array(
        CURLOPT_RETURNTRANSFER => 1,
        CURLOPT_URL => "https://api.themoviedb.org/3/search/tv?api_key=d7d64233b06969210ff543eb263f7798&language=en&query=$term",
        CURLOPT_USERAGENT => 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3053.3 Safari/537.36'
    ));
    $resp = json_decode(curl_exec($curl));
    curl_close($curl);
    //$response->getBody()->write(json_encode($resp));
    $nr = $response->withJson($resp);
    return $nr;

  });

  $app->get('/', function(Request $request, Response $response){
    $response->getBody()->write("LoungeLobby API v4");

    return $response;
  });

  $app->get('/phpinfo', function(Request $request, Response $response){
    $response->getBody()->write(phpinfo());
    return $response;
  });

  $app->get('/user', function(Request $request, Response $response) {

  });

  $app->get('/users/all', function(Request $request, Response $response) {
    $users = [];
    $r = $this->mysqli->query("SELECT * FROM users");
    $users = ["count"=>$r->num_rows, "users"=>[]];
    while($row = $r->fetch_object()) {
      $users["users"][] = $row->username;
    }
    $response = $response->withJson($users);
    return $response;
  });

  $app->get('/user/loggedin', function(Request $request, Response $response) {
    $ul = ['loggedin'=>false];
    if(isset($_COOKIE['loggedin']) && $_COOKIE['loggedin'] == 1) {
      $ul = ["loggedin"=>true];
    }

    $response = $response->withJson($ul);
    return $response;
  });

  $app->get('/user/me', function(Request $request, Response $response) {
    /*userid: number;
    username: string;
    usershows: object;
    friends: object;
    exp: number;
    level: number;*/
    $user = [
      "userid" => 0,
      "username" => "Guest",
      "usershows" => [],
      "friends" => [],
      "exp" => 0,
      "level" => 0
    ];
    if(isset($_COOKIE['loggedin']) && $_COOKIE['loggedin'] == 1) {
      $getuserauth = $this->mysqli->query("SELECT * FROM auth_tokens WHERE token='".$_COOKIE['userauth']."'");
      if($getuserauth && $getuserauth->num_rows > 0) {
        while($userauth = $getuserauth->fetch_object()) {
          $getuser = $this->mysqli->query("SELECT * FROM users WHERE id=".$userauth->userid);
          if($getuser && $getuser->num_rows > 0) {
            while($u = $getuser->fetch_object()) {
              $shows = [];
              $friends = [];
              $showlookup = $this->mysqli->query("SELECT * FROM myshows WHERE userid=".$u->id);
              if($showlookup && $showlookup->num_rows > 0) {
                while($s = $showlookup->fetch_object()) {
                  $shows[] = $s->showid;
                }
              }
              $user["userid"] = $u->id;
              $user["username"] = $u->username;
              $user["usershows"] = $shows;
              $user["friends"] = $friends;
              $user["exp"] = $u->exp;
              $user["level"] = floor(0.25 * sqrt($u->exp));
            }
          }
        }
      }
    }
    $response = $response->withJson($user);
    return $response;
  });

  $app->post('/user/login', function(Request $request, Response $response) {
    $data   = $request->getParsedBody();

    $ruser = [];
    if(!isset($data['u'])) {
      $ruser['error'] = true;
      $ruser['errorid'] = 0;
      $ruser['errormessage'] = "Username not supplied!";
      $response = $response->withJson($ruser);
      return $response;
    } elseif(!isset($data['p'])) {
      $ruser['error'] = true;
      $ruser['errorid'] = 0;
      $ruser['errormessage'] = "Password not supplied!";
      $response = $response->withJson($ruser);
      return $response;
    }

    $user   = $this->mysqli->escape_string($data['u']);
    $pass   = $this->mysqli->escape_string($data['p']);

    $userlookup = $this->mysqli->query("SELECT * FROM users WHERE username='$user'");
    if($userlookup && $userlookup->num_rows > 0) {
      while($u = $userlookup->fetch_object()) {
        if(password_verify($pass, $u->password)) {
          $authuser = password_hash($user, PASSWORD_DEFAULT);
          setcookie("loggedin", true, time()+60*60*24*30, "/");
          setcookie("userauth", "$authuser", time()+60*60*24*30, "/");
          $userid = $u->id;
          $this->mysqli->query("INSERT INTO auth_tokens (`userid`, `token`) VALUES ($userid, '$authuser')");
          $ruser['loggedin'] = 1;
          $ruser['userauth'] = $authuser;
        } else {
          $ruser['error'] = true;
          $ruser['errorid'] = 3;
          $ruser['errormessage'] = "Password incorrect!";
        }
      }
    } else {
      $ruser['error'] = true;
      $ruser['errorid'] = 2;
      $ruser['errormessage'] = "User: $user could not be found!";
    }

    $response = $response->withJson($ruser);
    return $response;
  });

  $app->post('/user/register', function(Request $request, Response $response) {
    $data   = $request->getParsedBody();

    $ruser = [];
    if(!isset($data['u'])) {
      $ruser['error'] = true;
      $ruser['errorid'] = 0;
      $ruser['errormessage'] = "Username not supplied!";
      $response = $response->withJson($ruser);
      return $response;
    } elseif(!isset($data['p'])) {
      $ruser['error'] = true;
      $ruser['errorid'] = 0;
      $ruser['errormessage'] = "Password not supplied!";
      $response = $response->withJson($ruser);
      return $response;
    } elseif(!isset($data['e'])) {
      $ruser['error'] = true;
      $ruser['errorid'] = 0;
      $ruser['errormessage'] = "Email not supplied!";
      $response = $response->withJson($ruser);
      return $response;
    }

    $user   = $this->mysqli->escape_string($data['u']);
    $pass   = password_hash($this->mysqli->escape_string($data['p']), PASSWORD_DEFAULT);
    $email  = $this->mysqli->escape_string($data['e']);
    $ref = "";
    if(isset($data['r']))
      $ref    = $this->mysqli->escape_string($data['r']);
    $usercheck = $this->mysqli->query("SELECT * FROM users WHERE username='$user'");

    if($usercheck && $usercheck->num_rows > 0) {
      $ruser['error'] = true;
      $ruser['errorid'] = 1;
      $ruser['errormessage'] = "Username Taken!";
    } else {
      $newuser = $this->mysqli->query("INSERT INTO users (`username`, `email`, `password`, `ref`) VALUES ('$user', '$email', '$pass', '$ref')");
      $authuser = password_hash($username, PASSWORD_DEFAULT);
      setcookie("loggedin", true, time()+60*60*24*30, "/");
      setcookie("userauth", "$authuser", time()+60*60*24*30, "/");
      $userid = $this->mysqli->insert_id;
      $this->mysqli->query("INSERT INTO auth_tokens (`userid`, `token`) VALUES ($userid, '$authuser')");
      $ruser['loggedin'] = true;
      $ruser['userauth'] = $authuser;
    }
    $response = $response->withJson($ruser);
    return $response;
  });

  $app->get('/user/logout', function(Request $request, Response $response) {
    if(isset($_COOKIE['loggedin']) && $_COOKIE['loggedin'] == 1) {
      setcookie("loggedin","",time()-1, "/");
      setcookie("userauth", "", time()-1, "/");
    }
    $ul = ['loggedin'=>false];
    $response = $response->withJson($ul);
    return $response;
  });

  $app->get("/myshows", function(Request $request, Response $response) {

    $shows = [];
    if(isset($_COOKIE['loggedin']) && $_COOKIE['loggedin'] == 1) {
      $getuserauth = $this->mysqli->query("SELECT * FROM auth_tokens WHERE token='".$_COOKIE['userauth']."'");
      if($getuserauth && $getuserauth->num_rows > 0) {
        while($userauth = $getuserauth->fetch_object()) {
          $getuser = $this->mysqli->query("SELECT * FROM users WHERE id=".$userauth->userid);
          if($getuser && $getuser->num_rows > 0) {
            while($u = $getuser->fetch_object()) {
              $showlookup = $this->mysqli->query("SELECT * FROM myshows WHERE userid=".$u->id);
              if($showlookup && $showlookup->num_rows > 0) {
                while($s = $showlookup->fetch_object()) {
                  $shows[] = $s->showid;
                }
              }
            }
          }
        }
      }
    }
    $response = $response->withJson($shows);
    return $response;
  });

  $app->get("/myshows/desc", function(Request $request, Response $response) {
    $shows = [];
    if(isset($_COOKIE['loggedin']) && $_COOKIE['loggedin'] == 1) {
      $getuserauth = $this->mysqli->query("SELECT * FROM auth_tokens WHERE token='".$_COOKIE['userauth']."'");
      if($getuserauth && $getuserauth->num_rows > 0) {
        while($userauth = $getuserauth->fetch_object()) {
          $getuser = $this->mysqli->query("SELECT * FROM users WHERE id=".$userauth->userid);
          if($getuser && $getuser->num_rows > 0) {
            while($u = $getuser->fetch_object()) {
              $showlookup = $this->mysqli->query("SELECT * FROM myshows WHERE userid=".$u->id);
              if($showlookup && $showlookup->num_rows > 0) {
                while($s = $showlookup->fetch_object()) {
                  $url = $this->url;
                  $curl = curl_init();
                  curl_setopt_array($curl, array(
                      CURLOPT_RETURNTRANSFER => 1,
                      CURLOPT_URL => $url."/api/show/".$s->showid,
                      CURLOPT_USERAGENT => 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3053.3 Safari/537.36'
                  ));
                  $resp = json_decode(curl_exec($curl));
                  curl_close($curl);
                  $shows[] = $resp;
                }
              }
            }
          }
        }
      }
    }
    $response = $response->withJson($shows);
    return $response;
  });

  $app->get("/myshows/{showid}", function(Request $request, Response $response) {
    $userid = 0;
    $showid = $request->getAttribute('showid');
    $myshow = false;
    $userauth = $this->mysqli->query("SELECT * FROM auth_tokens WHERE token='".$_COOKIE['userauth']."'");
    if($userauth && $userauth->num_rows > 0) {
      while ($auth = $userauth->fetch_object()) {
        $userid = $auth->userid;
      }
    }
    $showquery = $this->mysqli->query("SELECT * FROM myshows WHERE userid=$userid AND showid=$showid");
    if($showquery && $showquery->num_rows > 0) {
      $myshow = true;
    }
    $response = $response->withJson(["myshow"=>$myshow]);
    return $response;
  });

  $app->get("/myshows/add/{showid}", function(Request $request, Response $response) {
    $userid = 0;
    $showid = $request->getAttribute('showid');
    $userauth = $this->mysqli->query("SELECT * FROM auth_tokens WHERE token='".$_COOKIE['userauth']."'");
    if($userauth && $userauth->num_rows > 0) {
      while ($auth = $userauth->fetch_object()) {
        $userid = $auth->userid;
      }
    }
    $showquery = $this->mysqli->query("INSERT INTO myshows (userid, showid) VALUES ($userid, $showid)");
    $response = $response->withJson(["myshow"=>true]);
    return $response;
  });

  $app->get("/myshows/remove/{showid}", function(Request $request, Response $response) {
    $userid = 0;
    $showid = $request->getAttribute('showid');
    $userauth = $this->mysqli->query("SELECT * FROM auth_tokens WHERE token='".$_COOKIE['userauth']."'");
    if($userauth && $userauth->num_rows > 0) {
      while ($auth = $userauth->fetch_object()) {
        $userid = $auth->userid;
      }
    }
    $showquery = $this->mysqli->query("DELETE FROM myshows WHERE userid=$userid AND showid=$showid");
    $response = $response->withJson(["myshow"=>false]);
    return $response;
  });

  $app->get("/allroutes", function(Request $request, Response $response) {
    $routes = $this->router->getRoutes();
    // And then iterate over $routes
    $rt = [];
    foreach ($routes as $route) {
        $rt[] = $route->getPattern();
    }

    $response = $response->withJson($rt);
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
