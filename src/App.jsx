import React from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import ErrorBoundary from './components/Common/ErrorBoundary';
import './styles/professional.css';

function App() {
    return (
        <ErrorBoundary>
            <div className="App">
                <Dashboard />
            </div>
        </ErrorBoundary>
    );
}

export default App;
