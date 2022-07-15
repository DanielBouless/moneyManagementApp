const React = require('react')
const Def = require('../default')

function showStock({asset}){
    return(
        <Def>   
            <div>
                <h1 >{asset.name}</h1>
                <p>Bid price: {asset.bid}</p>
                <p>Ask price: {asset.ask}</p>
                <p>MACD: {asset.macd}</p>
                <p>RSI: {asset.rsi}</p>
                <p>CCI: {asset.cci}</p>
            </div>
        </Def>
    )
}

module.exports=showStock