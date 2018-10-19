   const mongoose = require('mongoose')

      const schema = new mongoose.Schema({
          //待办事项
          content: {
              type:String,
              required: [true,'不能为空'],
              unique: [true,'不能重复']
          },
          //是否完成
          isDone: {
              type:Boolean,
              default: false
          },
          created: {
              type: Date,
              default: Date.now()
          }
      });

      module.exports = mongoose.model('todo', schema);