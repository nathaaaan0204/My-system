import { Button, Card, Input, Typography } from "@material-tailwind/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export const RegisterPage = () => {
  const [formData, setFormData] = useState({
    idNumber: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate sending the registration data to the backend
    // In a real application, make an HTTP POST request to your backend API
    console.log("Registration data sent to the backend:", formData);
    setRegistrationSuccess(true); // Set a flag for successful registration
  };

  return (
    <div className="xl:bg-[url('/images/sign-in-bg.jpg')] h-screen bg-no-repeat bg-cover bg-center min-h-screen flex items-center justify-center">
      <Card className="xl:w-[500px] flex flex-col text-center h-screen xl:h-fit justify-center p-6 sm:px-24 md:p-48 xl:p-12 gap-5">
        <div className="w-full flex justify-center">
          <img src="/images/logo.png" className="w-[200px] h-[50px]" />
        </div>
        <Typography className="text-2xl font-semibold">Register</Typography>
        <Typography className="">to create an account</Typography>

        {registrationSuccess && (
          <div className="mb-4 text-green-600">
            Registration successful. You can now log in.
          </div>
        )}
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <Input
            type="text"
            id="idNumber"
            name="idNumber"
            label="Id Number"
            value={formData.idNumber}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />

          <Input
            type="text"
            id="firstName"
            name="firstName"
            label="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />

          <Input
            type="text"
            id="lastName"
            name="lastName"
            label="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />

          <Input
            type="email"
            id="email"
            name="email"
            label="Email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />

          <Input
            type="number"
            id="phoneNumber"
            name="phoneNumber"
            pattern="[0-10]{11}"
            label="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />

          <Input
            type="password"
            id="password"
            name="password"
            label="Password"
            value={formData.password}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />

          <Button type="submit" fullWidth className="bg-green">
            Register
          </Button>
        </form>
        <Typography className="text-left">
                By clicking the “Sign up” button, you are creating a Lead Gen
                Crew account and therefore you agree to Lead Gen Crew Company’s
                <strong>Terms of service</strong> and
                <strong>Privacy Policy.</strong>
              </Typography>
              <Typography>
                Don't have an account?
                <Link to="/LoginPage" className="text-green font-medium ml-1">
                  Sign in
                </Link>
              </Typography>
      </Card>
    </div>
  );
};
