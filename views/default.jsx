const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossOrigin="anonymous"/>
                <link rel='stylesheet' href='/css/style.css'/>
            </head>
            <body>
                <nav>
                <ul>
                    <li><a href='/stocks'> Click for Saved List of Stocks</a></li>
                    <li><a href='/stocks/new'>Add New Stock</a></li>
                </ul>
            </nav>
                {html.children}
            </body>
        </html>
    )
}

module.exports = Def
