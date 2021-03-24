import { useState, useEffect } from "react";

const useFetchMovieVideo = (url) => {
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

export default useFetchMovieVideo;
