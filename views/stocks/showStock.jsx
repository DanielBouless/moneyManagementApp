const React = require('react')
const Def = require('../default')

function showStock({stock}){
    return(
        <Def>   
            <div>
                <h1>{stock.name}</h1>
                <p>bid price: {stock.bid}</p>
            </div>
        </Def>
    )
}

module.exports=showStock