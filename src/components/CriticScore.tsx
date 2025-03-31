import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

function CriticScore({ score }: Props) {
  const color = score > 90 ? "green" : score > 80 ? "yellow" : "red";
  return (
    <Badge fontSize="20px" py={1} px={2} pb={2} colorPalette={color}>
      {score}
    </Badge>
  );
}

export default CriticScore;
