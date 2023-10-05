import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import React, { Fragment } from "react";
import { OtherFeaturedArticles } from "./OtherFeaturedArticles";
import { CardSmall } from "./CardSmall";

export const FeaturedArticles = () => {
  return (
    <Fragment>
      <div className="flex flex-col 2xl:mx-96 mx-4 md:mx-16 lg:mx-32 my-12 gap-10">
        <Typography className="text-2xl xl:text-4xl font-semibold">Featured Article</Typography>
        <div className="flex flex-col xl:flex-row gap-6 xl:gap-12">
          <Card className="xl:w-[600px] rounded">
            <CardHeader className="m-0 rounded" >
              <img className="m-0 xl:h-[414px]" src="/images/hero-bg.jpg" />
            </CardHeader>
            <CardBody className="flex flex-col gap-5">
              <Typography className="text-green font-bold uppercase text-[12px] xl:text-base">Computer Science</Typography>
              <Typography className="xl:text-3xl text-lg font-semibold text-black">
                Creating a productive and healthy home work space
              </Typography>
              <Typography className="text-dark-gray font-medium text-[12px] xl:text-base">
                  Written by Alice Park
                </Typography>
            </CardBody>
            
          </Card>

          <OtherFeaturedArticles/>
        </div>
     
            <CardSmall/>
        
      </div>
    </Fragment>
  );
};
