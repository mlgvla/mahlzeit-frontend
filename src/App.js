
import './App.css';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import RecipeSearchContainer from './containers/RecipeSearchContainer';
import MainHeader from './components/MainHeader';
import RecipeDetail from './components/RecipeDetail';



function App() {
  return (
    <div className="App">
        <MainHeader />
        <main>
            <Route exact path='/'><Home /></Route>
            <Route exact path='/search'><RecipeSearchContainer /></Route>
            {/* will need a unique id for each hit - do that in the reducer */}
            <Route path='/search/:recipeId'><RecipeDetail /></Route>
        </main>
        
    </div>
  );
}

export default App;
