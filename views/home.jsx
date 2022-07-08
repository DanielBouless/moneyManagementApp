const React = require('react')
const Def = require('./default')


function home(){
    return(
        <Def>
            <h1>Home Page</h1>
            <p> create LOGIN REDIRECT/NAVIGATION BAR/DASHBOARD</p>

            <nav>
                <ul>
                    <li><a href='/stocks'> Click for Saved List of Stocks</a></li>
                </ul>
            </nav>
        </Def>
    )
}

module.exports = home