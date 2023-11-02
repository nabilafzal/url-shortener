const express = require('express')
const urlRouter = require('./routes/url.routes');
const { mongodbConnection } = require('./connect');
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3004;
mongodbConnection('mongodb://0.0.0.0:27017/short-url')
app.use('/url', urlRouter)

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})

