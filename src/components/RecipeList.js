import { useState, useEffect } from "react";

export default function RecipeList(props) {

    const [recipe, setRecipes] = useState([]);
    const [listofRecipes, setListofRecipes] = useState([]);

    // useEffect(() => {
    //     async function listRecipes() {
    //         const options = {
    //             method: 'GET',
    //             headers: {
    //                 'X-RapidAPI-Key': '26f3103038msh83c948ed7470bdcp1f3303jsnf9e4439a1ecb',
    //                 'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
    //             }
    //         };
            
    //         const response = await fetch(`https://api.spoonacular.com/recipes/${props.id}/information`);
    //         const data = response.json();
            
    //         console.log(data.results);
    //         setListofRecipes(data.results);
    //     }

    //     listRecipes();
    // }, [])

    return (
        <div>
            {/* {listofRecipes?.map(recipe => <div>{recipe.title}</div>)} */}
            hello
            {props}
        </div>
        // <a>{props.id}, </a>
    );
}