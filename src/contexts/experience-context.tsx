import React, { useEffect } from "react";
import { GetExperience } from "../backend";
import { ExperienceSchema } from "../lib/validation";

export const ExperienceContext = React.createContext({
  items: [] as ExperienceSchema[],
  loadItems: () => {},
});

export const ExperienceProvider = ({ children }: any) => {
  const [items, setItems] = React.useState([] as ExperienceSchema[]);

  const loadItems = () => {
    GetExperience()
      .then((response) => {
        setItems(response);
      })
      .catch((error: string) => {
        console.log(error);
      });
  };
  useEffect(() => {
    loadItems();
  }, []);
  return (
    <ExperienceContext.Provider value={{ items, loadItems }}>
      {children}
    </ExperienceContext.Provider>
  );
};

export const useExperienceContext = () => React.useContext(ExperienceContext);
