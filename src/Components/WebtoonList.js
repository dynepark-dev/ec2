import React, { useEffect, useState } from "react";
import styles from "../Styles/WebtoonList.module.scss";
import axios from "axios";

function WebtoonList() {
    const [webtoons, setWebtoons] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:3001/webtoons")
            .then((res) => setWebtoons(res.data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className={styles.WebtoonList}>
            <ul>
                {webtoons.map((webtoon) => (
                    <li key={webtoon.id}>
                        <figure
                            onClick={() =>
                                window.open(
                                    `https://comic.naver.com${webtoon.episodeLink}`,
                                    "_blank"
                                )
                            }
                        >
                            <img src={webtoon.image} alt={webtoon.title} />
                            <figcaption title={webtoon.title}>
                                {webtoon.title}
                            </figcaption>
                            <figcaption
                                className={styles.episode}
                                title={webtoon.episodeTitle}
                            >
                                {webtoon.episodeTitle}
                            </figcaption>
                        </figure>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default WebtoonList;
