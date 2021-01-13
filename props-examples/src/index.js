import React from 'react'  //olması gerektiği gibi react ve ReactDOMu import ettim
import ReactDOM from 'react-dom'
import Card from './component/Card'// Card componentini çağırabilmek için import ettim

const App = () => { // Aşağıda Card componontunu çağırıdım ve props atayabilmek için attribute tanımladım
    return (
        <div> 
          <Card cardTitle="My name is Esat"/> 
        </div>
        
    )
}

ReactDOM.render(  //burda is tanımladığım App i html de çalışacak hale getirecek olan render() metodunu çalıştırdım
            <App />,
    document.querySelector("#root")
)