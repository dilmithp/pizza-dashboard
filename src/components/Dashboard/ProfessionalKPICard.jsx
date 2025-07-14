import React from 'react';
import { ArrowUpIcon, ArrowDownIcon, ArrowTrendingUpIcon } from '@heroicons/react/24/solid';

const ProfessionalKPICard = ({
                                 title,
                                 value,
                                 unit,
                                 status,
                                 trend,
                                 icon: Icon,
                                 description,
                                 gradient = "from-primary-500 to-secondary-500",
                                 previousValue,
                                 target
                             }) => {
    const getStatusStyles = (status) => {
        const styles = {
            success: {
                border: 'border-l-status-success',
                bg: 'bg-green-50',
                dot: 'bg-status-success',
                text: 'text-status-success'
            },
            warning: {
                border: 'border-l-status-warning',
                bg: 'bg-yellow-50',
                dot: 'bg-status-warning',
                text: 'text-status-warning'
            },
            error: {
                border: 'border-l-status-error',
                bg: 'bg-red-50',
                dot: 'bg-status-error',
                text: 'text-status-error'
            }
        };
        return styles[status] || styles.success;
    };

    const statusStyles = getStatusStyles(status);
    const isPositiveTrend = trend.includes('+') || trend.includes('improvement') || trend.includes('from previous') && !trend.includes('-');
    const trendValue = trend.match(/[\d.]+/)?.[0] || '0';

    return (
        <div className={`bg-white rounded-2xl shadow-soft p-6 border-l-4 transition-all duration-300 hover:shadow-medium animate-fade-in relative overflow-hidden group ${statusStyles.border} ${statusStyles.bg}`}>
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-5 overflow-hidden">
                <div className={`w-full h-full bg-gradient-to-br ${gradient} rounded-full transform translate-x-8 -translate-y-8`}></div>
            </div>

            <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                        <div className={`p-4 rounded-2xl bg-gradient-to-br ${gradient} shadow-primary group-hover:shadow-primary-lg transition-all duration-300`}>
                            <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold text-gray-700 mb-1">{title}</h3>
                            <p className="text-xs text-gray-500">{description}</p>
                        </div>
                    </div>
                    <div className={`w-3 h-3 rounded-full ${statusStyles.dot} animate-pulse`}></div>
                </div>

                {/* Value Display */}
                <div className="mb-6">
                    <div className="flex items-baseline space-x-2 mb-2">
                        <span className="text-4xl font-bold text-gray-900">{value}</span>
                        {unit && <span className="text-lg text-gray-600 font-medium">{unit}</span>}
                    </div>

                    {/* Target Progress */}
                    {target && (
                        <div className="mt-3">
                            <div className="flex justify-between text-xs text-gray-500 mb-1">
                                <span>Progress to target</span>
                                <span>{Math.round((parseFloat(value) / target) * 100)}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                                <div
                                    className={`h-2 rounded-full transition-all duration-500 bg-gradient-to-r ${gradient}`}
                                    style={{ width: `${Math.min((parseFloat(value) / target) * 100, 100)}%` }}
                                ></div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Trend & Previous Value */}
                <div className="space-y-3">
                    {/* Trend */}
                    <div className="flex items-center justify-between">
                        <div className={`flex items-center space-x-2 px-3 py-1.5 rounded-xl text-sm font-medium ${
                            isPositiveTrend ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}>
                            {isPositiveTrend ? (
                                <ArrowUpIcon className="w-4 h-4" />
                            ) : (
                                <ArrowDownIcon className="w-4 h-4" />
                            )}
                            <span>{trend}</span>
                        </div>
                        <ArrowTrendingUpIcon className={`w-4 h-4 ${statusStyles.text}`} />
                    </div>

                    {/* Previous Value Comparison */}
                    {previousValue && (
                        <div className="flex items-center justify-between text-xs text-gray-500">
                            <span>Previous: {previousValue}{unit}</span>
                            <span className={`font-medium ${isPositiveTrend ? 'text-green-600' : 'text-red-600'}`}>
                {isPositiveTrend ? '+' : ''}{trendValue}%
              </span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProfessionalKPICard;
