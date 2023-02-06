## ```/worker/badges```
This is an HTTP **get** request that lets you get all available badges.
```
Object
    error : bool - Has an error occurred?
    badges: object<string, object> - A list of keys (badge names) and their values (badge information)
        Object
            image      : string - The (usually relative) image URL.
            description: string - The badge's description.
```