## ```/worker/claim```
This is a simple HTTP **get** endpoint. It claims your daily tokens.

Response structure:   
```
Object
    error : bool - Has an error occurred? If it claims the rewards, this should be false.
```