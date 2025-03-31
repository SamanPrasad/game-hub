import useGenres, { Genre } from "../hooks/useGenres";
import { Heading, HStack, Image, Link, List } from "@chakra-ui/react";
import GenreSkeleton from "./GenreSkeleton";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

function GenreList({ selectedGenre, onSelectGenre }: Props) {
  const { data, error, isLoading } = useGenres();
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  if (error) return null;

  return (
    <>
      <Heading fontSize="2xl" fontWeight="bold" pb={2}>
        Genres
      </Heading>
      <List.Root>
        {isLoading &&
          skeleton.map((skeleton) => <GenreSkeleton key={skeleton} />)}
        {data.map((genre) => {
          return (
            <List.Item key={genre.id} py={2} listStyleType="none">
              <HStack>
                <Image
                  boxSize={9}
                  src={genre.image_background}
                  borderRadius={4}
                />
                <Link
                  variant="plain"
                  fontSize="lg"
                  fontWeight={selectedGenre?.id == genre.id ? "800" : "500"}
                  textDecorationThickness="2px"
                  textDecorationColor="gray.300"
                  onClick={() => onSelectGenre(genre)}
                >
                  {genre.name}
                </Link>
              </HStack>
            </List.Item>
          );
        })}
      </List.Root>
    </>
  );
}

export default GenreList;
