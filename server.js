require('dotenv').config()

const express = require('express')
const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use('/stocks', require('./stock_controllers/stocks'))

app.get('/home',(req,res)=>{
    res.render('home')
})

app.get('*', (req,res)=>{
    res.render('error404')
})
app.listen(process.env.PORT, ()=>{
    console.log(`Let's Make Money`)
})