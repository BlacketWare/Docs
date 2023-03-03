## ```/worker/claim```
This is a simple HTTP **get** endpoint. It claims your daily tokens and returns data for the daily wheel.

Response structure:   
```
Object
    error  : bool - Has an error occurred? If it claims the rewards, this should be false.
    reward : int - The amount the daily wheel should spin to.
```