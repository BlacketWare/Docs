## ```/worker/emojis```
This is an HTTP **get** request that returns the instance's chat emojis.

Response structure:
```
Object
    error   : bool - Has an error occurred?
    emojis  : object<string, object> - A key (emoji name) and a value (the information).
        Object
            name      : string - The emoji name.
            Object
                image       : string - The image source of the emoji.
```