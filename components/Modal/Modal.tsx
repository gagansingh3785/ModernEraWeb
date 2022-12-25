import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.scss"

export interface inModalProps{
    show?: boolean,
    onClose?: any,
    children?: any
}

export const Modal = ({show, onClose, children}: inModalProps) => {
    const [isBrowser, SetIsBrowser] = useState(false)

    useEffect(() => {
        SetIsBrowser(true)
    }, [])

    const ModalContent = show ? (
        <div className={styles.overlay}>
            <div className={styles.content}>
                <span>About</span>
                <span>Experience</span>
                <span>Work</span>
                <span>Contact</span>
            </div>
        </div>
    ) : null

    if (isBrowser) {
        return ReactDOM.createPortal(
            ModalContent, 
            document.getElementById('modal-root') as HTMLElement
        )
    } else {
        return null;
    }
}