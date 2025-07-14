import React from 'react';
import clsx from 'clsx';
import LoadingSpinner from './LoadingSpinner';

const Button = ({
                    children,
                    variant = 'primary',
                    size = 'medium',
                    loading = false,
                    disabled = false,
                    className = '',
                    ...props
                }) => {
    const getVariantClass = (variant) => {
        switch (variant) {
            case 'primary':
                return 'btn-primary';
            case 'secondary':
                return 'btn-secondary';
            case 'outline':
                return 'border-2 border-primary-500 text-primary-500 hover:bg-primary-50 bg-transparent';
            case 'ghost':
                return 'text-primary-500 hover:bg-primary-50 bg-transparent';
            default:
                return 'btn-primary';
        }
    };

    const getSizeClass = (size) => {
        switch (size) {
            case 'small': return 'px-3 py-1.5 text-sm';
            case 'large': return 'px-8 py-4 text-lg';
            default: return 'px-6 py-3';
        }
    };

    return (
        <button
            className={clsx(
                'inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
                getVariantClass(variant),
                getSizeClass(size),
                (disabled || loading) && 'opacity-50 cursor-not-allowed',
                className
            )}
            disabled={disabled || loading}
            {...props}
        >
            {loading && <LoadingSpinner size="small" />}
            {children}
        </button>
    );
};

export default Button;
