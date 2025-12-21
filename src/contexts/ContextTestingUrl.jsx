import { createContext, useContext, useState } from "react";

export const TestingUrlContext = createContext();

export const TestingUrlProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [channelsPerPage, setChannelsPerPage] = useState(10);

  // server-confirm values
  const [confirmedCurrentPage, setConfirmedCurrentPage] = useState(1);
  const [confirmedChannelsPerPage, setConfirmedChannelsPerPage] = useState(10);

  const getValue = {
    currentPage,
    setCurrentPage,
    channelsPerPage,
    setChannelsPerPage,
    // server-confirm values
    confirmedCurrentPage,
    setConfirmedCurrentPage,
    confirmedChannelsPerPage,
    setConfirmedChannelsPerPage,
  };
  return (
    <TestingUrlContext.Provider value={getValue}>
      {children}
    </TestingUrlContext.Provider>
  );
};

export const useTestingUrl = () => {
  const context = useContext(TestingUrlContext);
  if (!context) {
    throw new Error(`useTestingUrl must be use within TestingUrlProvider`);
  }
  return context;
};
