import styles from '../Styles/Header.module.css'

const getIconName = (key) => {
    const names = {
        search: "search",
        profile: "person",
        shopping: "cart",
    };

    return names[key];
}

const Icon = ({ type, usage, href }) => {
    return (type === "navigation") 
        ? (
            <a className={`utility ${styles['nav-icon']}`} href={href}>
                <ion-icon name={getIconName(usage)}></ion-icon>
            </a>
        ) :
            <ion-icon name={getIconName(usage)}></ion-icon>;
}

const NavLink = ({ label, href, after=false }) => {
    return (
        <a 
            key={label} 
            id={`${label}-link`} 
            href={href}
            className={after ? `${styles['nav-link'] + " " + styles['has-dropdown']}` : `${styles['nav-link']}`}
        >{label.toUpperCase()}</a>
    );
}

const Header = ({ shopTitle, navLinks, utilities }) => {
    return (
        <div className={styles.header}>
            <div className={styles['shop-title']}>{shopTitle}</div>
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
