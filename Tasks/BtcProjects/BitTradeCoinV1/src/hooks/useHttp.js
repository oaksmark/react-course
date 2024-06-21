import { useState, useEffect, useCallback } from "react";

async function sendHttpRequest(url) {
  const response = await fetch(url);

  const resData = await response.json();
  console.log(response);
  if (!response.ok) {
    throw new Error(
      response.statusText + " Erro " + response.status,
      // resData.message || "Something went wrong, failed to send request."
      console.log(Error)
    );
  }
  return resData;
}

export default function useHttp(url, config) {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  const sendRequest = useCallback(
    async function sendRequest() {
      // setIsLoading(true);
      try {
        const resData = await sendHttpRequest(url);
        setData(resData);
      } catch (error) {
        setError(error.message);
        // console.log(error.message)
      }
      setIsLoading(false);
    },
    []
  );

  useEffect(() => {
      sendRequest();
    
  }, []);

  return {
    data,
    isLoading,
    error,
    sendRequest
  };
}
