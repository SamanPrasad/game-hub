import { Grid, GridItem, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import whiteLogo from "../assets/white-logo.png";
import { useColorModeValue } from "./ui/color-mode";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

function Navbar() {
  const src = useColorModeValue(logo, whiteLogo);
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
    >
      <GridItem area="logo">
        <Image src={src} height={"40px"} />
      </GridItem>
      <GridItem area="search">
        <SearchInput />
      </GridItem>
      <GridItem justifyContent="end" area="switch">
        <ColorModeSwitch />
      </GridItem>
    </Grid>
  );
}

export default Navbar;
