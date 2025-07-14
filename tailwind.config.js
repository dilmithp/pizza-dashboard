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
                // Brand colors for Pizza Hut
                'brand': {
                    'primary': '#915490',
                    'secondary': '#e31837',
                    'accent': '#ffc72c',
                    'dark': '#2d1b2e',
                    'light': '#f8f6f9'
                },
                // Dashboard colors
                'dashboard': {
                    'bg': '#fafbfc',
                    'surface': '#ffffff',
                    'border': '#e5e7eb',
                    'text-primary': '#1f2937',
                    'text-secondary': '#6b7280',
                    'text-muted': '#9ca3af'
                },
                // Status colors
                'status': {
                    'success': '#059669',
                    'warning': '#d97706',
                    'error': '#dc2626',
                    'info': '#2563eb',
                    'neutral': '#6b7280'
                },
                // Gradient colors
                'gradient': {
                    'primary-start': '#915490',
                    'primary-end': '#7c4a7f',
                    'secondary-start': '#e31837',
                    'secondary-end': '#c41230',
                    'accent-start': '#ffc72c',
                    'accent-end': '#f59e0b'
                }
            },
            fontFamily: {
                'sans': ['Inter', 'system-ui', 'sans-serif'],
                'display': ['Inter', 'system-ui', 'sans-serif'],
                'body': ['Inter', 'system-ui', 'sans-serif'],
                'mono': ['JetBrains Mono', 'monospace']
            },
            spacing: {
                '18': '4.5rem',
                '22': '5.5rem',
                '26': '6.5rem',
                '30': '7.5rem',
                '88': '22rem',
                '128': '32rem'
            },
            boxShadow: {
                'soft': '0 2px 15px 0 rgba(0, 0, 0, 0.08)',
                'medium': '0 4px 25px 0 rgba(0, 0, 0, 0.12)',
                'strong': '0 8px 35px 0 rgba(0, 0, 0, 0.15)',
                'brand': '0 4px 20px 0 rgba(145, 84, 144, 0.25)',
                'glow': '0 0 30px rgba(145, 84, 144, 0.3)',
                'inner-soft': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
                'card': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                'card-hover': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                'primary': '0 4px 14px 0 rgba(145, 84, 144, 0.25)',
                'primary-lg': '0 10px 25px -3px rgba(145, 84, 144, 0.3)'
            },
            borderRadius: {
                'xl': '0.875rem',
                '2xl': '1.125rem',
                '3xl': '1.375rem',
                '4xl': '1.625rem'
            },
            animation: {
                'fade-in': 'fadeIn 0.6s ease-out',
                'slide-up': 'slideUp 0.5s ease-out',
                'slide-down': 'slideDown 0.5s ease-out',
                'scale-in': 'scaleIn 0.4s ease-out',
                'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
                'float': 'float 3s ease-in-out infinite',
                'shimmer': 'shimmer 2s linear infinite',
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'bounce-subtle': 'bounce 2s infinite'
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
                }
            }
        },
    },
    // Add safelist to ensure classes are always included
    safelist: [
        'bg-primary-500',
        'bg-primary-600',
        'hover:bg-primary-600',
        'text-primary-500',
        'text-primary-600',
        'border-primary-500',
        'ring-primary-500',
        'w-4', 'h-4', 'w-5', 'h-5', 'w-6', 'h-6', 'w-8', 'h-8',
        'text-white', 'text-green-500', 'text-yellow-500', 'text-red-500',
        'bg-green-500', 'bg-yellow-500', 'bg-red-500',
        'border-l-green-500', 'border-l-yellow-500', 'border-l-red-500',
        'bg-green-50', 'bg-yellow-50', 'bg-red-50'
    ],
    plugins: [],
}
