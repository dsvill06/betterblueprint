import { ReactNode, useState, useContext, createContext } from "react";

const RouterContext = createContext({});

const RouterProvider = props => {
  const [path, setPath] = useState();

  let data = {
    path,
    setPath,
  };

  return <RouterContext.Provider value={data} {...props}/>;
};

const useRouter = () => {
  const context = useContext(RouterContext);

  if (context === undefined) {
    throw new Error(`useRouter must be used within RouterProvider`);
  }

  return context;
};

export { useRouter, RouterProvider };