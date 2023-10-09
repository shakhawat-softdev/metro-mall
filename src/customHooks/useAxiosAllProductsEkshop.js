import useAxios from "./useAxios"

const useAxiosAllProductsEkshop = async () => {
   const [axiosBaseurl] = useAxios();
   const res = await axiosBaseurl.post("merchant/admin/findMerchantByStore");
   console.log("Hook Data", res);
   return res;
};

export default useAxiosAllProductsEkshop;