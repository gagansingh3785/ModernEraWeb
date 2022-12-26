import React from "react";
import styles from "./RandomBlobs.module.scss"

import { SvgArray } from "../../utils/svg";

export const RandomBlobs = () => {

    const renderBlobs = () => {
        return SvgArray.map((blob, index) => (
            <div 
                className={styles.container}
                key={index}
                style={{"top": `${index * 10}%`, "left": `${Math.random() * 75}vw`}}
            >
                {blob}
            </div>
        ))
    }

    return (
        <>
            {renderBlobs()}
        </>
    )
}