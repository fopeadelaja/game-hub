import { Skeleton, SkeletonText } from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <Skeleton height="30px">
      <SkeletonText />
    </Skeleton>
  );
};

export default GenreListSkeleton;
