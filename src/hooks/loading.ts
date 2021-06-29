import React, { useContext } from "react";

const defaultValue = {
  loading: false,
  show: () => {},
  hide: () => {},
};

export const LoadingContext = React.createContext(defaultValue);

export const useLoading = () => useContext(LoadingContext);
