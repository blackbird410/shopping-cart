import styles from "../Styles/Homepage.module.css"
import Header from "./Header";

const Category = ({ name, image }) => {
    return (
        <div className={styles['clothe-category']}>
            <img src={image} alt={name} className={styles['clothe-image']}/>
            <div className={styles['clothe-category-name']}>{name}</div>
        </div>
    );
}

const Homepage = () => {
    const shopTitle = "Arcane";
    const navLinks = [
        { label: "Shop", href: "/shop", after: false, },
        { label: "About Us", href: "/errorPage", after: true, },
        { label: "Our Services", href: "/errorPage", after: false, },
        { label: "Store Locator", href: "/errorPage", after: false, },
        { label: "Your Impact", href: "", after: true, },
    ];
    const utilities = [
        { name: "search", href: "/errorPage", },
        { name: "profile", href: "/errorPage", },
        { name: "shopping", href: "/shop", },
    ];
    const clotheCategories = [
        { name: "Boys Matching Sets", image: "" },
        { name: "Girls' Co-ords", image: "" },
        { name: "Woman's Dresses", image: "" },
        { name: "Babies Sleepsuits", image: "" },
        { name: "Women's Skirts", image: "" },
        { name: "Men's New Arrivals", image: "" },
        { name: "Kid's Swim", image: "" },
        { name: "Character Collection", image: "" },
    ];

    return (
        <div className={styles.main}>
            <Header shopTitle={shopTitle} navLinks={navLinks} utilities={utilities} />
            <div className={styles['image-wrapper']}>
                <div className={styles['image-text']}>Take a look at our new products!</div>
                <div className={styles.btn}>Shop Now</div>
            </div>
            <div className={styles['clothe-categories']}>
                <p className={styles['categories-title']}>Popular Categories</p>
                <div>
                    {clotheCategories.map( category => 
                        <Category 
                            key={category.name}
                            name={category.name} 
                            image={category.image} 
                        />
                    )}
                </div>
            </div>
        </div>
    )
};

export default Homepage;
