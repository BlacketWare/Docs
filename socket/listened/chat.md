### chat
Recieve a new chat message.<br>
If you're not in a room but are in a trade, it shows the trade messages.

```js
// lib/js/trade.js
blacket.socket.on("chat", (data) => {
    if (data.error) return;
    let className = "";
    if (data.user.color == "rainbow") className = ` class="rainbow"`;
    let message = blacket.htmlEncode(data.message);
    chatContainer.maxScrollTop = chatContainer.scrollHeight - chatContainer.offsetHeight;
    $("#chatContainer").append(`<text style="color: ${data.user.color};"${className}>[${data.user.role}] ${data.user.username}: </text><text style="color: white;">${message}</text><br>`);
    if (chatContainer.maxScrollTop - chatContainer.scrollTop <= chatContainer.offsetHeight) chatContainer.scrollTop = chatContainer.scrollHeight;
});
```

```js
// lib/js/chat.js

// to long to be displayed, read it yourself
// https://blacket.org/lib/js/chat.js
```