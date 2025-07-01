import useProducts from "../../hooks/useProducts.js";
import { ItemList } from "../ItemList/ItemList";
import "./itemlistcontainer.css";
import Loading from "../Loading/Loading";

const ItemListContainer = () => {
  const { products, loading } = useProducts();

  return (
    <div className="itemlistcontainer">
      <h2>Bienvenidos a mi ecomerce</h2>
      {
        loading ? <Loading /> : <ItemList products={products} />
      }
    </div>
  )
}

export default ItemListContainer;