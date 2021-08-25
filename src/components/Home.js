import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Home.css'


class Home extends Component {
   
    render() {
        return ( 
            <div>
        


<div className="jumbotron bg-light  rounded-lg text-white text-center ">
  <div className="container">
    <h1 className="display-3">Mahlzeit!</h1>
    <p style={{fontSize:"20px"}}>"Mahlzeit!" is German for "Mealtime!" It is used as a salutation like "Good Afternoon!," and can also mean "Enjoy your meal!" Here at Mahlzeit, you can find a recipe for just about any dish and diet you can think of. Click on "Find Recipes" and start cooking meals that everyone can enjoy!</p>
  </div>
</div>

<div className="container">

  <div className="row mt-5">
    <div className="col-md-4 offset-2">
      <h2>Find Recipes</h2>
      <p>Mahlzeit makes it easy to search the Internet for recipes.  Search by meals you would like to prepare, or by the ingredients you would like to include.  You can also select dietary or health preferences, so you can find just the recipe you are looking for  </p>
      <Link className="btn btn-outline-secondary"  role="button" to={'/search'}>Search for Recipes</Link>
    </div>
    <div className="col-md-4">
      <h2>Your Recipe Box</h2>
      <p>Found a recipe you love? Save it to your Recipe Box, so you can easily find it whenever you would like to cook it up!</p>
      <Link className="btn btn-outline-secondary"  role="button" to={'/myrecipes'}>My Recipe Box</Link>
      {/* <p><a className="btn btn-outline-secondary" href="#" role="button">My Recipe Box</a></p> */}
    </div>
    {/* <div className="col-md-4">
      <h2>Heading</h2>
      <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
      <p><a className="btn btn-secondary" href="#" role="button">View details »</a></p>
    </div> */}
  </div>



</div>
</div>


               
    
          
            
      
           
        );
    }
}

export default Home;





