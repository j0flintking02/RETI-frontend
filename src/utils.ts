export const handleLogout = () => {
    localStorage.removeItem('loginDetails')
    return window.location.reload();
}


// Helper function to format the date to "distance from now"
export const formatDistanceToNow = (date) => {
    const seconds = Math.floor((Date.now() - date.getTime()) / 1000);
    let interval = seconds / 31536000;

    if (interval > 1) {
        return `${Math.floor(interval)} years ago`;
    }
    interval = seconds / 2592000;
    if (interval > 1) {
        return `${Math.floor(interval)} months ago`;
    }
    interval = seconds / 86400;
    if (interval > 1) {
        return `${Math.floor(interval)} days ago`;
    }
    interval = seconds / 3600;
    if (interval > 1) {
        return `${Math.floor(interval)} hours ago`;
    }
    interval = seconds / 60;
    if (interval > 1) {
        return `${Math.floor(interval)} minutes ago`;
    }
    return `${Math.floor(seconds)} seconds ago`;
};
export const loginDetails = () => {
    return JSON.parse(localStorage.getItem('loginDetails'));
}

export const userDetails = () => {
    return JSON.parse(localStorage.getItem('userDetails'));
}

export const getHeaders = () => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${loginDetails().access_token}`)
    return myHeaders;
}
