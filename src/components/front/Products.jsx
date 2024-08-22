import React, { useEffect, useState } from "react";
import { fetchBooks } from '../../api/api';
import ProductSection from "../common/ProductSection";
const Products = () => {
    const [products, setProducts] = useState([]); 

    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await fetchBooks();
                console.log(response);
                setProducts(response);
            } catch (error) {
            } finally {
            }
        };

        getProducts();
    }, []);

    return (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 py-5 mb-5">
            <ProductSection products={products} />
        </div>
    )
}

export default Products;