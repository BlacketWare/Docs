### heartbeat
Automatically emitted by both the server and client to ping each other.<br>
No known purpose, online checks are usually done with the `/worker/ping` API endpoint. 

Onmessage structure:   
```
Object
    error    : bool - Has an error occured?
```