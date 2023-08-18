### chat
Recieve messages.<br>

Data structure:   
```
Object
    error    : bool - Is this reporting a chat-related error (true), or just a new message (false).
    id       : string - A random message ID. This is used in message deletion.
    message  : string - The message recieved.
    time     : int - A `Date.now()` timestamp of the time.
    user     : Object - Information about the sender.
        avatar   : string - A link to the message author's avatar.
        badges   : array - A list of the message author's badges.
        banner   : string - A link to the message author's banner.
        color    : string - The message author's name color (hex code).
        exp      : int - The message author's EXP amount.
        id       : int - The message author's ID.
        role     : string - The message author's role.
        username : string - The message author.
```
