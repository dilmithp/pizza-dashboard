import React, { createContext, useContext, useReducer, useEffect } from 'react';

const DashboardContext = createContext();

const initialState = {
    metrics: {
        queueLength: 0,
        waitTime: "0m 0s",
        abandonmentRate: 0,
        dailyFootfall: 0,
        serviceDelays: 0,
        slaCompliance: 0
    },
    selectedStore: 'Union Pl.',
    alerts: [],
    incidents: [],
    isLoading: true,
    error: null,
    lastUpdated: null
};

function dashboardReducer(state, action) {
    switch (action.type) {
        case 'SET_LOADING':
            return { ...state, isLoading: action.payload };
        case 'SET_ERROR':
            return { ...state, error: action.payload, isLoading: false };
        case 'UPDATE_METRICS':
            return {
                ...state,
                metrics: action.payload,
                lastUpdated: new Date(),
                isLoading: false
            };
        case 'SET_STORE':
            return { ...state, selectedStore: action.payload };
        case 'ADD_ALERT':
            return {
                ...state,
                alerts: [...state.alerts, action.payload]
            };
        case 'DISMISS_ALERT':
            return {
                ...state,
                alerts: state.alerts.filter(alert => alert.id !== action.payload)
            };
        default:
            return state;
    }
}

export const DashboardProvider = ({ children }) => {
    const [state, dispatch] = useReducer(dashboardReducer, initialState);

    useEffect(() => {
        // Simulate real-time data updates
        const interval = setInterval(() => {
            const newMetrics = {
                queueLength: Math.floor(Math.random() * 15) + 1,
                waitTime: `${Math.floor(Math.random() * 5) + 1}m ${Math.floor(Math.random() * 60)}s`,
                abandonmentRate: (Math.random() * 5 + 1).toFixed(1),
                dailyFootfall: Math.floor(Math.random() * 100) + 400,
                serviceDelays: Math.floor(Math.random() * 5),
                slaCompliance: Math.floor(Math.random() * 10) + 90
            };
            dispatch({ type: 'UPDATE_METRICS', payload: newMetrics });
        }, 30000);

        return () => clearInterval(interval);
    }, []);

    return (
        <DashboardContext.Provider value={{ state, dispatch }}>
            {children}
        </DashboardContext.Provider>
    );
};

export const useDashboard = () => {
    const context = useContext(DashboardContext);
    if (!context) {
        throw new Error('useDashboard must be used within a DashboardProvider');
    }
    return context;
};
