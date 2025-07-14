import React, { useState } from 'react';
import {
    BellIcon,
    ExclamationTriangleIcon,
    InformationCircleIcon,
    CheckCircleIcon,
    XMarkIcon
} from '@heroicons/react/24/outline';

const AlertPanel = ({ alerts }) => {
    const [dismissedAlerts, setDismissedAlerts] = useState([]);

    const getAlertIcon = (type) => {
        switch (type) {
            case 'error':
                return <ExclamationTriangleIcon className="w-5 h-5 text-red-500" />;
            case 'warning':
                return <ExclamationTriangleIcon className="w-5 h-5 text-yellow-500" />;
            case 'info':
                return <InformationCircleIcon className="w-5 h-5 text-blue-500" />;
            case 'success':
                return <CheckCircleIcon className="w-5 h-5 text-green-500" />;
            default:
                return <BellIcon className="w-5 h-5 text-gray-500" />;
        }
    };

    const getAlertStyles = (type) => {
        switch (type) {
            case 'error':
                return 'bg-red-50 border-red-200 text-red-800';
            case 'warning':
                return 'bg-yellow-50 border-yellow-200 text-yellow-800';
            case 'info':
                return 'bg-blue-50 border-blue-200 text-blue-800';
            case 'success':
                return 'bg-green-50 border-green-200 text-green-800';
            default:
                return 'bg-gray-50 border-gray-200 text-gray-800';
        }
    };

    const dismissAlert = (alertId) => {
        setDismissedAlerts([...dismissedAlerts, alertId]);
    };

    const visibleAlerts = alerts.filter(alert => !dismissedAlerts.includes(alert.id));

    return (
        <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                    <div className="p-3 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl shadow-lg">
                        <BellIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-gray-900">System Alerts</h2>
                        <p className="text-sm text-gray-500">Real-time notifications and warnings</p>
                    </div>
                </div>

                <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500">
            {visibleAlerts.length} active
          </span>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
                </div>
            </div>

            <div className="space-y-4">
                {visibleAlerts.length === 0 ? (
                    <div className="text-center py-8">
                        <CheckCircleIcon className="w-12 h-12 text-green-500 mx-auto mb-4" />
                        <p className="text-gray-500">No active alerts</p>
                        <p className="text-sm text-gray-400">All systems operating normally</p>
                    </div>
                ) : (
                    visibleAlerts.map((alert) => (
                        <div
                            key={alert.id}
                            className={`p-4 rounded-xl border-l-4 transition-all duration-200 animate-fade-in ${getAlertStyles(alert.type)}`}
                        >
                            <div className="flex items-start justify-between">
                                <div className="flex items-start space-x-3">
                                    {getAlertIcon(alert.type)}
                                    <div className="flex-1">
                                        <p className="font-medium">{alert.message}</p>
                                        <p className="text-sm opacity-75 mt-1">{alert.time}</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => dismissAlert(alert.id)}
                                    className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                                >
                                    <XMarkIcon className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {visibleAlerts.length > 0 && (
                <div className="mt-6 flex justify-between items-center">
                    <button
                        onClick={() => setDismissedAlerts(alerts.map(a => a.id))}
                        className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm font-medium transition-colors duration-200"
                    >
                        Dismiss All
                    </button>
                    <button className="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg text-sm font-medium transition-colors duration-200">
                        View All Alerts
                    </button>
                </div>
            )}
        </div>
    );
};

export default AlertPanel;
