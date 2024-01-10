import { useState, useEffect } from "react";

const Usefetch = (url) => {

    const [data, setData] = useState(null);
    const [ispending, setIspending] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const abort = new AbortController();

            fetch("http://localhost:8000/users", { signal: abort.signal })
                .then(res => {
                    if (!res.ok) {
                        throw Error('could not fetch data');
                    }
                    return res.json();
                })
                .then(data => {
                    setData(data);
                    setIspending(false);
                    setError(null);
                })
                .catch(err => {
                    if (err.name === 'AbortError') {
                        console.log('fetch abort')
                    }
                    else {
                        setError(err.message);
                        setIspending(false);
                    }
                })
            return () => abort.abort();
    }, [url]);
    
    return { data, error, ispending };
}

export default Usefetch;