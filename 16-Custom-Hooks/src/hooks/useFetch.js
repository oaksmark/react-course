import { useEffect, useState } from 'react';

export function useFetch(fetchFn, initialValue) {
    const [isFetching, setIsFetching] = useState();
    const [error, setError] = useState();
    const [fetchedData, setFetchedData] = useState(initialValue);

     useEffect(() => {
        async function fetchData() {
          setIsFetching(true);
          try {
            const data = await fetchFn();
            setFetchedData(data);
          } catch (error) {
            setError({ massage: error.message || "Failed to fetch data." }); 
            // a msg pode ser passada via parâmetro ou genérica, como no caso acima
          }
    
          setIsFetching(false);
        }
    
        fetchData();
      }, [fetchFn]);

      return {
        isFetching,
        fetchedData,
        setFetchedData,
        error
      }
}