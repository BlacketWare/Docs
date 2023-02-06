## ```/worker/open```
This is an HTTP **post** endpoint that lets you open a pack.

Request structure:   
```
Object
    pack : string - The pack name.
```

Response structure:   
```
Object
    error : bool - Has an error occurred?
    blook : string - The blook's name that you received from opening the pack.
```