## ```/worker/settings```
This is another "tree of hell", since Xotic loves those.<br>
The root returns nothing.

### /worker/settings/requests
Request structure:   
```
Object
    value   : string - who can send you a trade request. either "on", "friends", or "off"
```

Response structure:
```
Object
    error : bool - Has an error occurred? If successful, this should be false.
```

### /worker/settings/friends
Request structure:   
```
Object
    value   : string - who can send you a friend. either "on", "mutual", or "off"
```

Response structure:
```
Object
    error : bool - Has an error occurred? If successful, this should be false.
```

### /worker/settings/username
Request structure:   
```
Object
    username   : string - new username
    password   : string - current password
```

Response structure:
```
Object
    error : bool - Has an error occurred? If successful, this should be false.
```

### /worker/settings/password
Request structure:   
```
Object
    oldPassword   : string - current password
    newPassword   : string - new password
```

Response structure:
```
Object
    error : bool - Has an error occurred? If successful, this should be false.
```

### /worker/settings/color
Request structure:   
```
Object
    color   : string - the hex code. example format: "#000000"
```

Response structure:
```
Object
    error : bool - Has an error occurred? If successful, this should be false.
```
