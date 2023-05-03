import React, { useState, useEffect } from "react";
import { Button, Form, Row, Col, Image } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";
import KowajaLogo from "../assets/images/logo.png";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";


function Login() {
  const [showLogin, setShowLogin] = useState(true);
  const [formStatus, setFormStatus] = useState("enter");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();
  const { createUser, loginUser } = useAuth();

  useEffect(() => {
    // document.title = 'Login Page Kowaja';
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await loginUser(email, password);
      setCurrentUser(currentUser);
      toast.success(`Logged in Successfully.`, {
        icon: "👏",
        duration: 3000,
        position: "top-right",
        style: {
          borderRadius: "10px",
        },
      });
      navigate("/dashboard");
    } catch (e) {
      if (e.code === "auth/wrong-password") {
        toast.error("Wrong password, please try again.", {
          duration: 3000,
          position: "top-right",
        });
      } else if (e.code === "auth/invalid-email") {
        toast.error("Invalid email format. Please try again.", {
          duration: 3000,
          position: "top-right",
        });
      }else if (e.code === "auth/missing-email") {
        toast.error("Missing email. Please try again.", {
          duration: 3000,
          position: "top-right",
        });
      }else if (e.code === "auth/user-not-found") {
        toast.error("You not registered.", {
          duration: 3000,
          position: "top-right",
        });
      }else {
        toast.error(e.message, {
          duration: 3000,
          position: "top-right",
        });
      }
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");
    if (password !== confirmPassword) {
      toast("Password and confirmation password do not match.", {
        duration: 3000,
        position: "top-right",
      });
      return;
    }
    try {
      await createUser(email, password);
      setCurrentUser(currentUser);
      //show toast
      toast.success("Sign up successfully, you can login now.", {
        duration: 3000,
        position: "top-right",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
      navigate("/dashboard");
    } catch (e) {
      console.log(e.message);
      toast(e.message, {
        duration: 3000,
        position: "top-right",
      });
    }
  };

  const toggleForm = () => {
    setFormStatus(formStatus === "enter" ? "leave" : "enter");
    setTimeout(() => {
      setShowLogin(!showLogin);
      setFormStatus("enter");
    }, 300);
  };

  return (
    <React.Fragment>
      <div className="kowaja-login">
        <div className="kowaja-auth-wrapper">
          <Row className="justify-content-center h-100">
            <Col className="col-12 col-lg-7 align-items-center bg-white px-2 p-lg-5">
              <div className="kowaja-logo-auth">
                <Image
                  src={KowajaLogo}
                  className="kowaja-logo img-fluid"
                />
              </div>
              <div className="kowaja-form-auth-wrapper col-md-6 col-sm-12 mt-5">
                <div className="d-flex justify-content-between">
                  <div
                    className={`sign-in ${showLogin ? "active leave" : ""}`}
                    onClick={() => {
                      if (!showLogin) {
                        toggleForm();
                      }
                    }}
                  >
                    Masuk
                  </div>
                  <div
                    className={`sign-up ${!showLogin ? "active leave" : ""}`}
                    onClick={() => {
                      if (showLogin) {
                        toggleForm();
                      }
                    }}
                  >
                    Daftar
                  </div>
                </div>
                <Form
                  onSubmit={showLogin ? handleLogin : handleSignUp}
                  className={`ms-auto mt-5 ${
                    formStatus === "leave" ? "leave" : ""
                  }`}
                >
                  {error && (
                    <div className="alert alert-danger mt-3">{error}</div>
                  )}

                  <Form.Group className="mb-3 g-0" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="text"
                      name="email"
                      onChange={(e) => setEmail(e.target.value)}
                      className="kowaja-input"
                      placeholder="Nomor Ponsel Atau Email"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3 g-0" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      onChange={(e) => setPassword(e.target.value)}
                      className="kowaja-input"
                      placeholder="**********"
                    />
                  </Form.Group>
                  {!showLogin && (
                    <Form.Group
                      className="mb-1 g-0"
                      controlId="confirmPassword"
                    >
                      <Form.Label>Confirm Password</Form.Label>
                      <Form.Control
                        className="kowaja-input"
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="**********"
                      />
                    </Form.Group>
                  )}
                  <span>
                    {showLogin ? (
                      <Link className="text-danger" onClick={toggleForm}>
                        don't have an account yet?
                      </Link>
                    ) : (
                      <Link className="text-danger" onClick={toggleForm}>
                        already have account?
                      </Link>
                    )}
                  </span>

                  <div className="w-100 mt-2">
                    <Button type="submit" variant="kowaja" className="w-100">
                      {showLogin ? "Masuk" : "Daftar"}
                    </Button>
                  </div>
                </Form>
              </div>
            </Col>
            <Col className="col-md-5 bg-linear-1 p-5">
              <div className="overlay-bg-linear">
                <div className="d-flex p-5">
                  <h2 className="kowaja-auth-captions mt-5 text-white">
                    Submission is easy with the Kowaja app !
                  </h2>
                </div>
                <div className="d-flex justify-content-start buttons-auth-kowaja">
                  <div className="rectangle-banner-1"></div>
                  <div className="ellipse-banner-2"></div>
                </div>
                <div className="d-flex image-bg-auth">
                  <div className="img-banner-wrapper">
                    <div className="image-auth-kowaja">
                      <Image
                        className="img-banner img-fluid"
                        src="assets/images/bg/girl.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Login;
