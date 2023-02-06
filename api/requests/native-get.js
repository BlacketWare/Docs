let url = '';
let session = '';

fetch(`https://blacket.org/worker/${url}`, {
    headers: {
        Cookie : 'connect.sid=' + session
    },
    method : 'GET'
}).then((response) => {
    response.json().then((res) => {
        console.log(res);
    });
});