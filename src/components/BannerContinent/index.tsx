import { Flex, Heading } from "@chakra-ui/react";
import { ContinentType } from "../../contexts/Continents/provider";

interface BannerContinentProps {
  continent: ContinentType;
}

export default function BannerContinent({ continent }: BannerContinentProps) {
  return (
    <Flex
      bg={`url(${continent?.bannerURL})`}
      bgPosition="center"
      bgSize="cover"
      height={["200px", "500px"]}
      width={["full", "1440px"]}
      paddingX="140px"
      paddingBottom={[0, 59]}
      align={["center", "end"]}
      justify={["center", "start"]}
    >
      <Heading
        color="gray.50"
        fontWeight="600"
        fontSize={[28, 48]}
        textAlign={"center"}
      >
        {continent?.name}
      </Heading>
    </Flex>
  );
}
