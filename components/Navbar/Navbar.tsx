import React, { useEffect, useState } from "react";
import Image from "next/image";

import styles from "./Navbar.module.scss"
import img from "../../public/vercel.svg"

export const Navbar = () => {
    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const handleScroll = () => {
        setScrollY(window.scrollY)
    }

    if (scrollY < 300) {
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
    }  else {
        return null
    }
}