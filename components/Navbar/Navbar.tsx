import React from "react";
import Image from "next/image";

import styles from "./Navbar.module.scss"
import img from "../../public/vercel.svg"

export const Navbar = () => {
    return (
        <div className={styles.container}>
            <Image src={img} alt="Logo" />
            <div className={styles.sections}>
                <span>About</span>
                <span>Experience</span>
                <span>Work</span>
                <span>Contact</span>
            </div>
        </div>
    )
}