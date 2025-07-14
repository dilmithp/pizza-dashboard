import React, { useState } from 'react';
import { CameraIcon, SignalIcon, ShieldCheckIcon, PlayIcon } from '@heroicons/react/24/outline';

const CameraFeed = ({ store }) => {
    const [isOnline, setIsOnline] = useState(true);

    return (
        <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg">
                        <CameraIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h2 className="text-lg font-bold text-gray-900">Live Camera Feed</h2>
                        <p className="text-sm text-gray-500">{store} - Queue Area</p>
                    </div>
                </div>

                <div className="flex items-center space-x-2">
                    <div className={`w-3 h-3 rounded-full ${isOnline ? 'bg-green-500' : 'bg-red-500'} animate-pulse`}></div>
                    <span className={`text-sm font-medium ${isOnline ? 'text-green-600' : 'text-red-600'}`}>
            {isOnline ? 'Live' : 'Offline'}
          </span>
                </div>
            </div>

            {/* Camera Feed Display */}
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden mb-6" style={{ aspectRatio: '16/9' }}>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                        <div className="w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center mb-4 mx-auto">
                            <CameraIcon className="w-10 h-10 text-gray-400" />
                        </div>
                        <p className="text-gray-400 text-lg font-medium">Camera Feed Placeholder</p>
                        <p className="text-gray-500 text-sm mt-2">1080p • Privacy Compliant</p>
                        <button className="mt-4 inline-flex items-center space-x-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors duration-200">
                            <PlayIcon className="w-4 h-4" />
                            <span>Start Live Feed</span>
                        </button>
                    </div>
                </div>

                {/* Queue Detection Overlay */}
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-xl text-sm font-medium">
                    Queue Detected: 5 people
                </div>

                {/* Privacy Badge */}
                <div className="absolute top-4 right-4 bg-green-500/20 backdrop-blur-sm text-green-400 px-4 py-2 rounded-xl text-sm flex items-center space-x-2 font-medium">
                    <ShieldCheckIcon className="w-4 h-4" />
                    <span>Face Blur Active</span>
                </div>

                {/* Recording Indicator */}
                <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-white text-sm font-medium">LIVE</span>
                </div>
            </div>

            {/* Camera Stats */}
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4">
                    <div className="flex items-center space-x-3 mb-2">
                        <SignalIcon className="w-5 h-5 text-gray-600" />
                        <span className="text-sm font-medium text-gray-600">Signal Quality</span>
                    </div>
                    <p className="text-xl font-bold text-gray-900">Excellent</p>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                        <div className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full" style={{ width: '95%' }} />
                    </div>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4">
                    <div className="flex items-center space-x-3 mb-2">
                        <ShieldCheckIcon className="w-5 h-5 text-gray-600" />
                        <span className="text-sm font-medium text-gray-600">Data Retention</span>
                    </div>
                    <p className="text-xl font-bold text-gray-900">24h / 13m</p>
                    <p className="text-xs text-gray-500 mt-1">Frames / Detections</p>
                </div>
            </div>
        </div>
    );
};

export default CameraFeed;
