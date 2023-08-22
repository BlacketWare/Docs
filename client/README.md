# client
Blacket has a client that is MUCH easier to mod than Legacy's.<br>
Blacket, because Xotic fails to remember his variables, uses an object named `blacket` for everything.<br><br>

## file structure
two outer folders:

### content
literally all images, some subfolders and some loose files

### lib
all JS/CSS
#### js
- all.js
    - loaded onto **every** game page, home to chat to store
    - connects to socket, defines blacket var
- game.js
    - loaded onto all pages you need to be logged into access
    - handles news, blacket.user, notifications, etc
- jquery.js
    - loaded onto **every** page, like all.js
    - used for everything
- [currentpage].js
    - ie stats.js, chat.js, bazaar.js
    - all functions for the page
    - on all pages, even if they do not have game.js (duh)
#### css
- all.css
    - loaded onto **every** game page, just all.js but CSS
    - pretty short (~450 lines)
- game.css
    - loaded onto all pages where login, just game.js but CSS
    - very long (almost 20k lines)

## the blacket object
This is a global object and is used for literally all game functions.<br>
For more information on the items in the blacket object, see [BlacketObject.md](./BlacketObject.md).

## localStorage
Blacket is very simple due to this object and requires little documentation, yet it does use one other tool. `localStorage`.<br>
There aren't many items in localStorage. but here they are:

```js
instantOpen // bool, if instant open is one
lastRulesVersion // figures out if it should display rules based on the last version the user saw
lastPost // timestamp of the last post the user saw, to determine if it should open news panel
chatColor // only seen on plus users, a variable that detects the user's default color to make their messages in chat
```

## external libraries
- momentjs
    - used for timestamps
    - all pages
    - [link](https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment.min.js)
- jquery
    - used for almost everything
    - all pages
    - [link](https://blacket.org/lib/js/jquery.js)
- twemoji
    - used for chat emojis
    - chat page
    - [link](https://unpkg.com/twemoji@latest/dist/twemoji.min.js)
- font awesome
    - used for all icons
    - all pages
    - [link](https://xotic.org/content/scripts/font-awesome-6-pro.js)