(function () {
    function _printMessage(text, isUserSender) {
        var messagesListContainer = $("#messagesList");
        messagesListContainer.append(_buildMessageItem(text, isUserSender));
        $("#messageListContainer").scrollTop(1000);
    }

    function _processMyMessage() {
        // get my message
        var messageTextBox = $("#messageText");
        var message = messageTextBox.val();
        messageTextBox.val("");

        // process socket

        // print the message
        _printMessage(message, true);
    }

    function _buildMessageItem(text, isUserSender) {
        var listItem = $("<li>");

        var message = $("<span>").text(text);

        if (isUserSender) {
            message.addClass("alert alert-auto alert-info");
            listItem.addClass("text-xs-right");
        } else {
            message.addClass("alert alert-auto alert-success");
        }

        listItem.append(message);

        return listItem;
    }

    $("#sendMessageButton").on('click', function () {
        _processMyMessage();
    });

    $("#messageText").on('keydown', function (e) {
        if (e.which === 13) {
            e.preventDefault();
            _processMyMessage();
        }
    });

    $("#test_ui_recieved").on('click', function (e) {
        var rand = Math.round(Math.random() * 100);
        _printMessage("Testing Recieved Message " + rand, false);
    });
})();