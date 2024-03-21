import { TextInput } from "../ui/TextInput/TextInput";

export const RecipeSearch = ({ onSearchChange }) => {
   const handleChange = (event) => {
      const searchText = event.target.value;
      onSearchChange(searchText);
   };

   return (
      <>
         <TextInput onChange={handleChange} w={200} mb={8} />
      </>
   );
};
