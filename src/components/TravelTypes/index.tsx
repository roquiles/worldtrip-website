import { Flex, VStack } from "@chakra-ui/react";
import cocktail from "../../assets/cocktail 1.svg";
import beach from "../../assets/surf 1.svg";
import building from "../../assets/building 1.svg";
import museum from "../../assets/museum 1.svg";
import earth from "../../assets/earth 1.svg";
import TypeItem from "./TypeItem";

export default function TravelTypes() {
  return (
    <VStack paddingX="35" paddingY="20">
      <Flex w="full" h="145px" maxW="1160px" justify="space-between">
        <TypeItem image={cocktail} label="vida noturna" />
        <TypeItem image={beach} label="praia" />
        <TypeItem image={building} label="moderno" />
        <TypeItem image={museum} label="clássico" />
        <TypeItem image={earth} label="e mais..." />
      </Flex>
    </VStack>
  );
}
