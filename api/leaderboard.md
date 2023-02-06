## ```/worker/leaderboard```
This is an HTTP **get** request that lets you get the leaderboard.

Response structure:   
```
Object
    error    : bool - Has an error occurred?
    tokens   : array<object> - The token-based leaderboard. Commonly flooded with Debug pack spammers.
        Object
            username  : string - The user's username.
            role      : string - The user's role.
            tokens    : int - The user's amount of tokens.
            color     : string - The user's name color.
    exp      : array<object> - The exp-based leaderboard.
        Object
            username  : string - The user's username.
            role      : string - The user's role.
            exp       : int - The user's amount of experience points.
            color     : string - The user's name color.
            level     : int - The user's experience level.
```