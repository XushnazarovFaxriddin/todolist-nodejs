const express = require('express')
const app = express()

const routes = require('./routes/app')

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))
    // parse application/json
app.use(express.static("./public"))
app.use(express.json())

app.set('view engine', 'ejs')
app.set('views', './views')

app.use('/', routes)

let port = 5580;
app.listen(port, () => {
    console.log(`Dastur http://localhost:${port}/todolist da ishga tushdi`)
})