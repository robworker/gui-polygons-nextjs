// Got this idea, simpler than Redux, from https://stackoverflow.com/a/47461652
import { useEffect, useState } from "react";

interface ISimpleStore {
    on: (ev: string, fn: () => void) => void;
    off: (ev: string, fn: () => void) => void;
  }
  
  export default function useStore<T extends ISimpleStore>(store: T) {
    const [storeState, setStoreState] = useState({store});
    useEffect(() => {
      const onChange = () => {
        setStoreState({store});
      }
      store.on('change', onChange);
      return () => {
        store.off('change', onChange);
      }
    }, []);
    return storeState.store;
  }