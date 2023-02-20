## ```/worker/use```
This is an HTTP **post** endpoint that lets you use a Booster.

Request structure:   
```
Object
    item : string - The item name.
```

Response structure:   
```
Object
    error : bool - Has an error occurred?
    message : string - A message to display on the user's side. EXAMPLE: "You have activated a 3 Hour Booster! All blook chances have been boosted by 2.69x!"
```