## all pages
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
    upload // sends an upload request, used for chat

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

## game pages
```js
blacket.friends // an object with friend information

blacket.user // an object with your user information

blacket.news // an array of recent news
```

## stats page
```js
blacket.appendBanners // function, the only parameter is the search filter
blacket.appendBlooks // function, the only parameter is the search filter

blacket.badges // all the game badges
blacket.banners // all the game banners
blacket.blooks // all the game blooks
blacket.packs // all the game packs

blacket.getUser // a function to request a user's data, passed to blacket.setUser
blacket.setUser // a function to set the user displayed, used for show stats

blacket.setBanner // sets your in game banner
blacket.setBlook // sets your in game blook

blacket.tradeUser // trades a username/user id
```

## chat page
```js
blacket.appendChat // adds a chat message to the modal
blacket.appendRoom // adds a room to the list

blacket.askForUpload // opens the file upload modal 
blacket.uploadFile // sends the file to the server

blacket.badges // all the game badges
blacket.banners // all the game banners
blacket.blooks // all the game blooks
blacket.rooms // all the chat rooms

blacket.chat
    timeout // the current chat cooldown

blacket.currentRoom // the current chat room

blacket.emojis // all blacket custom emojis
blacket.emojiNames // all the default emojis coming with your OS

blacket.enlargenImage // makes an image bigger on screen

blacket.htmlEncode // stops XSS in chat with a function

blacket.lastUser // the last message user, used to see if it should append the PFP and name again or just the message
blacket.lastTime // the last message time, for the above but it makes it append PFP/name again if >1 minute
```

## market page
```js
blacket.blooks // all the game blooks
blacket.packs // all the game packs
blacket.rarities // all the game rarities

blacket.booster // the active booster

blacket.openPack // opens a pack

blacket.setInstantButton // toggles the Instant Open button
```

## blooks page
```js
blacket.blooks // all the game blooks
blacket.packs // all the game packs
blacket.rarities // all the game rarities

blacket.appendBlooks // function, the only parameter is the search filter

blacket.selectBlook // sets the blook on the right

blacket.sellBlook // opens the sell modal for the blook on the right
blacket.listBlook // opens the list modal for the blook on the right
```

## bazaar page
```js
blacket.blooks // all the game blooks
blacket.packs // all the game packs

blacket.getBazaar // searches for something in the bazaar
```

## inventory page
```js
blacket.items // all the game items (boosters)

blacket.listItem // add a booster to the bazaar
```

## credits page
```js
blacket.credits // all the credits

blacket.htmlEncode // stops XSS in credits
```

