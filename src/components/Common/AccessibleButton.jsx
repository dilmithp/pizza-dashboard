import React from 'react';

const AccessibleButton = ({
                              children,
                              onClick,
                              variant = 'primary',
                              size = 'medium',
                              disabled = false,
                              ariaLabel,
                              ariaDescribedBy,
                              ...props
                          }) => {
    const baseClasses = "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variantClasses = {
        primary: "bg-primary-500 hover:bg-primary-600 text-white focus:ring-primary-500",
        secondary: "bg-gray-100 hover:bg-gray-200 text-gray-700 focus:ring-gray-500",
        danger: "bg-red-500 hover:bg-red-600 text-white focus:ring-red-500"
    };

    const sizeClasses = {
        small: "px-3 py-1.5 text-sm",
        medium: "px-4 py-2 text-base",
        large: "px-6 py-3 text-lg"
    };

    const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "";

    return (
        <button
            className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses}`}
            onClick={onClick}
            disabled={disabled}
            aria-label={ariaLabel}
            aria-describedby={ariaDescribedBy}
            role="button"
            {...props}
        >
            {children}
        </button>
    );
};

export default AccessibleButton;
