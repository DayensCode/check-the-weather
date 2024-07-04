import axios from 'axios';

const baseService = axios.create({baseURL: "http://api.weatherapi.com/v1/"});

// вопрос по interceptors
// baseService.interceptors.request.use(config => {
//      return config;
// },error => {
//      console.log(error);
// });


// baseService.interceptors.response.use(config => {
//      return config
// }, error => {
//      console.log(error.response.data)
// });

export default baseService;
