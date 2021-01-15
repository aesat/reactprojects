import React from 'react'
import ReactDOM from 'react-dom'
import Card from './Components/Card'
import Collapse from './Components/Collapse'

class App extends React.Component {
  render(){
    return (
      <div>
  
  
        
          <div className="container">
            <div className="row">
             <div className="card-group w-100">
              <div className="col">
                <Collapse href="collapseExample1">
                  <Card cardP="birinci olacak"
                    cardText="lorem ipsum GS"
                    // cardTitle="Galatasaray"
                    image="https://picsum.photos/id/1/200/300"
                  />
                </Collapse>
              </div>
  
              <div className="col">
                <Collapse href="collapseExample2">
                  <Card cardP="ikinci olacak"
                    cardText="lorem ipsum GS"
                    cardTitle="Fenerbahçe"
                    image="https://picsum.photos/id/89/200/300"
                  />
                </Collapse>
              </div>
  
              <div className="col">
                <Collapse href="collapseExample3">
                  <Card cardP="üçüncü olacak"
                    cardText="lorem ipsum GS"
                    cardTitle="Beşiktaş"
                    image="https://picsum.photos/id/75/200/300"
                  />
                </Collapse>
              </div>
             </div>
            </div>
          </div>
  
  
  
  
        
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
) 