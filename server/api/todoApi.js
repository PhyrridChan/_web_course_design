var models = require('../db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../sqlMap');

// 连接数据库
var conn = mysql.createConnection(models.mysql);

conn.connect();
var jsonWrite = function (res, ret) {
    if (typeof ret === 'undefined') {
        res.json({
            code: '1',
            msg: '操作失败'
        });
    } else {
        res.json(ret);
    }
};

router.post('/add', (req, res) => {
    var sql = $sql.todo.add;
    var params = req.body;
    console.log(params);
    conn.query(sql, [params.userId, params.groupId, params.groupName, params.taskInfo,
        params.timeBegin, params.timeEnd], function (err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            jsonWrite(res, result);
        }
    })
});

router.post('/delete', (req, res) => {
    var sql = $sql.todo.delete;
    var params = req.body;
    console.log(params);
    conn.query(sql, [params.userId, params.taskId], function (err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            jsonWrite(res, result);
        }
    })
});

router.post('/done', (req, res) => {
    var sql = $sql.todo.done;
    var params = req.body;
    console.log(params);
    conn.query(sql, [params.userId, params.taskId], function (err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            jsonWrite(res, result);
        }
    })
});

router.post('/reset', (req, res) => {
    var sql = $sql.todo.reset;
    var params = req.body;
    console.log(params);
    conn.query(sql, [params.userId, params.taskId], function (err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            jsonWrite(res, result);
        }
    })
});


router.post('/get', (req, res) => {
    var sql = $sql.todo.get;
    var params = req.body;
    console.log(params);
    conn.query(sql, [params.userId], function (err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            jsonWrite(res, result);
        }
    })
});
module.exports = router;
