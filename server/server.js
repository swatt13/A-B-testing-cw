import config from './../config/config.js'
import app from './express.js'
import mongoose from 'mongoose'
//const MONGOURI = 'mongodb+srv://1409229:25pO5jGgYdZKaiSp@cluster0.5mqtl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
// Connection URL
mongoose.Promise = global.Promise
mongoose.connect(config.mongoUri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, dbName: "users" })
mongoose.connection.on('error', () => {
    throw new Error(`unable to connect to database: ${config.mongoUri}`)
})

app.listen(config.port, (err) => {
    if (err) {
        console.log(err)
    }
    console.info('Server started on port %s.', config.port)
})