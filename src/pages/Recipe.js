import Bar from "../components/Bar"
import RecipeAPI from "../components/RecipeAPI";
import Search from "../components/Search";
import { useState } from "react";

export default function Recipe(props) {

    const [food, setFood] = useState("");
    const [recipes, setRecipes] = useState([]);

    return (
        <div>
            <Bar/>
            <Search food={food} setFood={setFood} recipes={recipes}/>
            <RecipeAPI food={food} setFood={setFood} />
        </div>
    );
}