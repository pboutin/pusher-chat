<?php
require('lib/Pusher.php');
require('pusher.php');

$data = array(
    'sender'    => $_POST['sender'],
    'message'   => $_POST['message']
    );

$pusher = new Pusher($key, $secret, $id);


$pusher->trigger('messages', 'new_message', $data);

