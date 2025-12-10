import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { getProductById } from "../../services/products";

export const ItemDetailContainer = () => {
    const [detail, setDetail] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id } = useParams();

    const fetchProduct = useCallback(async () => {
        if (!id) {
            setError("No product id provided");
            setLoading(false);
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const product = await getProductById(id);
            setDetail(product);
        } catch (err) {
            const userMessage = err?.message || "There was an error loading the product.";
            console.error("ItemDetail fetch error:", err);
            setError(userMessage);
        } finally {
            setLoading(false);
        }
    }, [id]);

    useEffect(() => {
        fetchProduct();
    }, [fetchProduct]);

    if (loading) return <div className="item-list-container"><p>Loading...</p></div>;

    return (
        <main className="item-list-container">
            {error ? (
                <div>
                    <p>Error: {error}</p>
                    <button onClick={() => fetchProduct()}>Retry</button>
                </div>
            ) : detail ? (
                <ItemDetail detail={detail} />
            ) : (
                <p>Product not found</p>
            )}
        </main>
    );
};