import React from "react";
import styles from "./SocialMediaIcons.module.scss"

import { IconFacebook, IconGithub, IconLinkedIn } from "../../utils/svg";

export const SocialMediaIcons = () => {
    return (
        <div className={styles.container}>
            <IconFacebook color="#fff" className={styles.icon}/>
            <IconGithub color="#fff" className={styles.icon} />
            <IconLinkedIn color="#fff" className={styles.icon} />
        </div>
    )
}