## ```/worker/blooks```
This is an HTTP **get** request that lets you get a list of all the blooks.

Response structure:
```
Object
    error    : bool - Has an error occurred?
    blooks   : object<string, object> - The entire list of all the blooks, where the key is the blook name, and the value is the blook's information.
        Object
            rarity   : string - The blook's assigned rarity.
            chance   : int - The blook's chance (1%-100%).
            price    : int - The selling price of the blook.
            image    : string - A relative URL of the blook's image (what the blook looks like).
            art      : string - A relative URL of the blook's art (the background of the blook that is visible in the sell menu).
```