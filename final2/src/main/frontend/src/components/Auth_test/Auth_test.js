import React, { useState, useRef, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../context/auth-context";
import Loading from "../Loading";

import "./Auth_test.css";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineLock } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";

const Auth_test = () => {
  const [show, setShow] = useState(false);
  const [eye, setEye] = useState(false);
  const showHandler = () => {
    setShow(true);
  };
  const hideHandler = () => {
    setShow(false);
  };
  const openEye = () => {
    setEye(true);
  };
  const closeEye = () => {
    setEye(false);
  };

  const history = useNavigate();

  const authCtx = useContext(AuthContext);

  const emailInputRef = useRef();
  const pwInputRef = useRef();
  const nameInputRef = useRef();
  const idInput = useRef();
  const phInput = useRef();

  const [message, setMessage] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const submitHandler = (event) => {
    event.preventDefault();

    if (isLoading) {
      return <Loading></Loading>;
    }

    const enteredEmail = emailInputRef.current.value;
    const enteredPw = pwInputRef.current.value;

    
    
    fetch("/login/login", {
      method: "POST",
      body: JSON.stringify({
        mbId: enteredEmail,
        mbPw: enteredPw,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res.clone().json());
        setIsLoading(false);
        if (res.ok) {
          if (authCtx.isLoggedIn) {
            alert("로그인 성공")

          }
          return res.json();
        } else {
          // alert("로그인 실패")
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
        authCtx.isAdmin(data.idToken);
        authCtx.id(data.mbId);
        console.log(data.mbId)
        history("/");
        window.location.reload()

        // if (enteredEmail === "test@test.com" && enteredPw === "123456") {
        //   authCtx.isAdmin("messi");
        //   history("/")
        // }
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  const submitHandler2 = (event) => {
    event.preventDefault();

    if (isLoading) {
      return <Loading></Loading>;
    }

    const enteredEmail = emailInputRef.current.value;
    const enteredPw = pwInputRef.current.value;
    const enteredId = idInput.current.value;
    const enteredPhone = phInput.current.value;
    const enteredName = nameInputRef.current.value;

    fetch("/register/save", {
      method: "POST",
      body: JSON.stringify({
        mbEmail: enteredEmail,
        mbPw: enteredPw,
        mbPn: enteredPhone,
        mbName: enteredName,
        mbId: enteredId,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res.clone().json());
        setIsLoading(false);
        if (res.ok) {
          alert("회원가입이 완료되었습니다")
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "회원가입 오류";
            // if (data && data.error && data.error.message) {
            //   errorMessage = data.error.message;
            // }
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        alert(data);
        history("/");

        // if (enteredEmail === "test@test.com" && enteredPw === "123456") {
        //   authCtx.isAdmin("messi");
        //   history("/")
        // }
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  const signInHandler = () => {
    setIsLogin(true);
  };
  const signUpHandler = () => {
    setIsLogin(false);
  };


  return (
    <div className="auth-auth">
      <div className="auth-container">
        <div className="auth-forms">
          {!show && (
            <div className="auth-form login">
              <span className="auth-title">Login</span>

              <form action="submit" onSubmit={submitHandler}>
                <div className="input-field">
                  <input type="text" placeholder="ID를 입력하세요." ref={emailInputRef} required />
                  <i className="uil uil-envelope icon">
                    <HiOutlineMail></HiOutlineMail>
                  </i>
                </div>
                <div className="input-field">
                  <input type="password" className="password" placeholder="비밀번호를 입력하세요." required ref={pwInputRef}/>
                  <i className="uil uil-lock icon">
                    <AiOutlineLock></AiOutlineLock>
                  </i>
                  <i className="uil uil-eye-slash showHidePw">
                    {!eye && <AiOutlineEyeInvisible onClick={openEye}></AiOutlineEyeInvisible>}
                    {eye && <AiOutlineEye onClick={closeEye}></AiOutlineEye>}
                  </i>
                </div>

                <div className="input-field button">
                  <input type="submit" value="Login" />
                </div>
              </form>

              <div className="login-signup">
                <span className="text">
                  아직 회원이 아니신가요?
                  <a href="#" className="auth-text signup-link" onClick={showHandler}>
                    Sign up
                  </a>
                </span>
              </div>
            </div>
          )}

          {show && (
            <div className="auth-form signup">
              <span className="auth-title">Sign up</span>

              <form action="submit" onSubmit={submitHandler2}>
                <div className="input-field">
                  <input type="text" placeholder="이름을 입력하세요." required ref={nameInputRef} />
                  <i className="uil uil-user">
                    <FaUserAlt></FaUserAlt>
                  </i>
                </div>
                <div className="input-field">
                  <input type="text" placeholder="ID를 입력하세요." required ref={idInput} />
                  <i className="uil uil-user">
                    <FaUserAlt></FaUserAlt>
                  </i>
                </div>
                <div className="input-field">
                  <input type="email" placeholder="이메일을 입력하세요." required ref={emailInputRef} />
                  <i className="uil uil-envelope icon">
                    <HiOutlineMail></HiOutlineMail>
                  </i>
                </div>
                <div className="input-field">
                  <input type="password" className="password" placeholder="비밀번호를 입력하세요." maxlength="20" required ref={pwInputRef} />
                  <i className="uil uil-lock icon">
                    <AiOutlineLock></AiOutlineLock>
                  </i>
                  <i className="uil uil-eye-slash showHidePw">
                    {!eye && <AiOutlineEyeInvisible onClick={openEye}></AiOutlineEyeInvisible>}
                    {eye && <AiOutlineEye onClick={closeEye}></AiOutlineEye>}
                  </i>
                </div>
                <div className="input-field">
                  <input type="number" className="tel" placeholder="'-'를 제외한 전화번호를 입력하세요." maxlength="11" required ref={phInput} />
                  <i className="uil uil-phone">
                    <BsTelephone></BsTelephone>
                  </i>
                </div>
                <div className="input-field">
                  <input type="date" className="birth" required />
                  <i className="uil uil-edit-alt">
                    <AiOutlineEdit></AiOutlineEdit>
                  </i>
                </div>

                <div className="input-field button">
                  <input type="submit" value="Sign up" />
                </div>
              </form>

              <div className="login-signup">
                <span className="auth-text">
                  이미 회원이신가요?
                  <a href="#" className="auth-text login-link" onClick={hideHandler}>
                    Login Now
                  </a>
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth_test;
