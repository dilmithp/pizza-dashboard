export const dummyData = {
    currentMetrics: {
        queueLength: 5,
        waitTime: "4m 15s",
        abandonmentRate: 3.1,
        dailyFootfall: 432,
        serviceDelays: 3,
        slaCompliance: 95,
        lastUpdated: new Date().toISOString()
    },

    stores: [
        {
            id: 1,
            name: "Union Pl.",
            location: "Colombo 02",
            status: "online",
            currentQueue: 5,
            capacity: 20
        },
        {
            id: 2,
            name: "Nugegoda",
            location: "Nugegoda",
            status: "online",
            currentQueue: 3,
            capacity: 18
        }
    ],

    queueData: Array.from({ length: 12 }, (_, i) => {
        const hour = 9 + i;
        const baseQueue = hour >= 12 && hour <= 14 ? 12 : hour >= 18 && hour <= 20 ? 15 : 5;
        return {
            time: `${hour.toString().padStart(2, '0')}:00`,
            queue: baseQueue + Math.floor(Math.random() * 5) - 2,
            predicted: baseQueue + Math.floor(Math.random() * 3) - 1,
            capacity: 20
        };
    })
};
