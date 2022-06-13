import { Box, VStack, Image, Text, Flex, Avatar } from "@chakra-ui/react";
import { CityType } from "../../contexts/Continents/provider";

interface CityCardProps {
  city: CityType;
}

export default function CityCard({ city }: CityCardProps) {
  return (
    <VStack
      key={city.name}
      w="256px"
      height="280px"
      bg="white"
      border="1px solid"
      borderColor="yellow.500"
      borderRadius="4"
    >
      <Box height="175px">
        <Image
          src={city.imageURL}
          alt={city.name}
          objectFit="cover"
          height="175px"
          width="256px"
        />
      </Box>

      <Flex
        width="full"
        direction="column"
        gap="8px"
        position="relative"
        paddingX="24px"
      >
        <Text fontSize={20} fontWeight="600">
          {city.name}
        </Text>
        <Text fontSize={16} color="gray.500">
          {city.country}
        </Text>
        <Avatar
          size="sm"
          src={city.flag}
          position="absolute"
          marginY="auto"
          right="24px"
          top="20px"
        />
      </Flex>
    </VStack>
  );
}
