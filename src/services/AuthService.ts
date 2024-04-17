import http from '@/http'

export default {
    getCsrfCookie() {
        return http.get('/sanctum/csrf-cookie')
    },
    login(data: {email: string, password: string}) {
        return http.post('/api/login', data)
    },
    logout() {
        return http.post('/api/logout')
    },
}
