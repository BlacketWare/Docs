## socket
This of all known Blacket socket messages.<br>
If you find an unlisted one, open an issue to report or a PR to fix.<br>
<br>
## guide
The Blacket socket is built with WebSocket BUT is customized to work like SocketIO.<br>
On the native site, `blacket.socket.on()` and `blacket.socket.emit()` are functions inserted to make coding easier.<br>
In the Beta days of Blacket, Blacket was built from SocketIO, Xotic later switched to Websocket.<br>
All socket messages emitted from the server have a `type` string that explains what they are to the client. All socket messages emitting chats have a `type: 'chat'` value. Since the name of each socket message is clearly defined, we'll keep the type value out throughout the docs.
<br>
## connection
Connection is done with the browser-native WebSocket object, or the NodeJS [ws package](https://npmjs.com/package/ws).<br>
You must send a connection request to join the WebSocket at the URL `https://blacket.org/worker/socket`.<br>
You must pass a header named 'cookie' with the connect.sid value. Please note you cannot pass headers on the browser, so you must use a NodeJS runtime or be on Blacket itself to use the websocket.