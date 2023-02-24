import { Button, Form, FormGroup } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import RecipeAPI from './RecipeAPI';
import RecipeList from './RecipeList';
// import { Button } from 'react-bootstrap';

export default function Search(props) {
    const [food, setFood] = useState("");
    const [recipes, setRecipes] = useState([]);
    let res = [];
    // const [update, setUpdate] = useState(false);

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
        // let response = await fetch("https://api.spoonacular.com/mealplanner/generate?apiKey=26f3103038msh83c948ed7470bdcp1f3303jsnf9e4439a1ecb");
        let data = await response.json();

        // for (let i = 0; i < data.results.length; i++) {
        //     recipes.push(data.results[i])
        // }
        // console.log(data.results[0])
        setRecipes(data.results);
        // console.log({recipes});

        // console.log(res);
        // setRecipes(recipes => [...recipes, data.results]);
        // console.log(data.results);
        // console.log({recipes})
    }

    // async function fetchRecipesList() {
    //     let response = await fetch(`https://api.spoonacular.com/recipes/${}/information`)
    // }

    return (
        <div className='searchPage'>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicFood">
                    <div className='searchBar'>
                        <Form.Label className='label'>Recipe</Form.Label>
                        <input type="text" placeholder='Enter food (ie. pasta)' onChange={getSearch} />
                        {/* <Button variant="primary" type="submit">Submit</Button> */}
                        {/* <button className="submitButton" onClick={fetchRecipes}>Submit</button> */}
                        <Form.Text className="text-muted">
                        Enter the name of food you want ie. pasta
                        </Form.Text>
                    </div>
                </Form.Group>
            </Form>
                <Button className="submitButton" onClick={fetchRecipes}>Submit</Button>
            <div className="listofRecipes">
                {recipes.map(recipe => 
                    <div className='recipeInfo'>
                        {recipe.title}
                        <img src={recipe.image}/>
                    </div>
                )}
            </div>
        </div>
    );
}