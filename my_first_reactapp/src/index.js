import React from 'react'
import ReactDOM from 'react-dom'

function App(){
    return (
        <div>
            <h1 style={{border:'2px solid black', color:'red', backgroundColor:'#ccc'}}>
                benim adım esat
            </h1>
        </div>
    )
}

ReactDOM.render( 
    <App/>,
    document.querySelector("#root")
);

