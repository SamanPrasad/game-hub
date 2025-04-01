import { Input, InputGroup } from "@chakra-ui/react";
import { useContext, useRef } from "react";
import { LuSearch } from "react-icons/lu";
import { SearchContext } from "../contexts/searchContext";

function SearchInput() {
  const inputRef = useRef<HTMLInputElement>(null);
  const onSearch = useContext(SearchContext);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (inputRef.current && onSearch) onSearch(inputRef.current?.value);
      }}
    >
      <InputGroup startElement={<LuSearch />}>
        <Input ref={inputRef} placeholder="Search games..." borderRadius={20} />
      </InputGroup>
    </form>
  );
}

export default SearchInput;
