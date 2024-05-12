import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import Nav from "../../components/Nav/Nav"
const Admin=()=>{
    return(
       <>
       <Nav/>
       <div className="container-mox">
        {/* Checklist section */}
        <div className="section">
          <div className="row">
            <div className="col-md-4">
              <div className="card">
              <p className="text-center">Admin Management</p>
                <div className="card-body">
                  <Link to='/show_order'>
                  <button className="text-center btn btn-primary my-3">Show Orders</button>
                  </Link>
                  <Link to='/add'>
                  <button className="text-center btn btn-primary my-3">Add Product</button>
                  </Link>
                  <Link to='/show_product'>
                  <button className="text-center btn btn-primary my-3">Show All Products</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
       </>
    )
}
export default Admin