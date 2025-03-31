import { HStack, Skeleton, SkeletonText } from "@chakra-ui/react";

function GenreSkeleton() {
  return (
    <HStack py={2}>
      <Skeleton height={9} width={9} />
      <SkeletonText noOfLines={1} />
    </HStack>
  );
}

export default GenreSkeleton;
