import React from "react";
import Nav from "../components/Nav";
import { Link, Outlet } from "react-router-dom";
import { items } from "../data/items";

const Home = () => {
  return (
    <>
      <Nav />
      <h1>Home</h1>
      <div>
        {items.map((x) => (
          <div key={x.id}>
            <Link to={`/contact/${x.id}`}>{x.name}</Link>
          </div>
        ))}
      </div>

      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Home;
