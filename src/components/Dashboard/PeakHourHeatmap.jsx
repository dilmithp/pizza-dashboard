import React, { useState } from 'react';
import { FireIcon, ClockIcon } from '@heroicons/react/24/outline';

const PeakHourHeatmap = ({ data }) => {
    const [selectedDay, setSelectedDay] = useState(null);

    const heatmapData = [
        { day: 'Mon', '09:00': 1, '10:00': 2, '11:00': 2, '12:00': 4, '13:00': 4, '14:00': 3, '15:00': 2, '16:00': 2, '17:00': 2, '18:00': 2, '19:00': 2, '20:00': 1 },
        { day: 'Tue', '09:00': 1, '10:00': 2, '11:00': 2, '12:00': 4, '13:00': 4, '14:00': 3, '15:00': 2, '16:00': 2, '17:00': 2, '18:00': 2, '19:00': 2, '20:00': 1 },
        { day: 'Wed', '09:00': 1, '10:00': 2, '11:00': 2, '12:00': 4, '13:00': 4, '14:00': 3, '15:00': 2, '16:00': 2, '17:00': 2, '18:00': 2, '19:00': 2, '20:00': 1 },
        { day: 'Thu', '09:00': 1, '10:00': 2, '11:00': 2, '12:00': 4, '13:00': 4, '14:00': 3, '15:00': 2, '16:00': 2, '17:00': 2, '18:00': 2, '19:00': 2, '20:00': 1 },
        { day: 'Fri', '09:00': 1, '10:00': 2, '11:00': 3, '12:00': 4, '13:00': 4, '14:00': 3, '15:00': 2, '16:00': 3, '17:00': 3, '18:00': 4, '19:00': 4, '20:00': 3 },
        { day: 'Sat', '09:00': 2, '10:00': 3, '11:00': 4, '12:00': 4, '13:00': 4, '14:00': 3, '15:00': 2, '16:00': 3, '17:00': 3, '18:00': 4, '19:00': 4, '20:00': 3 },
        { day: 'Sun', '09:00': 2, '10:00': 3, '11:00': 4, '12:00': 4, '13:00': 3, '14:00': 3, '15:00': 2, '16:00': 2, '17:00': 2, '18:00': 2, '19:00': 2, '20:00': 1 }
    ];

    const hours = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'];

    const getIntensityColor = (value) => {
        if (value <= 1) return 'bg-green-200';
        if (value <= 2) return 'bg-yellow-200';
        if (value <= 3) return 'bg-orange-200';
        return 'bg-red-200';
    };

    return (
        <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                    <div className="p-3 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl shadow-lg">
                        <FireIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-gray-900">Peak Hour Patterns</h2>
                        <p className="text-sm text-gray-500">Weekly queue intensity heatmap</p>
                    </div>
                </div>
            </div>

            {/* Heatmap */}
            <div className="mb-6">
                <div className="grid gap-1 text-xs" style={{ gridTemplateColumns: '60px repeat(12, 1fr)' }}>
                    {/* Header */}
                    <div className="font-medium text-gray-600 p-2"></div>
                    {hours.map((hour) => (
                        <div key={hour} className="font-medium text-gray-600 p-2 text-center">
                            {hour.split(':')[0]}
                        </div>
                    ))}

                    {/* Data Rows */}
                    {heatmapData.map((dayData, dayIndex) => (
                        <React.Fragment key={dayData.day}>
                            <div className="font-medium text-gray-700 p-2 bg-gray-50 rounded-lg">
                                {dayData.day}
                            </div>
                            {hours.map((hour) => (
                                <div
                                    key={`${dayData.day}-${hour}`}
                                    className={`p-2 rounded-lg text-center font-medium cursor-pointer transition-all duration-200 hover:scale-105 ${
                                        getIntensityColor(dayData[hour])
                                    } ${selectedDay === dayIndex ? 'ring-2 ring-primary-500' : ''}`}
                                    onClick={() => setSelectedDay(dayIndex === selectedDay ? null : dayIndex)}
                                >
                                    {dayData[hour]}
                                </div>
                            ))}
                        </React.Fragment>
                    ))}
                </div>
            </div>

            {/* Peak Patterns Summary */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-4 border-l-4 border-l-red-500">
                    <div className="flex items-center space-x-2 mb-2">
                        <ClockIcon className="w-5 h-5 text-red-600" />
                        <span className="font-semibold text-red-800">Weekdays</span>
                    </div>
                    <p className="text-sm text-gray-600">{data.weekdays.time}</p>
                    <p className="text-lg font-bold text-gray-900">{data.weekdays.type}</p>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4 border-l-4 border-l-orange-500">
                    <div className="flex items-center space-x-2 mb-2">
                        <ClockIcon className="w-5 h-5 text-orange-600" />
                        <span className="font-semibold text-orange-800">Fri & Sat</span>
                    </div>
                    <p className="text-sm text-gray-600">{data.friSat.time}</p>
                    <p className="text-lg font-bold text-gray-900">{data.friSat.type}</p>
                </div>

                <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-4 border-l-4 border-l-yellow-500">
                    <div className="flex items-center space-x-2 mb-2">
                        <ClockIcon className="w-5 h-5 text-yellow-600" />
                        <span className="font-semibold text-yellow-800">Weekends</span>
                    </div>
                    <p className="text-sm text-gray-600">{data.weekends.time}</p>
                    <p className="text-lg font-bold text-gray-900">{data.weekends.type}</p>
                </div>
            </div>

            {/* Legend */}
            <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Queue Intensity:</span>
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 bg-green-200 rounded"></div>
                        <span className="text-gray-600">Low</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 bg-yellow-200 rounded"></div>
                        <span className="text-gray-600">Medium</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 bg-orange-200 rounded"></div>
                        <span className="text-gray-600">High</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 bg-red-200 rounded"></div>
                        <span className="text-gray-600">Very High</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PeakHourHeatmap;
