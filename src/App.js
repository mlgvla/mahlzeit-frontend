
import './App.css';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import RecipeSearchContainer from './containers/RecipeSearchContainer';



function App() {
  return (
    <div className="App">
        <Route exact path='/'><Home /></Route>
        <Route exact path='/search'><RecipeSearchContainer /></Route>
    </div>
  );
}

export default App;
