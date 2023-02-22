import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Recipe from "./pages/Recipe";
import Results from "./pages/Results";
import { useState } from "react";

function App() {

  const [recipes, setRecipes] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/recipe" element={<Recipe recipes={recipes}/>} />
        <Route path="/results" element={<Results recipes={recipes}/>} />
      </Routes>
    </Router>
  );
}

export default App;
