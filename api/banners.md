## ```/worker/banners```
This is an HTTP **get** request that returns the instance's banners.

Response structure:
```
Object
    error   : bool - Has an error occurred?
    emojis  : object<string, object> - A key (banner name) and a value (the information).
        Object
            name      : string - The banner name.
            Object
                image       : string - The image source of the banner.
```