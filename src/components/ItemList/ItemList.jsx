import { Link } from "react-router-dom"
import { Item } from "../Item/Item"

export const ItemList = ({ list }) => {
    console.log("ItemList received list:", list);
    console.log("List length:", list?.length);
    
    if (!list || list.length === 0) {
        return (
            <div className="item-list">
                <p>No products available</p>
            </div>
        );
    }
    
    return (
       <div className="item-list">
       {list.map((item) => {
           console.log("Rendering item:", item);
           return (
               <Link to={`/detail/${item.id}`} key={item.id}>
                   <Item {...item} />
               </Link>
           );
       })}
       </div>
    )
}