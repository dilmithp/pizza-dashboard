import React from 'react';

export const KPICardSkeleton = () => (
    <div className="bg-white rounded-2xl shadow-lg p-6 animate-pulse">
        <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gray-200 rounded-xl"></div>
            <div className="flex-1">
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2"></div>
            </div>
        </div>
        <div className="h-8 bg-gray-200 rounded w-1/2 mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-2/3"></div>
    </div>
);

export const ChartSkeleton = () => (
    <div className="bg-white rounded-2xl shadow-lg p-6 animate-pulse">
        <div className="flex justify-between items-center mb-6">
            <div className="h-6 bg-gray-200 rounded w-1/3"></div>
            <div className="h-8 bg-gray-200 rounded w-24"></div>
        </div>
        <div className="h-64 bg-gray-200 rounded"></div>
    </div>
);

export const TableSkeleton = () => (
    <div className="bg-white rounded-2xl shadow-lg p-6 animate-pulse">
        <div className="h-6 bg-gray-200 rounded w-1/4 mb-6"></div>
        {[...Array(5)].map((_, i) => (
            <div key={i} className="flex space-x-4 mb-4">
                <div className="h-4 bg-gray-200 rounded flex-1"></div>
                <div className="h-4 bg-gray-200 rounded w-20"></div>
                <div className="h-4 bg-gray-200 rounded w-16"></div>
            </div>
        ))}
    </div>
);

export const HeaderSkeleton = () => (
    <div className="bg-white shadow-sm border-b border-gray-200 animate-pulse">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
                <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-2xl"></div>
                    <div>
                        <div className="h-6 bg-gray-200 rounded w-48 mb-2"></div>
                        <div className="h-4 bg-gray-200 rounded w-32"></div>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="h-10 bg-gray-200 rounded w-32"></div>
                    <div className="h-10 bg-gray-200 rounded w-10"></div>
                </div>
            </div>
        </div>
    </div>
);
