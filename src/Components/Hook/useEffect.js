import { useState, useEffect } from 'react';

export function useFetch(url) {
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        fetch(url)
            .then((res) => res.json())
            .then((data) => setData(data.results))
            .catch((err)=> setError(true))
            .finally(()=> setLoading(false))
    }, []);

    return [ data, error, loading ];
}