import React, { useState, useRef, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import classes from "./Auth.module.css";
import AuthContext from "../context/auth-context";
import Loading from "./Loading";

const Auth = (props) => {
  const history = useNavigate();

  const authCtx = useContext(AuthContext);

  const emailInputRef = useRef();
  const pwInputRef = useRef();

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const submitHandler = (event) => {
    event.preventDefault();

    if (isLoading) {
      return <Loading></Loading>;
    }

    const enteredEmail = emailInputRef.current.value;
    const enteredPw = pwInputRef.current.value;

    setIsLoading(true);
    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB5n5Te8o0UoYv61yOYLA-JSngrFzxKDSM";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB5n5Te8o0UoYv61yOYLA-JSngrFzxKDSM";
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPw,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "로그인 오류";
            // if (data && data.error && data.error.message) {
            //   errorMessage = data.error.message;
            // }
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        authCtx.login(data.idToken);
        authCtx.isAdmin("");
        history("/");

        if (enteredEmail === "test@test.com" && enteredPw === "123456") {
          authCtx.isAdmin("messi");
          history("/")
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const signInHandler = () => {
    setIsLogin(true);
  };
  const signUpHandler = () => {
    setIsLogin(false);
  };

  return (
    <main className={classes.auth}>
      <div>
        {isLogin && (
          <section>
            <h1>로그인</h1>
            <form action="submit" onSubmit={submitHandler}>
              <div className={classes.control}>
                <label htmlFor="id">email</label>
                <input type="email" id="id" ref={emailInputRef} />
              </div>
              <div className={classes.control}>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" ref={pwInputRef} />
              </div>
              <div className={classes.btnCon}>
                {!isLoading && <button className={classes.btn}>Login</button>}
                <p className={classes.p} onClick={signUpHandler}>
                  Go to SignUp
                </p>
                {isLoading && <Loading></Loading>}
              </div>
            </form>
          </section>
        )}
        {!isLogin && (
          <div>
            <h1>회원가입</h1>
            <div>
              <form onSubmit={submitHandler}>
                <div>
                  <div className={classes.control}>
                    <label htmlFor="id">email</label>
                    <input type="email" id="id" ref={emailInputRef} />
                  </div>
                  <div className={classes.control}>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" ref={pwInputRef} />
                  </div>
                  <div className={classes.control}>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" />
                  </div>
                  <div className={classes.control}>
                    <label htmlFor="date">Date</label>
                    <input type="date" id="date" />
                  </div>
                </div>
                <div className={classes.btnCon}>
                  {!isLoading && (
                    <button className={classes.btn}>Sign Up</button>
                  )}
                  <p className={classes.p} onClick={signInHandler}>
                    Go to Login
                  </p>
                  {isLoading && <Loading></Loading>}
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default Auth;
