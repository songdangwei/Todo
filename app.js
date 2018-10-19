require("express-async-errors")
require('./db')
let config = require('./config');

let morgan = require('morgan');
let express = require('express');
let app = express();
let todoRouter = require('./routes/todoRouter');

app.use(require('./middware/rep_md'))
app.use(morgan('combined'))
app.use(express.json())
app.use("/todo", todoRouter);
app.use((err, req, rep, next) => {

    rep.fail(err)

})
app.listen(config.PORT)