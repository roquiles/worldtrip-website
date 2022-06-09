import { ReactNode, useEffect, useState } from "react";
import ContinentsContext from "./context";

interface ContinentsProviderProps {
  children: ReactNode;
}

export interface ContinentType {
  id: number;
  name: string;
  description: string;
  imageURL: string;
}

export default function ContinentsProvider({
  children,
}: ContinentsProviderProps) {
  const [continents, setContinents] = useState<ContinentType[]>([]);

  async function getContinentsData() {
    await fetch(
      "https://my-json-server.typicode.com/roquiles/worldtrip-website/continentes"
    )
      .then((response) => response.json())
      .then((response) => setContinents(response));
  }

  useEffect(() => {
    getContinentsData();
  }, []);

  return (
    <ContinentsContext.Provider value={{ continents }}>
      {children}
    </ContinentsContext.Provider>
  );
}
