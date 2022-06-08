import { Box } from "@chakra-ui/react";
import Image from "next/image";
import airplane from "../../assets/Airplane.svg";

export default function BannerImage() {
  return (
    <Box alignSelf="flex-end" transform="translateY(3rem)">
      <Image alt="airplane" src={airplane} width="418px" />
    </Box>
  );
}
