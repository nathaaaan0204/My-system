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
      <div className="flex flex-col mx-96 my-12 gap-10">
        <Typography variant="h2" className="">Featured Article</Typography>
        <div className="flex gap-12">
          <Card className="w-[600px]">
            <CardHeader className="m-0" >
              <img className="m-0 rounded h-[414px]" src="/images/hero-bg.jpg" />
            </CardHeader>
            <CardBody className="flex flex-col gap-5">
              <Typography className="text-green font-bold uppercase">Computer Science</Typography>
              <Typography className="text-3xl font-semibold text-black">
                Creating a productive and healthy home work space
              </Typography>
              <Typography className="text-dark-gray font-medium">
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
