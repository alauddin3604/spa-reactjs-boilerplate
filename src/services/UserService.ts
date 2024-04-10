import http from '@/http'

export default {
    index(query: Record<string, string>) {
        const params = new URLSearchParams(query).toString()
        return http.get(`/api/users?${params}`)
    },
}