## ```/worker/booster```
This is an HTTP **get** request that returns the global booster.

Response structure:
```
Object
    active      : bool - Is there a boost?
    multiplier  : int - How much is the boost multiplying?
    time        : int - How much longer will the boost last for?
    user        : string - The user ID who activated the boost.
```