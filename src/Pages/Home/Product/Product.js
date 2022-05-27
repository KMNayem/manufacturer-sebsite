import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Product = ({product}) => {
    
    const navigate = useNavigate();

    const {  _id, quantity, balance, picture, name, about } = product || {};

    const handleUseNavigate = (id) =>{
        navigate(`/product/${id}`);
    }
    


    return (
        <div class="card w-80 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={picture} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title text-2xl">{name}</h2>
                <h4>Quantity: {quantity}</h4>
                <h4>Price: ${balance}</h4>
            <small>
              {about?.length > 50 ? about.slice(0, 50) + "..." : about}
            </small>
                <div class="card-actions">
                    <button 
                    onClick={() => handleUseNavigate(_id)} 
                    class="btn btn-primary">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;