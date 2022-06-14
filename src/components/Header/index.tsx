import { Flex, IconButton, Center, Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Image from "next/image";
import logoImage from "../../assets/logo.svg";
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
        h={["50px", "100px"]}
        w={["375px", "1440px"]}
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
              ml={["0", "8"]}
              marginY="auto"
              bg="transparent"
            />
          </Link>
        )}

        <Box width={["81px", "186px"]}>
          <Image src={logoImage} alt="logo" />
        </Box>
      </Flex>
    </Center>
  );
}
