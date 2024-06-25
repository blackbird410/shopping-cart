import styles from "../Styles/ShopPage.module.css";
import Header from "./Header";
import { useState, useEffect } from "react";

const fetchItems = () => {
    const [items, setItems] = useState({});
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=> {
                if (res.status >= 400) throw new Error("server error");
                return res.json()
            })
            .then(json => setItems(json))
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    }, []);

    return { items, error, loading };
};

const Loader = () => {
  return (
    <div className={styles['loading-container']}>
      <div className={styles['loader']}></div>
      <p>Loading...</p>
    </div>
  );
}

const Item = ({ name, price, image, shopName }) => {
    return (
        <div className={styles['item-wrapper']} style={{backgroundImage: `url(${image})`}}>
            <div className={styles['shop-name']}>{shopName}</div>
            <div className={styles['item-name']}>{name}</div>
            <div className={styles['item-price']}>{price}</div>
        </div>
    );
}

const ShopPage = () => {
    const { items, error, loading } = fetchItems();
    const shopName = "Arcane";

    if (loading) return <Loader />;
    if (error) return <p>A network error was encountered</p>;

    return (
        <div className={styles.main}>
            <Header />
            <div className={styles['item-list']}>
                {items.map(item => 
                    <Item 
                        key={item.id}
                        name={item.title} 
                        price={item.price} 
                        image={item.image}
                        shopName={shopName}
                    />)}
            </div>
        </div>
    );
};

export default ShopPage;
