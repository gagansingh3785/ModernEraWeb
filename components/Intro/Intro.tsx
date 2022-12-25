import React from "react";
import Image from "next/image";
import img from "../../public/Intro/intro_illus_1920.png"

import styles from "./Intro.module.scss"

export const Intro = () => {
    return (
        <div className={styles.container}>
            <div className={styles['image-container']}>
                <Image src={img} alt="Tech image" fill quality={100}/>
            </div>
            <div className={styles.content}>
                <h2>We are fuckers who fuck everyone of ModernEraWeb</h2>
                <div className={styles.body}>
                    We are software engineers specializing in creating breathtaking digital experiences. We create web applications that are modular, scalable and robust
                </div>
            </div>
        </div>
    )
}