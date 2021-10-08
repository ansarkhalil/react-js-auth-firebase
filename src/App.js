import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from './Login'
import './App.css';

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/" component={Login}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
