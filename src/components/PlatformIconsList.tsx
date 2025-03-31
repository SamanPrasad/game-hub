import {
  FaAndroid,
  FaApple,
  FaGamepad,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa";
import { Platform } from "../hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import { SiAtari, SiCommodore, SiNintendo, SiSega } from "react-icons/si";
import { MdPhoneIphone } from "react-icons/md";
import { BsGeo, BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";
import { Tooltip } from "./ui/tooltip";

interface Props {
  platforms: Platform[];
}

const iconMap: { [key: string]: IconType } = {
  pc: FaWindows,
  playstation: FaPlaystation,
  xbox: FaXbox,
  nintendo: SiNintendo,
  mac: FaApple,
  linux: FaLinux,
  android: FaAndroid,
  ios: MdPhoneIphone,
  web: BsGlobe,
  sega: SiSega,
  "neo-geo": BsGeo,
  atari: SiAtari,
  "commodore-amiga": SiCommodore,
  default: FaGamepad,
};

function PlatformIconsList({ platforms }: Props) {
  return (
    <HStack>
      {platforms.map((platform) => (
        <Tooltip content={platform.name} key={platform.id}>
          <Icon
            as={
              iconMap[platform.slug]
                ? iconMap[platform.slug]
                : iconMap["default"]
            }
            color={"gray.600"}
          >
            {platform.name}
          </Icon>
        </Tooltip>
      ))}
    </HStack>
  );
}

export default PlatformIconsList;
