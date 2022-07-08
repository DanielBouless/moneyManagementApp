const React = require('react')
const Def = require('../default')

function index(data){
    let stocksFormatted = data.stocks.map((stock)=>{
        return(
            <div key={index}>
                <h1 >{stock.name}</h1>
                <p>Bid price: {stock.bid}</p>
            </div>
        )
    })
       return(
        <Def>
            <div>
                <h1>Saved Stocks</h1>
                {stocksFormatted}
            </div>
        </Def>
       ) 
    }


    module.exports=index