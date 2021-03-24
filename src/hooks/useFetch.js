import { useState, useEffect } from "react";

const useFetch = (url, option) => {
  const [response, setResponse] = useState(null);
  const fetchData = async () => {
    const res = await fetch(url);
    const json = await res.json();
    setResponse(json[option]);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return response;
};

export default useFetch;
