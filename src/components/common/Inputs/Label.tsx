import React from "react";

import styles from "./Label.module.scss";

export interface LabelProps {
  label: string;
  htmlFor: string;
}

const Label: React.FC<LabelProps> = ({ label, htmlFor }) => {
  return (
    <label htmlFor={htmlFor} className={styles.inputLabel}>
      {label}
    </label>
  );
};

export default Label;
