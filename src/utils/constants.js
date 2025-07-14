export const QUEUE_STATUS = {
    OPTIMAL: { min: 0, max: 4, color: 'status-success', label: 'Optimal', bgColor: 'bg-green-50' },
    MODERATE: { min: 5, max: 8, color: 'status-warning', label: 'Moderate', bgColor: 'bg-yellow-50' },
    HIGH: { min: 9, max: Infinity, color: 'status-error', label: 'High', bgColor: 'bg-red-50' }
};

export const INCIDENT_TYPES = {
    CHECKOUT_FREEZE: { label: 'Checkout freeze', color: 'bg-red-100 text-red-800', icon: '🔧' },
    UNUSUAL_FOOTFALL: { label: 'Unusual footfall', color: 'bg-yellow-100 text-yellow-800', icon: '📈' },
    LARGE_GROUP_ORDER: { label: 'Large group order', color: 'bg-orange-100 text-orange-800', icon: '👥' },
    DEVICE_ISSUE: { label: 'Device issue', color: 'bg-blue-100 text-blue-800', icon: '⚙️' },
    PROMOTIONAL_RUSH: { label: 'Promotional rush', color: 'bg-purple-100 text-purple-800', icon: '🎉' }
};

export const SLA_THRESHOLD = 5; // minutes
export const UPDATE_INTERVAL = 30000; // 30 seconds
export const DATA_RETENTION = {
    RAW_FRAMES: '24h',
    DETECTIONS: '13 months'
};

export const CHART_COLORS = {
    primary: '#915490',
    secondary: '#22c55e',
    accent: '#3b82f6',
    warning: '#f59e0b',
    error: '#ef4444',
    success: '#10b981'
};
