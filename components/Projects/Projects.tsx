import React from "react";
import Image from "next/image";

import styles from "./Projects.module.scss"
import img from "../../public/techimg.jpg"

export const Projects = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.title}>My First project</div>
                <div className={styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat hendrerit est, ac tempus urna tristique id. Nam sodales purus a erat mollis, dapibus maximus arcu convallis. Aenean pretium mi lobortis, posuere ante sed, elementum eros. In hendrerit quam nulla, a malesuada sem eleifend sit amet. Donec vitae quam eu mi porttitor ultricies eget vel nisi. 
                </div>
                <div className={styles['tag-container']}>
                    <div className={styles.tag}>Tech1</div>
                    <div className={styles.tag}>Tech2</div>
                </div>
                <div className={styles.links}></div>
            </div>
            <Image src={img} alt="Product Image" className={styles['project-image']} />
        </div>
    )
}