import { createContext } from "react";

export const SearchContext = createContext<((search: string) => void) | null>(
  null
);
