import React, { useContext } from "react";
import login from "../../assets/images/login/login.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa6";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";
const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { sinInUser } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    sinInUser(email, password)
      .then((result) => {
        const loggedInUser = result.user;
        const user = { email };
        console.log(loggedInUser);

        axios
          .post("http://localhost:5000/jwt", user, { withCredentials: true })
          .then((res) => {
            console.log(res.data);
            if (res.data.success) {
              navigate(location?.state ? location?.state : "/");
            }
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="hero ">
      <div className="hero-content lg:min-h-screen flex-col lg:gap-x-36 lg:flex-row">
        <div className="text-center lg:text-left">
          <picture>
            <img src={login} alt="" />
          </picture>
        </div>
        <div className="card border border-[#D0D0D0] w-full max-w-sm shrink-0 ">
          <form onSubmit={handleLogin} className="card-body">
            <h1 className="text-3xl text-center font-bold">Login</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#FF3811] text-[#fff]">Sing In</button>
            </div>
          </form>
          <div className="text-center my-1">
            <p className="font-xl font-inter font-medium mb-8">
              Or Sign In with
            </p>
            <div className="flex justify-center gap-x-4">
              <span className="bg-[#F5F5F8] text-xl text-[#3B5998] p-3 rounded-full">
                {" "}
                <CiFacebook />
              </span>
              <span className="bg-[#F5F5F8] text-xl text-[#3B5998] p-3 rounded-full">
                {" "}
                <FaGoogle />
              </span>
              <span className="bg-[#F5F5F8] text-xl text-[#3B5998] p-3 rounded-full">
                {" "}
                <FaLinkedin />
              </span>
            </div>
            <Link
              className="font-inter font-semibold text-base mb-10"
              to={"/sinUp"}
            >
              You Have New ? <span className="text-orange-0">Sing In</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
