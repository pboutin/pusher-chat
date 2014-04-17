var pusher = new Pusher(window.key);
var channel = pusher.subscribe('messages');

channel.bind('new_message', function(data)
{
    $('#messages').prepend('<hr/>');
    $('#messages').prepend('<p>' + data.message + '</p>');
    $('#messages').prepend('<h4>' + data.sender + '</h4>');
});

$(function()
{ 
    $('#btnsend').click(function()
    {
        $.post('sender.php',
        {
            'sender': $('#txtsender').val(),
            'message': $('#txtmessage').val()
        })
    });

    $('#txtmessage').keypress(function(e)
    {
        if (e.keyCode == 13 || e.which == 13)
        {
            $('#btnsend').trigger('click');
            $(this).val("");
        }
    });
});
