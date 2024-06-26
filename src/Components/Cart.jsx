import { useState } from "react";
import Header from "./Header"
import { populateStorage } from "./ShopPage.jsx"
import styles from "../Styles/Cart.module.css"
import { Link } from "react-router-dom";

export const CartItem = ({ title, image, nItem, totalPrice, handleEdit, handleChange }) => {
    return (
        <div className={styles['cart-item']}>
            <img className={`${styles['image']}`} src={image} alt={title} />
            <div className={`${styles['title']}`}>{title}</div>
            <div className={`${styles['count']}`}>{nItem}</div>
            <div className={`${styles['total-price']}`}>{totalPrice}</div>
            <div className={`${styles['btn-wrapper']}`}>
                <button className={`${styles['cart-btn']} ${styles['decrement-btn']}`} onClick={handleEdit}>-</button>
                <button className={`${styles['cart-btn']} ${styles['increment-btn']}`} onClick={handleEdit}>+</button>
            </div>
            <input 
                type="checkbox" 
                className={`${styles['item-checkbox']}`} 
                id={title}
                onClick={handleChange}
            />
        </div>
    );
}

const Cart = () => {
    const [ cartItems, setCartItems ] = useState(populateStorage("cartItems"))
    const [ checkedItems, setCheckedItems ] = useState([]);

    const handleChange = (e) => {
        // Add the items that are checked to the checked list
        const itemTitle = e.target.parentNode.childNodes[1].textContent;
        if (e.target.checked) {
            // Add the items to the list
            const target = cartItems.find(item => item.title === itemTitle)
            setCheckedItems([...checkedItems, target]);

        } else {
            // Remove it from the list
            setCheckedItems(checkedItems.filter(item => item.title !== itemTitle));
        }
    }

    const handleCheckout = () => {
        // Get the selected items and save them in the local storage
        localStorage.setItem("checkoutItems", JSON.stringify(checkedItems));
    }

    const handleEdit = (e) => {
        let currentItemTitle = e.target.parentNode.parentNode.childNodes[1].textContent;

        // Find the Item and update the value accordingly
        let temp = [];
        cartItems.forEach(item => { 
            if (item.title === currentItemTitle) {
                let updateCount = (e.target.textContent === "-"
                    ? ( item.nItem - !!(item.nItem)) 
                    : item.nItem + 1);

                if (updateCount > 0) {
                    temp = [
                        ...temp, 
                        {
                            ...item, 
                            nItem: updateCount,
                            totalPrice: item.price * updateCount, 
                        }
                    ];
                }

            } else temp = [...temp, item];
        });

        setCartItems(temp);
        localStorage.setItem("cartItems", JSON.stringify(temp)); 
    }


    
    return (
        <div className={styles['main']}>
            <Header />
            {cartItems.length ? 
                <div className={styles['item-list']}>
                    <Link 
                        to={"/checkout"}
                        className={`${styles['checkout-btn']}`} 
                        onClick={handleCheckout}>Checkout
                    </Link>
                    {cartItems.map(
                        item => 
                            <CartItem 
                                key={item.title}
                                title={item.title}
                                image={item.image}
                                nItem={item.nItem}
                                totalPrice={item.totalPrice}
                                handleEdit={handleEdit}
                                handleChange={handleChange}
                            />)}
                </div> : <Link to={'/shop'}>No items in the cart. Go Shop now!</Link>
            }
        </div>
    );
}

export default Cart;
