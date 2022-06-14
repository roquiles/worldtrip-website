/* eslint-disable @next/next/no-img-element */

import { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Pagination } from "swiper";
import { Box, Flex, Text, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";
import ContinentsContext from "../../contexts/Continents/context";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function Slider() {
  const { continents } = useContext(ContinentsContext);

  return (
    <Box w={["full", "1240px"]} h={["250", "450px"]} overflow="hidden">
      <Swiper
        modules={[Navigation, EffectFade, Pagination]}
        navigation
        pagination={{ clickable: true }}
        effect={"fade"}
        speed={800}
        slidesPerView={1}
        loop
      >
        {continents.map((continent) => (
          <SwiperSlide key={continent.id}>
            <Flex
              position="relative"
              align="center"
              justify="center"
              height={["250px", "450px"]}
              w={["full", "1240px"]}
            >
              <img
                src={continent.imageURL}
                alt={continent.name}
                style={{ filter: "brightness(0.7)", objectFit: "cover" }}
              />

              <Link href={`/${continent.id}`} passHref>
                <ChakraLink
                  display="flex"
                  position="absolute"
                  alignItems="center"
                  flexDirection="column"
                >
                  <Text
                    fontWeight="700"
                    fontSize={["24px", "48px"]}
                    color="gray.50"
                  >
                    {continent.name}
                  </Text>
                  <Text
                    color="gray.200"
                    fontSize={["14px", "24px"]}
                    fontWeight="700"
                  >
                    {continent.subtitle}
                  </Text>
                </ChakraLink>
              </Link>
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
