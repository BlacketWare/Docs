## ```/worker/friends```
This is an HTTP endpoint with everything relating to the friends feature.<br>
Another tree of hell. Xotic...<br>

### /worker/friends
This is the root **GET** request fetching friend data.

Response structure:
```
Object
    error   : bool - has an error occured?
    blocked : array - array of blocked users, array of objects with basic data about each user
    friends : array - array of friends, array of objects with basic data about each user
    recieving : array - array of incoming requests, array of objects with basic data about each user
    sending : array - array of outgoing requests, array of objects with basic data about each user
```

the "basic object" (the same for everything including blocked/friends/recieving/sending):
```
Object
    avatar      : string - the avatar link of the user
    banner      : string - the banner link of the user
    color       : string - the user color
    id          : int - the user ID
    role        : string - the user role
    username    : string - the user's name
```

### /worker/friends/request
This is a **POST** request sending a friend request.

Request structure:
```
Object
    user    : string - your target.
```

Response structure:
```
Object
    error   : bool - Has an error occured? (if this is false, it was a success)
```

### /worker/friends/remove
This is a **POST** request removing a friend.

Request structure:
```
Object
    user    : string - your target.
```

Response structure:
```
Object
    error   : bool - Has an error occured? (if this is false, it was a success)
```

### /worker/friends/cancel
This is a **POST** request cancelling a friend request.

Request structure:
```
Object
    user    : string - your target.
```

Response structure:
```
Object
    error   : bool - Has an error occured? (if this is false, it was a success)
```

### /worker/friends/accept
This is a **POST** request accepting a friend request.

Request structure:
```
Object
    user    : string - your target.
```

Response structure:
```
Object
    error   : bool - Has an error occured? (if this is false, it was a success)
```

### /worker/friends/decline
This is a **POST** request declining a friend request.

Request structure:
```
Object
    user    : string - your target.
```

Response structure:
```
Object
    error   : bool - Has an error occured? (if this is false, it was a success)
```