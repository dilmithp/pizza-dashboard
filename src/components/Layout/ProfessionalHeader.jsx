// src/components/Layout/ProfessionalHeader.jsx
import React, {
    useState,
    useEffect,
    useCallback,
    useRef,
    memo
} from 'react';
import {
    BellIcon,
    Cog6ToothIcon,
    ChevronDownIcon,
    UserCircleIcon,
    ArrowRightOnRectangleIcon,
    ChartBarIcon,
    MapPinIcon,
    ClockIcon
} from '@heroicons/react/24/outline';

/* ------------------- reusable outside-click hook ------------------- */
const useClickOutside = (handler) => {
    const ref = useRef(null);
    useEffect(() => {
        const listener = (e) =>
            ref.current && !ref.current.contains(e.target) && handler();
        window.addEventListener('mousedown', listener);
        return () => window.removeEventListener('mousedown', listener);
    }, [handler]);
    return ref;
};

/* --------------------------- sub-components ------------------------ */
const MenuCard = ({ children, width = 'w-80' }) => (
    <div
        className={`absolute right-0 mt-2 ${width} bg-white rounded-2xl shadow-strong border border-gray-200 z-50 animate-slide-down`}
    >
        {children}
    </div>
);

const StoreMenu = ({ stores, selectedStore, onStoreChange, onClose }) => {
    const cardRef = useClickOutside(onClose);
    return (
        <MenuCard ref={cardRef}>
            <div className="p-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Store Selection</h3>
            </div>
            <div className="p-4 space-y-3 max-h-64 overflow-y-auto scrollbar-thin">
                {stores.map((s) => (
                    <button
                        key={s.id}
                        onClick={() => {
                            onStoreChange(s.name);
                            onClose();
                        }}
                        className={`flex items-center justify-between w-full p-3 rounded-xl text-left transition ${
                            selectedStore === s.name
                                ? 'bg-gradient to-r from-primary-50 to-secondary-50 border-2 border-primary-200'
                                : 'bg-gray-50 hover:bg-gray-100'
                        }`}
                    >
                        <div className="flex items-center space-x-3">
              <span
                  className={`w-3 h-3 rounded-full ${
                      s.status === 'online' ? 'bg-status-success' : 'bg-status-error'
                  }`}
              />
                            <div>
                                <p className="font-medium text-gray-900">{s.name}</p>
                                <p className="text-xs text-gray-500">{s.location}</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-sm font-medium text-gray-900">
                                Cap&nbsp;{s.capacity}
                            </p>
                            {s.manager && (
                                <p className="text-xs text-gray-500">Mgr&nbsp;{s.manager}</p>
                            )}
                        </div>
                    </button>
                ))}
            </div>
        </MenuCard>
    );
};

const NotificationMenu = ({ alerts, onClose }) => {
    const cardRef = useClickOutside(onClose);
    return (
        <MenuCard ref={cardRef}>
            <div className="p-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
            </div>
            <div className="max-h-64 overflow-y-auto scrollbar-thin">
                {alerts.length === 0 ? (
                    <p className="p-4 text-center text-gray-500">No new notifications</p>
                ) : (
                    alerts.map(({ id, message, time, type }) => (
                        <div
                            key={id}
                            className="p-4 border-b last:border-b-0 hover:bg-gray-50 flex space-x-3"
                        >
              <span
                  className={`w-2 h-2 rounded-full mt-2 ${
                      type === 'error'
                          ? 'bg-status-error'
                          : type === 'warning'
                              ? 'bg-status-warning'
                              : type === 'success'
                                  ? 'bg-status-success'
                                  : 'bg-status-info'
                  }`}
              />
                            <div className="flex-1">
                                <p className="text-sm text-gray-900">{message}</p>
                                <p className="text-xs text-gray-500 mt-1 flex items-center">
                                    <ClockIcon className="w-3 h-3 mr-1" />
                                    {time}
                                </p>
                            </div>
                        </div>
                    ))
                )}
            </div>
            {alerts.length > 0 && (
                <button
                    className="w-full py-3 text-sm text-primary-600 hover:text-primary-700 font-medium border-t border-gray-200"
                    onClick={onClose}
                >
                    View All
                </button>
            )}
        </MenuCard>
    );
};

const UserMenu = ({ onClose }) => {
    const cardRef = useClickOutside(onClose);
    return (
        <MenuCard ref={cardRef} width="w-48">
            <button
                className="w-full flex items-center space-x-2 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 rounded-xl"
                onClick={() => {
                    /* settings action */
                    onClose();
                }}
            >
                <Cog6ToothIcon className="w-4 h-4" />
                <span>Settings</span>
            </button>
            <button
                className="w-full flex items-center space-x-2 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 rounded-xl"
                onClick={() => {
                    /* sign-out action */
                    onClose();
                }}
            >
                <ArrowRightOnRectangleIcon className="w-4 h-4" />
                <span>Sign&nbsp;Out</span>
            </button>
        </MenuCard>
    );
};

