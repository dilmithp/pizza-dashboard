import React from 'react';
import clsx from 'clsx';

const LoadingSpinner = ({ size = 'medium', className = '' }) => {
    const getSizeClass = (size) => {
        switch (size) {
            case 'small': return 'w-4 h-4';
            case 'large': return 'w-8 h-8';
            default: return 'w-6 h-6';
        }
    };

    return (
        <div className={clsx('flex items-center justify-center', className)}>
            <div
                className={clsx(
                    'animate-spin rounded-full border-2 border-gray-300 border-t-primary-500',
                    getSizeClass(size)
                )}
            />
        </div>
    );
};

export default LoadingSpinner;
