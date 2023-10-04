import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import React, { Fragment } from "react";
import { ArticlesData } from "../utils/Data";
import { CustomButton } from "./CustomButton";

export const CustomCard = () => {
  return (
    <Fragment>
      {ArticlesData.map((item) => (
        <Card className="w-[500px]">
          <CardHeader>
            <img
              className="rounded-xl"
              src={item.image}
              alt="Photo of Something"
            />
          </CardHeader>
          <CardBody>
            <Typography>{item.category}</Typography>
            <Typography variant="h5" color="blue-gray" className="">
              {item.title}
            </Typography>
          </CardBody>
          <CardFooter className="pt-0 items-center flex flex-col gap-5">
            <Typography className="text-gray-600 text-[12px] font-medium mb-5">
              {item.author}
            </Typography>
          </CardFooter>
        </Card>
      ))}
    </Fragment>
  );
};
