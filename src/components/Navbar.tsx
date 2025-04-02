import { Grid, GridItem, Image } from "@chakra-ui/react";
import logoDark from "../assets/logo-dark.svg";
import logoLight from "../assets/logo-light.svg";
import { useColorModeValue } from "./ui/color-mode";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { useEffect, useState } from "react";

function Navbar() {
  const src = useColorModeValue(logoLight, logoDark);
  const [isSticky, setIsSticky] = useState(true);
  const gridHeight = { base: "120px", md: "60px" };

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const controller = new AbortController();

    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setIsSticky(false);
      } else {
        setIsSticky(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll, {
      signal: controller.signal,
    });
    return () => controller.abort();
  }, []);

  return (
    <Grid
      templateAreas={{
        base: `"logo switch""search search"`,
        md: `"logo search switch"`,
      }}
      templateColumns={{
        base: "2fr 1fr",
        md: "150px auto 150px",
      }}
      gap="20px"
      position="fixed"
      left={0}
      top={
        isSticky ? 0 : { base: `-${gridHeight.base}`, md: `-${gridHeight.md}` }
      }
      transition="0.3s ease-in-out"
      zIndex={1000}
      bg={{ _light: "white", _dark: "black" }}
      height={gridHeight}
      width="100%"
      alignItems="center"
      px={5}
      pt={2}
    >
      <GridItem area="logo">
        <Image src={src} height={"40px"} />
      </GridItem>
      <GridItem area="search">
        <SearchInput />
      </GridItem>
      <GridItem area="switch">
        <ColorModeSwitch />
      </GridItem>
    </Grid>
  );
}

export default Navbar;
