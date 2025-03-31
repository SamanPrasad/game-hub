import { createListCollection, Portal, Select } from "@chakra-ui/react";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGames";
import PlatformListSkeleton from "./PlatformListSkeleton";

interface Props {
  onPlatformSelect: (platform: Platform | undefined) => void;
}

function PlatformSelector({ onPlatformSelect }: Props) {
  const { data, error, isLoading } = usePlatforms();

  const platforms = createListCollection({
    items: data.map((platform) => ({
      label: platform.name,
      value: platform.id,
    })),
  });

  if (error) return null;

  if (isLoading) return <PlatformListSkeleton />;

  return (
    <Select.Root
      collection={platforms}
      width={{ base: "100px", md: "200px" }}
      onValueChange={(value) =>
        onPlatformSelect(
          data.find((platform) => platform.id == Number(value.value[0]))
        )
      }
    >
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Select Platform" />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.ClearTrigger />
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>
            {platforms.items.map((platform) => (
              <Select.Item item={platform} key={platform.value}>
                {platform.label}
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  );
}

export default PlatformSelector;
