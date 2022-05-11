import { useEffect, useState } from 'react';
import './App.css';
import video from './videomy.mp4';
import icon from './icon.png';
import MyRecipesComponent from './MyRecipesComponent';

function App() {

  const MY_ID = "cad5bef0";
  const MY_KEY = "c03be82b6d1fb2cc78efe9264786ecd4";

  const [mySearch, setMySearch] = useState ('');
  const [myRecipes, setMyRecipes] = useState ([ ]);
  const [wordSubmitted, setWordSubmitted] = useState ('');

  useEffect (() => {
    async function fetchData() {
    const response = await fetch (`https://api.edamam.com/search?q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
    const data = await response.json();
    console.log (data.hits);
    setMyRecipes(data.hits);
    }
    fetchData();
  },[wordSubmitted])

  const myRecipeSearch = (e) => {
    console.log(e.target.value);
    setMySearch(e.target.value);
  }

  const finalSearch = (e) => {
    e.preventDefault();
    setWordSubmitted(mySearch);
  }

    return (<div className='App'>
      <div className='container'>
        <video autoPlay muted loop>
          <source src={video} type="video/mp4"/>
        </video>
        <h1>Let's cook something delicious</h1>
      </div>
      <div className='container'>
        <form onSubmit={finalSearch}>
          <input className='search' placeholder="We'll cook..." onChange={myRecipeSearch} value={mySearch}>
          </input>
        </form>
      </div>
      <div className='container'>
        <button onClick={finalSearch}>
          <img src={icon} className='icon' alt='icon'/>
        </button>
      </div>
      <div>
    {myRecipes.map((element, item) => (
      <MyRecipesComponent key={item}
        label={element.recipe.label}
        image={element.recipe.image}
        dishType={element.recipe.dishType}
        ingredients={element.recipe.ingredientLines}/>
    ))}
    </div>
    </div>
    );
}

export default App;
