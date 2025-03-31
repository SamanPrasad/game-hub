import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import whiteLogo from "../assets/white-logo.png";
import { useColorModeValue } from "./ui/color-mode";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (search: string) => void;
}

function Navbar({ onSearch }: Props) {
  const src = useColorModeValue(logo, whiteLogo);
  return (
    <HStack padding={"10px"}>
      <Image src={src} height={"40px"} />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
}

export default Navbar;
