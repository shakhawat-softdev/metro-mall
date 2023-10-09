import { useEffect, useState } from 'react';

const useNewArrivalsProducts = () => {
    const[NewArrivalProducts, setNewArrivalProducts] = useState([])
    useEffect(() => {
        fetch("productList.json")
           .then(response => response.json())
           .then(data => {
            setNewArrivalProducts(data)
            })
     }, []);
return NewArrivalProducts || "No Data found";

};

export default useNewArrivalsProducts;