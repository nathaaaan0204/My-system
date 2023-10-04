import React, { Fragment } from "react";
import { FeaturedPicks } from "../utils/Data";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

export const CardSmall = () => {
  return (
    <Fragment>
      <div className="flex justify-between">
        {FeaturedPicks.map((item) => (
          <Card className="bg-transparent border-none shadow-none rounded cursor-pointer hover:bg-light-green-200 w-[325px]">
            <CardHeader className="m-0 rounded">
              <img className="m-0 h-[200px]" src={item.imagesrc} />
            </CardHeader>
            <CardBody className="">
            <Typography className="text-green font-bold uppercase">
                {item.category}
              </Typography>
              <Typography className="text-xl">{item.title}</Typography>
              
            </CardBody>
            <CardFooter>
            <Typography className="text-dark-gray font-medium">
                Written by {item.author}
              </Typography>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Fragment>
  );
};
