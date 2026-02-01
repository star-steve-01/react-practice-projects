import { createContext, type Dispatch, type SetStateAction } from "react";

type ActiveTabContextValue = {
  activeTab: number,
  setActiveTab: Dispatch<SetStateAction<number>>
}

export const ActiveTabContext = createContext<ActiveTabContextValue>({
  activeTab: 0,
  setActiveTab: () => {}
});