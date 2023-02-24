import { useState, useEffect } from "react";
import Search from "./Search"
import { useNavigate } from "react-router-dom";
import RecipeList from "./RecipeList";

function RecipeAPI(props) {    
    const [recipes, setRecipes] = useState([]);
    const [food, setFood] = useState("");
    const [update, setUpdate] = useState(false);
    let res = []

    // const navigate = useNavigate();
    // const routeChange = () => {
    //     const path = "/results"
    //     navigate(path);
    // }

    useEffect(() => {
        function setStates() {
            setRecipes(res);
        }

        setStates();
    }, [])

    async function fetchRecipes() {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '26f3103038msh83c948ed7470bdcp1f3303jsnf9e4439a1ecb',
                'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
            }
        };

        let response = await fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=${props.food}/`, options)
        let data = await response.json();

        setRecipes(data.results);
        console.log(data.results);
    }

    return (
        <div>
            <button onClick={fetchRecipes}>Submit</button>
            <div>
                {recipes.map(recipe => <RecipeList id={recipe.id}/>)}
            </div>
        </div>
    );
}

export default RecipeAPI;