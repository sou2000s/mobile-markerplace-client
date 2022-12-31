import React from 'react';
import Products from './Products';

const Home = () => {
    return (
        <div>
            <section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img class="object-cover object-center rounded" alt="hero" src="https://i.ibb.co/yYPsQrv/436e2313-9384-42b5-935c-a926cab32a9d.png"/>
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
        <br class="hidden lg:inline-block"/>Buy Now
      </h1>
      <p class="mb-8 leading-relaxed">Find your favourite phone here.We are offering best phones at pocket friendly price.So don't think much just buy!</p>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Buy Now</button>
      </div>
    </div>
  </div>
</section>

<div>
    <Products/>
</div>
        </div>
    );
};

export default Home;