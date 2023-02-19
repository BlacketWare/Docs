### delete
Delete a message with its ID.<br>
Only emittable by admins.

Onmessage structure:   
```
Object
    error    : bool - Is this reporting a chat-related error (true), or just a new id       : string - The ID of the message to be deleted.
```