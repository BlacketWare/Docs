let url = ''; // Insert the target endpoint here.
let session = ''; // Insert the sessionID here.

/* Example Variables
  let url = 'badges'
  let cookie = 's%htregfwrtjyregfgtjyrefwr45hrtegfw456i7trefw'

  ^^ the cookie would be longer
  note that cookies can no longer be grabbed by document.cookie
    > docs: https://expressjs.com/en/resources/middleware/session.html#:~:text=the%20maxAge%20option.-,cookie.httpOnly,-Specifies%20the%20boolean
*/

fetch(`https://blacket.org/worker/${url}`, {
    headers: {
        Cookie : 'connect.sid=' + session
    },
    method : 'GET'
}).then((response) => response.json()).then((response) => {
    console.log(response);
});