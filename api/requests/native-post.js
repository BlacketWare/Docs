let url = '';
let session = '';
let body = {
    key: 'value',
    secondkey: 'secondvalue'
}

fetch(`https://blacket.org/worker/${url}`, {
    headers: {
        Cookie : 'connect.sid=' + session
    },
    method : 'POST',
    body: body
}).then((response) => {
    response.json().then((res) => {
        console.log(res);
    });
});