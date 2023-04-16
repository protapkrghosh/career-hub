import React from 'react';
import './Blog.css';

const Blog = () => {
    return (

        <div className='blog'>
           <div className="containers">

               <div className="head-title">
                  <h1>1) When you should use context api ?</h1> 
                <p>Context API is a useful tool for managing state and sharing data between components in a more efficient and scalable way We should consider using the Context API in the following situations:</p>
                <li>When data that needs to be accessed by many components at different levels of the component tree, and you don't want to pass down props to every level.</li>
                <li>When data that needs to be updated in one place and the changes need to be reflected in all components that consume that data.</li>
                <li>When you want to avoid "prop drilling," which is the practice of passing props through many levels of the component tree, even when some of those levels don't need the data.</li>
               </div>

               <div className="head-title">
                  <h1>2) What is Custom Hook ? </h1> 
                  <p>A custom hook is a special JavaScript function whose name starts with 'use' and can be used to call other hooks. Let's take a look at some major differences between a custom React JS hook and React JS components: A custom hook does not require a specific signature.</p>
               </div>

               <div className="head-title">
                  <h1>3) What is UseRef and how is it work ? </h1> 
                  <p>useRef only returns one item. It returns an Object called current . When we initialize useRef we set the initial value: useRef . It's like doing this: const count . We can access the count by using count.current.
                  </p>
               </div>

               <div className="head-title">
                  <h1>4) What is UseMemo and how is it work ? </h1> 
                  <p>React has a built-in hook called useMemo that allows you to memoize expensive functions so that you can avoid calling them on every render. You simple pass in a function and an array of inputs and useMemo will only recompute the memoized value when one of the inputs has changed.</p>
               </div>

           </div>
        </div>
    );
};

export default Blog;