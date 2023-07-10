import axios from "axios";
import queryString from "query-string";

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_BASE_URL as string,
  headers: {
    'Content-Type': 'application/json',
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use((config)=>{
    return config
})

axiosClient.interceptors.response.use((response)=>{
    if (response && response.data){
        return response
    }
    return response
}, (err)=>{
    throw err
})

export {
    axiosClient
}