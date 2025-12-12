import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "../ItemList/ItemList";
import { getProducts } from "../../services/products";

export const ItemListContainer = ({ titulo }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { category } = useParams();

    const fetchProducts = useCallback(async () => {
        setLoading(true);
        setError(null);

        try {
            const data = await getProducts(category);
            console.log("Products data received:", data);
            console.log("Is array?", Array.isArray(data));
            const productsArray = Array.isArray(data) ? data : [];
            console.log("Products array length:", productsArray.length);
            setProducts(productsArray);
        } catch (err) {
            const userMessage = err?.message || "Error loading products";
            console.error("ItemList fetch error:", err);
            setError(userMessage);
        } finally {
            setLoading(false);
        }
    }, [category]);

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    const getPageTitle = () => {
        if (titulo) return titulo;
        if (category === "flowers") return "Flowers";
        if (category === "balloons") return "Balloons";
        return "Velvet Gift Studio";
    };

    if (loading) return <div className="item-list-container"><p>Loading...</p></div>;

    return (
        <section className="item-list-container">
            <h1>{getPageTitle()}</h1>
            {error ? (
                <div style={{ padding: '2rem', textAlign: 'center' }}>
                    <p style={{ color: 'red', marginBottom: '1rem' }}>Error: {error}</p>
                    <button onClick={() => fetchProducts()}>Retry</button>
                </div>
            ) : products.length === 0 ? (
                <div style={{ padding: '2rem', textAlign: 'center' }}>
                    <p>No products found. The API might be empty or there was an issue loading products.</p>
                    <button onClick={() => fetchProducts()}>Try Again</button>
                </div>
            ) : (
                <ItemList list={products} />
            )}
        </section>
    );
};