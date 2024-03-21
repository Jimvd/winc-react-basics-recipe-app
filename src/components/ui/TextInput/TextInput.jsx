/* eslint-disable react/prop-types */
import { Input } from "@chakra-ui/react";

export const TextInput = ({ changeFn, ...props }) => {
   return (
      <div>
         <Input mt="8" rounded="md" bgColor="white" variant={"flushed"} onChange={changeFn} {...props} />
      </div>
   );
};
