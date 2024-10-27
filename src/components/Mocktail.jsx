import { React, useEffect, useState } from "react";


function Mocktail() {
    // état pour le tableau contenant les mocktails
    const [mocktail, setMocktail] = useState({
        name: null, image: null
    });


    function getMocktail() {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic')
        .then((res) => (res.json()))
        .then((data) => { 
            //Index aléatoire du tableau Mocktail
            const randomIndex = Math.floor(Math.random() * data.drinks.length);
            // sélecton aléatoire d'un mocktail
            const myrandomMocktail = data.drinks[randomIndex]
            // màj de l'état avec le nom et l'image 
            setMocktail({ 
                name: myrandomMocktail.strDrink, image : myrandomMocktail.strDrinkThumb
             });

        })
        // au cas où erreur
        .catch((err) => console.error(err));
    }


    useEffect(() => {
        getMocktail();
    }, []);
    
    
    return (
        <div>
            <h1>Bar à mocktail</h1>
            <h2>{mocktail.name}</h2>
            <img src={mocktail.image} alt={mocktail.name} />
            <button onClick={getMocktail}>Autre mocktail</button>
        </div>
    )
}

export default Mocktail;