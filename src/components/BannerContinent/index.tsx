import { Flex, Heading } from "@chakra-ui/react";
import { ContinentType } from "../../contexts/Continents/provider";

interface BannerContinentProps {
  continent: ContinentType;
}

export default function BannerContinent({ continent }: BannerContinentProps) {
  return (
    <Flex
      bg={`url(${continent.bannerURL})`}
      bgPosition="center"
      bgSize="cover"
      height="500px"
      width="1440px"
      paddingX="140px"
      paddingBottom={59}
      align="end"
    >
      <Heading color="gray.50" fontWeight="600" fontSize={48}>
        {continent.name}
      </Heading>
    </Flex>
  );
}
