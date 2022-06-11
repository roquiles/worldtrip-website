import { Flex, IconButton, Center } from "@chakra-ui/react";
import { useRouter } from "next/router";
import logoImage from "../../assets/logo.svg";
import Image from "next/image";
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";

export default function Header() {
  const router = useRouter();
  const currentPath = router.query;

  return (
    <Center width="full">
      <Flex
        justify="center"
        align="center"
        h="100px"
        w="1440px"
        position="relative"
      >
        {Object.keys(currentPath).length !== 0 && (
          <Link href="/">
            <IconButton
              position="absolute"
              aria-label="Return"
              icon={<IoIosArrowBack />}
              fontSize="20px"
              left={0}
              ml="8"
              marginY="auto"
              bg="transparent"
            />
          </Link>
        )}

        <Image src={logoImage} alt="logo" width="186px" />
      </Flex>
    </Center>
  );
}
