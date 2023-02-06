## ```/worker/rarities```
This is an HTTP **get** request that lets you get rarities of blooks.

Response structure:   
```
Object
    error    : bool - Has an error occurred?
    rarities : object<string, object> - The rarities, where the key is the rarity name, and the value is the rarity's information.
        Object
            color     : string - The rarity's theme color.
            animation : string - The rarity's animation (the animation that plays when getting a blook of this rarity)
            exp       : int - The experience points you get when opening a blook of this rarity.
            wait      : int - The wait time (in milliseconds) before the animation plays and the blook is revealed.
```