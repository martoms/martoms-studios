const useFormatDate = () => {

    const readableDate = (date) => {
        return new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    };

    const readableDateAndTime = (date) => {
        return new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric' });
    };

    const timePassed = (date) => {

        const today = Date.now()
        const timeDiff = today - new Date(date).getTime()
        const timeLapsed = Math.round(timeDiff / (1000 * 60 * 60 * 24));
        
        if (timeLapsed <= 0) {
            return 'Just today';
        } else if (timeLapsed === 1) {
            return '1 day ago';
        } else if (timeLapsed < 7) {
            return `${timeLapsed} days ago`;
        } else if (timeLapsed < 14) {
            return '1 week ago';
        } else if (timeLapsed < 30) {
            const weeks = Math.round(timeLapsed / 7);
            return `${weeks} weeks ago`;
        } else if (timeLapsed < 60) {
            return '1 month ago';
        } else if (timeLapsed < 365) {
            const months = Math.round(timeLapsed / 30);
            return `${months} months ago`;
        } else if (timeLapsed < 730) {
            return '1 year ago';
        } else if (timeLapsed > 365) {
            const years = Math.round(timeLapsed / 365);
            return `${years} years ago`;
        } else {
            return 'On going';
        }
    };

    return { readableDate, readableDateAndTime, timePassed };
}
 
export default useFormatDate;