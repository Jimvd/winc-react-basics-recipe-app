import { useState } from "react";
import { Heading, Flex, Center } from "@chakra-ui/react";
import { data } from "../utils/data";
import { RecipeCard } from "../components/RecipeCard/RecipeCard";
import { RecipeSearch } from "../components/RecipeSearch/RecipeSearch";
import { RecipePage } from "./RecipePage";

export const RecipeListPage = () => {
   const [filteredRecipes, setFilteredRecipes] = useState(data.hits);
   const [selectedRecipe, setSelectedRecipe] = useState(null);

   const handleSearchChange = (searchText) => {
      const filtered = data.hits.filter((recipe) => {
         const nameMatch = recipe.recipe.label.toLowerCase().includes(searchText.toLowerCase());
         const healthLabelsMatch = recipe.recipe.healthLabels.some((label) =>
            label.toLowerCase().includes(searchText.toLowerCase())
         );
         return nameMatch || healthLabelsMatch;
      });
      setFilteredRecipes(filtered);
   };

   return (
      <>
         <Center>
            <Heading mt="8" color="white">
               Recipe App
            </Heading>
         </Center>
         <Center>{selectedRecipe === null && <RecipeSearch onSearchChange={handleSearchChange} />} </Center>

         {selectedRecipe ? (
            <RecipePage recipe={selectedRecipe} onBack={() => setSelectedRecipe(null)} />
         ) : (
            <Flex flexWrap="wrap" justifyContent={"center"}>
               {filteredRecipes.map((hit, index) => (
                  <RecipeCard key={index} recipe={hit.recipe} onClick={() => setSelectedRecipe(hit.recipe)} />
               ))}
            </Flex>
         )}
      </>
   );
};
