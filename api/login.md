## ```/worker/login```
This is an HTTP **post** endpoint. This logs you in.

Request structure:   
```
Object
    username : string - The user's name.
    password : string - The user's password.
```

Response structure:   
```
Object
    error : bool - Has an error occurred?
```