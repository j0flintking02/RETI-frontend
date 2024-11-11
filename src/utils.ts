export const handleLogout = () => {
    localStorage.removeItem('loginDetails')
    return window.location.reload();
}