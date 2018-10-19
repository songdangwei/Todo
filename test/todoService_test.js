let todoService = require('../service/todoService');
require('../db')

async function testService() {
    //测试添加
    let todo = {content:"Today is go to park"}
    let result = await todoService.addTodo(todo)

    //  let result = await todoService.delTodo()
    //测试查询
    //let result = await todoService.findAll()
    //测试更新
    //let result = await todoService.updateTodo("5bc6fd89accbd116a8b7eec5",{content:'今天去公园'})
  // await todoService.delTodo("5bc700b0ce195308c06f11f7");
   console.log(result)
}

testService()