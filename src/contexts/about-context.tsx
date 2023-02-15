import React, { useEffect } from "react";
import { GetAbout } from "../backend";
import { AboutSchema } from "../lib/validation";

export const AboutContext = React.createContext({
  items: {} as AboutSchema,
  loadItems: () => {},
});

export const InfoProvider = ({ children }: any) => {
  const [items, setItems] = React.useState<AboutSchema>({} as AboutSchema);

  const loadItems = () => {
    GetAbout()
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
    <AboutContext.Provider value={{ items, loadItems }}>
      {children}
    </AboutContext.Provider>
  );
};

export const useAboutContext = () => React.useContext(AboutContext);
