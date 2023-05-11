import { useEffect, useState, useContext } from "react";
import { CartContext } from "./CartContext";

function Electronics() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        fetchProducts()
    }, [])

    const fetchProducts = async () => {
        const response = await fetch("http://localhost:8082/catalog/electronics");
        const data = await response.json()
        setProducts(data)
        setLoading(false)
    }

    const handleAddToCart = (product) => {
        addToCart(product);
      };

    if (!loading) {
        return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}
}
export default Electronics;
