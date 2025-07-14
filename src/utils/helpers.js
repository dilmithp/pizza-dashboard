import { QUEUE_STATUS } from './constants';

export const getQueueStatus = (queueLength) => {
    if (queueLength <= 4) return { ...QUEUE_STATUS.OPTIMAL, status: 'optimal' };
    if (queueLength <= 8) return { ...QUEUE_STATUS.MODERATE, status: 'moderate' };
    return { ...QUEUE_STATUS.HIGH, status: 'high' };
};

export const formatWaitTime = (minutes) => {
    const mins = Math.floor(minutes);
    const secs = Math.floor((minutes - mins) * 60);
    return `${mins}m ${secs}s`;
};

export const calculateSLACompliance = (incidents, totalCustomers) => {
    const compliantCustomers = totalCustomers - incidents;
    return Math.round((compliantCustomers / totalCustomers) * 100);
};

export const getIncidentPriority = (waitTime, queueLength) => {
    if (waitTime > 8 || queueLength > 15) return 'high';
    if (waitTime > 5 || queueLength > 10) return 'medium';
    return 'low';
};

export const formatNumber = (num) => {
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
};

export const getTrendIcon = (trend) => {
    switch (trend) {
        case 'increasing': return '↗️';
        case 'decreasing': return '↘️';
        case 'improving': return '📈';
        case 'stable': return '➡️';
        default: return '➡️';
    }
};

export const getStatusColor = (status) => {
    const colors = {
        online: 'text-status-success',
        offline: 'text-status-error',
        warning: 'text-status-warning',
        excellent: 'text-status-success',
        good: 'text-status-success',
        fair: 'text-status-warning',
        poor: 'text-status-error'
    };
    return colors[status] || 'text-status-neutral';
};
