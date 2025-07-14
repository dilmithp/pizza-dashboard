import React, { useState, useEffect } from 'react';
import {
    ClockIcon,
    UserGroupIcon,
    ExclamationTriangleIcon,
    ChartBarIcon,
    BellIcon,
    Cog6ToothIcon
} from '@heroicons/react/24/outline';
import KPICard from './KPICard';
import QueueMonitor from './QueueMonitor';
import PeakHourHeatmap from './PeakHourHeatmap';
import IncidentLog from './IncidentLog';
import CameraFeed from './CameraFeed';
import AlertPanel from './AlertPanel';
import StoreSelector from './StoreSelector';

// Mock data
const dummyData = {
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

    peakHours: {
        weekdays: {
            time: "12:15-13:45",
            avgQueue: 12,
            type: "Lunch rush",
            intensity: "high"
        },
        friSat: {
            time: "18:10-20:05",
            avgQueue: 15,
            type: "Dinner peak",
            intensity: "very-high"
        },
        weekends: {
            time: "11:30-14:00",
            avgQueue: 12,
            type: "Family midday",
            intensity: "high"
        }
    }
};

const Dashboard = () => {
    const [metrics, setMetrics] = useState(dummyData.currentMetrics);
    const [selectedStore, setSelectedStore] = useState('Union Pl.');
    const [currentTime, setCurrentTime] = useState(new Date());
    const [alerts, setAlerts] = useState([
        { id: 1, type: 'warning', message: 'Queue length approaching threshold', time: '2 min ago' },
        { id: 2, type: 'info', message: 'Peak hour starting soon', time: '5 min ago' },
        { id: 3, type: 'success', message: 'Service delay resolved', time: '10 min ago' }
    ]);

    // Real-time updates simulation
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
            setMetrics(prev => ({
                ...prev,
                queueLength: Math.floor(Math.random() * 15) + 1,
                waitTime: `${Math.floor(Math.random() * 5) + 1}m ${Math.floor(Math.random() * 60)}s`,
                lastUpdated: new Date().toISOString()
            }));
        }, 30000);

        return () => clearInterval(interval);
    }, []);

    const getStatusColor = (queueLength) => {
        if (queueLength <= 4) return 'success';
        if (queueLength <= 8) return 'warning';
        return 'error';
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center shadow-lg">
                                    <ChartBarIcon className="w-7 h-7 text-white" />
                                </div>
                                <div>
                                    <h1 className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
                                        Pizza Hut Queue Monitor
                                    </h1>
                                    <p className="text-sm text-gray-500">Real-time customer queue analytics</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center space-x-6">
                            <div className="text-right">
                                <p className="text-sm font-semibold text-gray-900">
                                    {currentTime.toLocaleTimeString()}
                                </p>
                                <p className="text-xs text-gray-500">
                                    {currentTime.toLocaleDateString()}
                                </p>
                            </div>

                            <StoreSelector
                                selectedStore={selectedStore}
                                onStoreChange={setSelectedStore}
                                stores={dummyData.stores}
                            />

                            <button className="relative p-3 text-gray-400 hover:text-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-xl hover:bg-primary-50 transition-all duration-200">
                                <BellIcon className="w-6 h-6" />
                                <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center text-xs text-white font-bold shadow-lg">
                  {alerts.length}
                </span>
                            </button>

                            <button className="p-3 text-gray-400 hover:text-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-xl hover:bg-primary-50 transition-all duration-200">
                                <Cog6ToothIcon className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* KPI Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <KPICard
                        title="Live Queue Status"
                        value={metrics.queueLength}
                        unit="people"
                        status={getStatusColor(metrics.queueLength)}
                        trend="+2 from last hour"
                        icon={UserGroupIcon}
                        description="Current customers in queue"
                        gradient="from-blue-500 to-blue-600"
                    />
                    <KPICard
                        title="Current Wait Time"
                        value={metrics.waitTime}
                        status={metrics.waitTime.includes('4') || metrics.waitTime.includes('5') ? 'warning' : 'success'}
                        trend="12% improvement"
                        icon={ClockIcon}
                        description="Estimated wait time"
                        gradient="from-green-500 to-green-600"
                    />
                    <KPICard
                        title="Abandonment Rate"
                        value={`${metrics.abandonmentRate}%`}
                        status="success"
                        trend="-2.5pp vs baseline"
                        icon={ExclamationTriangleIcon}
                        description="Customers leaving without service"
                        gradient="from-orange-500 to-orange-600"
                    />
                    <KPICard
                        title="Daily Footfall"
                        value={metrics.dailyFootfall}
                        unit="guests"
                        status="success"
                        trend="+8% vs target"
                        icon={ChartBarIcon}
                        description="Total guests served today"
                        gradient="from-primary-500 to-primary-600"
                    />
                </div>

                {/* Main Dashboard Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                    {/* Queue Monitor - Takes 2 columns */}
                    <div className="lg:col-span-2">
                        <QueueMonitor queueLength={metrics.queueLength} />
                    </div>

                    {/* Camera Feed */}
                    <div className="lg:col-span-1">
                        <CameraFeed store={selectedStore} />
                    </div>
                </div>

                {/* Secondary Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <PeakHourHeatmap data={dummyData.peakHours} />
                    <AlertPanel alerts={alerts} />
                </div>

                {/* Incident Log - Full Width */}
                <div className="mb-8">
                    <IncidentLog />
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
