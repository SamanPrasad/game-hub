import { Portal, Select } from "@chakra-ui/react";
import { createListCollection } from "@chakra-ui/react";

interface Props {
  onSelectOrderBy: (order: string) => void;
}

function OrderBySelector({ onSelectOrderBy }: Props) {
  const orderBy = createListCollection({
    items: [
      { label: "Relevance", value: "" },
      { label: "Date Added", value: "-added" },
      { label: "Name", value: "name" },
      { label: "Release Added", value: "-released" },
      { label: "Popularity", value: "-metacritic" },
      { label: "Average Rating", value: "-rating" },
    ],
  });

  return (
    <Select.Root
      collection={orderBy}
      width={{ base: "100px", md: "200px" }}
      size={"md"}
      onValueChange={(value) => onSelectOrderBy(value.value[0])}
    >
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Order By" />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.ClearTrigger />
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>
            {orderBy.items.map((platform) => (
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

export default OrderBySelector;
