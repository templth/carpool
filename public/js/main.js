
$(document).ready(function() {
    var socket = io();
    var input = $('#myid');
    var messages = $('#messages');
    var count = $('#mycount')
    var addMessage = function(message) {
        messages.append('<p>' + message + " at " + Date() + '</p>');
    };

    var updateCount = function(message) {
        count.update(message);
    };

    input.change(function() {
        var message = input.val();
        console.log('message = '+message);
        addMessage(message);
        socket.emit('message', message);
        input.val('');
    });

    socket.on('message', addMessage);
    socket.on('count', updateCount);
});
