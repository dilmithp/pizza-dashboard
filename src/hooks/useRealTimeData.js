import { useState, useEffect } from 'react';

export const useRealTimeData = (initialData, updateInterval = 30000) => {
    const [data, setData] = useState(initialData);
    const [lastUpdated, setLastUpdated] = useState(new Date());
    const [isConnected, setIsConnected] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            // Simulate real-time data updates
            setData(prevData => ({
                ...prevData,
                queueLength: Math.floor(Math.random() * 15) + 1,
                waitTime: `${Math.floor(Math.random() * 5) + 1}m ${Math.floor(Math.random() * 60)}s`,
                lastUpdated: new Date().toISOString()
            }));
            setLastUpdated(new Date());
        }, updateInterval);

        return () => clearInterval(interval);
    }, [updateInterval]);

    return { data, lastUpdated, isConnected };
};
