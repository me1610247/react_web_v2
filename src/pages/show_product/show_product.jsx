import React from "react";
import Nav from "../../components/Nav/Nav";

const Show_Product = () => {
    // Example product data
    const products = [
        { id: 1, name: "Product 1", description: "Description 1", price: 100 },
        { id: 2, name: "Product 2", description: "Description 2", price: 200 },
        { id: 3, name: "Product 3", description: "Description 3", price: 300 },
        // Add more products as needed
    ];

    return (
        <>
            <Nav />
            <br />
            <div className="container text-center my-5">
                <h2 className="my-3">All The Products</h2>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => (
                            <tr key={product.id}>
                                <td>{product.name}</td>
                                <td>{product.description}</td>
                                <td>${product.price}</td>
                                <td>
                                    <button className="btn btn-primary me-2">Edit</button>
                                    <button className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Show_Product;
