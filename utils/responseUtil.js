function success(rep,result) {
    rep.send({
        code:1,
        msg:"操作成功",
        data:result
    })
}

function fail(rep,err) {
    rep.send({
        code: -1,
        msg: "操作失败",
        data: err.toString()
    })
}
module.exports = {
    success,
    fail
}