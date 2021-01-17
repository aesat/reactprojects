
import './App.css';
import Card from './components/Card'
import Collapse from './components/Collapse';

function App() {
  return (
    <div className="App">
       <Collapse>
          <Card cardSubTitle="Evet Bu Bir Karttır" cardTitle="Bu Bir Karttır"/>
       </Collapse>
    </div>
  );
}

export default App;
