import React from 'react';

const Aside = (props) => {
  return(
    <div className="aside">
      <div className="illustration" style={{backgroundImage: "url('https://images.unsplash.com/photo-1560454356-3412f0c59eb7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80')"}}></div>
      <img className="logo" src="https://images.unsplash.com/photo-1600749452141-9d43d07e6621?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="logo" />
      <h1>{props.garage}</h1>
      <p>Our garage is the best. Best prices in town, always on time, we are the best (and fictionnal).</p>
    </div>
    {props.children}
  );
};

export default Aside;
