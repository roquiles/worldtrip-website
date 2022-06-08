import { Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

interface TypeItemProps {
  image: string;
  label: string;
}

export default function TypeItem({ image, label }: TypeItemProps) {
  return (
    <Flex direction="column" align="center" gap="6">
      <Image src={image} alt={label} />
      <Text fontWeight="600">{label}</Text>
    </Flex>
  );
}
