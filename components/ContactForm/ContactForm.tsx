import React from "react";
import Image from "next/image";
import styles from "./ContactForm.module.scss"

import img from "../../public/techimg.jpg"

export const ContactForm = () => {
    return (
        <div className={styles.container}>
            <div className={styles['left-container']}>
                <h2>What&apos;s on your mind?</h2>
                <div className={styles['image-outer']}>
                    <div className={styles['image-container']}>
                        <Image src={img} alt="Form Image" fill/>
                    </div>
                </div>
            </div>
            <div className={styles['form-container']}>
                <form>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="text" placeholder="Subject" />
                    <textarea placeholder="Message" />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}