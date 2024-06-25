import { Link } from "react-router-dom";
import Header from "./Header";
import Homepage from "./Homepage";
import styles from "../Styles/Homepage.module.css";


const ErrorPage = () => {
    return (
        <div className={styles.main}>
            <Header />
            <p>Sorry, this page is not available!</p>
            <Link to={"/"}>Go back home</Link>
        </div>
    );
};

export default ErrorPage;
