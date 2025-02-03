export default {
    backend: {
        base_url: 'http://localhost:3001/api/v1',
        endpoints: {
            user: {
                signin: '/user/login',
                signup: '/user/signup',
                profile: '/user/profile'
            }
        }
    }
}