## ```/worker/rooms```
This is an HTTP **get** request that lets you get all of the rooms.

Response structure:   
```
Object
    error : bool - Has an error occurred?
    rooms : object<string, object> - The rooms, where the key is the room name, and the value is the room's information.
        Object
            perm    : string - The permission required to view the room.
```