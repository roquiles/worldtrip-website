import { Flex, Heading, VStack, SimpleGrid } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import { ContinentType } from "../contexts/Continents/provider";
import BannerContinent from "../components/BannerContinent";
import ContinentInfos from "../components/ContinentInfos";
import CityCard from "../components/CityCard";

interface ContinentsPageProps {
  selectedContinentData: ContinentType;
}

export default function ContinentPage({
  selectedContinentData,
}: ContinentsPageProps) {
  return (
    <VStack display="flex" justify="center" width="full">
      <BannerContinent continent={selectedContinentData} />
      <ContinentInfos continent={selectedContinentData} />

      <Flex
        direction="column"
        width="full"
        maxW="1160px"
        paddingX={["16px", "0"]}
        paddingY={["32px", "0"]}
      >
        <Heading width="full" fontWeight="500" fontSize={["24px", "36px"]}>
          Cidades +100
        </Heading>

        <SimpleGrid
          columns={[1, 4]}
          marginY={["5", "10"]}
          alignSelf={["center", "start"]}
          gap={["20px", "45px"]}
        >
          {selectedContinentData.citiesListedOnTop100.map((city) => (
            <CityCard city={city} key={city.name} />
          ))}
        </SimpleGrid>
      </Flex>
    </VStack>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const continents = await fetch(
    "https://my-json-server.typicode.com/roquiles/worldtrip-website/continentes"
  ).then((response) => response.json());

  const paths = continents.map((continentItem: ContinentType) => {
    return { params: { continentId: String(continentItem.id) } };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const params = context.params;

  const selectedContinentData = await fetch(
    `https://my-json-server.typicode.com/roquiles/worldtrip-website/continentes/`
  )
    .then((response) => response.json())
    .then((continents) =>
      continents.find(
        (continentItem: ContinentType) =>
          String(continentItem.id) === params?.continentId
      )
    );

  return {
    props: {
      selectedContinentData,
    },
  };
};
