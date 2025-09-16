import React, { useEffect, useState } from "react";

export default function ProductsTable() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // loading should be boolean
  const [error, setError] = useState(null);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("http://localhost:80/Api/products.php");
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        setError(err.message || "Failed to fetch");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  if (loading) return <p style={{ padding: 20 }}>Loading...</p>;
  if (error)
    return (
      <p style={{ padding: 20, color: "red" }}>Error: {error}</p>
    );

  return (
    <div style={{ padding: 20 }}>
      <h2>Products</h2>
      <table
        border="1"
        cellPadding="8"
        style={{ borderCollapse: "collapse", width: "100%" }}
      >
        <thead style={{ background: "#f5f5f5" }}>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price (₹)</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {products.length === 0 ? (
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>
                No data
              </td>
            </tr>
          ) : (
            products.map((p) => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.title}</td>
                <td>{typeof p.price === "number" ? p.price.toFixed(2) : p.price}</td>
                <td>{p.stock}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
