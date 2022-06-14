import { Divider, Flex, Text, VStack } from "@chakra-ui/react";
import Slider from "./Slider";

export default function CallToAction() {
  return (
    <VStack marginBottom="40px">
      <Flex direction="column" align="center" w="full">
        <Divider w="90px" border="2px solid teal.800" />

        <VStack marginY={["24px", "52px"]}>
          <Text
            fontWeight="500"
            fontSize={["20", "36"]}
            lineHeight={["30px", "54px"]}
          >
            Vamos nessa?
          </Text>
          <Text
            fontWeight="500"
            fontSize={["20", "36"]}
            lineHeight={["30px", "54px"]}
          >
            Então escolha seu continente
          </Text>
        </VStack>
      </Flex>
      <Slider />
    </VStack>
  );
}
