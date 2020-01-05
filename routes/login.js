const express = require('express');
const router = express.Router();

router.post('/user/login', function(req, res, next) {
     function login() {
        axios({
            method: 'put',
            url : '/user/login',
            params : {
                userId : userId,
                userPw : userPw
            }
        }).then((response) => {
            console.log(response);
            this.result = response.data;
        }).catch((ex)=> {
            console.log("ERR!!!!! : ", ex)
        })
    }