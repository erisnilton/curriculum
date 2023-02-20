import React, { useEffect } from "react";
import { GetEducation } from "../backend";
import { EducationSchema } from "../lib/validation";

export const EducationContext = React.createContext({
  items: [] as EducationSchema[],
  loadItems: () => {},
});

export const EducationProvider = ({ children }: any) => {
  const [items, setItems] = React.useState([] as EducationSchema[]);

  const loadItems = () => {
    GetEducation()
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
    <EducationContext.Provider value={{ items, loadItems }}>
      {children}
    </EducationContext.Provider>
  );
};

export const useEducationContext = () => React.useContext(EducationContext);
