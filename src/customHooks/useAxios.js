import axios from "axios"

const axiosBaseurl = axios.create({ baseUrl: "https://api.ekshop.com.bd/" });
const useAxios = () => {


   return axiosBaseurl;
}

export default useAxios;