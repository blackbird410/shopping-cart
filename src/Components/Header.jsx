import { Link } from 'react-router-dom';
import styles from '../Styles/Header.module.css'

const getIconName = (key) => {
    const names = {
        search: "search",
        profile: "person",
        shopping: "cart",
        checkout: "bag-check",
    };

    return names[key];
}

const Icon = ({ type, usage, href }) => {
    return (type === "navigation") 
        ? (
            <Link  to={href} className={`${styles.utility}`}>
                <ion-icon name={getIconName(usage)} ></ion-icon>
            </Link>
        ) :
            <ion-icon name={getIconName(usage)}></ion-icon>;
}

const NavLink = ({ label, href, after=false }) => {
    return (
        <Link 
            key={label} 
            id={`${label}-link`} 
            to={href}
            className={after ? `${styles['nav-link'] + " " + styles['has-dropdown']}` : `${styles['nav-link']}`}
        >{label.toUpperCase()}</Link>
    );
}

const Header = () => {
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
        { name: "checkout", href: "/shop", },
    ];

    return (
        <div className={styles.header}>
            <Link to={"/"} className={styles['shop-title']}>{shopTitle}</Link>
            <div className={styles['nav-links-wrapper']}>
                {navLinks.map( navLink => 
                    <NavLink 
                        key={navLink.label}
                        label={navLink.label} 
                        href={navLink.href} 
                        after={navLink.after} 
                    />)}
            </div>
            <div id="utilities" className={styles['utilities-wrapper']}>{utilities.map( utility => 
                <Icon 
                    key={utility.name}
                    type="navigation" 
                    usage={utility.name} 
                    href={utility.href} 
                />)}
            </div>
        </div>
    );
}

export default Header;
