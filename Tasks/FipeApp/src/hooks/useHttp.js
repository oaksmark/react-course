import { useState, useCallback } from "react";



export default function useHttp(url) {
  // const [data, setData] = useState();
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState();

  const sendHttpRequest = async (url, config) => {
  const response = await fetch(url, config);

  const resData = await response.json();
  if (!response.ok) {
    throw new Error(
      response.statusText + " Erro " + response.status,
      // resData.message || "Something went wrong, failed to send request."
    );
  }
  return resData;
};

  return {
    // data,
    // isLoading,
    // error,
    sendHttpRequest,
  };
}