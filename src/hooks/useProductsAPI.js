import axios from "axios";
import { useEffect, useRef, useState } from "react";

export default function useProductsAPI(initialUrl, initialData) {
  const [data, setData] = useState(initialData);
  const [query, setQuery] = useState("react");
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState(initialUrl);
  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);
  const handleFetchNews = useRef({});
  handleFetchNews.current = async () => {
    if (query.trim().length === 0) setQuery("");
    setLoading(true);
    try {
      const response = await axios.get(url);
      setData(response.data || []);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleFetchNews.current();
  }, [query]);

  return {
    data,
    setUrl,
    query,
    loading,
  };
}
