
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
            <a className="utility" href={href}>
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
            className={after && "has-after"}
        >{label.toUpperCase()}</a>
    );
}

const Header = ({ shopTitle, navLinks, utilities }) => {
    return (
        <div className="header">
            <div className="shop-title">{shopTitle}</div>
            <div className="nav-links">
                {navLinks.map( navLink => 
                    <NavLink 
                        label={navLink.label} 
                        href={navLink.href} 
                        after={navLink.after} 
                    />)}
            </div>
            <div id="utilities">{utilities.map( utility => 
                <Icon 
                    type="navigation" 
                    usage={utility.name} 
                    href={utility.href} 
                />)}
            </div>
        </div>
    );
}

export default Header;
