import moment from 'moment';

export const formatDate = (date) => {
    return moment(date).format('MMM DD, YYYY');
};

export const formatTime = (date) => {
    return moment(date).format('HH:mm:ss');
};

export const formatDateTime = (date) => {
    return moment(date).format('MMM DD, YYYY HH:mm');
};

export const getTimeAgo = (date) => {
    return moment(date).fromNow();
};

export const isToday = (date) => {
    return moment(date).isSame(moment(), 'day');
};

export const isThisWeek = (date) => {
    return moment(date).isSame(moment(), 'week');
};

export const getWeekDay = (date) => {
    return moment(date).format('dddd');
};

export const getCurrentHour = () => {
    return moment().hour();
};

export const isPeakHour = (hour) => {
    // Lunch rush: 12-14, Dinner rush: 18-20
    return (hour >= 12 && hour <= 14) || (hour >= 18 && hour <= 20);
};
