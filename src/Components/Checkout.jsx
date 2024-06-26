import Header from "./Header";
import { CartItem } from "./Cart";
import { populateStorage, toNumber } from "./ShopPage"
import styles from "../Styles/Checkout.module.css";
import { useEffect, useState } from "react";

const Checkout = () => {
    const [ checkoutItems, setCheckoutItems ] = useState(populateStorage("checkoutItems"));
    const [ total, setTotal ] = useState(0);

    const handleEdit = (e) => {
        let currentItemTitle = e.target.parentNode.parentNode.childNodes[1].textContent;

        // Find the Item and update the value accordingly
        let temp = [];
        checkoutItems.forEach(item => { 
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
                            totalPrice: (item.price * updateCount).toFixed(2), 
                        }
                    ];
                }

            } else temp = [...temp, item];
        });

        setCheckoutItems(temp);
        localStorage.setItem("checkoutItems", JSON.stringify(temp));
    }
    
    const handleCheckout = () => {
        alert("Checkout feature unavailable for the moment!\nThanks for trying our app :)");
    }


    useEffect(() => {
        let currentTotal = 0;
        checkoutItems.forEach(item => currentTotal += toNumber(item.totalPrice));
        setTotal(currentTotal.toFixed(2));
    }, [checkoutItems]);

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
            <div className={styles['summary-info']}>
                <p className={styles['bill-amount']}>{total}</p>
                <button className={styles['pay-btn']} onClick={handleCheckout}>Checkout & Pay </button>
            </div>
        </div>
    );
};

export default Checkout;
