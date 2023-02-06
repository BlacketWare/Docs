## ```/worker/register```
This is an HTTP **post** endpoint. This registers a new account into the database.

Request structure:   
```
Object
    username : string - The new user's name.
    password : string - The new user's password.
    form     : array<object> - The infamous join form/application.
        Object
            age : string - The new user's age.
            image : string - The new user's discord tag.
            body  : string - The new user's reason to join.
```

Response structure:   
```
Object
    error : bool - Has an error occurred?
```