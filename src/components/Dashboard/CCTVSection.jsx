import React, { useState } from 'react';
import {
    CameraIcon,
    SignalIcon,
    ShieldCheckIcon,
    PlayIcon,
    PauseIcon,
    ArrowsPointingOutIcon,
    Cog6ToothIcon,
    ExclamationTriangleIcon
} from '@heroicons/react/24/outline';

const CCTVSection = ({ store }) => {
    const [cameras, setCameras] = useState([
        {
            id: 1,
            name: 'Queue Area Camera',
            status: 'online',
            quality: 'excellent',
            recording: true,
            peopleDetected: 5,
            location: 'Counter Area'
        },
        {
            id: 2,
            name: 'Entrance Camera',
            status: 'online',
            quality: 'good',
            recording: true,
            peopleDetected: 3,
            location: 'Main Entrance'
        },
        {
            id: 3,
            name: 'Dining Area Camera',
            status: 'maintenance',
            quality: 'poor',
            recording: false,
            peopleDetected: 0,
            location: 'Seating Area'
        },
        {
            id: 4,
            name: 'Kitchen View Camera',
            status: 'online',
            quality: 'excellent',
            recording: true,
            peopleDetected: 2,
            location: 'Kitchen'
        }
    ]);

    const getStatusColor = (status) => {
        switch (status) {
            case 'online': return 'bg-status-success';
            case 'maintenance': return 'bg-status-warning';
            case 'offline': return 'bg-status-error';
            default: return 'bg-status-neutral';
        }
    };

    return (
        <div className="bg-white rounded-2xl shadow-soft p-6">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                    <div className="p-3 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl shadow-primary">
                        <CameraIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-gray-900">CCTV Monitoring</h2>
                        <p className="text-sm text-gray-500">{store} - Live Camera Feeds</p>
                    </div>
                </div>

                <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-status-success rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-status-success">All Systems Active</span>
                </div>
            </div>

            {/* Camera Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {cameras.map((camera) => (
                    <div key={camera.id} className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden">
                        {/* Camera Feed Placeholder */}
                        <div className="aspect-video flex items-center justify-center">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mb-3 mx-auto">
                                    <CameraIcon className="w-8 h-8 text-gray-400" />
                                </div>
                                <p className="text-gray-400 text-sm font-medium">{camera.name}</p>
                                <p className="text-gray-500 text-xs">{camera.location}</p>
                            </div>
                        </div>

                        {/* Camera Status Overlay */}
                        <div className="absolute top-3 left-3 flex items-center space-x-2">
                            <div className={`w-2 h-2 rounded-full ${getStatusColor(camera.status)} animate-pulse`}></div>
                            <span className="text-white text-xs font-medium bg-black/50 px-2 py-1 rounded">
                {camera.status.toUpperCase()}
              </span>
                        </div>

                        {/* Recording Indicator */}
                        {camera.recording && (
                            <div className="absolute top-3 right-3 flex items-center space-x-1 bg-accent-500/80 px-2 py-1 rounded text-white text-xs">
                                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                                <span>REC</span>
                            </div>
                        )}

                        {/* People Detection */}
                        <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-sm">
                            👥 {camera.peopleDetected} people detected
                        </div>

                        {/* Privacy Badge */}
                        <div className="absolute bottom-3 right-3 bg-status-success/20 backdrop-blur-sm text-status-success px-3 py-1 rounded-lg text-sm flex items-center space-x-1">
                            <ShieldCheckIcon className="w-4 h-4" />
                            <span>Privacy Protected</span>
                        </div>

                        {/* Camera Controls */}
                        <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-200 flex items-center justify-center space-x-4">
                            <button className="p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors">
                                {camera.recording ? <PauseIcon className="w-5 h-5 text-white" /> : <PlayIcon className="w-5 h-5 text-white" />}
                            </button>
                            <button className="p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors">
                                <ArrowsPointingOutIcon className="w-5 h-5 text-white" />
                            </button>
                            <button className="p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors">
                                <Cog6ToothIcon className="w-5 h-5 text-white" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Camera Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-4">
                    <div className="flex items-center space-x-3 mb-2">
                        <CameraIcon className="w-5 h-5 text-primary-600" />
                        <span className="text-sm font-medium text-gray-700">Active Cameras</span>
                    </div>
                    <p className="text-2xl font-bold text-gray-900">
                        {cameras.filter(c => c.status === 'online').length}/{cameras.length}
                    </p>
                </div>

                <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-xl p-4">
                    <div className="flex items-center space-x-3 mb-2">
                        <SignalIcon className="w-5 h-5 text-secondary-600" />
                        <span className="text-sm font-medium text-gray-700">Signal Quality</span>
                    </div>
                    <p className="text-2xl font-bold text-gray-900">95%</p>
                </div>

                <div className="bg-gradient-to-br from-accent-50 to-accent-100 rounded-xl p-4">
                    <div className="flex items-center space-x-3 mb-2">
                        <ShieldCheckIcon className="w-5 h-5 text-accent-600" />
                        <span className="text-sm font-medium text-gray-700">Data Retention</span>
                    </div>
                    <p className="text-lg font-bold text-gray-900">24h / 13m</p>
                    <p className="text-xs text-gray-500">Frames / Detections</p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4">
                    <div className="flex items-center space-x-3 mb-2">
                        <ExclamationTriangleIcon className="w-5 h-5 text-green-600" />
                        <span className="text-sm font-medium text-gray-700">Total Detected</span>
                    </div>
                    <p className="text-2xl font-bold text-gray-900">
                        {cameras.reduce((sum, camera) => sum + camera.peopleDetected, 0)}
                    </p>
                    <p className="text-xs text-gray-500">People in view</p>
                </div>
            </div>
        </div>
    );
};

export default CCTVSection;
