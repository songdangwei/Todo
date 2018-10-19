let router = require('express').Router();
let todoService = require('../service/todoService');

/* GET users listing. */
router.get('/', async (req, rep) => {
    let result = await todoService.findAll();
    rep.success(result)
});
router.put('/:id', async (req, rep) => {
    let id = req.params.id;
    let body = req.body;
    await todoService.updateTodo(id, body)
    rep.success();
})

router.post('/', async (req, rep) => {
    let body = req.body;
    // console.log("======"+body)
    let result = await todoService.addTodo(body)
    rep.success(result)
})

router.delete('/:id', async (req, rep) => {
    let id = req.params.id;
    console.log('获取到的id' + id)
    await todoService.delTodo(id)
    rep.success()
})
module.exports = router;


