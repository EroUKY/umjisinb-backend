var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
fetchContacts : function() {
    axios({
        method: 'GET',
        url : '/api/',
        params : {
            title : 1,
            content : 5
        }
    }).then((response) => {
        console.log(response);
        this.result = response.data;
    }).catch((ex)=> {
        console.log("ERR!!!!! : ", ex)
    })
}