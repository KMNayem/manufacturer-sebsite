import React from 'react';

const About = () => {
    return (
        <div>
            <div class="card  bg-base-100 shadow-xl text-center">
                <div class="card-body">
                    <h2 class="card-title">1. How will you improve the performance of a React Application?</h2>
                    <p><span className='font-bold'>Answer:</span> In react application, there is lots of oppurnutity to make a full website.By default, React includes many helpful warnings. These warnings are very useful in development. However, they make React larger and slower so I need to make sure to use the production version when you deploy the app. I this process i need to practice and try to solve error first and make sure the code is working good. I need more practice to do my best.</p>               
                    <h2 class="card-title mt-5">2. What are the different ways to manage a state in a React application?</h2>
                    <p><span className='font-bold'>Answer:</span> There are four main types of state that manage my React apps which are:
                                                1.Local state
                                                2.Global state
                                                3.Server state
                                                4.URL state
                                                Local state is data we manage in one or another component.

Local state is most often managed in React using the useState hook.Global state is data we manage across multiple components.

Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.Data that comes from an external server that must be integrated with our UI state.Data that exists on our URLs, including the pathname and query parameters.
thats are the different state that manage the React app. 
</p>               
                    <h2 class="card-title mt-5">3. How does prototypical inheritance work?</h2>
                    <p><span className='font-bold'>Answer:</span> Prototypical is based in get and set method. We use object in getPrototype of in object. its a method to create or connected to onter object. It,s Basically works in the javascripts add method and propertis object as well.We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype.</p>               
                    <h2 class="card-title mt-5">4. What is a unit test? Why should write unit tests?</h2>
                    <p><span className='font-bold'>Answer:</span> Unit testing allow the a devloper to refactor code at a later date. Its make sure the module still works correctly. The procedure is to write test cases for all functions and methods so that whenever a change causes a fault. there are some type of unit test process, Create the test cases,
Review or rework,
Baseline,
Execute test cases.</p>               
                    <h2 class="card-title mt-5">5. You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                    <p><span className='font-bold'>Answer:</span>Prototypical is based in get and set method. We use object in getPrototype of in object. its a method to create or connected to onter object. It,s Basically works in the javascripts add method and propertis object as well.We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype. </p>               
                </div>
            </div>
        </div>
    );
};

export default About;