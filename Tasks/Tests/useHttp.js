import { useState, useEffect, useCallback } from "react";

export default function useHttp(url) {
  // const [data, setData] = useState();
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState();

  async function sendHttpRequest(url, config) {
    const response = await fetch(url, config);

    const resData = await response.json();
    console.log(response, url);
    if (!response.ok) {
      throw new Error(
        response.statusText + " Erro " + response.status,
        // resData.message || "Something went wrong, failed to send request."
        console.log(Error, resData.error)
      );
    }
    return resData;
    // setData(resData);
  }
  // useEffect(() => {
  //   sendRequest();
  // }, []);

  return {
    // data,
    // error,
    sendHttpRequest,
  };
}
