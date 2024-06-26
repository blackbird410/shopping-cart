import { json } from "react-router-dom";
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

const ItemCounter = ({ handleEdit }) => {
    return (
        <div className={styles['input-counter']}>
            <button className={styles['input-btn']} onClick={handleEdit}>-</button>
            <button className={styles['input-btn']} onClick={handleEdit}>+</button>
        </div>
    );
}

const Item = ({ 
    name, 
    price, 
    image,
    shopName, 
    handleAdd,
    handleEdit }) => {

    return (
        <div 
            className={styles['item-wrapper']} 
            style={{backgroundImage: `url(${image})`}}
        >
            <div className={styles['shop-name']}>{shopName}</div>
            <div className={styles['item-name']}>{name}</div>
            <div className={styles['item-price']}>{price}</div>
            <div className={styles['input-wrapper']}>
                <input 
                    type="text" 
                    pattern="[0-9]{5}"
                    id={`${name}item-input`} 
                    className={styles['item-input']}
                    name={`${name}item-input`} 
                    defaultValue="1"
                />
                <ItemCounter 
                    handleEdit={handleEdit}
                />
            </div>
            <button className={styles['add-btn']} onClick={handleAdd}>Add to cart</button>
        </div>
    );
}

const toNumber = (v) => (v * 10) / 10;

const ShopPage = () => {
    const { items, error, loading } = fetchItems();
    // Populate the cart with past added items
    const cartContent = JSON.parse(localStorage.getItem("cartItems"));
    if (!cartContent) cartContent = [];
    const [ cartItems, setCartItems ] = useState(cartContent);
    const shopName = "Arcane";

    const handleAdd = (e) => {
        // Get the number of items selected and add the corresponding number to the cart 
        const itemTitle = e.target.parentNode.childNodes[1].textContent;
        const itemPrice = toNumber(e.target.parentNode.childNodes[2].textContent);
        const numberOfItem = e.target.parentNode.childNodes[3].childNodes[0].value;

        if (numberOfItem > 0) {
            // Check if the item was already in the cart 
            let temp = [...cartItems];
            let index = temp.findIndex( item => item.title === itemTitle ); 

            if (index >= 0) {
                temp[index] = { 
                    ...temp[index], 
                    nItem: toNumber(temp[index].nItem) + toNumber(numberOfItem),
                    totalPrice: (temp[index].nItem + numberOfItem) * itemPrice,
                }
            } else { 
                temp = [...temp, 
                    { 
                        title: itemTitle,  
                        nItem: toNumber(numberOfItem), 
                        totalPrice: numberOfItem * itemPrice, 
                    }
                ];
            }
            setCartItems(temp);

            localStorage.setItem("cartItems", JSON.stringify(cartItems));
        };
    }

    const handleEdit = (e) => {
        let currentValue = ((e.target.parentNode.parentNode.childNodes[0].value)*10) / 10;

        e.target.parentNode.parentNode.childNodes[0].value = 
            ( e.target.textContent === "-" ) 
                ? ( currentValue - (!!(currentValue)) ) 
                : currentValue + 1;

    }

    return (
        loading ? <Loader /> 
            : error ? <p> A network error was encountered</p> 
                : (
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
                                    handleAdd={handleAdd}
                                    handleEdit={handleEdit}
                                />)}
                        </div>
                    </div>
                )
    );
};

export default ShopPage;
