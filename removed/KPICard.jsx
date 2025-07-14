import React from 'react';
import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/24/solid';

const KPICard = ({
                     title,
                     value,
                     unit,
                     status,
                     trend,
                     icon: Icon,
                     description,
                     gradient = "from-primary-500 to-primary-600"
                 }) => {
    const getStatusStyles = (status) => {
        const styles = {
            success: {
                border: 'border-l-green-500',
                bg: 'bg-green-50',
                dot: 'bg-green-500',
                text: 'text-green-600'
            },
            warning: {
                border: 'border-l-yellow-500',
                bg: 'bg-yellow-50',
                dot: 'bg-yellow-500',
                text: 'text-yellow-600'
            },
            error: {
                border: 'border-l-red-500',
                bg: 'bg-red-50',
                dot: 'bg-red-500',
                text: 'text-red-600'
            }
        };
        return styles[status] || styles.success;
    };

    const statusStyles = getStatusStyles(status);
    const isPositiveTrend = trend.includes('+') || trend.includes('improvement');

    return (
        <div className={`bg-white rounded-2xl shadow-lg p-6 border-l-4 transition-all duration-300 hover:shadow-xl animate-fade-in relative overflow-hidden ${statusStyles.border} ${statusStyles.bg}`}>
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                <div className={`w-full h-full bg-gradient-to-br rounded-full ${gradient}`} />
            </div>

            <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                        <div className={`p-3 rounded-xl bg-gradient-to-br shadow-lg flex items-center justify-center w-12 h-12 ${gradient}`}>
                            <Icon className="w-6 h-6 text-white flex-shrink-0" />
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold text-gray-700">{title}</h3>
                            <p className="text-xs text-gray-500">{description}</p>
                        </div>
                    </div>
                    <div className={`w-3 h-3 rounded-full animate-pulse ${statusStyles.dot}`} />
                </div>

                <div className="flex items-baseline space-x-2 mb-4">
                    <span className="text-4xl font-bold text-gray-900">{value}</span>
                    {unit && <span className="text-lg text-gray-600 font-medium">{unit}</span>}
                </div>

                <div className="flex items-center space-x-2">
                    <div className={`flex items-center space-x-1 px-3 py-1 rounded-lg text-sm font-medium ${
                        isPositiveTrend ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                        {isPositiveTrend ? (
                            <ArrowUpIcon className="w-4 h-4 flex-shrink-0" />
                        ) : (
                            <ArrowDownIcon className="w-4 h-4 flex-shrink-0" />
                        )}
                        <span>{trend}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KPICard;
