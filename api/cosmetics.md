## ```/worker/cosmetics```
This is a small HTTP tree.

### /worker/cosmetics/avatar
Allows you to set your avatar.

Request structure:   
```
Object
    blook   : string - new avatar.
```

Response structure:
```
Object
    error   : bool - Has an error occurred? If successful, this should be false.
```

### /worker/cosmetics/banner
Allows you to set your banner.

Request structure:   
```
Object
    blook   : string - new banner.
```

Response structure:
```
Object
    error   : bool - Has an error occurred? If successful, this should be false.
```