import axios from 'axios';
import { useEffect, useState } from 'react';

interface Iapi {
    baseUrl: string,
    ts: string,
    apikey: string,
    hash: string,
}

export const useFetch = (path: string, parseData: (data: any) => any, timeout?: number) => {
    const [data, setData] = useState<unknown[]>([]);
    const [errorMessage, setErrorMessage] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [first, setFirst] = useState(true);
    const [offset, setOffset] = useState(0);
    const [total, setTotal] = useState(0);
    const [index, setIndex] = useState(0);
    const limit = 100;

    const api: Iapi = {
        baseUrl: 'http://gateway.marvel.com/v1/public/' + path,
        ts: process.env.REACT_APP_MARVEL_API_TS || '',
        apikey: process.env.REACT_APP_MARVEL_API_KEY || '',
        hash: process.env.REACT_APP_MARVEL_API_HASH || '',
    }

    useEffect(() => {
        let unmounted = false;
        let source = axios.CancelToken.source();
        let datas: any = new Array(total);
        let storageData = localStorage.getItem(path);
        let parseDataLength = 0;
        if (storageData) {
            const parsedData = JSON.parse(storageData.toString());
            parseDataLength = parsedData.length;
        }

        if (!datas[index] && index <= total) {
            if ((parseDataLength <= (total * limit)) || first) {
                setFirst(false);
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
                        setTotal(Math.ceil(res.data.data.total / limit) - 1);
                        datas[index] = res.data.data.results;
                        setIndex(index + 1);
                        setOffset(offset + limit);
                        if (!unmounted) {
                            setData((arr: any) => [...arr, ...datas[index]]);
                            localStorage.setItem(path + '_' + index, JSON.stringify(parseData(datas[index])));
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
            }
            return (() => {
                unmounted = true;
                source.cancel("Cancelling in cleanup");
            });
        }
    }, [data, api.baseUrl, api.ts, api.apikey, api.hash, timeout, path, limit, offset, total, index, first, parseData]);

    return { data, error, errorMessage, loading, total, index };
};

