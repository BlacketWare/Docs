### friend
Update the user on the status of a friendship.
Used for:
- Incoming friend requests
- Accepted/Declined/Cancelled friend requests
- Friend removals

```js
// lib/js/game.js
blacket.socket.on("friend", (data) => {
    if (data.data && data.data.type == "request") {
        blacket.friends.receiving.push(data.data.user);
        blacket.createToast({
            title: data.data.user.username,
            titleColor: data.data.user.color,
            message: "has sent you a friend request.",
            icon: data.data.user.avatar,
            time: 5000
        });

        if (blacket.config.path == "stats")
            if (blacket.user.current.toLowerCase() == blacket.user.username.toLowerCase()) {
                $("#receivingNotificationIndicator").html(blacket.friends.receiving.length);
                $("#requestsNotificationIndicator").html(blacket.friends.receiving.length);
                if (blacket.friends.receiving.length == 0) $("#receivingNotificationIndicator").attr("style", "display: none;");
                else $("#receivingNotificationIndicator").attr("style", "display: block;");
                if (blacket.friends.receiving.length == 0) $("#requestsNotificationIndicator").attr("style", "display: none;");
                else $("#requestsNotificationIndicator").attr("style", "display: block;");
            }

        if (Notification.permission == "granted" && !document.hasFocus()) new Notification(data.data.user.username, {
            body: `has sent you a friend request.`,
            icon: data.data.user.avatar,
            tag: "BLACKET_FRIEND_REQUEST",
            silent: true
        });
        return;
    }

    if (data.data && data.data.type == "accept") {
        blacket.friends.friends.push(data.data.user);
        blacket.user.friends.push(data.data.user.id);
        Object.keys(blacket.friends.sending).forEach((user) => {
            if (blacket.friends.sending[user].id == data.data.user.id) delete blacket.friends.sending[user];
        });
        blacket.friends.sending = blacket.friends.sending.filter((user) => {
            return user.id != data.data.user.id;
        });
        blacket.createToast({
            title: data.data.user.username,
            titleColor: data.data.user.color,
            message: "has accepted your friend request.",
            icon: data.data.user.avatar,
            time: 5000
        });
        if (blacket.config.path == "stats")
            if (blacket.user.current.toLowerCase() == blacket.user.username.toLowerCase()) {
                $("#receivingNotificationIndicator").html(blacket.friends.receiving.length);
                $("#requestsNotificationIndicator").html(blacket.friends.receiving.length);
                if (blacket.friends.receiving.length == 0) $("#receivingNotificationIndicator").attr("style", "display: none;");
                else $("#receivingNotificationIndicator").attr("style", "display: block;");
                if (blacket.friends.receiving.length == 0) $("#requestsNotificationIndicator").attr("style", "display: none;");
                else $("#requestsNotificationIndicator").attr("style", "display: block;");
                blacket.getUser(``);
            }

        if (Notification.permission == "granted" && !document.hasFocus()) new Notification(data.data.user.username, {
            body: `has accepted your friend request.`,
            icon: data.data.user.avatar,
            tag: "BLACKET_FRIEND_REQUEST_ACCEPT",
            silent: true
        });
        return;
    }

    if (data.data && data.data.type == "decline") {
        Object.keys(blacket.friends.sending).forEach((user) => {
            if (blacket.friends.sending[user].id == data.data.user.id) delete blacket.friends.sending[user];
        });
        blacket.friends.sending = blacket.friends.sending.filter((user) => {
            return user != undefined;
        });
        if (blacket.config.path == "stats")
            if (blacket.user.current.toLowerCase() == blacket.user.username.toLowerCase()) {
                $("#receivingNotificationIndicator").html(blacket.friends.receiving.length);
                $("#requestsNotificationIndicator").html(blacket.friends.receiving.length);
                if (blacket.friends.receiving.length == 0) $("#receivingNotificationIndicator").attr("style", "display: none;");
                else $("#receivingNotificationIndicator").attr("style", "display: block;");
                if (blacket.friends.receiving.length == 0) $("#requestsNotificationIndicator").attr("style", "display: none;");
                else $("#requestsNotificationIndicator").attr("style", "display: block;");
            }
        $(`#${data.data.user.id}`).remove();
        return;
    }

    if (data.data && data.data.type == "cancel") {
        Object.keys(blacket.friends.receiving).forEach((user) => {
            if (blacket.friends.receiving[user].id == data.data.user.id) delete blacket.friends.receiving[user];
        });
        blacket.friends.receiving = blacket.friends.receiving.filter((user) => {
            return user != undefined;
        });
        if (blacket.config.path == "stats")
            if (blacket.user.current.toLowerCase() == blacket.user.username.toLowerCase()) {
                $("#receivingNotificationIndicator").html(blacket.friends.receiving.length);
                $("#requestsNotificationIndicator").html(blacket.friends.receiving.length);
                if (blacket.friends.receiving.length == 0) $("#receivingNotificationIndicator").attr("style", "display: none;");
                else $("#receivingNotificationIndicator").attr("style", "display: block;");
                if (blacket.friends.receiving.length == 0) $("#requestsNotificationIndicator").attr("style", "display: none;");
                else $("#requestsNotificationIndicator").attr("style", "display: block;");
            }
        $(`#${data.data.user.id}`).remove();
        return;
    }

    if (data.data && data.data.type == "remove") {
        Object.keys(blacket.friends.friends).forEach((friend) => {
            if (blacket.friends.friends[friend].id == data.data.user.id) delete blacket.friends.friends[friend];
        });
        blacket.friends.friends = blacket.friends.friends.filter((user) => {
            return user != undefined;
        });
        blacket.user.friends = blacket.user.friends.filter((user) => {
            return user != data.data.user.id;
        });
        if (blacket.config.path == "stats")
            if (blacket.user.current.toLowerCase() == blacket.user.username.toLowerCase()) {
                $("#receivingNotificationIndicator").html(blacket.friends.receiving.length);
                $("#requestsNotificationIndicator").html(blacket.friends.receiving.length);
                if (blacket.friends.receiving.length == 0) $("#receivingNotificationIndicator").attr("style", "display: none;");
                else $("#receivingNotificationIndicator").attr("style", "display: block;");
                if (blacket.friends.receiving.length == 0) $("#requestsNotificationIndicator").attr("style", "display: none;");
                else $("#requestsNotificationIndicator").attr("style", "display: block;");
            }
        $(`#${data.data.user.id}`).remove();
        return;
    }
});
```