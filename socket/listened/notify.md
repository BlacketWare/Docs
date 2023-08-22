### notify
Notify the user of an event.

```js
// lib/js/game.js
blacket.socket.on("notify", (data) => {
    blacket.createToast(data.data);
    if (Notification.permission == "granted" && !document.hasFocus()) new Notification(data.data.title, {
        body: data.data.message,
        icon: data.data.icon,
        tag: "BLACKET_NOTIFICATION",
        silent: true
    });
});
```