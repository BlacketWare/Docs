let url = '';
let cookie = '';
let body = {
    key: 'value',
    secondkey: 'secondvalue'
}

const axios = require('axios');
axios.post(`https://blacket.org/worker/${url}`, body, {
    Headers: {
        Cookie: cookie
    }
}).then((res) => {
    console.log(res.data)
})