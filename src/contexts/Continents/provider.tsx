import { ReactNode, useEffect, useState } from "react";
import ContinentsContext from "./context";

interface ContinentsProviderProps {
  children: ReactNode;
}

export interface CityType {
  name: string;
  country: string;
  imageURL: string;
  flag: string;
}

export interface ContinentType {
  id: number;
  name: string;
  subtitle: string;
  imageURL: string;
  bannerURL: string;
  description: string;
  countriesCount: number;
  languagesCount: number;
  listedOnTop100: number;
  citiesListedOnTop100: CityType[];
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
