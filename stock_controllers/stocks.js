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
        place: places[req.params.arrayIndex]
    })
})

router.get('/editplace',(req,res)=>{
    res.render('stocks/editStock')
})

router.get('/')

// router.post('/', (req, res) => {
//   console.log(req.body)
//   if (!req.body.pic) {
//     // Default image if one is not provided
//     req.body.pic = 'images/defaultImage'
//   }
//   if (!req.body.city) {
//     req.body.city = 'Anytown'
//   }
//   if (!req.body.state) {
//     req.body.state = 'USA'
//   }
//   places.push(req.body)
//   res.redirect('/stocks')
// })


module.exports = router