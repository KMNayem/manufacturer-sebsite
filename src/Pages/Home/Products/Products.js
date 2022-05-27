import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {

    const [products, setProducts] = useState([]);
    

    useEffect(() =>{
        fetch('http://localhost:5000/product')
        .then(res => res.json())
        .then(data => setProducts(data));
    } , [])

    return (
        <div className=' '>
            <h1 className='text-center mt-10 text-5xl  font-bold text-primary'><u>OUR Tools</u></h1>

            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20 px-12'>
                {
                    products.map(products => (
                        <Product
                        key={products.id} 
                        product ={products}
                        

                        >

                        </Product>
                    ))
                }
            </div>
        </div>
    );
};

export default Products;