# client
Blacket has a client that is MUCH easier to mod than Legacy's.<br>
Blacket, because Xotic fails to remember his variables, uses an object named `blacket` for everything.<br><br>

## the global blacket object
This contains everything and is global.<br>
There are a few functions and variables on all pages:

```js
blacket.config // object, stores configuration.
    // note: modifying any of these variables is only client-side.
    description // homepage desc
    discord // link to discord
    exp // object
        difficulty // xoti's stubborn a** has level calculated client-side. this is one of the numbers used in calculation. (should be under 1)
    name // game name
    pages // object, pages within the game
        // here's an example:
        Bazaar
            icon // fontawesome icon
            isNews // true if news, false if not. stupid var but whatever
            link // page link
            location // left: on the main sidebar, bottom: one of the tiny icons at the bottom
            perm // perm required to view page
    path // location.pathanem without the slash in front
    pronunciation // name pronunciation (in text)
    rewards // daily rewards. only used to know how much to add to token balance on stats page after claim
    store // the store object
        // example:
        plus
            price // in string
            sale // obj
                price // the marked-down price, "0.00" if none
                name // the name of sale
    version // game version
    welcome // the 3 big words on homepage

blacket.getParameter // function used to check if a purchase has been made.

blacket.requests // object
    get // send a get request to a URL
    post // send a post request to a URL

blacket.socket // the websocket used, idk why this is global
    emit // function added by xotic making it function like socket.io, sends data to server
    on // another thing to make it like socket.io, listens to data from server
    // there are other websocket variables not listed, these are just blacket's custom
    // here's a get-started on websockets: https://javascript.info/websocket
    // to externally connect to the socket, try https://npmjs.com/package/ws

blacket.startLoading // add the loading modal
blacket.stopLoading // remove the loading modal

blacket.toasts // array of popup toasts, as they are queued.
blacket.createToast // function adding a toast to the queue
```

All of those are defined by Blacket's [lib/js/all.js](https://blacket.org/lib/js/all.js).<br>
However, once you login and end up on the stats page, a new file appears. [lib/js/game.js](https://blacket.org/lib/js/game.js) is imported on all pages the user would visit where they must be logged in.<br>
`game.js` adds some more variables to our Blacket object:

```js
user // data gotten from https://blacket.org/worker/user
news // an array of news posts
```

After that, you've hit all the variables on most pages.<br>
Each page has some specific variables that make sense to the page.<br>
For example, the Stats page has `blacket.getUser()`. The Chat pages has `blacket.appendMessage()`.<br>
All of these functions can be used on the client.

### localStorage
Blacket is very simple due to this object and requires little documentation, yet it does use one other variable. `localStorage`.<br>
There aren't many variables in local storage. but here they are:

```js
instantOpen // bool, if instant open is one
lastRulesVersion // figures out if it should display rules based on the last version the user saw
lastPost // timestamp of the last post the user saw, to determine if it should open news panel
chatColor // only seen on plus users, a variable that detects the user's default color to make their messages in chat
```

### other oddities
in all.js, 'envi' is set to always have a heart next to it. xotic is a SIMP!