import { Button, Form, FormGroup } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import RecipeAPI from './RecipeAPI';
import RecipeList from './RecipeList';

export default function Search(props) {
    const [food, setFood] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [links, setLinks] = useState([]);
    let res = [];

    const getSearch = (event) => {
        const searched = event.target.value;
        setFood(searched);
        props.setFood(searched);
    }

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
        console.log(data);
        setRecipes(data.results);
    }

    async function fetchActualRecipe(id) {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '26f3103038msh83c948ed7470bdcp1f3303jsnf9e4439a1ecb',
                'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
            }
        };
        
        let response = await fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${id}/information`, options)
        let data = await response.json();
        // console.log(data);
        // console.log(data.sourceUrl);
        setLinks(data.sourceUrl);
    }


    return (
        <div className='searchPage'>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicFood">
                    <div className='searchBar'>
                        <Form.Label className='label'>Find the best recipes</Form.Label>
                        <input type="text" placeholder='Enter food (ie. pasta)' onChange={getSearch} />
                        <Form.Text className="text-muted">
                        Enter the name of food you want ie. pasta
                        </Form.Text>
                    </div>
                </Form.Group>
            </Form>
            <Button className="submitButton" onClick={fetchRecipes}>Submit</Button>
            <div className="listofRecipes">
                {recipes.map(recipe => 
                <div className="recipeContainer">
                    <div className='recipeInfo'>
                        <img src={recipe.image}/>
                        <div className='titleandbutton'>
                            <a className='title'>{recipe.title}</a>
                            <Button className="recipebutton" href={links} onClick={fetchActualRecipe(recipe.id)}>Go to recipe</Button>
                        </div>
                    </div>
                </div>
                )}
            </div>
        </div>
    );
}
