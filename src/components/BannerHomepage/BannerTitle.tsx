import { Heading, VStack, Text } from "@chakra-ui/react";

export default function BannerTitle() {
  return (
    <VStack align="flex-start" justify="center" spacing={2.5}>
      <Heading
        w="90"
        fontSize={["20px", "36px"]}
        fontWeight="500"
        color="gray.50"
      >
        5 Continentes, <br /> infinitas possibilidades
      </Heading>
      <Text w={["full", "524px"]} color="gray.200">
        Chegou a hora de tirar do papel a viagem que você sempre sonhou.
      </Text>
    </VStack>
  );
}
