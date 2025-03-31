import { Icon, Switch } from "@chakra-ui/react";
import { useColorMode } from "./ui/color-mode";
import { FaMoon, FaSun } from "react-icons/fa";

function ColorModeSwitch() {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <Switch.Root
      colorPalette={"green"}
      checked={colorMode == "dark" ? true : false}
      onCheckedChange={toggleColorMode}
    >
      <Switch.HiddenInput />
      <Switch.Control />
      <Switch.Indicator fallback={<Icon as={FaMoon} color="gray.400" />}>
        <Icon as={FaSun} color="yellow.500" />
      </Switch.Indicator>
      <Switch.Label whiteSpace="nowrap">Toggle Theme</Switch.Label>
    </Switch.Root>
  );
}

export default ColorModeSwitch;
