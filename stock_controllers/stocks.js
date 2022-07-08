const router =require('express').Router()
const stocks = require('../models/stocks.js')

        

router.get('/',(req,res)=>{
    res.render('stocks/index', {stocks})
})


router.get('/new',(req,res)=>{
    res.render('stocks/newStock')
})

router.get('/:arrayIndex',(req,res)=>{
    res.render('stocks/showStock',{
        stock: stocks[req.params.arrayIndex]
    })
})

router.get('/editplace',(req,res)=>{
    res.render('stocks/editStock')
})


router.post('/', (req, res) => {
  console.log(req.body)
  stocks.push(req.body)
  res.redirect('/stocks')
})

router.get('*',(req,res)=>{
    res.render('../error404')
})


module.exports = router