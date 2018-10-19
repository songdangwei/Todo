module.exports =
    (req, rep, next) => {
        rep.success = (result) => {
            rep.send({
                code: 1,
                msg: "操作成功",
                data: result
            })
        };
        rep.fail = (err) => {
            rep.send({
                code: -1,
                msg: "操作失败",
                data: err.toString()
            })
        }
        next();
    }
