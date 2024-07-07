import React, {Component, useEffect, useState} from 'react';

interface State {
    data: any;
    loading: boolean;
    error: string | null;
}

const DataFetcher = () => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string|null>(null)

    useEffect(()=>{
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const response = await fetch('https://api.example.com/data');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setData(data);
            setLoading(false);
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message)
                setLoading(false)
            } else {
                setError(String(error))
                setLoading(false)
            }
        }
    };

        if (loading) {
            return <div>Loading...</div>;
        }

        if (error) {
            return <div>Error: {error}</div>;
        }

        return (
            <div>
                <h1>Data:</h1>
                <pre>{JSON.stringify(data, null, 2)}</pre>
            </div>
        );

}

export default DataFetcher;
