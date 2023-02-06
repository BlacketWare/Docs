## ```/worker/news```
This is an HTTP **get** request that lets you get the news.

Response structure:   
```
Object
    error : bool - Has an error occurred?
    news  : array<object> - An array of news posts.
        Object
            title : string - The news post's title.
            image : string - The URL of the post's image.
            body  : string - The news post's content.
            date  : int - The news post's date (a JS date).
```
