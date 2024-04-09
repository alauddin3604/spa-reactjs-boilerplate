import http from '@/http'

export default {
    getCsrfCookie() {
        return http.get('/sanctum/csrf-cookie')
    },
    login(data: object = {}) {
        return http.post('/api/login', data)
    },
    logout() {
        return http.post('/api/logout')
    },
}
