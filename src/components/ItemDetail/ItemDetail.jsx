import { Item } from "../Item/Item"
import { useCartContext } from "../../context/CartContext/useCartContext"

export const ItemDetail = ({ detail }) => {
    const { addItem } = useCartContext();
    
    return (
        <div className="item-detail-container">
            <Item {...detail} isDetail={true}>
                <button onClick={() => addItem(detail)}>Add to Cart</button>
            </Item>
        </div>
    )
}