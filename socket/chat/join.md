### join
Join a chat "room".

Onmessage structure:
```
Object
    error : bool - Has an error occurred?
    data  : Object - information about the room
        messages : array - A list of messages recently sent in the room.
        users    : array - Potentially an array of online users?
```