import React from "react";
import classnames from "classnames";

import styles from "./Users.module.scss";
import { User, LocationType } from "../../API/mocks/users";
interface UsersProps {
  user: User;
}

const Users: React.FC<UsersProps> = ({ user }) => {
  return (
    <>
      <React.Fragment>
        {user.location === LocationType.office && (
          <div
            className={classnames(
              "d-flex justify-content-center align-items-center mr-3"
            )}
          >
            {user.name}
            <i
              className={classnames(
                styles.usersPoint,
                "pl-2 bi bi-circle-fill"
              )}
            ></i>
          </div>
        )}
      </React.Fragment>
    </>
  );
};

export default Users;
