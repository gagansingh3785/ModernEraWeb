import React from "react";
import Image from "next/image";
import styles from "./About.module.scss"

import img from "../../public/pic.jpg"

export const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <Image src={img} alt="Dev's pic" fill style={{"borderRadius": "50%"}}/>
            </div>
            <div className={styles.content}>
                <div className={styles.header}>
                    <div className={styles.headings}>
                        <span>About</span>
                        <span>Experience</span>
                    </div>
                    <div className={styles.slider}>
                        <hr />
                        <div className={styles.slide} />
                    </div>
                </div>
                <div className={styles.body}></div>
            </div>
        </div>
    )
}