import { useEffect } from "react";
import { useState } from "react";

function useFetch(endPoint) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      try {
        const response = await fetch(endPoint);
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [endPoint]);

  return [loading, data, error];
}

export default useFetch;
