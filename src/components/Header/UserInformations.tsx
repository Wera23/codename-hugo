import React, { useState } from "react";
import classnames from "classnames";
import { useForm } from "react-hook-form";

import { Button, InputText } from "../common";

import styles from "./UserInformations.module.scss";
import useLocalStorage from "../../Hooks/useLocalStorage";
import { ProfileAnimation } from "..";

type UserField = {
  userName: string;
  userPassword: string;
};

const UserInformation: React.FC = () => {
  const { register, handleSubmit, errors } = useForm<UserField>();
  const onSubmit = (data: any) => console.log(data);

  const [showUserPanel, setUserPanelShow] = useState<Boolean>(false);
  const [showLogin, setLogin] = useState<Boolean>(true);
  const [name, setName] = useLocalStorage("", "");
  const [password, setPassword] = useLocalStorage("", "");

  return (
    <>
      <Button
        onClick={() => setUserPanelShow(!showUserPanel)}
        className="btn-pink mt-3"
      >
        Panel użytkownika
      </Button>

      {showUserPanel === true && (
        <div className="bg-gray mr-5 pb-3 mt-3">
          <div className="d-flex flex justify-content-center align-items-center pt-3">
           <ProfileAnimation />
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className={classnames(
              styles.userLogin,
              "d-flex flex-column justify-content-center align-items-center px-4"
            )}
          >
            {showLogin && (
              <>
                <InputText
                  name="userName"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  label="Wpisz swoje imię"
                  inputId="nameId"
                  placeholder="Podaj imię"
                  classNameGroup="justify-content-center align-items-center w-100"
                  ref={register({ required: true, minLength: 3, max: 10 })}
                ></InputText>
                {errors.userName && <span>Imię jest wymagane</span>}

                <InputText
                  name="userPassword"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  label="Wpisz hasło"
                  inputId="passwordId"
                  type="password"
                  placeholder="****"
                  ref={register({ required: true, minLength: 3, max: 10 })}
                  classNameGroup="justify-content-center align-items-center w-100"
                ></InputText>
                {errors.userPassword && <span>Hasło jest wymagane</span>}
              </>
            )}

            {showLogin && (
              <Button
                className="btn btn-violet mt-2"
                type="submit"
                onClick={() => setLogin(false)}
              >
                Zaloguj
              </Button>
            )}

            {!showLogin && <>Witaj {name}</>}
          </form>
        </div>
      )}
    </>
  );
};

export default UserInformation;
