import { Button, Form, FormGroup } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import RecipeAPI from './RecipeAPI';

export default function Search(props) {
    const [food, setFood] = useState("");
    // const [recipes, setRecipes] = useState([]);
    // const [update, setUpdate] = useState(false);

    const getSearch = (event) => {
        const searched = event.target.value;
        setFood(searched);
        props.setFood(searched);
    }

    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicFood">
                <div className='searchBar'>
                    <Form.Label className='label'>Recipe</Form.Label>
                    <input type="text" defaultValue="" onChange={getSearch} />
                    {/* <Button variant="primary" type="submit">Submit</Button> */}
                    <Form.Text className="text-muted">
                    Enter the name of food you want ie. pasta
                    </Form.Text>
                </div>
            </Form.Group>
      </Form>
    );
}