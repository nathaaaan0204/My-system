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
      <div className="flex flex-col xl:flex-row justify-between gap-5">
        {FeaturedPicks.map((item) => (
          <Card key={item.id}
          className="xl:bg-transparent border-none xl:shadow-none rounded cursor-pointer hover:bg-light-green-200 xl:w-[325px]">
            <CardHeader className="m-0 rounded">
              <img className="m-0 w-full object-cover xl:max-h-[200px]" src={item.imagesrc} />
            </CardHeader>
            <CardBody className="flex flex-col gap-5">
            <Typography className="text-green font-bold uppercase text-[12px] xl:text-base">
                {item.category}
              </Typography>
              <Typography className="text-lg xl:text-xl">{item.title}</Typography>
              <Typography className="text-dark-gray font-medium text-[12px] xl:text-base">
                Written by {item.author}
              </Typography>
            </CardBody>
           
          </Card>
        ))}
      </div>
    </Fragment>
  );
};
