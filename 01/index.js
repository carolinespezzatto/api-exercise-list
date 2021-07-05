const axios = require ('axios')

axios.get('https://www.google.com/')
    .then (function(res) {
        console.log(res)
    })  
    .catch (function(error) {
        console.log(error)
    })  