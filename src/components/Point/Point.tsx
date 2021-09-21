import React, { useState } from "react";
import classnames from "classnames";

import styles from "./Point.module.scss";

interface PointProps {
  className: string;
}

const Point: React.FC<PointProps> = ({ className, children, ...props }) => {
  const [tooltip, setTooltip] = useState<Boolean>(false);

  return (
    <div
      className={classnames(
        "d-flex justify-content-center align-items-center position-relative"
      )}
    >
      <i
        onClick={() => setTooltip(!tooltip)}
        className={classnames(styles.point, className, "bi bi-circle-fill")}
        {...props}
      ></i>

      {tooltip && (
        <div
          className={classnames(
            "d-flex justify-content-center align-items-center position-absolute",
            styles.pointTooltip
          )}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default Point;
