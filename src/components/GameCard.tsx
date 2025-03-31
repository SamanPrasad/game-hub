import { Card, Heading, HStack, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconsList from "./PlatformIconsList";
import CriticScore from "./CriticScore";
import noImage from "./../assets/no-image.jpg";

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <Card.Root borderRadius={10}>
      <Card.Header>
        <Image
          src={game.background_image ? game.background_image : noImage}
          height="200px"
          borderRadius={8}
        ></Image>
      </Card.Header>
      <Card.Body>
        <HStack justifyContent="space-between" mb={2}>
          <PlatformIconsList
            platforms={game.parent_platforms.map(({ platform }) => platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading textStyle="2xl" pb={3}>
          {game.name}
        </Heading>
      </Card.Body>
    </Card.Root>
  );
}

export default GameCard;
