import { useState, useEffect } from "react";

export default function RecipeList({ recipes }) {


    return (
        <div>
            hello
            {recipes}
            {/* {recipes.map(recipe => <a>{recipe.title}</a>)} */}
        </div>
    );
}