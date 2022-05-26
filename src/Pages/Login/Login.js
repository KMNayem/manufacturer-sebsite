import React from 'react';
import auth from '../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';



const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    if(user){
        console.log(user);
    }

    return (
        <div className='flex h-80 justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body justify-center items-center">
                 <h2 className="font-bold text-center text-3xl text-primary">LogIn !</h2>
                 <input type="text" placeholder="Type here" className="input input-bordered input-primary w-64  max-w-xs" />
                 <input type="text" placeholder="Type here" className="input input-bordered input-primary w-64  max-w-xs" />

                 <div className="divider">OR</div>
                 <button
                    onClick={() => signInWithGoogle()}
                  className="btn btn-outline btn-primary">Login with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;