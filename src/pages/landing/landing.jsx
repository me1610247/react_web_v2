import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Text } from "../../components/text/text";
import { Heading } from "../../components/heading/Heading";
import Nav from "../../components/Nav/Nav";
import { Link } from "react-router-dom";
import "./landing.css"; // Import custom CSS file
import image1 from "../../components/assets/img/airpods.jpg";
import image2 from "../../components/assets/img/laptop.jpg";
import image3 from "../../components/assets/img/macbook.jpg";
import image4 from "../../components/assets/img/samsung.jpg";
import image5 from "../../components/assets/img/tv.jpg";
import image6 from "../../components/assets/img/watch.jpg";

const Landing = ({ products, setProducts }) => {
  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch("http://localhost:3001/product", {
          method: "GET",
        });
        const data = await response.json();

        console.log(data);

        setProducts(data);
      } catch (err) {
        console.log(err);
      }
    };

    getProducts();
  }, []);

  return (
    <>
      <div className="landing-container">
        {/* Header section */}
        <Nav />
        <p className="title">All Products</p>
        <div className="container-xs">
          {/* Checklist section */}
          <div className="checklist-section">
            <div className="row">
              {products.map((p) => (
                <div className="col-md-3" key={p._id}>
                  <div className="checklist-card">
                    <img
                      src={p.image}
                      alt=""
                      width="80px"
                      height="250px"
                      className="productImage"
                    />
                    <div className="card-body">
                      <h5 as="p">{p.name}</h5>
                      <Text as="p">{p.price}$</Text>
                      <Link to="/buy">
                        <button className="text-center">Buy</button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
