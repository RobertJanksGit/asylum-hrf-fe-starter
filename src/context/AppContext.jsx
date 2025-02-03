import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import testData from '../data/test_data.json';
import { useLocalStorage } from '../hooks/useLocalStorage.js';

const AppContext = createContext({});

const BASE_URL = 'https://hrf-asylum-be-b.herokuapp.com/cases';

/**
 * TODO: Ticket 2:
 * - Use axios to fetch the data
 * - Store the data
 * - Populate the graphs with the stored data
 */
const useAppContextProvider = () => {
  const [graphData, setGraphData] = useState(testData);
  const [isDataLoading, setIsDataLoading] = useState(false);

  useLocalStorage({ graphData, setGraphData });

  // Fetches fiscal summary data from the API
  const getFiscalData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/fiscalSummary`);
      return response.data;
    } catch (error) {
      console.error('Error fetching fiscal data:', error);
      return testData;
    }
  };

  // Fetches citizenship summary data from the API
  const getCitizenshipResults = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/citizenshipSummary`);
      return response.data;
    } catch (error) {
      console.error('Error fetching citizenship data:', error);
      return testData.citizenshipResults;
    }
  };

  const updateQuery = async () => {
    setIsDataLoading(true);
  };

  const fetchData = async () => {
    try {
      const [fiscalData, citizenshipData] = await Promise.all([getFiscalData(), getCitizenshipResults()]);

      setGraphData({
        ...fiscalData,
        citizenshipResults: citizenshipData,
      });
    } catch (error) {
      console.error('Error fetching data:', error);
      setGraphData(testData);
    } finally {
      setIsDataLoading(false);
    }
  };

  // Resets the graph data to an empty object
  const clearQuery = () => {
    setGraphData({});
  };

  const getYears = () => graphData?.yearResults?.map(({ fiscal_year }) => Number(fiscal_year)) ?? [];

  useEffect(() => {
    if (isDataLoading) {
      fetchData();
    }
  }, [isDataLoading]);

  return {
    graphData,
    setGraphData,
    isDataLoading,
    updateQuery,
    clearQuery,
    getYears,
  };
};

export function useAppContext() {
  return useContext(AppContext);
}

export function ProvideAppContext({ children }) {
  const contextValue = useAppContextProvider();

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
}
