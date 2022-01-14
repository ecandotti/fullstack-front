import React, { useEffect, useState } from "react";
import authService from "../../services/auth.service";
import TitlePage from "../../components/UI/Title/TitlePage";
import Message from "../../components/UI/Message/Message";
import Input from "../../components/UI/Input/Input";
import styles from "./index.module.scss";
import { useUser } from '../../contexts/user.context';
import { useRouter } from "next/router";

const Index = () => {
    const { setCurrentUser } = useUser()
    const router = useRouter()
    const [user, setUser] = useState({});
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = (e) => {
    e.preventDefault();

    authService.login(user)
      .then((data) => {
        console.log(data);
        if (data.message) {
          setError(true);
          setErrorMessage(data.message);
          return false;
        }
        localStorage.setItem("token", data.token);
        setCurrentUser({
          auth: data.auth,
          token: data.token
        })
        router.push('/account/profil')
      })
      .catch((err) => {
        console.log(err);
        setError(true);
        setErrorMessage(err.message)
      });
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      return router.push('/account/profil')
    }
  })

  return (
    <div className="page__register">
      <TitlePage title="Connexion" />
      <form className={styles.form__connexion} onSubmit={(e) => handleSubmit(e)}>
        <Input
          type="email"
          label="Email"
          id="email"
          name="email"
          placeholder="Mon email"
          required={true}
          onChange={(e) => {
            setUser({ ...user, email: e.target.value });
          }}
        />
        <Input
          type="password"
          label="Mot de passe"
          id="password"
          name="password"
          placeholder="Mon mot de passe"
          required={true}
          onChange={(e) => {
            setUser({ ...user, password: e.target.value });
          }}
        />
        <input className="btn btn-black" type="submit" value="Me connecter" />
        {
          error ? (
            <Message message={errorMessage} type="error"/>
          )
          :
          ""  
        }
      </form>
    </div>
  );
}

export default Index;
