## ```/worker/panel```
This is an HTTP endpoint with everything relating to the admin panel.<br>
Since this was done with limited access, I cannot provide full documentation, but did what I could.<br>

### /worker/panel/forms
This is another tree of hell.<br>
The root link is a **GET** request with response tree:

Response structure:
```
Object
    error   : bool - Has an error occurred?
    forms   : Array<username : string, age : int, discord : string, body : string> - the forms
        Object - an example object, has no name
            username   : string - the name of the applicant
            age        : int - the user's age
            discord    : string - the user's discord
            body       : string - the user's play reason
    pages   : int - how many pages 
    page    : int - the current page
    total   : int - the total forms
```

Using `?username=` is the way to search through forms.

#### /worker/panel/users
The painful, disorganized endpoint to manage or punish users.<br>
It's a **POST** request with response tree:

Request structure:
```
Object
    action : string - either "mute" or "ban"
    user   : int - the id of the user to punish
    reason : string - the mute reason
    time   : string - the time (in minutes) to mute the user for
```

Responds with the default "error" and optional "reason."

```
Object
    error : bool - has an error occurred?
    reason: optional<string> - the error reason, if an error occurred
```

<br>
Note: mute/ban information is obtained from the [/worker/user](/api/user.md) endpoint.

#### /worker/panel/forms/{page}
Another **GET** requester, returns the same structure as the root, except only returning the specified page number.<br>
It's very disorganized.
```
Object
    error   : bool - Has an error occured?
    forms   : Array<username : string, age : int, discord : string, body : string> - The forms.
        Object - an example object, has no name
            username   : string - the name of the applicant.
            age        : int - the user's age.
            discord    : string - the user's discord.
            body       : string - the user's play reason
    pages   : int - how many pages 
    page    : int - the current page
    total   : int - the total forms
```

#### /worker/panel/forms/accept/{username}
This is a **POST** request but has nothing with the req, returns only the typical error boolean.

Request structure:
```
Object<empty>
    /* this object has no values. the post request is an empty JSON object */
```

Response structure:
```
Object
    error   : bool - Has an error occurred?
```

#### /worker/panel/forms/reject/{username}
This is a **POST** request but has nothing with the request, returns only the typical error boolean.

Request structure:
```
Object<empty>
    /* this object has no values. the post request is an empty JSON object */
```

Response structure:
```
Object
    error   : bool - Has an error occured?
```


### /worker/panel/news
This isn't as messy as forms (sigh), it's one **POST** request with another 'type' string.

Request structure:
```
Object
    type   : string - either 'create' or 'delete'. no edit?

    post   : int - the date of the post to delete, if type = delete

    title  : string - the title of the post to create, if type = create
    body   : string - the body of the post to create, if type = create
    image  : string - the image src of the post to create, if type = create
```

Response structure:
```
Object
    error  : bool - has an error occurred?
```
    
Suprisingly, you can't set the date in a request.<br>

### /worker/panel/info
This is a **GET** request returning server data.

Response structure:
```
Object
    error   : bool - has an error occured?
    info    : Object - the info returned
        uptime    : int - server uptime
        memory    : Object
            usage   : string - in the form of "758.27 MB"
            total   : string - in the form of "956.62 MB"
        cpu       : Object
            cores   : int - usually 12
            model   : string - usually "Intel(R) Core(TM) i7-8750H CPU @ 2.20GHz"
        os        : string - usually "Linux 5.15.0-60-generic"
        node      : string - current node version, in the form of "v19.6.0"
        name      : string - config.game.name
        port      : int - the port Blacket is running on
        version   : string - game version, in the form of "2.6.9r1"
        game      : Object
            users   : int - users on blacket
            blooks  : int - the number of unique blooks
            packs   : int - the number of different packs
```

### /worker/panel/console
This is a **GET** request returning console logs.
Response structure:
```
Object
    error   : bool - has an error occured?
    logs    : Array<string> - the logs returned.
```

### /worker/panel/run
This is a **POST** request allowing owners to run code.

Request structure:
```
Object
    command: string - the command
```

Response structure:
```
Object
    error   : bool - has an error occured?
    logs    : Object - the new console logs. little info is known as to the structure of this.
```

### these docs are incomplete.