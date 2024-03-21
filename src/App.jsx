/* eslint-disable react/jsx-no-undef */
import { RecipeListPage } from "./pages/RecipeListPage";
import { useState } from "react";
import "./app.css";

export const App = () => {
   const [selectedRecipe, setSelectedRecipe] = useState(null);

   return (
      <div className="app-background">
         {selectedRecipe ? (
            <RecipePage recipe={selectedRecipe} onBack={() => setSelectedRecipe(null)} />
         ) : (
            <RecipeListPage onClick={setSelectedRecipe} />
         )}
      </div>
   );
};
