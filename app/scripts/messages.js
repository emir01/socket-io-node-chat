(function (chat) {
    chat.messages = {
        printMessage: _printMessage,
        processMyMessage: _processMyMessage,
        buildMessageItem: _buildMessageItem
    };

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

        if (message && message.trim() != "") {
            // print the message
            _printMessage(message, true);
            return message;
        }
        else {
            return null;
        }
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
})(window.chat = window.chat || {})