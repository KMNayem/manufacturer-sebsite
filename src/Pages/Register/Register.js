import React from 'react';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading/Loading';
import { Link } from 'react-router-dom';

const Register = () => {

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);


      let signInError;



      if(gLoading || gLoading){
          return <Loading></Loading>
      }

      if(error || gError){
          signInError= <p className='text-red-500'><small> {error?.message || gError?.message}</small></p>
      }

    if(user || gUser){
        console.log(user || gUser);
    }


    const onSubmit = data => {
        console.log(data)
        createUserWithEmailAndPassword(data.email, data.password);
    };

    return (
        <div className='flex h-screen justify-center items-center'>
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body justify-center items-center">
             <h2 className="font-bold text-center text-3xl text-primary">Register !</h2>
             <form onSubmit={handleSubmit(onSubmit)}>

            <div class="form-control w-full max-w-xs">
                <label class="label">
                    <span class="label-text">Name</span>
                </label>
                <input 
                type="text" 
                placeholder="Your name" 
                class="input input-bordered w-full max-w-xs"
                {...register("name", {
                    required: {
                        value: true,
                        message: 'Name is required'
                    },
                    
                  })}
                />
                <label class="label">
                {errors.name?.type === 'required' && <span class="label-text-alt text-red-500">
                    {errors.email.message}</span>}
                
                    
                </label>
            </div>

            <div class="form-control w-full max-w-xs">
                <label class="label">
                    <span class="label-text">Email</span>
                </label>
                <input 
                type="email" 
                placeholder="Your Email" 
                class="input input-bordered w-full max-w-xs"
                {...register("email", {
                    required: {
                        value: true,
                        message: 'Email is required'
                    },
                    pattern: {
                      value: /[A-Za-z]{2,3}/,
                      message: 'error message' 
                    }
                  })}
                />
                <label class="label">
                {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">
                    {errors.email.message}</span>}
                {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">
                    {errors.email.message}</span>}
                    
                </label>
            </div>
            <div class="form-control w-full max-w-xs">
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
            </div>
            {signInError}
                 <input className='btn btn-primary w-full max-w-xs' type="submit" value='Register' />
            </form>
                  <p><small>Already have an account? <Link className='text-primary' to='/login'>Go to Login</Link></small></p>
             <div className="divider">OR</div>
             <button
                onClick={() => signInWithGoogle()}
              className="btn btn-outline btn-primary">Login with Google</button>
            </div>
        </div>
    </div>
    );
};

export default Register;