import React from 'react';

const StatusIndicator = ({ status, size = 'medium', showLabel = false }) => {
    const getStatusConfig = (status) => {
        switch (status) {
            case 'success':
            case 'online':
                return { color: 'bg-green-500', label: 'Good', textColor: 'text-green-600' };
            case 'warning':
                return { color: 'bg-yellow-500', label: 'Warning', textColor: 'text-yellow-600' };
            case 'error':
                return { color: 'bg-red-500', label: 'Error', textColor: 'text-red-600' };
            default:
                return { color: 'bg-gray-500', label: 'Unknown', textColor: 'text-gray-600' };
        }
    };

    const config = getStatusConfig(status);
    const sizeClass = size === 'small' ? 'w-2 h-2' : size === 'large' ? 'w-4 h-4' : 'w-3 h-3';

    return (
        <div className="flex items-center gap-2">
            <div className={`${config.color} ${sizeClass} rounded-full`} />
            {showLabel && <span className={`text-sm font-medium ${config.textColor}`}>{config.label}</span>}
        </div>
    );
};

export default StatusIndicator;
