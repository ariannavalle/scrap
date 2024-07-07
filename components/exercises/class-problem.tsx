import React, { Component } from 'react';

interface State {
    data: any;
    loading: boolean;
    error: string | null;
}

class DataFetcher extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            data: null,
            loading: true,
            error: null,
        };
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        try {
            const response = await fetch('https://api.example.com/data');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            this.setState({ data, loading: false });
        } catch (error) {
            if (error instanceof Error) {
                this.setState({ error: error.message, loading: false });
            } else {
                this.setState({ error: String(error), loading: false });
            }
        }
    };

    render() {
        const { data, loading, error } = this.state;

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
}

export default DataFetcher;
