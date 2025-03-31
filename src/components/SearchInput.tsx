import { Input, InputGroup } from "@chakra-ui/react";
import { useRef } from "react";
import { LuSearch } from "react-icons/lu";

interface Props {
  onSearch: (search: string) => void;
}

function SearchInput({ onSearch }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (inputRef.current) onSearch(inputRef.current?.value);
      }}
    >
      <InputGroup startElement={<LuSearch />}>
        <Input ref={inputRef} placeholder="Search games..." borderRadius={20} />
      </InputGroup>
    </form>
  );
}

export default SearchInput;
