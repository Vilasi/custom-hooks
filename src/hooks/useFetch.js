import { useEffect, useState } from 'react';

export function useFetch(fetchFunction) {
  const [isFetching, setIsFetching] = useState(false);
  const [fetchedData, setFetchedData] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
      try {
        const places = await fetchFunction();
        setFetchedData(places);
      } catch (error) {
        setError({
          message: error.message || 'Failed to fetch data.',
        });
      }

      setIsFetching(false);
    }

    fetchData();
  }, [fetchFunction]);

  return {
    isFetching,
    fetchedData,
    error,
  };
}
