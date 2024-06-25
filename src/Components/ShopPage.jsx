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
import Header from "./Header";

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
        { name: "Women's shirt", price: "200-400", image: item1 }, 
        { name: "Baby's clothes", price: "300-500", image: item2 }, 
        { name: "Women's Co-ords", price: "400-800", image: item3 }, 
        { name: "Women's jean outfit", price: "900-1300", image: item4 }, 
        { name: "Men's Slim shirt", price: "400-600", image: item5 }, 
        { name: "Summer's outfit", price: "250-500", image: item6 }, 
        { name: "Slim fit", price: "100-450", image: item7 }, 
        { name: "Baby Shoes", price: "100-300", image: item8 }, 
        { name: "Women's T-shirt", price: "500-700", image: item9 }, 
        { name: "Cool shirt", price: "300-400", image: item10 }, 
        { name: "Casual Shirt", price: "400-600", image: item11 }, 
        { name: "Gentleman outfit", price: "1200-1800", image: item12 }, 
        { name: "All out shirt", price: "400-600", image: item13 }, 
    ];

    const shopName = "Arcane";

    return (
        <div className={styles.main}>
            <Header />
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
