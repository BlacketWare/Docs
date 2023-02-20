### /worker/bazaar/
This is an HTTP **get** request that returns the bazaar.
Passing an item (such as Death) using the ?paramater= Express returns a specific item. (example: https://blacket.org/worker/bazaar?item=Death)

Response structure:
```
Object
    error   : bool - Has an error occured?
    bazaar  : array (filled with objects) - The results.
        Object - an example object, has no name
            id      : int - offer ID, used for purchasing & is randomly generated
            item    : string - the item name.
            price   : int - offer price.
            seller  : string - the seller's username (FINALLY NOT ID!)
            date    : int - Date.now() of when the offer was posted.
```

#### /worker/bazaar/buy
This is an HTTP **post** request that allows you to buy a bazaar item.

Request structure:
```
Object
    id  : int - the ID of the offer to accept.
```

Response structure:
```
Object
    error   : bool - Has an error occured? If this is false, you have purchased it.
```

#### /worker/bazaar/list
This is an HTTP **post** request that allows you to list an item on the bazaar.

Request structure:
```
Object
    item  : string - the name of the Blook.
    price : int - the price you are offering it for.
```

Response structure:
```
Object
    error   : bool - Has an error occured? If this is false, you have listed it.
```

#### /worker/bazaar/remove
This is an HTTP **post** request that allows you to remove one of your bazaar posts.

Request structure:
```
Object
    id  : int - the ID of the offer to remove.
```

Response structure:
```
Object
    error   : bool - Has an error occured? If this is false, you have removed it.
```
