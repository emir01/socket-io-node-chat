(function (chat) {
    $(function () {
        chat.socket.setupClient();

        $("#sendMessageButton").on('click', function () {
            sendMessage();
        });

        $("#messageText").on('keydown', function (e) {
            if (e.which === 13) {
                e.preventDefault();
                sendMessage();
            }
        });

        chat.socket.io.on("chat_message", function(msg){
            chat.messages.printMessage(msg, false);
        });

        function sendMessage() {
            var messageObject = chat.messages.processMyMessage();
            if(messageObject){
                chat.socket.io.emit("chat_message", messageObject);
            }
        }
    });
})(window.chat = window.chat || {})