import React from "react";
import Image from "next/image";

import styles from "./Footer.module.scss"

export const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles['image-container']}>
                    <Image src={""} alt="Logo" />
                </div>
                <div className={styles.quote}></div>
                <div className={styles.icons}></div>
                <div className={styles.ack}></div>
            </div>
        </div>
    )
}