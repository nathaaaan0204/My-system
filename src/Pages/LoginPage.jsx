import { Button, Card, Input, Typography } from "@material-tailwind/react";
import React, { Fragment, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BeatLoader } from "react-spinners";

export const LoginPage = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const dummyUsers = [
    {
      id: 1,
      username: "user1",
      email: "user1@example.com",
      password: "password1",
    },
    {
      id: 2,
      username: "user2",
      email: "user2@example.com",
      password: "password2",
    },
    {
      id: 3,
      username: "user3",
      email: "user3@example.com",
      password: "password3",
    },
  ];

  const simulateLogin = (email, password) => {
    const user = dummyUsers.find(
      (u) => u.email === email && u.password === password
    );

    return user || null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = simulateLogin(email, password);

    if (user) {
      // Authentication successful, redirect to the homepage or dashboard
      // Use React Router's history.push('/') to redirect
      // Replace '/homepage' with the actual URL where you want to redirect
      navigate("/HomePage");
      console.log("User logged in:", user);
    } else {
      // Authentication failed, show an error message to the user
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <Fragment>
      {loading ? (
        <div className="w-screen h-screen flex items-center justify-center">
           <BeatLoader color="#0e4c00" loading={loading} />
        </div>
       
      ) : (
      <div className="bg-[url('/images/sign-in-bg.jpg')] h-screen bg-no-repeat bg-cover bg-center min-h-screen flex items-center justify-center">
        <Card className="rounded shadow-md w-[1000px] flex flex-row divide-x-2">
          <div className="flex flex-col text-center justify-center w-full p-12 gap-5">
            <Typography variant="h1">WELCOME</Typography>
            <Typography className="text-2xl font-semibold">Sign in</Typography>
            <Typography className="">To access Website Name</Typography>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
              <Input
                type="email"
                id="email"
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <Input
                type="password"
                id="password"
                label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              {error && <p className="text-red-500 mb-2">{error}</p>}
              <div className="flex items-center justify-between">
                <Button type="submit" fullWidth className="bg-green">
                  Sign In
                </Button>
              </div>
            </form>
            <Typography className="text-left">
              By clicking the “Sign up” button, you are creating a Lead Gen Crew
              account and therefore you agree to Lead Gen Crew Company’s{" "}
              <strong>Terms of service</strong> and{" "}
              <strong>Privacy Policy.</strong>
            </Typography>
            <Typography>
              Don't have an account?{" "}
              <Link to="RegisterPage" className="text-green font-medium">
                Sign Up
              </Link>
            </Typography>
          </div>
          <div className="w-full p-12">
            <Typography variant="h1" className="mb-5 text-center">
              Lead Generation Made Easy
            </Typography>
            
            <Typography className="mb-5">
              Experience the future of lead generation with our cutting-edge
              platform. Sign in to access a wealth of high-quality leads, all at
              your fingertips. Our user-friendly tools and powerful algorithms
              ensure that you'll never miss a valuable lead again. Join us today
              and elevate your lead generation game to new heights.
            </Typography>
            <img src="/images/hero-bg.jpg" className="rounded-xl"/>
          </div>
        </Card>
      </div>
         ) }
    </Fragment>
  );
};
