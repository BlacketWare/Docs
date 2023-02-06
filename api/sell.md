## ```/worker/sell```
This is an HTTP **post** endpoint that lets you sell one or more blooks.

Request structure:
```
Object
    blook    : string - The blook's name.
    quantity : int 
```

Response structure:
```
Object
    error : bool - Has an error occurred? If the blook sold, this should be false.
```