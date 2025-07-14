import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { EyeIcon, ArrowTrendingUpIcon, UsersIcon, ChartBarIcon } from '@heroicons/react/24/outline';

const QueueMonitor = ({ queueLength }) => {
    const [viewMode, setViewMode] = useState('line');

    const queueData = Array.from({ length: 12 }, (_, i) => {
        const hour = 9 + i;
        const baseQueue = hour >= 12 && hour <= 14 ? 12 : hour >= 18 && hour <= 20 ? 15 : 5;
        return {
            time: `${hour.toString().padStart(2, '0')}:00`,
            queue: baseQueue + Math.floor(Math.random() * 5) - 2,
            predicted: baseQueue + Math.floor(Math.random() * 3) - 1,
            capacity: 20
        };
    });

    const getQueueStatus = (length) => {
        if (length <= 4) return { status: 'Optimal', color: 'text-green-600', bg: 'bg-green-500', bgLight: 'bg-green-50' };
        if (length <= 8) return { status: 'Moderate', color: 'text-yellow-600', bg: 'bg-yellow-500', bgLight: 'bg-yellow-50' };
        return { status: 'High', color: 'text-red-600', bg: 'bg-red-500', bgLight: 'bg-red-50' };
    };

    const queueStatus = getQueueStatus(queueLength);

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-100">
                    <p className="font-semibold text-gray-900">{`Time: ${label}`}</p>
                    {payload.map((entry, index) => (
                        <p key={index} className="text-sm" style={{ color: entry.color }}>
                            {`${entry.dataKey}: ${entry.value}`}
                        </p>
                    ))}
                </div>
            );
        }
        return null;
    };

    return (
        <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl shadow-lg">
                        <ArrowTrendingUpIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-gray-900">Queue Analytics</h2>
                        <p className="text-sm text-gray-500">Real-time queue monitoring and predictions</p>
                    </div>
                </div>

                <div className="flex items-center space-x-1 bg-gray-100 rounded-lg p-1">
                    <button
                        onClick={() => setViewMode('line')}
                        className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                            viewMode === 'line'
                                ? 'bg-primary-500 text-white'
                                : 'bg-transparent text-gray-600 hover:bg-gray-200'
                        }`}
                    >
                        Line
                    </button>
                    <button
                        onClick={() => setViewMode('area')}
                        className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                            viewMode === 'area'
                                ? 'bg-primary-500 text-white'
                                : 'bg-transparent text-gray-600 hover:bg-gray-200'
                        }`}
                    >
                        Area
                    </button>
                </div>
            </div>

            {/* Current Queue Status */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className={`rounded-2xl p-6 border-l-4 border-l-primary-500 ${queueStatus.bgLight}`}>
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-gray-600">Current Queue</p>
                            <p className="text-4xl font-bold text-gray-900 mt-1">{queueLength}</p>
                            <div className="mt-3">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                    queueStatus.color === 'text-green-600' ? 'bg-green-100 text-green-800' :
                        queueStatus.color === 'text-yellow-600' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                }`}>
                  {queueStatus.status}
                </span>
                            </div>
                        </div>
                        <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center shadow-lg">
                            <UsersIcon className="w-8 h-8 text-white" />
                        </div>
                    </div>
                </div>

                <div className="bg-blue-50 rounded-2xl p-6 border-l-4 border-l-blue-500">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-gray-600">Predicted (Next Hour)</p>
                            <p className="text-4xl font-bold text-gray-900 mt-1">12</p>
                            <div className="mt-3">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  Lunch Rush
                </span>
                            </div>
                        </div>
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                            <EyeIcon className="w-8 h-8 text-white" />
                        </div>
                    </div>
                </div>

                <div className="bg-green-50 rounded-2xl p-6 border-l-4 border-l-green-500">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-gray-600">Capacity Utilization</p>
                            <p className="text-4xl font-bold text-gray-900 mt-1">{Math.round((queueLength / 20) * 100)}%</p>
                            <div className="mt-3">
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div
                                        className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full transition-all duration-500"
                                        style={{ width: `${Math.min((queueLength / 20) * 100, 100)}%` }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg">
                            <ChartBarIcon className="w-8 h-8 text-white" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Chart */}
            <div className="h-96 bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6">
                <ResponsiveContainer width="100%" height="100%">
                    {viewMode === 'line' ? (
                        <LineChart data={queueData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                            <XAxis
                                dataKey="time"
                                stroke="#6b7280"
                                fontSize={12}
                                tickLine={false}
                                axisLine={false}
                            />
                            <YAxis
                                stroke="#6b7280"
                                fontSize={12}
                                tickLine={false}
                                axisLine={false}
                            />
                            <Tooltip content={<CustomTooltip />} />
                            <Line
                                type="monotone"
                                dataKey="queue"
                                stroke="#915490"
                                strokeWidth={3}
                                dot={{ fill: '#915490', strokeWidth: 2, r: 5 }}
                                activeDot={{ r: 7, stroke: '#915490', strokeWidth: 2 }}
                                name="Actual Queue"
                            />
                            <Line
                                type="monotone"
                                dataKey="predicted"
                                stroke="#3b82f6"
                                strokeWidth={2}
                                strokeDasharray="8 8"
                                dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
                                name="Predicted"
                            />
                        </LineChart>
                    ) : (
                        <AreaChart data={queueData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                            <XAxis
                                dataKey="time"
                                stroke="#6b7280"
                                fontSize={12}
                                tickLine={false}
                                axisLine={false}
                            />
                            <YAxis
                                stroke="#6b7280"
                                fontSize={12}
                                tickLine={false}
                                axisLine={false}
                            />
                            <Tooltip content={<CustomTooltip />} />
                            <defs>
                                <linearGradient id="colorQueue" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#915490" stopOpacity={0.4}/>
                                    <stop offset="95%" stopColor="#915490" stopOpacity={0.1}/>
                                </linearGradient>
                            </defs>
                            <Area
                                type="monotone"
                                dataKey="queue"
                                stroke="#915490"
                                fill="url(#colorQueue)"
                                strokeWidth={3}
                                name="Queue Length"
                            />
                        </AreaChart>
                    )}
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default QueueMonitor;
