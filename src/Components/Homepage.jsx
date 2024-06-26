import styles from "../Styles/Homepage.module.css"
import { Link } from "react-router-dom";
import Header from "./Header";
import cat1 from "../assets/images/category1-min.jpg"
import cat2 from "../assets/images/category2-min.jpg"
import cat3 from "../assets/images/category3-min.jpg"
import cat4 from "../assets/images/category4-min.jpg"
import cat5 from "../assets/images/category5-min.jpg"
import cat6 from "../assets/images/category6-min.jpg"
import cat7 from "../assets/images/category7-min.jpg"
import cat8 from "../assets/images/category8-min.jpg"
import canva1 from "../assets/images/canvas0.jpg"
import canva2 from "../assets/images/canvas1.jpg"
import canva3 from "../assets/images/canvas2.jpg"
import canva4 from "../assets/images/canvas3.jpg"

const Category = ({ name, image }) => {
    return (
        <div className={styles['clothes-category']}>
            <img src={image} alt={name} className={styles['clothes-image']}/>
            <div className={styles['clothes-category-name']}>{name}</div>
        </div>
    );
}

const Canva = ({ title, image, id }) => {
    return (
        <div id={styles[id]} className={styles.canva} style={{backgroundImage: `url(${image})`}}>
            <div className={styles['canva-title']}>{title}</div>
        </div>
    );
}

const Homepage = () => {
    const clotheCategories = [
        { name: "Boys Matching Sets", image: cat1 },
        { name: "Girls' Co-ords", image: cat2 },
        { name: "Babies Sleepsuits", image: cat4 },
        { name: "Women's Skirts", image: cat5 },
        { name: "Men's New Arrivals", image: cat6 },
        { name: "Kid's Swim", image: cat7 },
        { name: "Character Collection", image: cat8 },
    ];
    const canvas = [
        { title: "Airport Outfits", image: canva1, id: "airport-outfit" },
        { title: "Women's Outfit", image: canva2, id: "women-outfit" },
        { title: "Men's Outfits", image: canva3, id: "men-outfit" },
        { title: "Baby's Outfits", image: canva4, id: "baby-outfit" },
    ];

    return (
        <div className={'main'}>
            <Header />
            <div className={styles['image-wrapper']}>
                <div className={styles['image-text']}>Take a look at our new products!</div>
                <Link to={"/shop"} className={styles.btn}>Shop Now</Link>
            </div>
            <div className={styles['clothes-categories']}>
                <p className={styles['categories-title']}>Popular Categories</p>
                <div className={styles['category-list-wrapper']}>
                    {clotheCategories.map( category => 
                        <Category 
                            key={category.name}
                            name={category.name} 
                            image={category.image} 
                        />
                    )}
                </div>
            </div>
            <div className={styles.canvas}>
                {canvas.map( canva => 
                    <Canva 
                        key={canva.title} 
                        title={canva.title} 
                        image={canva.image} 
                        id={canva.id}
                    />)}
            </div>
        </div>
    )
};

export default Homepage;
