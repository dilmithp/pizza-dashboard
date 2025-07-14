/* ------------------------------------------------------------------
   ❶  STORE–SPECIFIC METRICS
------------------------------------------------------------------- */
export const storeSpecificData = {
    /* ──────────────────────────  UNION PL. ───────────────────────── */
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
            { id: 1, type: "warning",  message: "Queue length approaching threshold at Union Pl.", time: "2 min ago" },
            { id: 2, type: "info",     message: "Peak hour starting soon – lunch rush expected", time: "5 min ago" },
            { id: 3, type: "error",    message: "Service delay detected – checkout system slow", time: "8 min ago" }
        ],
        peakHours: {
            weekdays: { time: "12:15 – 13:45", avgQueue: 14, type: "Lunch rush",    intensity: "very-high" },
            friSat:   { time: "18:10 – 20:05", avgQueue: 18, type: "Dinner peak",   intensity: "extreme"   },
            weekends: { time: "11:30 – 14:00", avgQueue: 15, type: "Family midday", intensity: "high"      }
        }
    },

    /* ──────────────────────────  NUGEGODA ────────────────────────── */
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
            { id: 4, type: "success", message: "All systems operating normally at Nugegoda",      time: "1 min ago"  },
            { id: 5, type: "info",    message: "Staff shift change completed successfully",       time: "15 min ago" }
        ],
        peakHours: {
            weekdays: { time: "12:00 – 13:30", avgQueue: 8,  type: "Lunch rush",    intensity: "medium" },
            friSat:   { time: "18:30 – 20:00", avgQueue: 12, type: "Dinner peak",   intensity: "high"   },
            weekends: { time: "12:00 – 14:30", avgQueue: 10, type: "Family midday", intensity: "medium" }
        }
    },

    /* ───────────────────────  KANDY CITY CENTRE ──────────────────── */
    "Kandy City Centre": {
        currentMetrics: {
            queueLength: 6,
            waitTime: "4m 10s",
            abandonmentRate: 3.6,
            dailyFootfall: 410,
            serviceDelays: 2,
            slaCompliance: 94,
            lastUpdated: new Date().toISOString()
        },
        previousMetrics: {
            queueLength: 7,
            waitTime: "4m 40s",
            abandonmentRate: 4.1,
            dailyFootfall: 390,
            serviceDelays: 4,
            slaCompliance: 90
        },
        targets: {
            queueLength: 7,
            waitTime: 270,
            abandonmentRate: 4.0,
            dailyFootfall: 430,
            serviceDelays: 3,
            slaCompliance: 95
        },
        alerts: [
            { id: 6, type: "warning", message: "Unexpected tourist group arrived – monitoring queue", time: "3 min ago" }
        ],
        peakHours: {
            weekdays: { time: "12:00 – 13:30", avgQueue: 11, type: "Lunch rush",    intensity: "high"   },
            friSat:   { time: "17:45 – 19:45", avgQueue: 14, type: "Dinner peak",   intensity: "high"   },
            weekends: { time: "13:00 – 15:30", avgQueue: 12, type: "Afternoon rush",intensity: "medium" }
        }
    },

    /* ───────────────────────────  GALLE FORT ─────────────────────── */
    "Galle Fort": {
        currentMetrics: {
            queueLength: 4,
            waitTime: "3m 30s",
            abandonmentRate: 2.8,
            dailyFootfall: 350,
            serviceDelays: 1,
            slaCompliance: 97,
            lastUpdated: new Date().toISOString()
        },
        previousMetrics: {
            queueLength: 5,
            waitTime: "3m 55s",
            abandonmentRate: 3.1,
            dailyFootfall: 330,
            serviceDelays: 2,
            slaCompliance: 93
        },
        targets: {
            queueLength: 6,
            waitTime: 240,
            abandonmentRate: 3.0,
            dailyFootfall: 380,
            serviceDelays: 2,
            slaCompliance: 95
        },
        alerts: [
            { id: 7, type: "info", message: "Cruise-ship arrival expected – higher lunch traffic",  time: "10 min ago" }
        ],
        peakHours: {
            weekdays: { time: "13:00 – 14:00", avgQueue: 9,  type: "Lunch rush",    intensity: "medium" },
            friSat:   { time: "19:00 – 20:30", avgQueue: 11, type: "Dinner peak",   intensity: "medium" },
            weekends: { time: "12:00 – 14:30", avgQueue: 9,  type: "Family midday", intensity: "medium" }
        }
    }
};

/* ------------------------------------------------------------------
   ❷  DYNAMIC CHART DATA GENERATOR
------------------------------------------------------------------- */
export const generateChartData = (storeName) => {
    const multipliers = {
        "Union Pl.": 1.5,
        "Nugegoda": 1.0,
        "Kandy City Centre": 1.2,
        "Galle Fort": 1.1
    };
    const baseMultiplier = multipliers[storeName] ?? 1.0;

    const capacities = {
        "Union Pl.": 25,
        "Nugegoda": 18,
        "Kandy City Centre": 22,
        "Galle Fort": 20
    };

    return Array.from({ length: 24 }, (_, i) => {
        const hour = i;
        const isLunchRush  = hour >= 12 && hour <= 14;
        const isDinnerRush = hour >= 18 && hour <= 20;
        const baseQueue    = (isLunchRush ? 12 : isDinnerRush ? 15 : 5) * baseMultiplier;

        return {
            time: `${hour.toString().padStart(2, "0")}:00`,
            queue:      Math.max(0, Math.round(baseQueue + (Math.random() * 6 - 3))),
            predicted:  Math.max(0, Math.round(baseQueue + (Math.random() * 4 - 2))),
            capacity:   capacities[storeName] ?? 20,
            waitTime:   Math.max(1, (baseQueue / 4) + Math.random() * 2),
            abandonment:Math.max(0, Math.random() * 4)
        };
    });
};

/* ------------------------------------------------------------------
   ❸  STORE DIRECTORY (USED BY HEADER SELECTOR)
------------------------------------------------------------------- */
export const stores = [
    {
        id: 1,
        name: "Union Pl.",
        location: "Colombo 02",
        status: "online",
        performance: "excellent",
        manager: "John Silva",
        capacity: 25
    },
    {
        id: 2,
        name: "Nugegoda",
        location: "Nugegoda",
        status: "online",
        performance: "good",
        manager: "Sarah Fernando",
        capacity: 18
    },
    {
        id: 3,
        name: "Kandy City Centre",
        location: "Kandy",
        status: "online",
        performance: "good",
        manager: "Lakshan Perera",
        capacity: 22
    },
    {
        id: 4,
        name: "Galle Fort",
        location: "Galle",
        status: "online",
        performance: "excellent",
        manager: "Dinithi Weerasinghe",
        capacity: 20
    }
];
