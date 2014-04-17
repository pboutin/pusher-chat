dogecom
=======

## This is not a serious project

It's only a late night test about Pusher, a promising technology that makes it possible to notify clients from any language, like PHP in this exemple.

## Setup

In order to make it to work, you will need to bind the your server and you client app to your Pusher account.

In the root, create the following files :

### pusher.php
    $id = 'your id';
    $key = 'your key';
    $secret = 'your secret token';

### pusher.js
    var key = 'your key';

#### If you're getting 500 errors from `sender.php`

It may be a problem from php's cURL library, the following helped for me (Ubuntu & Debian) :

`sudo apt-get install curl libcurl3 libcurl3-dev php5-curl`

> source : http://www.php.net/manual/en/curl.installation.php

#### Style from Geo for Bootstrap, by Divshot

> source : http://code.divshot.com/geo-bootstrap/
