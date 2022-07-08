const React = require('react')
const Def = require('./default')


function error404(){
    return(
        <Def>
            <h1>error 404</h1>
        </Def>
    )
}

module.exports = error404