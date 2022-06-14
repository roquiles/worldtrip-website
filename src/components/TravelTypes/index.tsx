import { UnorderedList, VStack } from "@chakra-ui/react";
import cocktail from "../../assets/cocktail 1.svg";
import beach from "../../assets/surf 1.svg";
import building from "../../assets/building 1.svg";
import museum from "../../assets/museum 1.svg";
import earth from "../../assets/earth 1.svg";
import TypeItem from "./TypeItem";

export default function TravelTypes() {
  return (
    <VStack paddingX="35" paddingY={["9", "20"]}>
      <UnorderedList
        w="full"
        h="145px"
        maxW="1160px"
        display="flex"
        justifyContent={["center", "space-between"]}
        flexWrap="wrap"
        paddingX="20px"
        margin="0"
        gap={["0 70px", "0 70px", "0"]}
      >
        <TypeItem image={cocktail} label="vida noturna" />
        <TypeItem image={beach} label="praia" />
        <TypeItem image={building} label="moderno" />
        <TypeItem image={museum} label="clássico" />
        <TypeItem image={earth} label="e mais..." />
      </UnorderedList>
    </VStack>
  );
}
