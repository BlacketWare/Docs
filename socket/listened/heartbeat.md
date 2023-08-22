### heartbeat
Exists for no reason.

```js
// lib/js/all.js
blacket.socket.on("heartbeat", () => {
    console.log(`[Blacket] Received heartbeat from server.`);
});
```