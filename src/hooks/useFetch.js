import { useEffect, useState } from "react";

// Custom hook to fetch data for any end point
// Note: Return new data only if endPoint changes, other wise return same previous data
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

  // Return loading data and error state to have access of it inside component
  return [loading, data, error];
}

export default useFetch;
