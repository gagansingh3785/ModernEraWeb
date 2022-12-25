import React, { useState } from "react";
import Image from "next/image";
import styles from "./About.module.scss"

import img from "../../public/pic.jpg"

export const About = () => {
    const [slider1Position, setSlider1Position] = useState("left")
    const [slider2Position, setSlider2Position] = useState("left")

    return (
        <div className={styles.outer}>
            <div className={styles.container}>
                <div className={styles.image}>
                    <Image src={img} alt="Dev's pic" fill style={{"borderRadius": "50%"}}/>
                </div>
                <div className={styles.content}>
                    <div className={styles.header}>
                        <div className={styles.headings}>
                        <span onClick={() => setSlider1Position("left")}>About</span>
                        <span onClick={() => setSlider1Position("right")}>Experience</span>
                        </div>
                        <div className={styles.slider}>
                            <hr />
                            <div className={`${styles.slide} ${slider1Position === 'right' ? styles['slider-right'] : styles['slider-left']}`} />
                        </div>
                    </div>
                    <div className={styles.body}></div>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.image}>
                    <Image src={img} alt="Dev's pic" fill style={{"borderRadius": "50%"}}/>
                </div>
                <div className={styles.content}>
                    <div className={styles.header}>
                        <div className={styles.headings}>
                        <span onClick={() => setSlider2Position("left")}>About</span>
                        <span onClick={() => setSlider2Position("right")}>Experience</span>
                        </div>
                        <div className={styles.slider}>
                            <hr />
                            <div className={`${styles.slide} ${slider2Position === 'right' ? styles['slider-right'] : styles['slider-left']}`} />
                        </div>
                    </div>
                    <div className={styles.body}></div>
                </div>
            </div>
        </div>
    )
}