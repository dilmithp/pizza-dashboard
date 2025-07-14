import React, { useState } from 'react';
import {
    ExclamationTriangleIcon,
    ClockIcon,
    MapPinIcon,
    FunnelIcon,
    MagnifyingGlassIcon
} from '@heroicons/react/24/outline';

const IncidentLog = () => {
    const [filter, setFilter] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');

    const mockIncidents = [
        {
            id: 1,
            date: "2025-06-03",
            time: "19:12",
            store: "Union Pl.",
            maxQueue: 18,
            longestWait: "7m 54s",
            cause: "Checkout freeze",
            status: "resolved",
            priority: "high",
            resolvedBy: "Manager",
            resolutionTime: "3m 22s"
        },
        {
            id: 2,
            date: "2025-06-10",
            time: "13:08",
            store: "Union Pl.",
            maxQueue: 16,
            longestWait: "6m 22s",
            cause: "Unusual footfall",
            status: "resolved",
            priority: "medium",
            resolvedBy: "Shift Lead",
            resolutionTime: "5m 15s"
        },
        {
            id: 3,
            date: "2025-06-17",
            time: "18:47",
            store: "Nugegoda",
            maxQueue: 20,
            longestWait: "9m 11s",
            cause: "Large group order",
            status: "resolved",
            priority: "medium",
            resolvedBy: "Manager",
            resolutionTime: "4m 33s"
        }
    ];

    const getCauseIcon = (cause) => {
        switch (cause) {
            case 'Checkout freeze': return '🔧';
            case 'Large group order': return '👥';
            case 'Unusual footfall': return '📈';
            default: return '⚠️';
        }
    };

    const getCauseBadge = (cause) => {
        const badges = {
            'Checkout freeze': 'bg-red-100 text-red-800 border-red-200',
            'Large group order': 'bg-orange-100 text-orange-800 border-orange-200',
            'Unusual footfall': 'bg-yellow-100 text-yellow-800 border-yellow-200'
        };
        return badges[cause] || 'bg-gray-100 text-gray-800 border-gray-200';
    };

    const getPriorityBadge = (priority) => {
        const badges = {
            'high': 'bg-red-100 text-red-800',
            'medium': 'bg-yellow-100 text-yellow-800',
            'low': 'bg-green-100 text-green-800'
        };
        return badges[priority] || 'bg-gray-100 text-gray-800';
    };

    const filteredIncidents = mockIncidents
        .filter(incident => filter === 'all' || incident.cause === filter)
        .filter(incident =>
            incident.store.toLowerCase().includes(searchTerm.toLowerCase()) ||
            incident.cause.toLowerCase().includes(searchTerm.toLowerCase())
        );

    return (
        <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                    <div className="p-3 bg-gradient-to-br from-red-500 to-red-600 rounded-xl shadow-lg">
                        <ExclamationTriangleIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-gray-900">Service Delay Incidents</h2>
                        <p className="text-sm text-gray-500">Tracking and analysis of service disruptions</p>
                    </div>
                </div>

                <div className="flex items-center space-x-3">
                    <div className="relative">
                        <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                        <input
                            type="text"
                            placeholder="Search incidents..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                    </div>

                    <select
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        className="bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                        <option value="all">All Incidents</option>
                        <option value="Checkout freeze">Checkout Issues</option>
                        <option value="Large group order">Large Orders</option>
                        <option value="Unusual footfall">High Traffic</option>
                    </select>
                </div>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-4 border-l-4 border-l-red-500">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-gray-600">June Incidents</p>
                            <p className="text-3xl font-bold text-gray-900">12</p>
                        </div>
                        <div className="text-3xl">📊</div>
                    </div>
                    <p className="text-sm text-red-600 mt-2 font-medium">-16 from April</p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 border-l-4 border-l-green-500">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-gray-600">Improvement</p>
                            <p className="text-3xl font-bold text-gray-900">57%</p>
                        </div>
                        <div className="text-3xl">📈</div>
                    </div>
                    <p className="text-sm text-green-600 mt-2 font-medium">vs Previous Month</p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 border-l-4 border-l-blue-500">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-gray-600">Avg Resolution</p>
                            <p className="text-3xl font-bold text-gray-900">4.2m</p>
                        </div>
                        <div className="text-3xl">⏱️</div>
                    </div>
                    <p className="text-sm text-blue-600 mt-2 font-medium">Response Time</p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 border-l-4 border-l-purple-500">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-gray-600">SLA Compliance</p>
                            <p className="text-3xl font-bold text-gray-900">95%</p>
                        </div>
                        <div className="text-3xl">🎯</div>
                    </div>
                    <p className="text-sm text-purple-600 mt-2 font-medium">Target Achievement</p>
                </div>
            </div>

            {/* Incidents Table */}
            <div className="overflow-hidden rounded-2xl border border-gray-200">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
                        <tr>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Date & Time
                            </th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Store Location
                            </th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Queue Impact
                            </th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Cause
                            </th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Priority
                            </th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Resolution
                            </th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Status
                            </th>
                        </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                        {filteredIncidents.map((incident, index) => (
                            <tr
                                key={incident.id}
                                className={`hover:bg-gray-50 transition-colors duration-200 ${
                                    index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                                }`}
                            >
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center space-x-3">
                                        <ClockIcon className="w-5 h-5 text-gray-400" />
                                        <div>
                                            <div className="text-sm font-medium text-gray-900">{incident.date}</div>
                                            <div className="text-sm text-gray-500">{incident.time}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center space-x-2">
                                        <MapPinIcon className="w-4 h-4 text-gray-400" />
                                        <span className="text-sm font-medium text-gray-900">{incident.store}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div>
                                        <div className="text-sm font-medium text-gray-900">{incident.maxQueue} people</div>
                                        <div className="text-sm text-gray-500">{incident.longestWait} max wait</div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getCauseBadge(incident.cause)}`}>
                      <span className="mr-1">{getCauseIcon(incident.cause)}</span>
                        {incident.cause}
                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getPriorityBadge(incident.priority)}`}>
                      {incident.priority.toUpperCase()}
                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div>
                                        <div className="text-sm font-medium text-gray-900">{incident.resolutionTime}</div>
                                        <div className="text-sm text-gray-500">by {incident.resolvedBy}</div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200">
                      ✓ Resolved
                    </span>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {filteredIncidents.length === 0 && (
                <div className="text-center py-12">
                    <ExclamationTriangleIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500">No incidents found</p>
                    <p className="text-sm text-gray-400">Try adjusting your search or filter criteria</p>
                </div>
            )}
        </div>
    );
};

export default IncidentLog;
