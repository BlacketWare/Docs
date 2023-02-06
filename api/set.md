## ```/worker/set```
This is an HTTP **post** request that sets your PFP or banner.

Request structure:   
```
Object
    type : string - Either 'blook' or 'banner'
    banner : string - If the type is 'banner', this is the name of the banner.
    blook : string - If the type is 'blook', this is the name of the blook.
```

Response structure:
```
Object
    error : bool - Has an error occurred? If successful, this should be false.
```