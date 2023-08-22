### join
Confirm the joining of a room as well as previous messages in that room.

```js
// lib/js/chat.js
blacket.socket.on("join", (data) => {
    setTimeout(() => {
        if (data.data.messages.length > 0) data.data.messages.forEach(message => {
            if (message.message.toLowerCase().includes(`@${blacket.user.username.toLowerCase()}`)) blacket.appendChat(message, true);
            else blacket.appendChat(message, false);
            blacket.stopLoading();
        });
        else blacket.stopLoading();
    }, 50);

    let scrollInterval = setInterval(() => {
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }, 1);
    setTimeout(() => {
        clearInterval(scrollInterval);
    }, 1000);
});
```