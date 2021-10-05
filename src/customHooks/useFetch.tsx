import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';

interface Iapi {
    baseUrl: string,
    ts: string,
    apikey: string,
    hash: string,
}

export const useFetch = (path: string, timeout?: number) => {
    const [data, setData] = useState<any[]>([]);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [loading, setLoading] = useState(true);

    const limit = 100;
    const [offset, setOffset] = useState(0);

    const [total, setTotal] = useState(0);
    const [index, setIndex] = useState(0);


    const api: Iapi = {
        baseUrl: 'http://gateway.marvel.com/v1/public/' + path,
        ts: process.env.REACT_APP_MARVEL_API_TS || '',
        apikey: process.env.REACT_APP_MARVEL_API_KEY || '',
        hash: process.env.REACT_APP_MARVEL_API_HASH || '',
    }

    useEffect(() => {
        let unmounted = false;
        let source = axios.CancelToken.source();
        let characters: any = new Array(total);
        if (!characters[index] && index <= total) {
            axios.get(api.baseUrl, {
                cancelToken: source.token,
                timeout: timeout,
                params: {
                    ts: api.ts,
                    apikey: api.apikey,
                    hash: api.hash,
                    limit: limit,
                    offset: offset
                }
            })
                .then(res => {
                    setTotal(Math.ceil(res.data.data.total / limit));
                    characters[index] = res.data.data.results;
                    setIndex(index + 1);
                    setOffset(offset + limit);
                    if (!unmounted) {
                        setData((arr: any) => [...arr, ...characters[index]]);
                        setLoading(false);
                    }
                })
                .catch((err) => {
                    if (!unmounted) {
                        setError(true);
                        setErrorMessage(err.message);
                        setLoading(false);
                        if (axios.isCancel(err)) {
                            console.log(`request cancelled:${err.message}`);
                        } else {
                            console.log("another error happened:" + err.message);
                        }
                    }
                });
            return (() => {
                unmounted = true;
                source.cancel("Cancelling in cleanup");
            });
        }
    }, [data, api.baseUrl, api.ts, api.apikey, api.hash, timeout, limit, offset]);

    return { data, error, errorMessage, loading, total };
};

