## ```/worker/change```
This is an HTTP **post** request that changes your username or password.

Request structure:   
```
Object
    type        : string - Either 'username', 'password', or 'color'
    username    : string - If the type is 'username', this is your NEW username.
    password    : string - If the type is 'username', this is your OLD password.
    oldPassword : string - If the type is 'password', this is your OLD username.
    newPassword : string - If the type is 'password', this is your NEW password.
    color       : string - If they type is 'color', this is your NEW name color.
```

Response structure:
```
Object
    error : bool - Has an error occurred? If successful, this should be false.
```
