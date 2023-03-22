import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { Games } from "../services/game";
import getCroppedUrl from "../services/image-url";
import CriticBadge from "./CriticBadge";
import GameCardContainer from "./GameCardContainer";
import PlatformIconList from "./PlatformIconList";

interface Game {
  game: Games;
}
const GameCard = ({ game }: Game) => {
  return (
    <GameCardContainer>
      <Card>
        <Image src={getCroppedUrl(game.background_image)} />
        <CardBody>
          <HStack justifyContent="space-between" marginBlock={3}>
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticBadge score={game.metacritic} />
          </HStack>
          <Heading fontSize="2xl">{game.name}</Heading>
        </CardBody>
      </Card>
    </GameCardContainer>
  );
};

export default GameCard;
