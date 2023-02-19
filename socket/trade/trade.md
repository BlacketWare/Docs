### trade
A system request to inform the client about the trade or changes to the other side of the trade. Only emitted from server.<br>
Happens to be stupidly confusing!

Onload structure:
```
Object
    error    : bool - Has an error occured?
    data     : Object - info about the trade
        user1     : Object - data about the trade initiator
            accepted   : bool - if the trade initiator has accepted
            blooks     : Object - Key (blook name) and value (amount of each blook)
            id         : int - the user ID
            tokens     : int - the amount of tokens this user has set
        user2     : Object - data about the other trader
            accepted   : bool - if the other trader has accepted
            blooks     : Object - Key (blook name) and value (amount of each blook)
            id         : int - the user ID
            tokens     : int - the amount of tokens this user has set
```

Trade update structure:
```
Object
    error   : bool - Has an error occured?
    data    : Object - info about the change
        user1    : Object - If the current user is NOT the trade initiator, this will display the change. Otherwise, this would be user2
            tokens    : int - this could be any value from the above, but it will be one value.
```

Here's an example of trade initiate data: https://i.imgur.com/uycgIIi.png<br>
Here's an example of trade update data: https://i.imgur.com/c2DzQS5.png<br>
`In the above image, the user who did NOT initate the trade add the tokens.`