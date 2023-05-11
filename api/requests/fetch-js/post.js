let url = ''; // Insert the target endpoint here.
let session = ''; // Insert the sessionID here.
let body = { // Insert the form body here.
    key: 'value',
    secondkey: 'secondvalue'
}

/* Example Variables
  let url = 'change'
  let cookie = 's%htregfwrtjyregfgtjyrefwr45hrtegfw456i7trefw'

  ^^ the cookie would be longer
  note that cookies can no longer be grabbed by document.cookie
    > docs: https://expressjs.com/en/resources/middleware/session.html#:~:text=the%20maxAge%20option.-,cookie.httpOnly,-Specifies%20the%20boolean

  console.log(document.cookie.split('=')[1])

  let body = {
    type: 'color',
    color: '#ffffff'
  }

  ^^ two arg example

  let body = {
    pack: 'Ankha'
  }

  ^^ one arg example
*/

fetch(`https://blacket.org/worker/${url}`, {
    headers: {
        Cookie : 'connect.sid=' + session
    },
    method : 'POST',
    body: JSON.stringify(body)
}).then((response) => response.json()).then((response) => {
    console.log(response);
});