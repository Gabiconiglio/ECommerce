import { useState, useEffect } from 'react';

export function useFetchDep(url,key) {
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        fetch(url)
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((err)=> setError(true))
            .finally(()=> setLoading(false))
    }, [key]);
    return [ data, error, loading ];
}