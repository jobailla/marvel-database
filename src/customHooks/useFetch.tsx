import { useState, useEffect } from 'react'
import axios, { AxiosResponse } from 'axios'

export const useFetch = (path: string, timeout?: number, limit?: string) => {
    const [data, setData] = useState<AxiosResponse | null>(null);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [loading, setLoading] = useState(true);

    const api = {
        baseUrl: 'http://gateway.marvel.com/v1/public/' + path,
        apikey: process.env.REACT_APP_MARVEL_API_KEY,
        hash: process.env.REACT_APP_MARVEL_API_HASH,
    }

  useEffect(() => {
        let unmounted = false;
        let source = axios.CancelToken.source();
        axios.get(api.baseUrl, {
            cancelToken: source.token,
            timeout: timeout,
            params: {
                ts: 1,
                apikey: api.apikey,
                hash: api.hash,
            }
        })
            .then(res => {
                if (!unmounted) {
                    setData(res.data);
                    setLoading(false);
                }
            }).catch((err) => {
            if (!unmounted) {
                setError(true);
                setErrorMessage(err.message);
                setLoading(false);
                if (axios.isCancel(err)) {
                    console.log(`request cancelled:${err.message}`);
                } else {
                    console.log(err.message);
                }
            }
        });
        return function () {
            unmounted = true;
            source.cancel("Cancelling in cleanup");
        };
    }, [api.baseUrl, timeout]);

    return {data, loading, error, errorMessage};
};