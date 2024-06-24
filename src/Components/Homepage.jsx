import styles from "../Styles/Homepage.module.css"
import Header from "./Header";

const Homepage = () => {
    const shopTitle = "Neily's";
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
    return (
        <div className={styles.main}>
            <Header shopTitle={shopTitle} navLinks={navLinks} utilities={utilities} />
        </div>
    );
};

export default Homepage;
