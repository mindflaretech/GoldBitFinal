import React, { useContext, useState } from "react";
import { NextPage } from "next";
import firebase from "../../../../config/base";
import { Label, Input, Form, FormGroup } from "reactstrap";
import { toast } from "react-toastify";
import { CartContext } from "helpers/cart/cart.context";

const UserProfile: NextPage = () => {
  const { emptyCart } = useContext(CartContext);
  const [openAccount, setOpenAccount] = useState(false);
  const [email, setEmail] = useState("test@gmail.com");
  const [password, setPassword] = useState("test@123");
  const [user, setUser] = useState("");
  const signout = () => {
    firebase.signOut().then(() => {
      emptyCart();
      setUser("");
      setOpenAccount(!openAccount);
    });
    // router.push("/pages/account/login");
  };

  const loginAuth = async (email, password) => {
    try {
      await firebase
        .signInWithEmailAndPassword(email, password)
        .then(function () {
          setUser(firebase.currentUser.email);
          setOpenAccount(!openAccount);
        });
    } catch (error) {
      setTimeout(() => {
        toast.error("error", error);
      }, 200);
    }
  };
  //----------------------- styles ----------------------//
  const styles = () => {};
  return (
    <>
      <li
        style={{
          marginLeft: 500,
          width: 120,
          marginTop: 20,
        }}
        className="mobile-user onhover-dropdown"
        onClick={() => setOpenAccount(!openAccount)}
      >
        <div>
          <a
            style={{
              fontSize: 24,
              fontWeight: "bold",
              color: "black",
              textDecoration: "none",
              backgroundColor: "#ffcc01",
              padding: "5px 20px",
              borderRadius: "8px",
              marginLeft: 50,
            }}
            onMouseOver={(e) => {
              const target = e.target as HTMLAnchorElement;
              target.style.backgroundColor = "black";
              target.style.color = "white";
            }}
            onMouseLeave={(e) => {
              const target = e.target as HTMLAnchorElement;
              target.style.backgroundColor = "#ffcc01";
              target.style.color = "black";
            }}
          >
            Login
          </a>
        </div>
      </li>

      <div
        id="myAccount"
        className={`add_to_cart right account-bar ${
          openAccount ? "open-side" : ""
        }`}
      >
        <a
          href="#"
          className="overlay"
          onClick={() => setOpenAccount(!openAccount)}
        ></a>
        <div className="cart-inner">
          <>
            <div className="cart_top">
              <h3>my account</h3>
              <div className="close-cart">
                <a href="#" onClick={() => setOpenAccount(!openAccount)}>
                  <i className="fa fa-times" aria-hidden="true"></i>
                </a>
              </div>
            </div>
            <Form className="userForm">
              <FormGroup>
                <Label htmlFor="email">Email</Label>
                <Input
                  type="text"
                  disabled={user ? true : false}
                  className="form-control d-inherit"
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="review">Password</Label>
                <Input
                  type="password"
                  disabled={user ? true : false}
                  className="form-control d-inherit"
                  id="review"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </FormGroup>
              <FormGroup>
                {!user ? (
                  <a
                    href="#"
                    className="btn btn-rounded btn-block"
                    onClick={() => loginAuth(email, password)}
                  >
                    Login
                  </a>
                ) : (
                  <a
                    href="#"
                    className="btn btn-rounded btn-block"
                    onClick={signout}
                  >
                    Logout
                  </a>
                )}
              </FormGroup>
              {!user && (
                <FormGroup>
                  <h5 className="forget-class">
                    <a
                      href="/pages/account/forget-password"
                      className="d-block"
                    >
                      forget password?
                    </a>
                  </h5>
                  <h6 className="forget-class">
                    <a href="/pages/account/register" className="d-block">
                      new to store? Signup now
                    </a>
                  </h6>
                </FormGroup>
              )}
              {!user && (
                <FormGroup>
                  <h6
                    style={{
                      textAlign: "center",
                      color: "royalblue",
                      fontSize: 14,
                    }}
                    className="social-signup-text"
                  >
                    Or sign up with:
                  </h6>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                    className="social-signup-icons"
                  >
                    <div style={{ margin: "5px" }}>
                      <button
                        style={{
                          display: "flex",
                          alignItems: "center",
                          background: "blue", // Blue background
                          border: "1px solid #1e90ff",
                          color: "#ffffff", // White text
                          cursor: "pointer",
                          padding: "10px 50px", // Padding for button size
                          borderRadius: "20px", // Rounded corners
                          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Box shadow for a raised appearance
                        }}
                        className="social-signup-button"
                      >
                        <img
                          src="/public/images/google.jpg"
                          style={{ marginRight: "10px" }}
                        />
                        Sign up with Google
                      </button>
                    </div>
                    <div style={{ margin: "5px" }}>
                      <button
                        style={{
                          display: "flex",
                          alignItems: "center",
                          background: "white", // Green background
                          border: "1px solid #1e90ff",
                          color: "#1e90ff", // White text
                          cursor: "pointer",
                          padding: "10px 40px", // Padding for button size
                          borderRadius: "20px", // Rounded corners
                          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Box shadow for a raised appearance
                        }}
                        className="social-signup-button"
                      >
                        <img
                          src="/public/images/facebook.png"
                          style={{ marginRight: "10px" }}
                        />
                        Sign up with Facebook
                      </button>
                    </div>
                    <div style={{ margin: "5px" }}>
                      <button
                        style={{
                          display: "flex",
                          alignItems: "center",
                          background: "white", // Red background
                          border: "1px solid #000000",
                          color: "black", // White text
                          cursor: "pointer",
                          padding: "10px 50px", // Padding for button size
                          borderRadius: "20px", // Rounded corners
                          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Box shadow for a raised appearance
                        }}
                        className="social-signup-button"
                      >
                        <img
                          src="/twitter-icon.png"
                          style={{ marginRight: "10px" }}
                        />
                        Sign up with Twitter
                      </button>
                    </div>
                  </div>
                </FormGroup>
              )}
            </Form>
          </>
        </div>
      </div>
    </>
  );
};
export default UserProfile;
