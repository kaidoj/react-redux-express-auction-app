const setToken = (token) => {
    sessionStorage.setItem('token', token)
    return token
}

const getToken = () => {
    return sessionStorage.getItem('token')
}

const clearToken = () => {
    sessionStorage.setItem('token', null)
}

const setUser = (user) => {
    sessionStorage.setItem('user', JSON.stringify(user))
    return user
}

const getUser = () => {
    return JSON.parse(sessionStorage.getItem('user'))
}

const clearUser = () => {
    sessionStorage.setItem('user', null)
}

const resetSession = () => {
    sessionStorage.clear()
}

export {
    setToken,
    getToken,
    setUser,
    getUser,
    clearToken,
    clearUser,
    resetSession
}