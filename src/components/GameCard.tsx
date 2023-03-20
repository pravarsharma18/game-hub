import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { Games } from "../services/game";
import CriticBadge from "./CriticBadge";
import PlatformIconList from "./PlatformIconList";

interface Game {
  game: Games;
}
const GameCard = ({ game }: Game) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticBadge score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
