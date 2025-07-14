export const storeSpecificData = {
    "Union Pl.": {
        currentMetrics: {
            queueLength: 8,
            waitTime: "5m 20s",
            abandonmentRate: 4.2,
            dailyFootfall: 485,
            serviceDelays: 4,
            slaCompliance: 92,
            lastUpdated: new Date().toISOString()
        },
        previousMetrics: {
            queueLength: 10,
            waitTime: "6m 10s",
            abandonmentRate: 6.8,
            dailyFootfall: 420,
            serviceDelays: 8,
            slaCompliance: 85
        },
        targets: {
            queueLength: 8,
            waitTime: 300,
            abandonmentRate: 5.0,
            dailyFootfall: 500,
            serviceDelays: 5,
            slaCompliance: 95
        },
        alerts: [
            { id: 1, type: 'warning', message: 'Queue length approaching threshold at Union Pl.', time: '2 min ago' },
            { id: 2, type: 'info', message: 'Peak hour starting soon - lunch rush expected', time: '5 min ago' },
            { id: 3, type: 'error', message: 'Service delay detected - checkout system slow', time: '8 min ago' }
        ],
        peakHours: {
            weekdays: { time: "12:15-13:45", avgQueue: 14, type: "Lunch rush", intensity: "very-high" },
            friSat: { time: "18:10-20:05", avgQueue: 18, type: "Dinner peak", intensity: "extreme" },
            weekends: { time: "11:30-14:00", avgQueue: 15, type: "Family midday", intensity: "high" }
        }
    },

    "Nugegoda": {
        currentMetrics: {
            queueLength: 3,
            waitTime: "2m 45s",
            abandonmentRate: 2.1,
            dailyFootfall: 320,
            serviceDelays: 1,
            slaCompliance: 98,
            lastUpdated: new Date().toISOString()
        },
        previousMetrics: {
            queueLength: 5,
            waitTime: "3m 30s",
            abandonmentRate: 3.5,
            dailyFootfall: 290,
            serviceDelays: 3,
            slaCompliance: 94
        },
        targets: {
            queueLength: 6,
            waitTime: 240,
            abandonmentRate: 3.0,
            dailyFootfall: 350,
            serviceDelays: 3,
            slaCompliance: 95
        },
        alerts: [
            { id: 4, type: 'success', message: 'All systems operating normally at Nugegoda', time: '1 min ago' },
            { id: 5, type: 'info', message: 'Staff shift change completed successfully', time: '15 min ago' }
        ],
        peakHours: {
            weekdays: { time: "12:00-13:30", avgQueue: 8, type: "Lunch rush", intensity: "medium" },
            friSat: { time: "18:30-20:00", avgQueue: 12, type: "Dinner peak", intensity: "high" },
            weekends: { time: "12:00-14:30", avgQueue: 10, type: "Family midday", intensity: "medium" }
        }
    }
};

export const generateChartData = (storeName) => {
    const baseMultiplier = storeName === "Union Pl." ? 1.5 : 1.0;

    return Array.from({ length: 24 }, (_, i) => {
        const hour = i;
        const isLunchRush = hour >= 12 && hour <= 14;
        const isDinnerRush = hour >= 18 && hour <= 20;
        const baseQueue = (isLunchRush ? 12 : isDinnerRush ? 15 : 5) * baseMultiplier;

        return {
            time: `${hour.toString().padStart(2, '0')}:00`,
            queue: Math.max(0, Math.round(baseQueue + Math.floor(Math.random() * 6) - 3)),
            predicted: Math.max(0, Math.round(baseQueue + Math.floor(Math.random() * 4) - 2)),
            capacity: storeName === "Union Pl." ? 25 : 18,
            waitTime: Math.max(1, (baseQueue / 4) + Math.random() * 2),
            abandonment: Math.max(0, Math.random() * 4)
        };
    });
};

export const stores = [
    {
        id: 1,
        name: "Union Pl.",
        location: "Colombo 02",
        status: "online",
        performance: 'excellent',
        manager: 'John Silva',
        capacity: 25
    },
    {
        id: 2,
        name: "Nugegoda",
        location: "Nugegoda",
        status: "online",
        performance: 'good',
        manager: 'Sarah Fernando',
        capacity: 18
    }
];
