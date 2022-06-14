import { ListItem, ListIcon, Text, useBreakpointValue } from "@chakra-ui/react";
import { BsCircleFill } from "react-icons/bs";
import Image from "next/image";

interface TypeItemProps {
  image: string;
  label: string;
}

export default function TypeItem({ image, label }: TypeItemProps) {
  const isWideVersion = useBreakpointValue({ base: false, md: true, lg: true });

  return (
    <ListItem
      display="flex"
      flexDirection={["row", "row", "column"]}
      alignItems="center"
      gap={["8px", "8px", "6"]}
      flexWrap="nowrap"
    >
      {isWideVersion && <Image src={image} alt={label} />}
      {!isWideVersion && (
        <ListIcon as={BsCircleFill} color="yellow.500" fontSize={8} m="0" />
      )}
      <Text fontWeight={["500", "600"]} fontSize={["18"]}>
        {label}
      </Text>
    </ListItem>
  );
}
