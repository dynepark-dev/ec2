import React from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/Header.module.scss";

function Header() {
    return (
        <div className={styles.Header}>
            <div className={styles.wrapper}>
                <Link to="/">
                    <h1>ec2 Testing App</h1>
                </Link>
            </div>
        </div>
    );
}

export default Header;
