import React, { useState, useEffect } from "react";
import axios from "axios";
import "./compare.css";


function ElectronicsList() {
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState({});

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await axios.get("http://localhost:8082/catalog/electronics");
    const data = response.data;
    setProducts(data);
  };

  const handleProductSelection = (event) => {
    const { name, value } = event.target;
    setSelectedProducts({ ...selectedProducts, [name]: value });
  };

  const renderSelectedProducts = () => {
    const { product1, product2 } = selectedProducts;
    const selectedProductsData = products.filter(
      (product) => product.title === product1 || product.title === product2
    );
    return (
      <div className="container">
        <div className="row row-cols-2" style={{ margin: "50px" }}>
          {selectedProductsData.map((product, index) => {
            return (
              <div className="col mb-4" key={index}>
                <div className="card shadow-sm h-100">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h2
                      className="card-title"
                      style={{ fontSize: "18PX", fontWeight: "bold" }}
                    >
                      {product.title}
                    </h2>
                    <p className="card-text" style={{ fontSize: "13PX" }}>
                      {product.description}
                    </p>
                  </div>
                  <div className="card-footer">
                    <h3 className="text-center">
                      {product.price.currency} {product.price.value}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const renderProductDropdowns = () => {
    const productTitles = products.map((product) => product.title);
    return (
      <div className="product-dropdowns" style={{ margin: "30px" }}>
        <div>
          <label
            htmlFor="product2-dropdown"
            style={{ fontSize: "13PX", fontWeight: "bold" }}
          >
            Product 1:{" "}
          </label>
          <select
            id="product2-dropdown"
            name="product2"
            value={selectedProducts.product2 || ""}
            onChange={handleProductSelection}
          >
            <option value="" disabled>
              Select a product
            </option>
            {productTitles.map((title, index) => (
              <option key={index} value={title}>
                {title}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="product1-dropdown"
            style={{ fontSize: "13PX", fontWeight: "bold" }}
          >
            Product 2:{" "}
          </label>
          <select
            id="product1-dropdown"
            name="product1"
            value={selectedProducts.product1 || ""}
            onChange={handleProductSelection}
          >
            <option value="" disabled>
              Select a product
            </option>
            {productTitles.map((title, index) => (
              <option key={index} value={title}>
                {title}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  };

  return (
    <div className="product-list-container">
      {renderProductDropdowns()}
      {renderSelectedProducts()}
    </div>
  );
}

export default ElectronicsList;