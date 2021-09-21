import React from "react";
import classnames from "classnames";

import UserInformation from "./UserInformations";

import styles from "./Header.module.scss";

const Header: React.FC = () => {

  return (
    <>
      <div
        className={classnames(
          styles.header,
          "w-100 d-flex justify-content-end align-items-start pb-5"
        )}
      >
        <div className={classnames(styles.headerUser)}>
          <UserInformation />
        </div>
      </div>

      
    </>
  );
};

export default Header;
