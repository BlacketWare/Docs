let url = '';
let cookie = '';

const axios = require('axios');
axios.get(`https://blacket.org/worker/${url}`, {
  headers: {
    Cookie: cookie
  }
}).then((res) => {
    console.log(res.data)
})