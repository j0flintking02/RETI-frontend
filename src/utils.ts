export const handleLogout = () => {
    localStorage.removeItem('loginDetails')
    return window.location.reload();
}

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