/* eslint-disable no-unused-vars */
import { Card, CardBody, Text, Image, Stack, Heading, CardFooter, Tag, Flex, Center } from "@chakra-ui/react";

export const RecipeCard = ({ recipe, onClick }) => {
   return (
      <>
         <Card maxW="sm" m="2" bgColor="white" onClick={onClick}>
            <CardBody>
               <Image src={recipe.image} alt={recipe.label} borderRadius="lg" boxSize="sm" objectFit="cover" />
               <Stack mt="4" mb="5" spacing="3">
                  <Center>
                     <Text>{recipe.mealType}</Text>
                  </Center>
                  <Heading size="md">{recipe.label}</Heading>
               </Stack>
               <Flex>
                  <Text>dish:</Text>
                  <Text ml="2" fontWeight="bold">
                     {recipe.dishType}
                  </Text>
               </Flex>
               <Flex>
                  {recipe.cautions.length > 0 && (
                     <>
                        <Text mr="2">Cautions:</Text>
                        <Flex flexWrap="wrap">
                           {recipe.cautions.map((caution, index) => (
                              <Tag key={index} colorScheme="blue" mr="2" mb="2">
                                 {caution}
                              </Tag>
                           ))}
                        </Flex>
                     </>
                  )}
               </Flex>
            </CardBody>
            <CardFooter>
               <Flex direction="column">
                  {recipe.dietLabels?.map((dietLabel, index) => (
                     <Tag key={index} colorScheme="red" mr="2" mb="2">
                        {dietLabel}
                     </Tag>
                  ))}
               </Flex>
               <Flex direction="column">
                  {recipe.healthLabels?.map(
                     (healthLabel, index) =>
                        (healthLabel === "Vegan" || healthLabel === "Vegetarian") && (
                           <Tag key={index} colorScheme="green" mr="2" mb="2">
                              {healthLabel}
                           </Tag>
                        )
                  )}
               </Flex>
            </CardFooter>
         </Card>
      </>
   );
};
