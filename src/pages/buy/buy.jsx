import React from "react";
import Nav from "../../components/Nav/Nav";
import { Text } from "../../components/text/text";
import { Link } from "react-router-dom";
import image1 from '../../components/assets/img/airpods.jpg'
import './buy.css'
const Buy = () => {
  return (
    <>
      <Nav />
      <div className="contain">
          {/* Checklist section */}
          <div className="section">
            <div className="row">
              <div className="col-md-4">
                <div className="checklist-card">
                <img src="https://via.placeholder.com/100" width="100px" height="100px" alt="Placeholder Image" className="img-fluid" />
                  <div className="card-body">
                    <Text as="p">Name: The Product Name</Text>
                    <Text as="p">Price: The Product Price</Text>
                    <Text as="p">Description: The Product Description</Text>
                    <Text as="p">Discount: The Product Sale</Text>
                    <Text as="p">Available Colors: The Product Color/Type</Text>
                    <Link to='/cart'>
                    <button className="text-center">Add To Cart</button>
                    </Link>
                  </div>
                </div>
              </div>
              </div>
              </div>
              </div>
    </>
  );
};

export default Buy;
