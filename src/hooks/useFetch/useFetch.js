import {useState, useEffect} from 'react';
import axios from 'axios';

const useFetch = url => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const fetchData = async () => {
    try {
      const res = await axios.get(url);
      setData(res.data);
      setLoading(false);
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return {error, loading, data};
};

export default useFetch;
