## ```/worker/verify```
This is an HTTP **get** endpoint. This verifies that the IP connecting to Blacket isn't using a VPN.

Response structure:   
```
Object
    error : bool - Is the user using a proxy? (if this is true, the user cannot access Blacket)
```