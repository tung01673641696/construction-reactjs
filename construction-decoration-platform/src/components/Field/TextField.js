import {
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
  InputRightElement,
} from "@chakra-ui/react";

export function TextField({ ...props }) {
  return (
    // <InputGroup>
    //   {before && <InputLeftElement h="100%">{before}</InputLeftElement>}
    //   <Input
    //     h="38px"
    //     borderColor="gray.400"
    //     _disabled={{
    //       opacity: 0.6,
    //     }}
    //     _hover={{ borderColor: "gray.200" }}
    //     {...props}
    //   />
    //   {after && <InputRightElement h="100%">{after}</InputRightElement>}
    // </InputGroup>
    <input {...props} />
  );
}
