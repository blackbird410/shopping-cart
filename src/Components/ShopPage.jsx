import item1 from "../assets/images/item1.jpg";
import item2 from "../assets/images/item2.jpg";
import item3 from "../assets/images/item3.jpg";
import item4 from "../assets/images/item4.jpg";
import item5 from "../assets/images/item5.jpg";
import item6 from "../assets/images/item6.jpg";
import item7 from "../assets/images/item7.jpg";
import item8 from "../assets/images/item8.jpg";
import item9 from "../assets/images/item9.jpg";
import item10 from "../assets/images/item10.jpg";
import item11 from "../assets/images/item11.jpg";
import item12 from "../assets/images/item12.jpg";
import item13 from "../assets/images/item13.jpg";
import styles from "../Styles/ShopPage.module.css";

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
    const items = [
        { name: "Item", price: "200-400 NTD", image: item1 }, 
        { name: "Item", price: "200-400 NTD", image: item2 }, 
        { name: "Item", price: "200-400 NTD", image: item3 }, 
        { name: "Item", price: "200-400 NTD", image: item4 }, 
        { name: "Item", price: "200-400 NTD", image: item5 }, 
        { name: "Item", price: "200-400 NTD", image: item6 }, 
        { name: "Item", price: "200-400 NTD", image: item7 }, 
        { name: "Item", price: "200-400 NTD", image: item8 }, 
        { name: "Item", price: "200-400 NTD", image: item9 }, 
        { name: "Item", price: "200-400 NTD", image: item10 }, 
        { name: "Item", price: "200-400 NTD", image: item11 }, 
        { name: "Item", price: "200-400 NTD", image: item12 }, 
        { name: "Item", price: "200-400 NTD", image: item13 }, 
    ];

    const shopName = "Arcane";

    return (
        <div className={styles.main}>
            <div className={styles['item-list']}>
                {items.map(item => 
                    <Item 
                        key={item.name}
                        name={item.name} 
                        price={item.price} 
                        image={item.image}
                        shopName={shopName}
                    />)}
            </div>
        </div>
    );
};

export default ShopPage;
