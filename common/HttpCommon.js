import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:5000/',
    timeout: 20000, // request timeout
})

// request interceptor
// instance.interceptors.request.use(
//     (config) => {
//         if (config.url !== '/api/v1/auth/signin' && config.headers) {
//             config.headers.Authorization = `Bearer ${localStorage.getItem(
//                 'accessToken'
//             )}`
//         }

//         // Do something before request is sent
//         return config
//     },
//     function (error) {
//         // console.log(error,'instance error')
//         // Do something with request error
//         return Promise.reject(error)
//     }
// )
export default instance
