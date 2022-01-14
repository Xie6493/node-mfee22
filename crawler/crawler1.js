const axios = require('axios');


axios.get("http://34.221.173.92:3000/data")
  .then(function (response) {
    // handle success
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
