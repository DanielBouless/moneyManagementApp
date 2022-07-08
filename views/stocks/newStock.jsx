const React = require('react')
const Def = require('../default')

function newStock(){
    return(
        <Def>
            <div>
                <form action="/stocks" method='POST'>
                    <div>
                        <label htmlFor="name">Stock Name: </label>
                        <input type='text' name='name'/>
                    </div>
                    <div>
                        <label htmlFor="bid">Bid: </label>
                        <input type='text' name='bid'/>
                    </div>
                    <div>
                        <input type='submit' value='SUBMIT'/>
                    </div>
                </form>
            </div>
        </Def>
    )
}

module.exports= newStock