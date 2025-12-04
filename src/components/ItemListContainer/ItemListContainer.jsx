import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../../services/product";
import { ItemList } from "../ItemList/ItemList";
import "./ItemListContainer.css";

export const ItemListContainer = ({ titulo }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { category } = useParams();

  useEffect(() => {
    getProducts(category)
      .then((data) => setProducts(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [category]);

  if (loading) {
    return (
      <div className="container text-center mt-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
        <p>Cargando catálogo...</p>
      </div>
    );
  }

  return (
    <section className="container">
      {/* Agregamos margen superior para que no se pegue al navbar */}
      <h1 className="my-4">{titulo}</h1>

      {products.length === 0 ? (
        <p className="alert alert-warning">No se encontraron productos.</p>
      ) : (
        <ItemList lista={products} />
      )}
    </section>
  );
};
