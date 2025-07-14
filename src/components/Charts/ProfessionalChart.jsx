import React, { useState, useMemo } from 'react';
import {
    LineChart,
    Line,
    AreaChart,
    Area,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from 'recharts';
import {
    ChartBarIcon,
    ArrowTrendingUpIcon,
    EyeIcon,
    Cog6ToothIcon
} from '@heroicons/react/24/outline';

const ProfessionalChart = ({
                               data,
                               title,
                               subtitle,
                               type = 'line',
                               height = 400,
                               showLegend = true,
                               showGrid = true,
                               colors = ['#915490', '#3b82f6', '#10b981', '#f59e0b'],
                               onTypeChange
                           }) => {
    const [chartType, setChartType] = useState(type);
    const [showSettings, setShowSettings] = useState(false);

    const chartConfig = useMemo(() => ({
        line: { component: LineChart, icon: ArrowTrendingUpIcon },
        area: { component: AreaChart, icon: ChartBarIcon },
        bar: { component: BarChart, icon: ChartBarIcon }
    }), []);

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-white p-4 rounded-xl shadow-strong border border-gray-100">
                    <p className="font-semibold text-gray-900 mb-2">{label}</p>
                    {payload.map((entry, index) => (
                        <div key={index} className="flex items-center space-x-2 text-sm">
                            <div
                                className="w-3 h-3 rounded-full"
                                style={{ backgroundColor: entry.color }}
                            ></div>
                            <span className="text-gray-600">{entry.dataKey}:</span>
                            <span className="font-medium text-gray-900">{entry.value}</span>
                        </div>
                    ))}
                </div>
            );
        }
        return null;
    };

    const renderChart = () => {
        const ChartComponent = chartConfig[chartType].component;
        const commonProps = {
            data,
            margin: { top: 20, right: 30, left: 20, bottom: 20 }
        };

        switch (chartType) {
            case 'line':
                return (
                    <ChartComponent {...commonProps}>
                        {showGrid && <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />}
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
                        {showLegend && <Legend />}
                        {Object.keys(data[0] || {}).filter(key => key !== 'time').map((key, index) => (
                            <Line
                                key={key}
                                type="monotone"
                                dataKey={key}
                                stroke={colors[index % colors.length]}
                                strokeWidth={3}
                                dot={{ fill: colors[index % colors.length], strokeWidth: 2, r: 5 }}
                                activeDot={{ r: 7, stroke: colors[index % colors.length], strokeWidth: 2 }}
                            />
                        ))}
                    </ChartComponent>
                );

            case 'area':
                return (
                    <ChartComponent {...commonProps}>
                        {showGrid && <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />}
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
                        {showLegend && <Legend />}
                        <defs>
                            <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor={colors[0]} stopOpacity={0.4}/>
                                <stop offset="95%" stopColor={colors[0]} stopOpacity={0.1}/>
                            </linearGradient>
                        </defs>
                        <Area
                            type="monotone"
                            dataKey={Object.keys(data[0] || {}).filter(key => key !== 'time')[0]}
                            stroke={colors[0]}
                            fill="url(#colorGradient)"
                            strokeWidth={3}
                        />
                    </ChartComponent>
                );

            case 'bar':
                return (
                    <ChartComponent {...commonProps}>
                        {showGrid && <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />}
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
                        {showLegend && <Legend />}
                        {Object.keys(data[0] || {}).filter(key => key !== 'time').map((key, index) => (
                            <Bar
                                key={key}
                                dataKey={key}
                                fill={colors[index % colors.length]}
                                radius={[4, 4, 0, 0]}
                            />
                        ))}
                    </ChartComponent>
                );

            default:
                return null;
        }
    };

    return (
        <div className="bg-white rounded-2xl shadow-lg p-6 animate-fade-in">
            {/* Chart Header */}
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                    {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
                </div>

                <div className="flex items-center space-x-2">
                    {/* Chart Type Selector */}
                    <div className="flex items-center space-x-1 bg-gray-100 rounded-xl p-1">
                        {Object.entries(chartConfig).map(([type, config]) => {
                            const IconComponent = config.icon;
                            return (
                                <button
                                    key={type}
                                    onClick={() => {
                                        setChartType(type);
                                        onTypeChange?.(type);
                                    }}
                                    className={`p-2 rounded-lg transition-all duration-200 ${
                                        chartType === type
                                            ? 'bg-primary-500 text-white shadow-brand'
                                            : 'text-gray-600 hover:bg-gray-200'
                                    }`}
                                >
                                    <IconComponent className="w-4 h-4" />
                                </button>
                            );
                        })}
                    </div>

                    {/* Settings */}
                    <button
                        onClick={() => setShowSettings(!showSettings)}
                        className="p-2 text-gray-600 hover:text-primary-500 hover:bg-gray-50 rounded-lg transition-all duration-200"
                    >
                        <Cog6ToothIcon className="w-4 h-4" />
                    </button>
                </div>
            </div>

            {/* Chart */}
            <div className="relative">
                <div style={{ height: `${height}px` }} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-4">
                    <ResponsiveContainer width="100%" height="100%">
                        {renderChart()}
                    </ResponsiveContainer>
                </div>

                {/* Settings Panel */}
                {showSettings && (
                    <div className="absolute top-4 right-4 bg-white rounded-xl shadow-strong border border-gray-200 p-4 z-10 animate-scale-in">
                        <h4 className="text-sm font-semibold text-gray-900 mb-3">Chart Settings</h4>
                        <div className="space-y-2">
                            <label className="flex items-center space-x-2 text-sm">
                                <input
                                    type="checkbox"
                                    checked={showGrid}
                                    onChange={(e) => setShowGrid(e.target.checked)}
                                    className="rounded border-gray-300"
                                />
                                <span>Show Grid</span>
                            </label>
                            <label className="flex items-center space-x-2 text-sm">
                                <input
                                    type="checkbox"
                                    checked={showLegend}
                                    onChange={(e) => setShowLegend(e.target.checked)}
                                    className="rounded border-gray-300"
                                />
                                <span>Show Legend</span>
                            </label>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProfessionalChart;
