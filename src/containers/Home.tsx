import React from "react";

interface Homeprops {
  user: string;
}

const Home = (props: Homeprops) => (
  <div>
    <h2>Home Page</h2>
    <p>Hello {props.user}</p>
  </div>
);

export default Home;
