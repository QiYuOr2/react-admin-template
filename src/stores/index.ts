import { createContext, useContext } from 'react';
import AppStore from './appStore';

const stores = {
  appStore: new AppStore(),
};

const storesContext = createContext(stores);

export default function useStore() {
  return useContext(storesContext);
}

// export const storesContext = createContext({ appStore: new AppStore() });

// export const useStores = () => useContext(storesContext);

// export const useAppStore = () => {
//   const { appStore } = useStores();
//   return appStore;
// };
