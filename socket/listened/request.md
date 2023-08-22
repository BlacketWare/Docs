### request
Update the user on the status of a trade request.
Used for:
- Incoming trade requests
- Trade request update (accepted, declined)

```js
// lib/js/game.js
blacket.socket.on("request", (data) => {
    if (data.error) {
        $("#waitingForModal").remove();
        blacket.stopLoading();
        $("body").append(`<div id="errorModal" class="arts__modal___VpEAD-camelCase"><form class="styles__container___1BPm9-camelCase"><div class="styles__text___KSL4--camelCase"><div>Error<br><br>${data.reason}</div></div><div class="styles__holder___3CEfN-camelCase"><div class="styles__buttonContainer___2EaVD-camelCase"><div id="closeButton" class="styles__button___1_E-G-camelCase styles__button___3zpwV-camelCase" role="button" tabindex="0"><div class="styles__shadow___3GMdH-camelCase"></div><div class="styles__edge___3eWfq-camelCase" style="background-color: #2f2f2f;"></div><div class="styles__front___vcvuy-camelCase styles__buttonInside___39vdp-camelCase" style="background-color: #2f2f2f;">Okay</div></div></div></div><input type="submit" style="opacity: 0; display: none;" /></form></div>`);
        $("#closeButton").click(() => {
            $("#errorModal").remove();
        });
        return;
    }

    if (data.data && data.data.accepted) {
        $("#waitingForModal").remove()
        blacket.startLoading();
        location.href = "/trade";
        return;
    }

    if (data.data && data.data.cancelled) {
        let toast = $(`.toastMessage`);
        toast.attr("style", "animation: flyOut 0.35s ease-in-out forwards; background-color: #1f1f1f;")
        setTimeout(() => {
            toast.remove();
        }, 350);
        return;
    }

    if (data.data && data.data.declined) {
        $("#waitingForModal").remove()
        $("body").append(`<div id="declinedModal" class="arts__modal___VpEAD-camelCase"><form class="styles__container___1BPm9-camelCase"><div class="styles__text___KSL4--camelCase"><div>Your trade request has been declined.</div></div><div class="styles__holder___3CEfN-camelCase"><div class="styles__buttonContainer___2EaVD-camelCase"><div id="closeButton" class="styles__button___1_E-G-camelCase styles__button___3zpwV-camelCase" role="button" tabindex="0"><div class="styles__shadow___3GMdH-camelCase"></div><div class="styles__edge___3eWfq-camelCase" style="background-color: #2f2f2f;"></div><div class="styles__front___vcvuy-camelCase styles__buttonInside___39vdp-camelCase" style="background-color: #2f2f2f;">Okay</div></div></div></div><input type="submit" style="opacity: 0; display: none;" /></form></div>`);
        $("#closeButton").click(() => {
            $("#declinedModal").remove();
        });
        return;
    }


    if (data.data && data.data.id) {
        $(".toastMessage").remove();
        blacket.requests.get(`/worker/user/${data.data.id}`, (data) => {
            let id = Math.random().toString(36).substring(2, 15);
            $("#app").append(`<div id="${id}" class="toastMessage" style="animation: flyIn 0.35s ease-in-out forwards; background-color: #1f1f1f;"><text style="color: white; font-size:20px;">You have received a trade request from ${data.user.username}! Would you like to accept?</text><div id="acceptButton" class="styles__button___1_E-G-camelCase styles__button___3zpwV-camelCase" role="button" tabindex="0" style="margin-top: 10px;"> <div class="styles__shadow___3GMdH-camelCase"></div><div class="styles__edge___3eWfq-camelCase" style="background-color: green;"></div><div class="styles__front___vcvuy-camelCase styles__buttonInside___39vdp-camelCase" style="background-color: green;">Accept</div></div><div id="declineButton" class="styles__button___1_E-G-camelCase styles__button___3zpwV-camelCase" role="button" tabindex="0" style="margin-top: 10px;"> <div class="styles__shadow___3GMdH-camelCase"></div><div class="styles__edge___3eWfq-camelCase" style="background-color: red;"></div><div class="styles__front___vcvuy-camelCase styles__buttonInside___39vdp-camelCase" style="background-color: red;">Decline</div></div></div>`);
            new Audio("/content/request.ogg").play();

            $("#acceptButton").click(() => {
                blacket.socket.emit("accept", "request");
                blacket.startLoading();
                location.href = "/trade";
            });

            $("#declineButton").click(() => {
                blacket.socket.emit("decline", "request");
                $(`#${id}`).attr("style", "animation: flyOut 0.35s ease-in-out forwards; background-color: #1f1f1f;");
                setTimeout(() => {
                    $(`#${id}`).remove();
                }, 3500);
            });

            if (Notification.permission == "granted" && !document.hasFocus()) new Notification(data.user.username, {
                body: `has sent you a trade request.`,
                icon: data.user.avatar,
                tag: "BLACKET_TRADE",
                silent: true
            });
        });
        return;
    }
});
```