import React, { useState, useEffect } from 'react';
import {
    BellIcon,
    Cog6ToothIcon,
    ChevronDownIcon,
    UserCircleIcon,
    ArrowRightOnRectangleIcon,
    ChartBarIcon,
    MapPinIcon,
    ClockIcon,
    Bars3Icon
} from '@heroicons/react/24/outline';

const ProfessionalHeader = ({ selectedStore, onStoreChange, stores, alerts = [] }) => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [showUserMenu, setShowUserMenu] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);
    const [showStoreInfo, setShowStoreInfo] = useState(false);
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const currentStore = stores.find(store => store.name === selectedStore);

    return (
        <header className="bg-white shadow-soft border-b border-gray-200 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
                {/* Main Header Row */}
                <div className="flex justify-between items-center h-16 sm:h-20">
                    {/* Logo & Brand - Mobile Optimized */}
                    <div className="flex items-center space-x-2 sm:space-x-4 flex-1 min-w-0">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-primary flex-shrink-0">
                            <ChartBarIcon className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                        </div>
                        <div className="min-w-0 flex-1">
                            <h1 className="text-lg sm:text-2xl font-display font-bold text-gradient-primary truncate">
                                Analytics Dashboard
                            </h1>
                            {/*<p className="text-xs sm:text-sm text-gray-500 hidden sm:block">*/}
                            {/*    System By SynthiaSync*/}
                            {/*</p>*/}
                        </div>
                    </div>

                    {/* Desktop Center - Time & Status */}
                    <div className="hidden lg:flex items-center space-x-6 lg:mr-10">
                        <div className="text-center">
                            <div className="text-lg font-mono font-semibold text-gray-900">
                                {currentTime.toLocaleTimeString()}
                            </div>
                            <div className="text-xs text-gray-500">
                                {currentTime.toLocaleDateString('en-US', {
                                    weekday: 'long',
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </div>
                        </div>
                        <div className="h-8 w-px bg-gray-200"></div>
                        <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-status-success rounded-full animate-pulse"></div>
                            <span className="text-sm font-medium text-status-success">System Online</span>
                        </div>
                    </div>

                    {/* Desktop Controls */}
                    <div className="hidden md:flex items-center space-x-3">
                        {/* Store Selector - Desktop */}
                        <div className="relative">
                            <div
                                className="flex items-center space-x-2 bg-gradient-to-r from-primary-50 to-secondary-50 border border-primary-200 rounded-xl px-3 py-2 cursor-pointer hover:from-primary-100 hover:to-secondary-100 transition-all duration-200"
                                onClick={() => setShowStoreInfo(!showStoreInfo)}
                            >
                                <MapPinIcon className="w-4 h-4 text-primary-600" />
                                <div className="text-left">
                                    <div className="text-sm font-semibold text-gray-900">{selectedStore}</div>
                                    <div className="text-xs text-gray-500">{currentStore?.location}</div>
                                </div>
                                <ChevronDownIcon className="w-4 h-4 text-gray-400" />
                            </div>

                            {/* Store Status Indicator */}
                            <div className="absolute -top-1 -right-1">
                                <div className="w-3 h-3 bg-status-success rounded-full border-2 border-white animate-pulse"></div>
                            </div>

                            {/* Store Dropdown */}
                            {showStoreInfo && (
                                <div className="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-strong border border-gray-200 z-50 animate-slide-down">
                                    <div className="p-4 border-b border-gray-200">
                                        <h3 className="text-lg font-semibold text-gray-900">Store Selection</h3>
                                    </div>
                                    <div className="p-4 space-y-3">
                                        {stores.map((store) => (
                                            <div
                                                key={store.id}
                                                onClick={() => {
                                                    onStoreChange(store.name);
                                                    setShowStoreInfo(false);
                                                }}
                                                className={`p-3 rounded-xl cursor-pointer transition-all duration-200 ${
                                                    selectedStore === store.name
                                                        ? 'bg-gradient-to-r from-primary-50 to-secondary-50 border-2 border-primary-200'
                                                        : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
                                                }`}
                                            >
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center space-x-3">
                                                        <div className={`w-3 h-3 rounded-full ${store.status === 'online' ? 'bg-status-success' : 'bg-status-error'}`}></div>
                                                        <div>
                                                            <div className="font-medium text-gray-900">{store.name}</div>
                                                            <div className="text-sm text-gray-500">{store.location}</div>
                                                        </div>
                                                    </div>
                                                    <div className="text-right">
                                                        <div className="text-sm font-medium text-gray-900">Capacity: {store.capacity}</div>
                                                        <div className="text-xs text-gray-500">Manager: {store.manager}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Notifications - Desktop */}
                        <div className="relative">
                            <button
                                onClick={() => setShowNotifications(!showNotifications)}
                                className="relative p-2 text-gray-400 hover:text-primary-500 hover:bg-primary-50 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                            >
                                <BellIcon className="w-6 h-6" />
                                {alerts.length > 0 && (
                                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-accent-500 to-accent-600 rounded-full flex items-center justify-center text-xs text-white font-bold shadow-medium animate-pulse">
                                        {alerts.length}
                                    </span>
                                )}
                            </button>

                            {/* Notifications Dropdown */}
                            {showNotifications && (
                                <div className="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-strong border border-gray-200 z-50 animate-slide-down">
                                    <div className="p-4 border-b border-gray-200">
                                        <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
                                    </div>
                                    <div className="max-h-64 overflow-y-auto">
                                        {alerts.length === 0 ? (
                                            <div className="p-4 text-center text-gray-500">
                                                No new notifications
                                            </div>
                                        ) : (
                                            alerts.map((alert, index) => (
                                                <div key={index} className="p-4 border-b border-gray-100 last:border-b-0 hover:bg-gray-50">
                                                    <div className="flex items-start space-x-3">
                                                        <div className={`w-2 h-2 rounded-full mt-2 ${
                                                            alert.type === 'error' ? 'bg-status-error' :
                                                                alert.type === 'warning' ? 'bg-status-warning' :
                                                                    alert.type === 'success' ? 'bg-status-success' : 'bg-status-info'
                                                        }`}></div>
                                                        <div className="flex-1">
                                                            <p className="text-sm text-gray-900">{alert.message}</p>
                                                            <p className="text-xs text-gray-500 mt-1 flex items-center">
                                                                <ClockIcon className="w-3 h-3 mr-1" />
                                                                {alert.time}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        )}
                                    </div>
                                    {alerts.length > 0 && (
                                        <div className="p-4 border-t border-gray-200">
                                            <button className="w-full text-center text-sm text-primary-600 hover:text-primary-700 font-medium">
                                                View All Notifications
                                            </button>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>

                        {/* User Menu - Desktop */}
                        <div className="relative">
                            <button
                                onClick={() => setShowUserMenu(!showUserMenu)}
                                className="flex items-center space-x-2 p-2 text-gray-400 hover:text-primary-500 hover:bg-primary-50 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                            >
                                <UserCircleIcon className="w-7 h-7 lg:w-9 lg:h-9" />
                                <ChevronDownIcon className="w-4 h-4" />
                            </button>

                            {/* User Dropdown */}
                            {showUserMenu && (
                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-strong border border-gray-200 z-50 animate-slide-down">
                                    <div className="p-2">
                                        <button className="w-full flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-xl transition-colors">
                                            <Cog6ToothIcon className="w-4 h-4" />
                                            <span>Settings</span>
                                        </button>
                                        <button className="w-full flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-xl transition-colors">
                                            <ArrowRightOnRectangleIcon className="w-4 h-4" />
                                            <span>Sign Out</span>
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setShowMobileMenu(!showMobileMenu)}
                            className="p-2 text-gray-400 hover:text-primary-500 hover:bg-primary-50 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                        >
                            <Bars3Icon className="w-6 h-6" />
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Panel */}
                {showMobileMenu && (
                    <div className="md:hidden border-t border-gray-200 bg-white">
                        <div className="px-2 py-3 space-y-3">
                            {/* Mobile Store Selector */}
                            <div className="relative">
                                <div
                                    className="flex items-center justify-between w-full bg-gradient-to-r from-primary-50 to-secondary-50 border border-primary-200 rounded-xl px-3 py-3 cursor-pointer"
                                    onClick={() => setShowStoreInfo(!showStoreInfo)}
                                >
                                    <div className="flex items-center space-x-3">
                                        <MapPinIcon className="w-5 h-5 text-primary-600" />
                                        <div>
                                            <div className="text-sm font-semibold text-gray-900">{selectedStore}</div>
                                            <div className="text-xs text-gray-500">{currentStore?.location}</div>
                                        </div>
                                    </div>
                                    <ChevronDownIcon className="w-4 h-4 text-gray-400" />
                                </div>

                                {/* Mobile Store Dropdown */}
                                {showStoreInfo && (
                                    <div className="mt-2 w-full bg-white rounded-xl shadow-strong border border-gray-200 z-50">
                                        <div className="p-3 space-y-2">
                                            {stores.map((store) => (
                                                <div
                                                    key={store.id}
                                                    onClick={() => {
                                                        onStoreChange(store.name);
                                                        setShowStoreInfo(false);
                                                        setShowMobileMenu(false);
                                                    }}
                                                    className={`p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                                                        selectedStore === store.name
                                                            ? 'bg-gradient-to-r from-primary-50 to-secondary-50 border border-primary-200'
                                                            : 'bg-gray-50 hover:bg-gray-100'
                                                    }`}
                                                >
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex items-center space-x-3">
                                                            <div className={`w-3 h-3 rounded-full ${store.status === 'online' ? 'bg-status-success' : 'bg-status-error'}`}></div>
                                                            <div>
                                                                <div className="font-medium text-gray-900 text-sm">{store.name}</div>
                                                                <div className="text-xs text-gray-500">{store.location}</div>
                                                            </div>
                                                        </div>
                                                        <div className="text-right">
                                                            <div className="text-xs font-medium text-gray-900">Cap: {store.capacity}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Mobile Time & Status */}
                            <div className="flex items-center justify-between bg-gray-50 rounded-xl px-3 py-3">
                                <div>
                                    <div className="text-sm font-mono font-semibold text-gray-900">
                                        {currentTime.toLocaleTimeString()}
                                    </div>
                                    <div className="text-xs text-gray-500">
                                        {currentTime.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-status-success rounded-full animate-pulse"></div>
                                    <span className="text-xs font-medium text-status-success">Online</span>
                                </div>
                            </div>

                            {/* Mobile Action Buttons */}
                            <div className="flex items-center justify-around bg-gray-50 rounded-xl py-3">
                                <button
                                    onClick={() => {
                                        setShowNotifications(!showNotifications);
                                        setShowMobileMenu(false);
                                    }}
                                    className="relative flex flex-col items-center space-y-1 p-2 text-gray-600 hover:text-primary-500"
                                >
                                    <BellIcon className="w-6 h-6" />
                                    <span className="text-xs">Alerts</span>
                                    {alerts.length > 0 && (
                                        <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent-500 rounded-full flex items-center justify-center text-xs text-white font-bold">
                                            {alerts.length}
                                        </span>
                                    )}
                                </button>

                                <button
                                    onClick={() => {
                                        setShowUserMenu(!showUserMenu);
                                        setShowMobileMenu(false);
                                    }}
                                    className="flex flex-col items-center space-y-1 p-2 text-gray-600 hover:text-primary-500"
                                >
                                    <Cog6ToothIcon className="w-6 h-6" />
                                    <span className="text-xs">Settings</span>
                                </button>

                                <button className="flex flex-col items-center space-y-1 p-2 text-gray-600 hover:text-primary-500">
                                    <UserCircleIcon className="w-6 h-6" />
                                    <span className="text-xs">Profile</span>
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default ProfessionalHeader;
