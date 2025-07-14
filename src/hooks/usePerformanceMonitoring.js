import { useEffect, useRef } from 'react';

export const usePerformanceMonitoring = (componentName) => {
    const renderCount = useRef(0);
    const startTime = useRef(performance.now());

    useEffect(() => {
        renderCount.current += 1;
        const endTime = performance.now();
        const renderTime = endTime - startTime.current;

        if (process.env.NODE_ENV === 'development') {
            console.log(`${componentName} rendered ${renderCount.current} times in ${renderTime.toFixed(2)}ms`);
        }

        startTime.current = performance.now();
    });

    return { renderCount: renderCount.current };
};

export const useMemoryMonitoring = () => {
    useEffect(() => {
        const interval = setInterval(() => {
            if (performance.memory) {
                const { usedJSHeapSize, totalJSHeapSize } = performance.memory;
                const memoryUsage = (usedJSHeapSize / totalJSHeapSize * 100).toFixed(2);

                if (memoryUsage > 80) {
                    console.warn(`High memory usage: ${memoryUsage}%`);
                }
            }
        }, 60000); // Check every minute

        return () => clearInterval(interval);
    }, []);
};
