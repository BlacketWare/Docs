### bought
Informs the user a bazaar offer they posted has been purchased.

```js
// lib/js/game.js
blacket.socket.on("bought", (data) => {
    blacket.requests.get(`/worker/user/${data.data.user}`, (user) => {
        blacket.createToast({
            title: "Bazaar",
            message: `${user.user.username} has bought your ${data.data.item} for ${data.data.price.toLocaleString()} tokens!`,
            icon: "/content/icons/bazaar.png",
            time: 5000
        });
        blacket.user.tokens += data.data.price;
        if ($("#tokenBalance > div:nth-child(2)").length > 0) $("#tokenBalance > div:nth-child(2)").html(blacket.user.tokens.toLocaleString());
        if (Notification.permission == "granted" && !document.hasFocus()) new Notification(`Bazaar`, {
            body: `${user.user.username} has bought your ${data.data.item} for ${data.data.price.toLocaleString()} tokens!`,
            icon: "/content/icons/bazaar.png",
            tag: "BLACKET_BAZAAR_SOLD",
            silent: true
        });
    });
});
```