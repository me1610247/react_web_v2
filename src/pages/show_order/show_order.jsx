import React, { useState } from "react";
import Nav from "../../components/Nav/Nav";

const Show_Order = () => {
    const [showOrderDetails, setShowOrderDetails] = useState(false);

    const handleShowOrderDetails = () => {
        setShowOrderDetails(true);
        // Fetch order details and set state accordingly
    };

    return (
        <>
            <Nav />
            <div className="container-mox">
        {/* Checklist section */}
        <div className="section">
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <button className="text-center btn btn-primary my-5" onClick={handleShowOrderDetails}>Show Users Orders</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
      {showOrderDetails && <OrderDetailsTable />}
      </div>
        </>
    );
};

const OrderDetailsTable = () => {
    // Example order details data
    const orderDetailsData = [
        {
            userName: "Mohamed Emad",
            address: " Down Town, Cairo, Egypt",
            orderItems: [
                { id: 1, name: "Iphone", quantity: 1, price: 100 },
                { id: 2, name: "Laptop", quantity: 1, price: 200 },
                // Add more order items as needed
            ]
        },
        // Add more users as needed
    ];
    return (
        <div className="mt-5">
            <h2 className="text-center">Orders Details</h2>
            {orderDetailsData.map((userData, index) => (
                <div key={index}>
                    <h3 className="my-3">User Name: {userData.userName}</h3>
                    <table className="table table-bordered">
                        <thead>
                            <tr className="my-4">
                                <th>User Address</th>
                                <th>Order Items</th>
                                <th>Status</th>
                                <th>Comment</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{userData.address}</td>
                                <td>
                                    <ul>
                                        {userData.orderItems.map(item => (
                                            <li key={item.id}>
                                                {item.name} - Quantity: {item.quantity} - Price: ${item.price}
                                            </li>
                                        ))}
                                    </ul>
                                </td>
                                <td>
                                    <select className="form-select">
                                        <option value="completed">Pending</option>
                                        <option value="cancelled">Completed</option>
                                        <option value="pending">Cancelled</option>
                                    </select>
                                </td>
                                <td>
                                    <textarea type="text"
                                        style={{ borderRadius: '5px' }} 
                                    placeholder="Any Issues or Comment of the order" name="" id="" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    );
};

export default Show_Order;
