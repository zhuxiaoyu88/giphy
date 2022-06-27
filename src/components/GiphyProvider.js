import { createContext, useState } from "react";

const GiphyContext = createContext();

export default function GiphyProvider({ children }) {
  const [defaultEndpoint, setDefaultEndpoint] = useState("");

  return (
    <GiphyContext.Provider value={defaultEndpoint}>
      {children}
    </GiphyContext.Provider>
  );
}
