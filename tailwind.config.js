/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Primary brand colors based on #915490
                'primary': {
                    50: '#faf7fb',
                    100: '#f4eef6',
                    200: '#e9dded',
                    300: '#d7c0de',
                    400: '#c098ca',
                    500: '#915490',  // Main primary color
                    600: '#7d4a7e',
                    700: '#6a3e6b',
                    800: '#583459',
                    900: '#4a2d4b',
                    950: '#2f1c30'
                },
                // Complementary colors
                'secondary': {
                    50: '#f0fdf4',
                    100: '#dcfce7',
                    200: '#bbf7d0',
                    300: '#86efac',
                    400: '#4ade80',
                    500: '#22c55e',
                    600: '#16a34a',
                    700: '#15803d',
                    800: '#166534',
                    900: '#14532d'
                },
                // Status colors that complement primary
                'status': {
                    'success': '#10b981',
                    'warning': '#f59e0b',
                    'error': '#ef4444',
                    'info': '#3b82f6',
                    'neutral': '#6b7280'
                },
                // Background colors
                'background': {
                    'primary': '#fafafa',
                    'secondary': '#f8fafc',
                    'card': '#ffffff',
                    'muted': '#f1f5f9'
                }
            },
            fontFamily: {
                'sans': ['Inter', 'system-ui', 'sans-serif'],
                'display': ['Inter', 'system-ui', 'sans-serif']
            },
            // Enhanced grid system for dashboard layouts
            gridTemplateColumns: {
                '13': 'repeat(13, minmax(0, 1fr))',
                '14': 'repeat(14, minmax(0, 1fr))',
                '15': 'repeat(15, minmax(0, 1fr))',
                '16': 'repeat(16, minmax(0, 1fr))',
            },
            // Icon sizing utilities
            spacing: {
                '18': '4.5rem',
                '88': '22rem',
                '128': '32rem',
            },
            // Enhanced animations
            animation: {
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'bounce-subtle': 'bounce 2s infinite',
                'fade-in': 'fadeIn 0.5s ease-in-out',
                'slide-up': 'slideUp 0.3s ease-out',
                'scale-in': 'scaleIn 0.2s ease-out',
                'shimmer': 'shimmer 2s linear infinite',
                'spin-slow': 'spin 3s linear infinite',
                'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
                'wiggle': 'wiggle 1s ease-in-out infinite',
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
                scaleIn: {
                    '0%': { opacity: '0', transform: 'scale(0.95)' },
                    '100%': { opacity: '1', transform: 'scale(1)' }
                },
                shimmer: {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(100%)' }
                },
                wiggle: {
                    '0%, 100%': { transform: 'rotate(-3deg)' },
                    '50%': { transform: 'rotate(3deg)' }
                }
            },
            // Enhanced shadows
            boxShadow: {
                'card': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                'card-hover': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                'primary': '0 4px 14px 0 rgba(145, 84, 144, 0.25)',
                'primary-lg': '0 10px 25px -3px rgba(145, 84, 144, 0.3)',
                'inner-lg': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
                'glow': '0 0 20px rgba(145, 84, 144, 0.3)',
                'glow-lg': '0 0 40px rgba(145, 84, 144, 0.4)'
            },
            // Enhanced border radius
            borderRadius: {
                'xl': '0.75rem',
                '2xl': '1rem',
                '3xl': '1.5rem',
                '4xl': '2rem'
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
            }
        },
    },
    // Add safelist for dynamic classes to ensure they're always included
    safelist: [
        // Icon sizes
        'w-4', 'h-4', 'w-5', 'h-5', 'w-6', 'h-6', 'w-8', 'h-8', 'w-10', 'h-10', 'w-12', 'h-12',
        // Colors
        'text-white', 'text-green-500', 'text-yellow-500', 'text-red-500', 'text-blue-500',
        'bg-green-500', 'bg-yellow-500', 'bg-red-500', 'bg-blue-500',
        'border-l-green-500', 'border-l-yellow-500', 'border-l-red-500',
        'bg-green-50', 'bg-yellow-50', 'bg-red-50',
        'bg-green-100', 'bg-yellow-100', 'bg-red-100',
        'text-green-800', 'text-yellow-800', 'text-red-800',
        // Primary colors
        'bg-primary-500', 'bg-primary-600', 'text-primary-500', 'text-primary-600',
        'border-primary-500', 'ring-primary-500',
        // Flex utilities
        'flex-shrink-0',
        // Animation classes
        'animate-pulse', 'animate-fade-in', 'animate-slide-up'
    ],
    plugins: [],
}
