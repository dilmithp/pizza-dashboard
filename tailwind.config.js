/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Primary colors from your palette
                'primary': {
                    50: '#f3f1ff',
                    100: '#ebe5ff',
                    200: '#d9ceff',
                    300: '#bea6ff',
                    400: '#9f75ff',
                    500: '#8b5cf6',  // Main purple from your palette
                    600: '#7c3aed',
                    700: '#6d28d9',
                    800: '#5b21b6',
                    900: '#4c1d95',
                    950: '#2e1065'
                },
                // Secondary colors from your palette
                'secondary': {
                    50: '#f0f9ff',
                    100: '#e0f2fe',
                    200: '#bae6fd',
                    300: '#7dd3fc',
                    400: '#38bdf8',
                    500: '#0ea5e9',  // Blue from your palette
                    600: '#0284c7',
                    700: '#0369a1',
                    800: '#075985',
                    900: '#0c4a6e'
                },
                // Accent colors from your palette
                'accent': {
                    50: '#fdf4ff',
                    100: '#fae8ff',
                    200: '#f5d0fe',
                    300: '#f0abfc',
                    400: '#e879f9',  // Pink from your palette
                    500: '#d946ef',
                    600: '#c026d3',
                    700: '#a21caf',
                    800: '#86198f',
                    900: '#701a75'
                },
                // Status colors
                'status': {
                    'success': '#10b981',
                    'warning': '#f59e0b',
                    'error': '#ef4444',
                    'info': '#3b82f6',
                    'neutral': '#6b7280'
                },
                // Dashboard specific colors
                'dashboard': {
                    'bg': '#fafbfc',
                    'surface': '#ffffff',
                    'border': '#e5e7eb',
                    'text-primary': '#1f2937',
                    'text-secondary': '#6b7280',
                    'text-muted': '#9ca3af'
                },
                // Background colors
                'background': {
                    'primary': '#fafafa',
                    'secondary': '#f8fafc',
                    'card': '#ffffff',
                    'muted': '#f1f5f9'
                }
            },
            // Professional Typography
            fontFamily: {
                'sans': ['Inter', 'system-ui', 'sans-serif'],
                'display': ['Inter', 'system-ui', 'sans-serif'],
                'body': ['Inter', 'system-ui', 'sans-serif'],
                'mono': ['JetBrains Mono', 'Fira Code', 'monospace']
            },
            // Enhanced grid system for dashboard layouts
            gridTemplateColumns: {
                '13': 'repeat(13, minmax(0, 1fr))',
                '14': 'repeat(14, minmax(0, 1fr))',
                '15': 'repeat(15, minmax(0, 1fr))',
                '16': 'repeat(16, minmax(0, 1fr))',
            },
            // Enhanced spacing
            spacing: {
                '18': '4.5rem',
                '22': '5.5rem',
                '26': '6.5rem',
                '30': '7.5rem',
                '88': '22rem',
                '128': '32rem'
            },
            // Professional animations
            animation: {
                'fade-in': 'fadeIn 0.6s ease-out',
                'slide-up': 'slideUp 0.5s ease-out',
                'slide-down': 'slideDown 0.5s ease-out',
                'scale-in': 'scaleIn 0.4s ease-out',
                'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'bounce-subtle': 'bounce 2s infinite',
                'float': 'float 3s ease-in-out infinite',
                'shimmer': 'shimmer 2s linear infinite',
                'spin-slow': 'spin 3s linear infinite',
                'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
                'wiggle': 'wiggle 1s ease-in-out infinite',
                'fade-in-up': 'fadeInUp 0.6s ease-out',
                'data-update': 'dataUpdate 0.5s ease-in-out'
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' }
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' }
                },
                slideDown: {
                    '0%': { opacity: '0', transform: 'translateY(-20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' }
                },
                scaleIn: {
                    '0%': { opacity: '0', transform: 'scale(0.95)' },
                    '100%': { opacity: '1', transform: 'scale(1)' }
                },
                pulseSoft: {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0.7' }
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-5px)' }
                },
                shimmer: {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(100%)' }
                },
                wiggle: {
                    '0%, 100%': { transform: 'rotate(-3deg)' },
                    '50%': { transform: 'rotate(3deg)' }
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' }
                },
                dataUpdate: {
                    '0%': { opacity: '0.7', transform: 'scale(0.98)' },
                    '50%': { opacity: '0.9', transform: 'scale(1.01)' },
                    '100%': { opacity: '1', transform: 'scale(1)' }
                }
            },
            // Enhanced shadows
            boxShadow: {
                'soft': '0 2px 15px 0 rgba(0, 0, 0, 0.08)',
                'medium': '0 4px 25px 0 rgba(0, 0, 0, 0.12)',
                'strong': '0 8px 35px 0 rgba(0, 0, 0, 0.15)',
                'card': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                'card-hover': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                'primary': '0 4px 20px 0 rgba(139, 92, 246, 0.25)',
                'primary-lg': '0 10px 25px -3px rgba(139, 92, 246, 0.3)',
                'secondary': '0 4px 20px 0 rgba(14, 165, 233, 0.25)',
                'accent': '0 4px 20px 0 rgba(232, 121, 249, 0.25)',
                'brand': '0 4px 20px 0 rgba(139, 92, 246, 0.25)',
                'inner-soft': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
                'glow': '0 0 30px rgba(139, 92, 246, 0.3)',
                'glow-lg': '0 0 40px rgba(139, 92, 246, 0.4)'
            },
            // Enhanced border radius
            borderRadius: {
                'xl': '0.875rem',
                '2xl': '1.125rem',
                '3xl': '1.375rem',
                '4xl': '1.625rem'
            },
            // Backdrop blur utilities
            backdropBlur: {
                'xs': '2px',
            },
            // Custom z-index values
            zIndex: {
                '60': '60',
                '70': '70',
                '80': '80',
                '90': '90',
                '100': '100',
            },
            // Custom aspect ratios
            aspectRatio: {
                '4/3': '4 / 3',
                '3/2': '3 / 2',
                '2/3': '2 / 3',
                '9/16': '9 / 16',
            },
            // Custom line heights
            lineHeight: {
                '12': '3rem',
                '16': '4rem',
            },
            // Custom letter spacing
            letterSpacing: {
                'widest': '0.1em',
            },
            // Custom min/max widths
            minWidth: {
                '0': '0',
                '1/4': '25%',
                '1/2': '50%',
                '3/4': '75%',
                'full': '100%',
            },
            maxWidth: {
                '8xl': '88rem',
                '9xl': '96rem',
            },
            // Custom min/max heights
            minHeight: {
                '0': '0',
                '1/4': '25vh',
                '1/2': '50vh',
                '3/4': '75vh',
                'full': '100vh',
            },
            maxHeight: {
                '128': '32rem',
            },
            // Custom transitions
            transitionProperty: {
                'height': 'height',
                'spacing': 'margin, padding',
            },
            // Custom transforms
            scale: {
                '102': '1.02',
                '103': '1.03',
            },
            // Custom rotate
            rotate: {
                '1': '1deg',
                '2': '2deg',
                '3': '3deg',
            }
        },
    },
    // Add safelist for dynamic classes to ensure they're always included
    safelist: [
        // Icon sizes
        'w-4', 'h-4', 'w-5', 'h-5', 'w-6', 'h-6', 'w-8', 'h-8', 'w-10', 'h-10', 'w-12', 'h-12', 'w-16', 'h-16',
        // Primary colors
        'bg-primary-50', 'bg-primary-100', 'bg-primary-200', 'bg-primary-300', 'bg-primary-400', 'bg-primary-500', 'bg-primary-600', 'bg-primary-700', 'bg-primary-800', 'bg-primary-900',
        'text-primary-50', 'text-primary-100', 'text-primary-200', 'text-primary-300', 'text-primary-400', 'text-primary-500', 'text-primary-600', 'text-primary-700', 'text-primary-800', 'text-primary-900',
        'border-primary-50', 'border-primary-100', 'border-primary-200', 'border-primary-300', 'border-primary-400', 'border-primary-500', 'border-primary-600', 'border-primary-700', 'border-primary-800', 'border-primary-900',
        // Secondary colors
        'bg-secondary-50', 'bg-secondary-100', 'bg-secondary-200', 'bg-secondary-300', 'bg-secondary-400', 'bg-secondary-500', 'bg-secondary-600', 'bg-secondary-700', 'bg-secondary-800', 'bg-secondary-900',
        'text-secondary-50', 'text-secondary-100', 'text-secondary-200', 'text-secondary-300', 'text-secondary-400', 'text-secondary-500', 'text-secondary-600', 'text-secondary-700', 'text-secondary-800', 'text-secondary-900',
        'border-secondary-50', 'border-secondary-100', 'border-secondary-200', 'border-secondary-300', 'border-secondary-400', 'border-secondary-500', 'border-secondary-600', 'border-secondary-700', 'border-secondary-800', 'border-secondary-900',
        // Accent colors
        'bg-accent-50', 'bg-accent-100', 'bg-accent-200', 'bg-accent-300', 'bg-accent-400', 'bg-accent-500', 'bg-accent-600', 'bg-accent-700', 'bg-accent-800', 'bg-accent-900',
        'text-accent-50', 'text-accent-100', 'text-accent-200', 'text-accent-300', 'text-accent-400', 'text-accent-500', 'text-accent-600', 'text-accent-700', 'text-accent-800', 'text-accent-900',
        'border-accent-50', 'border-accent-100', 'border-accent-200', 'border-accent-300', 'border-accent-400', 'border-accent-500', 'border-accent-600', 'border-accent-700', 'border-accent-800', 'border-accent-900',
        // Status colors
        'bg-status-success', 'bg-status-warning', 'bg-status-error', 'bg-status-info', 'bg-status-neutral',
        'text-status-success', 'text-status-warning', 'text-status-error', 'text-status-info', 'text-status-neutral',
        'border-status-success', 'border-status-warning', 'border-status-error', 'border-status-info', 'border-status-neutral',
        // Common colors
        'text-white', 'text-black', 'text-gray-50', 'text-gray-100', 'text-gray-200', 'text-gray-300', 'text-gray-400', 'text-gray-500', 'text-gray-600', 'text-gray-700', 'text-gray-800', 'text-gray-900',
        'bg-white', 'bg-black', 'bg-gray-50', 'bg-gray-100', 'bg-gray-200', 'bg-gray-300', 'bg-gray-400', 'bg-gray-500', 'bg-gray-600', 'bg-gray-700', 'bg-gray-800', 'bg-gray-900',
        'bg-green-50', 'bg-green-100', 'bg-green-500', 'bg-green-600', 'text-green-50', 'text-green-100', 'text-green-500', 'text-green-600', 'text-green-700', 'text-green-800',
        'bg-yellow-50', 'bg-yellow-100', 'bg-yellow-500', 'bg-yellow-600', 'text-yellow-50', 'text-yellow-100', 'text-yellow-500', 'text-yellow-600', 'text-yellow-700', 'text-yellow-800',
        'bg-red-50', 'bg-red-100', 'bg-red-500', 'bg-red-600', 'text-red-50', 'text-red-100', 'text-red-500', 'text-red-600', 'text-red-700', 'text-red-800',
        'bg-blue-50', 'bg-blue-100', 'bg-blue-500', 'bg-blue-600', 'text-blue-50', 'text-blue-100', 'text-blue-500', 'text-blue-600', 'text-blue-700', 'text-blue-800',
        // Border colors
        'border-l-green-500', 'border-l-yellow-500', 'border-l-red-500', 'border-l-blue-500', 'border-l-primary-500', 'border-l-secondary-500', 'border-l-accent-500',
        // Hover states
        'hover:bg-primary-50', 'hover:bg-primary-100', 'hover:bg-primary-500', 'hover:bg-primary-600',
        'hover:bg-secondary-50', 'hover:bg-secondary-100', 'hover:bg-secondary-500', 'hover:bg-secondary-600',
        'hover:bg-accent-50', 'hover:bg-accent-100', 'hover:bg-accent-500', 'hover:bg-accent-600',
        'hover:text-primary-500', 'hover:text-primary-600', 'hover:text-secondary-500', 'hover:text-secondary-600',
        // Focus states
        'focus:ring-primary-500', 'focus:ring-secondary-500', 'focus:ring-accent-500',
        'focus:border-primary-500', 'focus:border-secondary-500', 'focus:border-accent-500',
        // Flex utilities
        'flex-shrink-0',
        // Animation classes
        'animate-pulse', 'animate-fade-in', 'animate-slide-up', 'animate-slide-down', 'animate-scale-in', 'animate-pulse-soft', 'animate-float', 'animate-shimmer', 'animate-fade-in-up', 'animate-data-update',
        // Gradient directions
        'from-primary-500', 'to-primary-600', 'from-secondary-500', 'to-secondary-600', 'from-accent-400', 'to-accent-500',
        'from-primary-50', 'to-primary-100', 'from-secondary-50', 'to-secondary-100', 'from-accent-50', 'to-accent-100',
        // Shadow utilities
        'shadow-soft', 'shadow-medium', 'shadow-strong', 'shadow-primary', 'shadow-secondary', 'shadow-accent', 'shadow-brand', 'shadow-glow'
    ],
    plugins: [],
}
