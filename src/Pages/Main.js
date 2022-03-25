import React from "react";
import WebtoonList from "../Components/WebtoonList";
import styles from "../Styles/Main.module.scss";

function Main() {
    return (
        <div className={styles.Main}>
            <div className={styles.wrapper}>
                <h2>Updated Naver Webtoon</h2>
                <WebtoonList />
            </div>
        </div>
    );
}

export default Main;
