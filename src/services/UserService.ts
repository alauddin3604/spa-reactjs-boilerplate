import http from '@/http'

export default {
    index() {
        return http.get('/api/users')
    },
}