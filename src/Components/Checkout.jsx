import Header from "./Header";
import { CartItem, handleEdit } from ".Cart";
import styles from "../Styles/Checkout.module.css";
import { useState } from "react";

const Checkout = () => {
    const [ checkoutItems, setCheckoutItems ] = useState([]);

    return (
        <div className={styles['main']}>
            <Header />
            <div className={styles['item-list']}>
                {checkoutItems.map( item => 
                    <CartItem 
                        key={item.title}
                        title={item.title}
                        image={item.image}
                        nItem={item.nItem}
                        totalPrice={item.totalPrice}
                        handleEdit={handleEdit}
                    />)}
            </div>
        </div>
    );
};

export default Checkout;
