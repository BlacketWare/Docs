### bought
A listener on every Blacket page for a Bazaar purchase.<br>
This is a message emitted only from the server.<br>
<br>
Structure:
```
Object
    data  : Object - information about the purchase
        item    : string - the item purchased
        price   : int - the amount the item was purchased for
        user    : int - the userID of the purchaser