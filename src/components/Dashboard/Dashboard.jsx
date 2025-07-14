import React, { useState, useEffect } from 'react';
import CCTVSection from './CCTVSection';
import {
    ClockIcon,
    UserGroupIcon,
    ExclamationTriangleIcon,
    ChartBarIcon
} from '@heroicons/react/24/outline';
import ProfessionalHeader from '../Layout/ProfessionalHeader';
import ProfessionalKPICard from './ProfessionalKPICard';
import ProfessionalChart from '../Charts/ProfessionalChart';
import { storeSpecificData, generateChartData, stores } from '../../data/dummyData';

const Dashboard = () => {
    const [selectedStore, setSelectedStore] = useState('Union Pl.');
    const [metrics, setMetrics] = useState(storeSpecificData[selectedStore].currentMetrics);
    const [alerts, setAlerts] = useState(storeSpecificData[selectedStore].alerts);
    const [chartData, setChartData] = useState(generateChartData(selectedStore));
    const [isLoading, setIsLoading] = useState(false);

    // Handle store change with loading animation
    const handleStoreChange = (newStore) => {
        if (newStore === selectedStore) return;

        setIsLoading(true);
        setSelectedStore(newStore);

        // Simulate loading delay for better UX
        setTimeout(() => {
            setMetrics(storeSpecificData[newStore].currentMetrics);
            setAlerts(storeSpecificData[newStore].alerts);
            setChartData(generateChartData(newStore));
            setIsLoading(false);
        }, 800);
    };

    // Real-time updates for current store
    useEffect(() => {
        const updateInterval = setInterval(() => {
            const currentStoreData = storeSpecificData[selectedStore];
            const baseMetrics = currentStoreData.currentMetrics;

            setMetrics(prev => ({
                ...prev,
                queueLength: Math.max(1, baseMetrics.queueLength + Math.floor(Math.random() * 6) - 3),
                waitTime: `${Math.floor(Math.random() * 3) + 2}m ${Math.floor(Math.random() * 60)}s`,
                abandonmentRate: Math.max(0.1, (baseMetrics.abandonmentRate + (Math.random() * 2 - 1))).toFixed(1),
                dailyFootfall: baseMetrics.dailyFootfall + Math.floor(Math.random() * 20) - 10,
                lastUpdated: new Date().toISOString()
            }));
        }, 30000);

        return () => clearInterval(updateInterval);
    }, [selectedStore]);

    const getStatusColor = (queueLength) => {
        if (queueLength <= 4) return 'success';
        if (queueLength <= 8) return 'warning';
        return 'error';
    };

    const currentStoreData = storeSpecificData[selectedStore];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Professional Header */}
            <ProfessionalHeader
                selectedStore={selectedStore}
                onStoreChange={handleStoreChange}
                stores={stores}
                alerts={alerts}
            />

            {/* Store-specific loading overlay */}
            {isLoading && (
                <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 flex items-center justify-center">
                    <div className="bg-white rounded-2xl p-6 shadow-strong">
                        <div className="flex items-center space-x-3">
                            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary-500"></div>
                            <span className="text-gray-900 font-medium">
                Loading {selectedStore} data...
              </span>
                        </div>
                    </div>
                </div>
            )}

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* KPI Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <ProfessionalKPICard
                        title="Live Queue Status"
                        value={metrics.queueLength}
                        unit="people"
                        status={getStatusColor(metrics.queueLength)}
                        trend={`${metrics.queueLength > currentStoreData.previousMetrics.queueLength ? '+' : ''}${metrics.queueLength - currentStoreData.previousMetrics.queueLength} from previous`}
                        icon={UserGroupIcon}
                        description={`Current customers at ${selectedStore}`}
                        gradient="from-blue-500 to-blue-600"
                        previousValue={currentStoreData.previousMetrics.queueLength}
                        target={currentStoreData.targets.queueLength}
                    />
                    <ProfessionalKPICard
                        title="Current Wait Time"
                        value={metrics.waitTime}
                        status={metrics.waitTime.includes('4') || metrics.waitTime.includes('5') ? 'warning' : 'success'}
                        trend="12% improvement"
                        icon={ClockIcon}
                        description="Estimated wait time"
                        gradient="from-green-500 to-green-600"
                        previousValue={currentStoreData.previousMetrics.waitTime}
                    />
                    <ProfessionalKPICard
                        title="Abandonment Rate"
                        value={`${metrics.abandonmentRate}%`}
                        status="success"
                        trend="-2.5pp vs baseline"
                        icon={ExclamationTriangleIcon}
                        description="Customers leaving without service"
                        gradient="from-orange-500 to-orange-600"
                        previousValue={`${currentStoreData.previousMetrics.abandonmentRate}%`}
                        target={currentStoreData.targets.abandonmentRate}
                    />
                    <ProfessionalKPICard
                        title="Daily Footfall"
                        value={metrics.dailyFootfall}
                        unit="guests"
                        status="success"
                        trend="+8% vs target"
                        icon={ChartBarIcon}
                        description="Total guests served today"
                        gradient="from-primary-500 to-primary-600"
                        previousValue={currentStoreData.previousMetrics.dailyFootfall}
                        target={currentStoreData.targets.dailyFootfall}
                    />
                </div>

                {/* Charts Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <ProfessionalChart
                        data={chartData}
                        title={`Queue Analytics - ${selectedStore}`}
                        subtitle="Real-time and predicted queue patterns"
                        type="line"
                        height={400}
                        colors={['#915490', '#3b82f6', '#10b981']}
                    />
                    <ProfessionalChart
                        data={chartData}
                        title="Wait Time Analysis"
                        subtitle="Average wait times throughout the day"
                        type="area"
                        height={400}
                        colors={['#f59e0b', '#ef4444']}
                    />
                </div>
                {/* CCTV Monitoring Section */}
                <div className="mb-8">
                    <CCTVSection store={selectedStore} />
                </div>

                {/* Peak Hours Summary */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-6 border-l-4 border-l-red-500">
                        <div className="flex items-center space-x-2 mb-2">
                            <ClockIcon className="w-5 h-5 text-red-600" />
                            <span className="font-semibold text-red-800">Weekdays</span>
                        </div>
                        <p className="text-sm text-gray-600">{currentStoreData.peakHours.weekdays.time}</p>
                        <p className="text-lg font-bold text-gray-900">{currentStoreData.peakHours.weekdays.type}</p>
                        <p className="text-sm text-red-600 mt-1">Avg: {currentStoreData.peakHours.weekdays.avgQueue} customers</p>
                    </div>

                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 border-l-4 border-l-orange-500">
                        <div className="flex items-center space-x-2 mb-2">
                            <ClockIcon className="w-5 h-5 text-orange-600" />
                            <span className="font-semibold text-orange-800">Fri & Sat</span>
                        </div>
                        <p className="text-sm text-gray-600">{currentStoreData.peakHours.friSat.time}</p>
                        <p className="text-lg font-bold text-gray-900">{currentStoreData.peakHours.friSat.type}</p>
                        <p className="text-sm text-orange-600 mt-1">Avg: {currentStoreData.peakHours.friSat.avgQueue} customers</p>
                    </div>

                    <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-6 border-l-4 border-l-yellow-500">
                        <div className="flex items-center space-x-2 mb-2">
                            <ClockIcon className="w-5 h-5 text-yellow-600" />
                            <span className="font-semibold text-yellow-800">Weekends</span>
                        </div>
                        <p className="text-sm text-gray-600">{currentStoreData.peakHours.weekends.time}</p>
                        <p className="text-lg font-bold text-gray-900">{currentStoreData.peakHours.weekends.type}</p>
                        <p className="text-sm text-yellow-600 mt-1">Avg: {currentStoreData.peakHours.weekends.avgQueue} customers</p>
                    </div>
                </div>

                {/* Store-specific performance summary */}
                <div className="bg-white rounded-2xl shadow-lg p-8 animate-fade-in">
                    <div className="text-center">
                        <h2 className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent mb-4">
                            {selectedStore} Performance Summary
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-green-600 mb-2">
                                    {currentStoreData.currentMetrics.slaCompliance}%
                                </div>
                                <div className="text-sm text-gray-600">SLA Compliance</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-primary-600 mb-2">
                                    {currentStoreData.currentMetrics.serviceDelays}
                                </div>
                                <div className="text-sm text-gray-600">Service Delays</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-blue-600 mb-2">
                                    {stores.find(s => s.name === selectedStore)?.capacity}
                                </div>
                                <div className="text-sm text-gray-600">Max Capacity</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-orange-600 mb-2">
                                    4.2m
                                </div>
                                <div className="text-sm text-gray-600">Avg Resolution Time</div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
