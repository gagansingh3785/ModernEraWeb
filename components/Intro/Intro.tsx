import React from "react";
import Image from "next/image";
import img from "../../public/techimg.jpg"

import styles from "./Intro.module.scss"

export const Intro = () => {
    return (
        <div className={styles.container}>
            <Image src={img} alt="Tech image" />
            <div className={styles.content}>
                <h2>We are Developers of ModernEraWeb</h2>
                <div className={styles.body}>
                    We are software engineers specializing in creating breathtaking digital experiences. We create web applications that are modular, scalable and robust
                </div>
            </div>
        </div>
    )
}