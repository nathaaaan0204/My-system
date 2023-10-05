import { Typography } from "@material-tailwind/react";
import React, { Fragment } from "react";

export const HeroSection = () => {
  return (
    <Fragment>
      <div className="flex flex-col items-center justify-center h-screen px-4 lg:px-32 lg:h-[70vh] bg-[url('/images/hero-bg.jpg')] bg-no-repeat bg-cover bg-center">
        <Typography variant="h2" className="text-center text-white">
          Exploring Knowledge, Empowering Minds: Name of Website
        </Typography>
        <Typography className="text-center text-white xl:w-9/12">
          Unlock a world of knowledge and insights at Schoolname. Dive into our curated collection of academic articles and
          research papers, empowering your quest for learning and discovery.
        </Typography>
      </div>
      
    </Fragment>
  );
};
