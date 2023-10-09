import { useState } from "react";
import { useEffect } from "react";


const useEkshopAllProducts = () => {
   const [allData, setAllData] = useState({});
   useEffect(() => {
      const url = 'https://api.ekshop.com.bd/product/list?store_id=63fa3f88b6638aa9975cb087&panel=store&limit=10&offset=1';
      const fetchData = async () => {
         try {
            const response = await fetch(url)
            if (!response.ok) {
               throw new Error("Network Response is not ok")
            }
            const jsonData = await response.json()
            setAllData(jsonData);
         } catch (error) {
            console.log("Error Fetching Data:", error)
         }
      }
      fetchData()

   }, []);

   return allData;
};

export default useEkshopAllProducts;