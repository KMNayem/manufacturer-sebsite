import React from 'react';

const Subscribe = () => {
    return (
        <div>
            <div class="hero min-h-screen pl-28">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <div class="text-center lg:text-left">
      <h1 class="text-5xl font-bold text-primary">Subscribe Now!</h1>
      <p class="py-6">Is your deck looking a little worse for wear? Do you wish it was in better shape for entertaining or enjoying with your family. Subscribe Now!!</p>
    </div>
    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div class="card-body">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" class="input input-bordered" />
          
        </div>
        <div class="form-control mt-6">
          <button class="btn btn-primary">Subscribe</button>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Subscribe;