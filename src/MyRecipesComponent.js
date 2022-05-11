function MyRecipesComponent ({label, image, dishType, ingredients}) {

    return(<div>
        <div className="container">
            <h2>{label}</h2>
        </div>
        <div className="container">
            <img className="tasty" src={image} alt="food"/>
        </div>
        <div className="container">
            <p>{dishType}</p>
        </div>
        <ul className="list">
        {ingredients.map((ingredient, index) => (
                <li key={index}> <img src="https://w7.pngwing.com/pngs/262/732/png-transparent-computer-icons-checkbox-data-research-miscellaneous-angle-triangle-thumbnail.png" className="icon" alt="icon"/>
                {ingredient}</li>
            ))}
        </ul>
    </div>)
}

export default MyRecipesComponent;

