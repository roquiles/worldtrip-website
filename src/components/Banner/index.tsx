import { Flex, Center } from "@chakra-ui/react";
import BannerImage from "./BannerImage";

import BannerTitle from "./BannerTitle";

export default function Banner() {
  return (
    <Center bg="url('/backgroundBanner.jpg')" bgSize="cover" bgPos="0 25%">
      <Flex
        justify="space-around"
        align="center"
        w="1440px"
        h="335px"
        marginX="35"
      >
        <BannerTitle />
        <BannerImage />
      </Flex>
    </Center>
  );
}
