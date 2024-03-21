import {
   Image,
   IconButton,
   Card,
   Flex,
   Heading,
   Center,
   Text,
   useBreakpointValue,
   UnorderedList,
   ListItem,
   Accordion,
   AccordionItem,
   AccordionButton,
   AccordionPanel,
   AccordionIcon,
   Box,
   Tag,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";

export function RecipePage({ recipe, onBack }) {
   const isFlex = useBreakpointValue({ base: false, md: true });

   return (
      <>
         <IconButton
            aria-label="Back to Recipe List"
            icon={<ArrowBackIcon />}
            onClick={onBack}
            variant="outline"
            color="white"
            marginLeft="2"
            marginTop="2"
            position="absolute"
            zIndex="1"
         />
         <div style={{ height: "100%", paddingTop: "4rem" }}>
            <Center>
               <Card bgColor="white" m="0.5rem" rounded="2xl" overflow="hidden" minW={{ base: "80%", md: "1280px" }}>
                  {isFlex ? (
                     <>
                        <Flex>
                           <Image
                              src={recipe.image}
                              alt={recipe.label}
                              maxH={"800px"}
                              maxW="50%"
                              roundedTopLeft="2xl"
                              objectFit={"cover"}
                           />
                           <Flex direction="column" p="1rem" minW={"50%"}>
                              <Heading size="xl" pt="4">
                                 {recipe.label}
                              </Heading>
                              <Text pt="2">Meal Type: {recipe.mealType}</Text>
                              <Text>Cautions: {recipe.cautions.join(", ")}</Text>
                              <Text>Dish: {recipe.dishType}</Text>
                              <Text>Servings: {recipe.yield}</Text>
                              <Text>
                                 Diet{" "}
                                 {recipe.dietLabels?.map((dietLabel, index) => (
                                    <Tag key={index} colorScheme="red" mr="2" mb="2">
                                       {dietLabel}
                                    </Tag>
                                 ))}
                              </Text>
                              <Text my="1rem" fontWeight="bold">
                                 Total Cooking Time: {recipe.totalTime} minutes{" "}
                              </Text>

                              <Accordion defaultIndex={[0]} allowToggle>
                                 <AccordionItem>
                                    <h2>
                                       <AccordionButton>
                                          <Box as="span" flex="1" textAlign="left" fontWeight="bold">
                                             Ingredients
                                          </Box>
                                          <AccordionIcon />
                                       </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                       <UnorderedList>
                                          {recipe.ingredientLines.map((ingredient, index) => (
                                             <ListItem key={index}>{ingredient}</ListItem>
                                          ))}
                                       </UnorderedList>
                                    </AccordionPanel>
                                 </AccordionItem>

                                 <AccordionItem>
                                    <h2>
                                       <AccordionButton>
                                          <Box as="span" flex="1" textAlign="left" fontWeight="bold">
                                             Total Nutrients
                                          </Box>
                                          <AccordionIcon />
                                       </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                       <UnorderedList>
                                          <ListItem>
                                             Energy (kcal): {Math.round(recipe.totalNutrients.ENERC_KCAL?.quantity)}
                                          </ListItem>
                                          <ListItem>
                                             Fat (g): {Math.round(recipe.totalNutrients.FAT?.quantity)}
                                          </ListItem>
                                          <ListItem>
                                             Protein (g): {Math.round(recipe.totalNutrients.PROCNT?.quantity)}
                                          </ListItem>
                                          <ListItem>
                                             Carbs (g): {Math.round(recipe.totalNutrients.CHOCDF?.quantity)}
                                          </ListItem>
                                          <ListItem>
                                             Cholesterol (mg): {Math.round(recipe.totalNutrients.CHOLE?.quantity)}
                                          </ListItem>
                                          <ListItem>
                                             Sodiums (mg): {Math.round(recipe.totalNutrients.NA?.quantity)}
                                          </ListItem>
                                       </UnorderedList>
                                    </AccordionPanel>
                                 </AccordionItem>
                              </Accordion>

                              <Box>
                                 <Text my="1rem" fontWeight="bold">
                                    HealthLabels:
                                 </Text>
                                 {recipe.healthLabels?.map((healthLabel, index) => (
                                    <Tag key={index} colorScheme="green" mr="2" mb="2">
                                       {healthLabel}
                                    </Tag>
                                 ))}
                              </Box>
                           </Flex>
                        </Flex>
                     </>
                  ) : (
                     <>
                        <Image
                           src={recipe.image}
                           alt={recipe.label}
                           maxH={"400px"}
                           maxW="100%"
                           roundedTopLeft="2xl"
                           objectFit={"cover"}
                        />
                        <Box p="0.5rem">
                           <Heading size="lg" pt="4" textAlign="left">
                              {recipe.label}
                           </Heading>
                           <Text pt="2">Meal Type: {recipe.mealType}</Text>

                           <Text>Cautions: {recipe.cautions.join(", ")}</Text>
                           <Text>Servings: {recipe.yield}</Text>
                           <Text>
                              Diet{" "}
                              {recipe.dietLabels?.map((dietLabel, index) => (
                                 <Tag key={index} colorScheme="red" mr="2" mb="2">
                                    {dietLabel}
                                 </Tag>
                              ))}
                           </Text>

                           <Text my="1rem" fontWeight="bold">
                              Total Cooking Time: {recipe.totalTime} minutes{" "}
                           </Text>

                           <Accordion defaultIndex={[0]} allowToggle>
                              <AccordionItem>
                                 <h2>
                                    <AccordionButton>
                                       <Box as="span" flex="1" textAlign="left" fontWeight="bold">
                                          Ingredients
                                       </Box>
                                       <AccordionIcon />
                                    </AccordionButton>
                                 </h2>
                                 <AccordionPanel pb={4}>
                                    <UnorderedList>
                                       {recipe.ingredientLines.map((ingredient, index) => (
                                          <ListItem key={index}>{ingredient}</ListItem>
                                       ))}
                                    </UnorderedList>
                                 </AccordionPanel>
                              </AccordionItem>

                              <AccordionItem>
                                 <h2>
                                    <AccordionButton>
                                       <Box as="span" flex="1" textAlign="left" fontWeight="bold">
                                          Total Nutrients
                                       </Box>
                                       <AccordionIcon />
                                    </AccordionButton>
                                 </h2>
                                 <AccordionPanel pb={4}>
                                    <UnorderedList>
                                       <ListItem>Energy (kcal): {recipe.totalNutrients.ENERC_KCAL?.quantity}</ListItem>
                                       <ListItem>Fat (g): {recipe.totalNutrients.FAT?.quantity}</ListItem>
                                       <ListItem>Protein (g): {recipe.totalNutrients.PROCNT?.quantity}</ListItem>
                                       <ListItem>Carbs (g): {recipe.totalNutrients.CHOCDF?.quantity}</ListItem>
                                       <ListItem>Cholesterol (mg): {recipe.totalNutrients.CHOLE?.quantity}</ListItem>
                                       <ListItem>Sodium (mg): {recipe.totalNutrients.NA?.quantity}</ListItem>
                                    </UnorderedList>
                                 </AccordionPanel>
                              </AccordionItem>
                           </Accordion>

                           <Text my="1rem" fontWeight="bold">
                              HealthLabels:
                           </Text>
                           {recipe.healthLabels?.map((healthLabel, index) => (
                              <Tag key={index} colorScheme="green" mr="2" mb="2">
                                 {healthLabel}
                              </Tag>
                           ))}
                        </Box>
                     </>
                  )}
               </Card>
            </Center>
         </div>
      </>
   );
}
