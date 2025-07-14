import React from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const StoreSelector = ({ selectedStore, onStoreChange, stores }) => {
    const currentStore = stores.find(store => store.name === selectedStore);

    return (
        <div className="relative">
            <select
                value={selectedStore}
                onChange={(e) => onStoreChange(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-xl px-4 py-3 pr-10 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 min-w-[200px]"
            >
                {stores.map((store) => (
                    <option key={store.id} value={store.name}>
                        {store.name} - {store.location}
                    </option>
                ))}
            </select>

            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <ChevronDownIcon className="w-4 h-4 text-gray-400" />
            </div>

            {/* Store Status Indicator */}
            <div className="absolute -top-1 -right-1">
                <div className={`w-2 h-2 rounded-full animate-pulse ${currentStore?.status === 'online' ? 'bg-green-500' : 'bg-red-500'}`} />
            </div>
        </div>
    );
};

export default StoreSelector;
