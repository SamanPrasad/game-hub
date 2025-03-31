import { Card, Skeleton, SkeletonText } from "@chakra-ui/react";

function GameCardSkeleton() {
  return (
    <Card.Root borderRadius={8}>
      <Card.Header>
        <Skeleton height="200px" borderRadius={8}></Skeleton>
      </Card.Header>
      <Card.Body>
        <SkeletonText></SkeletonText>
      </Card.Body>
    </Card.Root>
  );
}

export default GameCardSkeleton;
