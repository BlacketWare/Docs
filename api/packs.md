## ```/worker/packs```
This is an HTTP **get** request that lets you get all of the packs.

Response structure:   
```
Object
    error : bool - Has an error occurred?
    packs : object<string, object> - The packs, where the key is the pack name, and the value is the pack's information.
        Object
            price   : int - The price of the pack.
            color1  : string - The hex code of the first accent color of the pack.
            color2  : string - The hex code of the second accent color of the pack.
            image   : string - The pack's image.
            blooks  : array<string> - An array of the blooks in the pack.
            hidden  : bool - Is the pack hidden?
```