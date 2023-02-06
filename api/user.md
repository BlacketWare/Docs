### ```/worker/user/:name```
This is an HTTP **get** endpoint.   
This gets a user's information by their name or ID.   
If the "name" parameter is left blank, it will give you your information.   
Requesting your own information gives you more info than requesting others' information.

#### Structure of /worker/user/otherPerson
```
Object
    error : bool - Has an error happened?
    user  : object - The user's information.
        avatar    : string - A relative URL **OR** an absolute URL. Defines the user's avatar.
        badges    : array<string> - An array of the user's badges. "*" means all badges.
        ban       : Object<> - Information on the user's ban. Sends a blank object if the user aren't banned.
        banner    : string - A relative URL that defined the user's banner.
        blooks    : Object<string, int> - An object containing keys (blook names), and values (blook count). 
        color     : string - A hex representation (such as #5E30FF). Could also be "rainbow".
        created   : int - A JS timestamp of when the account was created.
        exp       : int - The experience points a user has.
        id        : int - The user's unique ID.
        misc      : object - Random stats for the stats page only.
            opened    : int - The amount of boxes the user has opened.
            messages  : int - The amount of messages the user has sent.
        modified  : int - A JS timestamp of when the account was last "online." Bypassable.
        mute      : Object<> - Similar to ban, information on the user's mute. Sends a blank object if they aren't muted.
        role      : string - The user's role.
        tokens   : int - The amount of tokens a user has.
        username : string - The user's username.
        verified: bool - If the user's form has been accepted (or if they can play.)
```

#### Structure of /worker/user/you or /worker/user/
```
Object
    error : bool - Has an error happened?
    user  : object - The user's information.
        avatar    : string - A relative URL **OR** an absolute URL. Defines the user's avatar.
        badges    : array<string> - An array of the user's badges. "*" means all badges.
        ban       : Object<> - Information on your ban. Sends a blank object if you aren't banned.
        banner    : string - A relative URL that defined the user's banner.
        blooks    : Object<string, int> - An object containing keys (blook names), and values (blook count). 
        claimed   : int - A JS timestamp of when the user last claimed their daily tokens. Must be multiplied by 1000 to get a real time.
        color     : string - A hex representation (such as #5E30FF). Could also be "rainbow".
        created   : int - A JS timestamp of when the account was created.
        exp       : int - The experience points a user has.
        friends   : array<string> - A currently unused friends function. This has been in the API since beta.
        id        : int - The user's unique ID.
        inventory : array<string> - The 1 and 3 hour boosters you have.
        misc      : object - Random stats for the stats page only.
            opened    : int - The amount of boxes the user has opened.
            messages  : int - The amount of messages the user has sent.
        modified  : int - A JS timestamp of when the account was last "online." Bypassable.
        mute      : Object<> - Similar to ban, information on your mute. Sends a blank object if you aren't muted.
        perms     : array<string> - An array of the user's permissions. "*" means all permissions.
        role      : string - The user's role.
        settings : object - Settings from the settings page.
            requests : bool - If the user is accepting trade requests.
        tokens   : int - The amount of tokens a user has.
        username : string - The user's username.
        verified: bool - If the user's form has been accepted (or if they can play.)
```