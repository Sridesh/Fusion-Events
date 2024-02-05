import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            Axios.get(url)
                .then(res => {
                    if(!res.ok){
                        throw Error('could not fetch the data  for that resource');
                    }
                    console.log(res);
                    return res.json();
                })
                .then((res) => {
                    setData(res.data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(err => {
                    setError(err.message);
                    setIsPending(false);
                })
                }, 1000);
    }, [url]);

    return {data, isPending, error};
}

export default useFetch;