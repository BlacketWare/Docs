## ```/worker/credits```
This is an HTTP **get** request that lets you get all credits.

Response structure:
```
Object
    error : bool - Has an error occurred?
    credits: array - An array of the credits.
        Object
            image       : string - the user's pfp
            nickname    : string - the user's nickname
            note        : string - why they're in the credits
            user        : object<name:info> - some basic user info
                avatar      : string - the user's game avatar
                badges      : array - the user's game badges
                banner      : string - the user's game banner
                color       : string - the user's game color
                id          : int - the user's game id
                role        : string - the user's game role
                username    : string - the user's game username
```