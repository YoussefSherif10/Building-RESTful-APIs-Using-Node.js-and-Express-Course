const express = require('express')
const app = express();
const userRouter = require('./users/index')
const verifyAUTH = require('./authentication/authMiddleware')
const authRouter = require('./authentication/index')
const config = require('./config')
const morgan = require('morgan')
const dateFormat = require('date-format')

app.use(express.json())
app.use(express.urlencoded())

// morgan is a middleware used to log the requests
morgan.token('time', () => dateFormat.asString(dateFormat.ISO8601_FORMAT, new Date()));
app.use(morgan('[:time] :method :url :status :response-time ms'));

app.use('/auth', authRouter);
app.use('/users', verifyAUTH, userRouter);

app.listen(config.PORT, () => {
    console.log(`the server is listening at port ${config.PORT}`);
})