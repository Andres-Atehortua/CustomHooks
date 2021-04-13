import { useState, useRef, useEffect } from 'react';

const useFetch = (url) => {
  const isMounted = useRef(true);

  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    setState((state) => ({ ...state, loading: true }));

    fetch(url)
      .then((resp) => resp.json())
      .then(
        (data) =>
          isMounted.current && setState({ data, loading: false, error: null })
      )
      .catch(() =>
        setState({
          data: null,
          loading: false,
          error: 'No se ha podido realizar la petición',
        })
      );
  }, [url]);

  return state;
};

export default useFetch;
