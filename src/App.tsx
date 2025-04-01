import { Grid, GridItem, HStack } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useRef, useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import OrderBySelector from "./components/OrderBySelector";
import { Platform } from "./hooks/useGames";
import GameHeading from "./components/GameHeading";
import { SearchContext } from "./contexts/searchContext";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | undefined;
  orderBy: string | undefined;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  const gridRef = useRef<HTMLDivElement>(null);

  const onSelectGenre = (genre: Genre) => {
    setGameQuery({ ...gameQuery, genre });
    gridRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <Grid
        ref={gridRef}
        templateAreas={{
          base: `"nav""main"`,
          md: `"nav nav"" aside main"`,
        }}
        gridTemplateColumns={{
          base: "1fr",
          md: "200px 1fr",
        }}
        px={5}
        py={2}
      >
        <GridItem
          area="nav"
          position="sticky"
          top="0"
          bg="black"
          zIndex={1000}
          py={3}
        >
          <SearchContext.Provider
            value={(searchText: string) =>
              setGameQuery({ ...gameQuery, searchText })
            }
          >
            <Navbar />
          </SearchContext.Provider>
        </GridItem>
        <GridItem area="main" p={{ base: "10px", lg: 0 }} px={2}>
          <GameHeading gameQuery={gameQuery} />
          <HStack my={5}>
            <PlatformSelector
              onPlatformSelect={(platform) => {
                setGameQuery({ ...gameQuery, platform: platform });
              }}
            />
            <OrderBySelector
              onSelectOrderBy={(orderBy: string) =>
                setGameQuery({ ...gameQuery, orderBy })
              }
            />
          </HStack>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
        <GridItem
          area="aside"
          display={{ base: "none", md: "block" }}
          pr={2}
          pt={2}
        >
          <GenreList
            onSelectGenre={onSelectGenre}
            selectedGenre={gameQuery.genre}
          />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
