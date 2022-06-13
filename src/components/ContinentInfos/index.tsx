import { Container, Flex, SimpleGrid, Text, Tooltip } from "@chakra-ui/react";
import { FiInfo } from "react-icons/fi";
import { ContinentType } from "../../contexts/Continents/provider";

interface ContinentInfosProps {
  continent: ContinentType;
}

export default function ContinentInfos({ continent }: ContinentInfosProps) {
  return (
    <Flex align="center" gap="70px">
      <Container width="600px">
        <Text
          textAlign="justify"
          lineHeight="32px"
          fontSize="20px"
          marginY="80px"
        >
          {continent.description}
        </Text>
      </Container>

      <SimpleGrid columns={3} spacing="42px">
        <Flex direction="column" align="center" fontWeight="600">
          <Text fontSize={48} color="yellow.500">
            {continent.countriesCount}
          </Text>
          <Text fontSize={20}>países</Text>
        </Flex>

        <Flex direction="column" align="center" fontWeight="600">
          <Text fontSize={48} color="yellow.500">
            {continent.languagesCount}
          </Text>
          <Text fontSize={20}>línguas</Text>
        </Flex>

        <Flex direction="column" align="center" fontWeight="600">
          <Text fontSize={48} fontWeight="600" color="yellow.500">
            {continent.listedOnTop100}
          </Text>
          <Flex align="center" gap="5px">
            <Text fontSize={20}>cidades +100</Text>
            <Tooltip
              hasArrow
              label="Cities ranked in The 100 Most Popular City Destinations list"
            >
              <Text color="gray.500">
                <FiInfo />
              </Text>
            </Tooltip>
          </Flex>
        </Flex>
      </SimpleGrid>
    </Flex>
  );
}
