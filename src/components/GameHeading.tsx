import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

function GameHeading({ gameQuery }: Props) {
  return (
    <Heading textStyle="4xl" mt={4}>
      {(gameQuery.genre?.name || "") +
        (gameQuery.platform?.name || "") +
        " Games"}
    </Heading>
  );
}

export default GameHeading;
