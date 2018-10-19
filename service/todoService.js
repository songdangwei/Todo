const Todo = require('../model/user');

/**
 *
 * @param todo
 * @returns {Promise<void>}
 */
async function addTodo(todo) {
    let result = await Todo.findOne({content: todo.content})
    if (result)
        throw Error("您要添加的数据已经存在")
    result = await Todo.create(todo);
    return result;
}

async function delTodo(id) {
    await isExistById(id);

    let result = await Todo.deleteOne({_id: id});
    if (result.n !== 1)
        throw Error(`删除ID为${id}的数据发生错误`)

}

async function isExistById(id) {
    let result = await Todo.findOne({_id: id});
    if (!result)
        throw Error(`ID为${id}的数据不存在`)

}

async function updateTodo(id, todo) {
    await isExistById(id);
    let result = await Todo.updateOne({_id: id}, todo)
    if (result.n !== 1)
        throw Error(`更新ID为${id}的数据发生错误`)

}

async function findAll() {
    let result = await Todo.find()
    return result;
}

module.exports = {
    addTodo,
    delTodo,
    updateTodo,
    findAll
}