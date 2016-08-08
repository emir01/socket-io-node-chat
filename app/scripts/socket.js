(function(chat){

    chat.socket ={};

    chat.socket.setupClient = function(){
        chat.socket.io = io();
    }

})(window.chat = window.chat || {})