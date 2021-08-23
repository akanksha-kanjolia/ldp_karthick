import './App.css';
import List from './pages/list/list';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Detail from './pages/detail';



function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact><List /></Route>
          <Route path="/detail/:id" component={Detail}/>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
