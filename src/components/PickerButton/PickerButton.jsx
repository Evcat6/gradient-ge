import React from "react";
import styles from "./PickerButton.module.css";

const PickerButton = ({ children, ...props }) => {
    return <button className={styles.button} {...props} >{children}</button>
}

export default PickerButton;