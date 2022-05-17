const TOKEN_KEY = 'jwt';
/**
 * For local Storage param
 * @param token
 * @param mail
 */
export const login = (token,mail) => {
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem('email',mail);
}

export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem('email')
}

export const isLogin = () => {
    if (localStorage.getItem(TOKEN_KEY)) {
        return true;
    }
    return false;
}

export const getEmail = ()=>{
    return localStorage.getItem('email');
}