export const progressConfig = {
    position: "fixed",
    height: "5px",
    color: "#42b983",
};

export const getFetchConfigs = {
    headers: {
        "token": localStorage.getItem('access_token'),
        'Content-Type': 'application/json'
    }
}