/* ------------------------- main header ---------------------------- */
const ProfessionalHeader = ({
                                selectedStore,
                                onStoreChange,
                                stores,
                                alerts = []
                            }) => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [open, setOpen] = useState({
        store: false,
        notify: false,
        user: false
    });

    /* ----- clock ticker ----- */
    useEffect(() => {
        const id = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(id);
    }, []);

    /* ----- memoized togglers ----- */
    const toggle = useCallback(
        (key) =>
            setOpen((p) => ({
                store: false,
                notify: false,
                user: false,
                [key]: !p[key]
            })),
        []
    );
    const closeAll = useCallback(
        () => setOpen({ store: false, notify: false, user: false }),
        []
    );

    const storeData = stores.find((s) => s.name === selectedStore);

    return (
        <header className="bg-white shadow-soft border-b border-gray-200 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* ---------- brand ---------- */}
                    <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl flex items-center justify-center shadow-brand">
                            <ChartBarIcon className="w-7 h-7 text-white" />
                        </div>
                        <div className="leading-tight">
                            <h1 className="text-2xl font-display font-bold text-gradient-primary">
                                Pizza Hut
                            </h1>
                            <p className="text-xs text-gray-500">System by SynthiaSync</p>
                        </div>
                    </div>

                    {/* ---------- centre clock & status ---------- */}
                    <div className="hidden md:flex items-center space-x-6">
                        <div className="text-center leading-tight">
                            <p className="text-lg font-mono font-semibold text-gray-900">
                                {currentTime.toLocaleTimeString()}
                            </p>
                            <p className="text-xs text-gray-500">
                                {currentTime.toLocaleDateString('en-US', {
                                    weekday: 'long',
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </p>
                        </div>
                        <div className="h-8 w-px bg-dashboard-border" />
                        <div className="flex items-center space-x-2">
                            <span className="w-2 h-2 bg-status-success rounded-full animate-pulse" />
                            <span className="text-sm font-medium text-status-success">
                Online
              </span>
                        </div>
                    </div>

                    {/* ---------- right controls ---------- */}
                    <div className="flex items-center space-x-4">
                        {/* store selector */}
                        <button
                            onClick={() => toggle('store')}
                            className="relative flex items-center space-x-3 bg-gradient-to-r from-brand-light to-secondary-50 border border-brand-primary/30 rounded-xl px-4 py-3 hover:from-brand-light hover:to-secondary-100 transition"
                            aria-haspopup="true"
                            aria-expanded={open.store}
                        >
                            <MapPinIcon className="w-5 h-5 text-brand-primary" />
                            <div className="text-left leading-tight">
                                <p className="text-sm font-semibold text-gray-900">
                                    {selectedStore}
                                </p>
                                <p className="text-xs text-gray-500">{storeData?.location}</p>
                            </div>
                            <ChevronDownIcon className="w-4 h-4 text-gray-400" />
                            <span className="absolute -top-1 -right-1 w-3 h-3 bg-status-success rounded-full border-2 border-white" />
                        </button>

                        {/* notifications */}
                        <button
                            onClick={() => toggle('notify')}
                            className="relative p-3 text-gray-400 hover:text-brand-primary hover:bg-brand-light rounded-xl transition focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2"
                            aria-label="notifications"
                            aria-haspopup="true"
                            aria-expanded={open.notify}
                        >
                            <BellIcon className="w-6 h-6" />
                            {alerts.length > 0 && (
                                <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-brand-accent to-gradient-accent-end rounded-full flex items-center justify-center text-xs text-white font-bold shadow-medium">
                  {alerts.length}
                </span>
                            )}
                        </button>

                        {/* user menu */}
                        <button
                            onClick={() => toggle('user')}
                            className="flex items-center space-x-2 p-2 text-gray-400 hover:text-brand-primary hover:bg-brand-light rounded-xl transition focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2"
                            aria-label="user menu"
                            aria-haspopup="true"
                            aria-expanded={open.user}
                        >
                            <UserCircleIcon className="w-8 h-8" />
                            <ChevronDownIcon className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>

            {/* ---------- dropdowns ---------- */}
            {open.store && (
                <StoreMenu
                    stores={stores}
                    selectedStore={selectedStore}
                    onStoreChange={onStoreChange}
                    onClose={closeAll}
                />
            )}
            {open.notify && (
                <NotificationMenu alerts={alerts} onClose={closeAll} />
            )}
            {open.user && <UserMenu onClose={closeAll} />}
        </header>
    );
};

export default memo(ProfessionalHeader);
