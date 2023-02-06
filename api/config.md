## ```/worker/config```
This is an HTTP **get** request that lets you get the instance's config.

Response structure:
```
Object
    name         : string - The instance's name.
    version      : string - The instance's version.
    welcome      : string - The main text shown on the home screen (such as "First Private Server")
    description  : string - The description of the instance.
    pronunciation: string - The text description of the pronunciation.
    discord      : string - The instance's discord invite URL.
    plus         : string - The Blacket Plus subscription's price.
    rewards      : int - The daily rewards amount.
    exp          : object<string, int> - Information about experience.
    pages        : object<string, object> - Information about pages.
        Object
            link    : string - The link to the page.
            icon    : string - The FontAwesome icon name.
            isNews  : bool - If the page is the news page. Stupid but there.
            location: string - The page's location on the navbar. Either "bottom" or "left."
            perm    : string - The permission required to see the page.
```