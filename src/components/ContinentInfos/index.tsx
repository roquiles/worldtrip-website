import { Container, Flex, SimpleGrid, Text, Tooltip } from "@chakra-ui/react";
import { FiInfo } from "react-icons/fi";
import { ContinentType } from "../../contexts/Continents/provider";

interface ContinentInfosProps {
  continent: ContinentType;
}

export default function ContinentInfos({ continent }: ContinentInfosProps) {
  return (
    <Flex direction={["column", "row"]} align="center" gap={["16px", "70px"]}>
      <Container width={["full", "600px"]}>
        <Text
          textAlign="justify"
          lineHeight={["21px", "32px"]}
          fontSize={["14px", "20px"]}
          marginY={["24px", "80px"]}
          marginX={["16px", "0"]}
        >
          {continent.description}
        </Text>
      </Container>

      <SimpleGrid
        columns={3}
        spacing={["10px", "42px"]}
        paddingX={["16px", "0"]}
      >
        <Flex direction="column" align="center" fontWeight={["400", "600"]}>
          <Text fontSize={[24, 48]} color="yellow.500" fontWeight="600">
            {continent.countriesCount}
          </Text>
          <Text fontSize={[18, 20]}>países</Text>
        </Flex>

        <Flex direction="column" align="center" fontWeight={["400", "600"]}>
          <Text fontSize={[24, 48]} color="yellow.500" fontWeight="600">
            {continent.languagesCount}
          </Text>
          <Text fontSize={[18, 20]}>línguas</Text>
        </Flex>

        <Flex direction="column" align="center" fontWeight={["400", "600"]}>
          <Text fontSize={[24, 48]} fontWeight="600" color="yellow.500">
            {continent.listedOnTop100}
          </Text>
          <Text
            fontSize={[18, 20]}
            textAlign="center"
            display="flex"
            alignItems="center"
            gap={["0", "5px"]}
          >
            cidades +100
            <Tooltip
              hasArrow
              label="Cities ranked in The 100 Most Popular City Destinations list"
            >
              <Text color="gray.500" fontSize={["10px", "16px"]}>
                <FiInfo />
              </Text>
            </Tooltip>
          </Text>
        </Flex>
      </SimpleGrid>
    </Flex>
  );
}
