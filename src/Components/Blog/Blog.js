import React from "react";
import './Blog.css'

const Blog = () => {
  return (
    <div>
      <h1>Blog:</h1>
      <h3>How react works?</h3>
      <p>
        React is a declarative, efficient, and flexible JavaScript library for
        building user interfaces. 'V' denotes the view in MVC. ReactJS is an
        open-source, component-based front end library responsible only for the
        view layer of the application. It is maintained by Facebook
      </p>
      <h3>Props vs State!</h3>
      <p>
        Simply put, State is the local state of the component which cannot be
        accessed and modified outside of the component. It's equivalent to local
        variables in a function. Props, on the other hand, make components
        reusable by giving components the ability to receive data from their
        parent component in the form of props.
      </p>
      <h3>Why is useEffect used?</h3>
      <p>
        The motivation behind the introduction of useEffect Hook is to eliminate
        the side-effects of using class-based components. For example, tasks
        like updating the DOM, fetching data from API end-points, setting up
        subscriptions or timers, etc can be lead to unwarranted
      </p>
    </div>
  );
};

export default Blog;
