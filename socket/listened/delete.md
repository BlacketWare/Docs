### delete
Recieve a chat message deletion.

```js
// lib/js/chat.js
blacket.socket.on("delete", (data) => {
    if (data.error) return;
    if ($(`#message-${data.id}`).parent().children().length === 3) {
        var rjs = document.getElementById(`message-${data.id}`);
        var arjs = [...rjs.parentElement.parentElement.children];
        $(`#message-${data.id}`).parent().remove();
        blacket.lastUser = parseInt((arjs[arjs.length - 2] || {
            dataset: {
                userId: NaN
            }
        }).dataset.userId);
    } else {
        var rjs = document.getElementById(`message-${data.id}`);
        var index = [...rjs.parentElement.children].indexOf(rjs);
        if (index === 2) {
            if ([...rjs.parentElement.children].slice(2).length > 1)
                [...rjs.parentElement.children].slice(2)[1].style.marginTop = '-32.5px';
            rjs.remove();
        } else {
            [...rjs.parentElement.children][index].style.marginTop = '-32.5px';
            $(`#message-${data.id}`).remove();
        }
    }
});
```