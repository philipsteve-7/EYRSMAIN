import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";  // Import Router and Routes from react-router-dom
import { Navbar } from "./components/navbar";  // Import Navbar component
import { Auth } from "./pages/auth";  // Import Auth page component
import { CreateRecipe } from "./pages/create-recipe";  // Import CreateRecipe page component
import { Home } from "./pages/home";  // Import Home page component
import { SavedRecipes } from "./pages/saved-recipes";  // Import SavedRecipes page component
import About from './pages/about';  // Correct import for default export of About component
import './App.css';  // This imports the App.css file


function App() {
  return (
    <div className="App">
      <Router>  {/* Router component to handle routing */}
        <Navbar />  {/* Navbar will be displayed on every page */}
        <Routes>  {/* Define routes here */}
          <Route path="/" element={<Home />} />  {/* Route for Home page */}
          <Route path="/create-recipe" element={<CreateRecipe />} />  {/* Route for Create Recipe page */}
          <Route path="/saved-recipes" element={<SavedRecipes />} />  {/* Route for Saved Recipes page */}
          <Route path="/auth" element={<Auth />} />  {/* Route for Authentication page */}
          <Route path="/about" element={<About />} />  {/* Route for About page */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
