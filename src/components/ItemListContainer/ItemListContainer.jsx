import { useState, useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Problema al buscar el producto");
        }
        return res.json();
      })
      .then((data) => {
        if (categoryId) {
          const filteredData = data.filter((p) => p.category === categoryId);
          setProducts(filteredData);
        } else {
          setProducts(data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [categoryId]);

return (
    <section className="item-list-section">
      <h1 className="section-title">{categoryId || "Bienvenido a la tienda de Botines"}</h1>
      <ItemList lista={products} />
    </section>
  );
};
