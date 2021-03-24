import { useState, useEffect } from "react";

const useFetchMovie = (url) => {
  const [response, setResponse] = useState(null);
  const fetchData = async () => {
    const res = await fetch(url);
    const json = await res.json();
    setResponse(json);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return response;
};

export default useFetchMovie;
