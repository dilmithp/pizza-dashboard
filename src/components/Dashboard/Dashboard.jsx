import React, { useState, useEffect } from 'react';
import {
    ClockIcon,
    UserGroupIcon,
    ExclamationTriangleIcon,
    ChartBarIcon,
} from '@heroicons/react/24/outline';

import ProfessionalHeader from '../Layout/ProfessionalHeader';
import Footer from '../Layout/Footer';
import ProfessionalKPICard from './ProfessionalKPICard';
import ProfessionalChart from '../Charts/ProfessionalChart';
import CCTVSection from './CCTVSection';

import {
    storeSpecificData,
    generateChartData,
    stores,
} from '../../data/dummyData';

const Dashboard = () => {
    const [selectedStore, setSelectedStore] = useState('Union Pl.');
    const [metrics, setMetrics] = useState(
        storeSpecificData[selectedStore].currentMetrics,
    );
    const [alerts, setAlerts] = useState(storeSpecificData[selectedStore].alerts);
    const [chartData, setChartData] = useState(generateChartData(selectedStore));
    const [isLoading, setIsLoading] = useState(false);

    /* ---------- Store Switching ---------- */
    const handleStoreChange = (newStore) => {
        if (newStore === selectedStore) return;

        setIsLoading(true);
        setSelectedStore(newStore);

        setTimeout(() => {
            setMetrics(storeSpecificData[newStore].currentMetrics);
            setAlerts(storeSpecificData[newStore].alerts);
            setChartData(generateChartData(newStore));
            setIsLoading(false);
        }, 800);
    };

    /* ---------- Real-Time Update Simulation ---------- */
    useEffect(() => {
        const id = setInterval(() => {
            const base = storeSpecificData[selectedStore].currentMetrics;

            setMetrics((prev) => ({
                ...prev,
                queueLength: Math.max(
                    1,
                    base.queueLength + Math.floor(Math.random() * 6) - 3,
                ),
                waitTime: `${Math.floor(Math.random() * 3) + 2}m ${Math.floor(
                    Math.random() * 60,
                )}s`,
                abandonmentRate: Math.max(
                    0.1,
                    (base.abandonmentRate + (Math.random() * 2 - 1)).toFixed(1),
                ),
                dailyFootfall:
                    base.dailyFootfall + Math.floor(Math.random() * 20) - 10,
                lastUpdated: new Date().toISOString(),
            }));
        }, 30_000);

        return () => clearInterval(id);
    }, [selectedStore]);

    /* ---------- Helpers ---------- */
    const getStatusColor = (len) =>
        len <= 4 ? 'success' : len <= 8 ? 'warning' : 'error';

    const currentStoreData = storeSpecificData[selectedStore];

    /* ---------- Render ---------- */
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            {/* Header */}
            <ProfessionalHeader
                selectedStore={selectedStore}
                onStoreChange={handleStoreChange}
                stores={stores}
                alerts={alerts}
            />

            {/* Loading Overlay */}
            {isLoading && (
                <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 flex items-center justify-center">
                    <div className="bg-white rounded-2xl p-6 shadow-strong flex items-center space-x-3">
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary-500"></div>
                        <span className="text-gray-900 font-medium">
              Loading {selectedStore} data…
            </span>
                    </div>
                </div>
            )}

            {/* Main */}
            <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* KPI Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <ProfessionalKPICard
                        title="Live Queue Status"
                        value={metrics.queueLength}
                        unit="people"
                        status={getStatusColor(metrics.queueLength)}
                        trend={`${
                            metrics.queueLength >
                            currentStoreData.previousMetrics.queueLength
                                ? '+'
                                : ''
                        }${
                            metrics.queueLength - currentStoreData.previousMetrics.queueLength
                        } from previous`}
                        icon={UserGroupIcon}
                        description={`Current customers at ${selectedStore}`}
                        gradient="from-primary-500 to-secondary-500"
                        previousValue={currentStoreData.previousMetrics.queueLength}
                        target={currentStoreData.targets.queueLength}
                    />

                    <ProfessionalKPICard
                        title="Current Wait Time"
                        value={metrics.waitTime}
                        status={
                            metrics.waitTime.includes('4') || metrics.waitTime.includes('5')
                                ? 'warning'
                                : 'success'
                        }
                        trend="12% improvement"
                        icon={ClockIcon}
                        description="Estimated wait time"
                        gradient="from-secondary-500 to-accent-400"
                        previousValue={currentStoreData.previousMetrics.waitTime}
                    />

                    <ProfessionalKPICard
                        title="Abandonment Rate"
                        value={`${metrics.abandonmentRate}%`}
                        status="success"
                        trend="-2.5pp vs baseline"
                        icon={ExclamationTriangleIcon}
                        description="Customers leaving without service"
                        gradient="from-accent-400 to-accent-500"
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

                {/* Charts */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <ProfessionalChart
                        data={chartData}
                        title={`Queue Analytics – ${selectedStore}`}
                        subtitle="Real-time and predicted queue patterns"
                        type="line"
                        height={400}
                        colors={['#8b5cf6', '#0ea5e9', '#e879f9']}
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

                {/* CCTV */}
                <div className="mb-8">
                    <CCTVSection store={selectedStore} />
                </div>

                {/* Peak Hours Summary */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {/* Weekdays */}
                    <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-6 border-l-4 border-red-500">
                        <div className="flex items-center space-x-2 mb-2">
                            <ClockIcon className="w-5 h-5 text-red-600" />
                            <span className="font-semibold text-red-800">Weekdays</span>
                        </div>
                        <p className="text-sm text-gray-600">
                            {currentStoreData.peakHours.weekdays.time}
                        </p>
                        <p className="text-lg font-bold text-gray-900">
                            {currentStoreData.peakHours.weekdays.type}
                        </p>
                        <p className="text-sm text-red-600 mt-1">
                            Avg: {currentStoreData.peakHours.weekdays.avgQueue} customers
                        </p>
                    </div>

                    {/* Fri & Sat */}
                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 border-l-4 border-orange-500">
                        <div className="flex items-center space-x-2 mb-2">
                            <ClockIcon className="w-5 h-5 text-orange-600" />
                            <span className="font-semibold text-orange-800">Fri & Sat</span>
                        </div>
                        <p className="text-sm text-gray-600">
                            {currentStoreData.peakHours.friSat.time}
                        </p>
                        <p className="text-lg font-bold text-gray-900">
                            {currentStoreData.peakHours.friSat.type}
                        </p>
                        <p className="text-sm text-orange-600 mt-1">
                            Avg: {currentStoreData.peakHours.friSat.avgQueue} customers
                        </p>
                    </div>

                    {/* Weekends */}
                    <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-6 border-l-4 border-yellow-500">
                        <div className="flex items-center space-x-2 mb-2">
                            <ClockIcon className="w-5 h-5 text-yellow-600" />
                            <span className="font-semibold text-yellow-800">Weekends</span>
                        </div>
                        <p className="text-sm text-gray-600">
                            {currentStoreData.peakHours.weekends.time}
                        </p>
                        <p className="text-lg font-bold text-gray-900">
                            {currentStoreData.peakHours.weekends.type}
                        </p>
                        <p className="text-sm text-yellow-600 mt-1">
                            Avg: {currentStoreData.peakHours.weekends.avgQueue} customers
                        </p>
                    </div>
                </div>

                {/* Store Performance Summary */}
                <div className="bg-white rounded-2xl shadow-soft p-8">
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-gradient-primary mb-4">
                            {selectedStore} Performance Summary
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-status-success mb-2">
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
                                <div className="text-3xl font-bold text-secondary-600 mb-2">
                                    {stores.find((s) => s.name === selectedStore)?.capacity}
                                </div>
                                <div className="text-sm text-gray-600">Max Capacity</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-accent-600 mb-2">4.2m</div>
                                <div className="text-sm text-gray-600">Avg Resolution Time</div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Dashboard;
