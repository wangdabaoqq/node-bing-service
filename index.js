const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const bingClass = require('./controller/bing')
app.use(cors())
app.get('/', bingClass.getAll)
mongoose.connect('mongodb+srv://wangdabao:wang110120Q@cluster0-itq9z.azure.mongodb.net/test', { useUnifiedTopology: true, useNewUrlParser: true })
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	// we're connected!
	console.log('连接成功')
});
app.listen(3212, () => {
	console.log('启动')
})