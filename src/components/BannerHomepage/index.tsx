import { Flex, Center, useBreakpointValue } from "@chakra-ui/react";
import BannerImage from "./BannerImage";

import BannerTitle from "./BannerTitle";

export default function Banner() {
  const isWideVersion = useBreakpointValue({ base: false, lg: true });

  return (
    <Center
      bg="url('/backgroundBanner.jpg')"
      bgSize="cover"
      bgPos={["0 -25%", "0 25%"]}
    >
      <Flex
        justify="space-around"
        align="center"
        w={["full", "1440px"]}
        h={["fit-content", "335px"]}
        marginX={["0", "35"]}
        paddingY={["28px", "0"]}
        paddingX={["16px", "0"]}
      >
        <BannerTitle />

        {isWideVersion && <BannerImage />}
      </Flex>
    </Center>
  );
}
