import axios from "axios";

const base_url = process.env.REACT_APP_BASE_URL
export const all_product = async (url) => {
   let link = base_url + url
   // console.log("link", link);
   let result = await axios.get(url)
   return result
}