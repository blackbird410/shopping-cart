import { useState } from "react";
import Header from "./Header"
import { populateCart, toNumber } from "./ShopPage.jsx"
import styles from "../Styles/Cart.module.css"
import { Link } from "react-router-dom";

const CartItem = ({ title, image, nItem, totalPrice, handleCheckout, handleEdit }) => {
    // FIXME: Each item should not have their own checkout btn
    // Instead, each should have a selected checkbox for checkout that will be 
    // used for checking out the selected items 
    // Only one checkout btn should be on the cart page
    // The total of the checkout page should reflect the total of the selected items

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
            <button 
                className={`${styles['cart-btn']} ${styles['checkout-btn']}`} 
                onClick={handleCheckout}>Checkout</button>
        </div>
    );
}

const Cart = () => {
    const [ cartItems, setCartItems ] = useState(populateCart())
    const handleCheckout = () => {
        alert("Functionality not available!");
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
                    {cartItems.map(
                        item => 
                            <CartItem 
                                key={item.title}
                                title={item.title}
                                image={item.image}
                                nItem={item.nItem}
                                totalPrice={item.totalPrice}
                                handleCheckout={handleCheckout}
                                handleEdit={handleEdit}
                            />)}
                </div> : <Link to={'/shop'}>No items in the cart. Go Shop now!</Link>
            }
        </div>
    );
}

export default Cart;
