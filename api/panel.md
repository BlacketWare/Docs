## ```/worker/panel```
This is an HTTP endpoint with everything relating to the admin panel.<br>
Since this was done with limited access, I cannot provide full documentation, but did what I could.<br>

### /worker/panel/forms
This is another tree of hell.<br>
The root link is a **GET** request with response tree:

Response structure:
```
Object
    error   : bool - Has an error occured?
    forms   : array (filled with objects) - The forms.
        Object - an example object, has no name
            username   : string - the name of the applicant.
            age        : int - the user's age.
            discord    : string - the user's discord.
            body       : string - the user's play reason
    pages   : int - how many pages 
    page    : int - the current page
    total   : int - the total forms
```

Using `?username=` is the way to search through forms.


#### /worker/panel/forms/{int}
Another **GET** requester, returns the same structure as the root, except following the specific page number.<br>
It's very disorganized.

#### /worker/panel/forms/accept/{username}
This is a **POST** request but has nothing with the req, returns only the typical error boolean.

#### /worker/panel/forms/reject/{username}
This is a **POST** request but has nothing with the req, returns only the typical error boolean.


### /worker/panel/news
This isn't as messy as forms (sighs), it's one **POST** request with another 'type' string.

Request structure:
```
Object
    type   : string - either 'create' or 'delete'. no edit?

    post   : int - the date of the post to delete, if type = delete

    title  : string - the title of the post to create, if type = create
    body   : string - the body of the post to create, if type = create
    image  : string - the image src of the post to create, if type = create
```

Suprisingly, you can't set the date in a request.<br>
The response for this is the normal error bool.

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
    logs    : Object - the logs returned. little info is known as to the structure of this.
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