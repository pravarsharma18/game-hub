import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Games } from "../services/game";
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
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </CardBody>
    </Card>
  );
};

export default GameCard;
