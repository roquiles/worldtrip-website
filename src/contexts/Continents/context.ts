import { createContext } from "react";
import { ContinentType } from "./provider";

interface ContinentsContextData {
  continents: ContinentType[];
}

const ContinentsContext = createContext({} as ContinentsContextData);

export default ContinentsContext;
