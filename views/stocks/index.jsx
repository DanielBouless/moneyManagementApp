const React = require('react')
const Def = require('../default')

function index(data){
    let assetsFormatted = data.assets.map((asset)=>{
        return(
            <div key={index}>
                <h1 >{asset.name}</h1>
                <p>Bid price: {asset.bid}</p>
                <p>Ask price: {asset.ask}</p>
                <p>MACD: {asset.macd}</p>
                <p>RSI: {asset.rsi}</p>
                <p>CCI: {asset.cci}</p>

            </div>
        )
    })
       return(
        <Def>
            <div>
                <h1>Saved Stocks</h1>
                {assetsFormatted}
            </div>
        </Def>
       ) 
    }


    module.exports=index