import { createContext, type Dispatch, type SetStateAction } from "react";

type LoadingStatusContextProps = {
  loadingStatus: boolean,
  setLoadingStatus: Dispatch<SetStateAction<boolean>>
}

export const LoadingStatusContext = createContext<LoadingStatusContextProps>({
  loadingStatus: false,
  setLoadingStatus: () => {}
});