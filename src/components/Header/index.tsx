import { Flex } from "@chakra-ui/react";
import logoImage from "../../assets/logo.svg";
import Image from "next/image";

export default function Header() {
  return (
    <Flex justify="center" align="center" h={100}>
      <Image src={logoImage} alt="logo" width="186px" />
    </Flex>
  );
}
