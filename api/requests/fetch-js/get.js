let url = ''; // Insert the target endpoint here.
let session = ''; // Insert the sessionID here.

/* Example Variables
  let url = 'badges'
  let cookie = 's%htregfwrtjyregfgtjyrefwr45hrtegfw456i7trefw'

  ^^ the cookie would be longer
  to get a valid cookie, run this in your browser console:

  console.log(document.cookie.split('=')[1])
*/

fetch(`https://blacket.org/worker/${url}`, {
    headers: {
        Cookie : 'connect.sid=' + session
    },
    method : 'GET'
}).then((response) => response.json()).then((response) => {
    console.log(response);
});