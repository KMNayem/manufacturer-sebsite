import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading/Loading';

const AddTools = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const { data: products, isLoading } = useQuery('products', () => fetch('https://calm-beyond-17543.herokuapp.com/product').then(res=>res.json()))


    const onSubmit = async data => {
        console.log(data) 
        toast.success('Your Tools updated Successfully !')  
            
    }
    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div className=''>
            <h1 className='text-center mt-7 text-3xl '><u>Add Tools</u></h1>

            <form onSubmit={handleSubmit(onSubmit)} className=''>

            <div class="form-control w-full max-w-xs">
                <label class="label">
                    <span class="label-text">Product Name</span>
                </label>
                <select {...register('specilly')} class="select w-full max-w-xs">
                    {
                        products.map(product => <option
                            key={product._id}
                            value= {product.name}
                        > {product.name}</option>)
                    }
                    
                </select>
            </div>

            <div class="form-control w-full max-w-xs">
                <label class="label">
                    <span class="label-text">Quantity</span>
                </label>
                <input 
                type="number" 
                required 
                placeholder="inter quantity" 
                class="input  input-bordered w-full max-w-xs"
                {...register("quantity", {
                    required: {
                        value: true,
                        message: 'quantity is required'
                    },
                    
                  })}
                />
                <label class="label">
                
                
                    
                </label>
            </div>

            
            {/* <div class="form-control w-full max-w-xs">
                <label class="label">
                    <span class="label-text">Password</span>
                </label>
                <input 
                type="password" 
                placeholder="Password" 
                class="input input-bordered w-full max-w-xs"
                {...register("password", {
                    required: {
                        value: true,
                        message: 'password is required'
                    },
                    minLength: {
                      value: 6,
                      message: 'password should be 6 character must' 
                    }
                  })}
                />
                <label class="label">
                {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">
                    {errors.password.message}</span>}
                {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-500">
                    {errors.password.message}</span>}
                    
                </label>
            </div> */}
            
                 <input className='btn btn-primary w-full max-w-xs' type="submit" value='Update' />
            </form>
        </div>
    );
};

export default AddTools;