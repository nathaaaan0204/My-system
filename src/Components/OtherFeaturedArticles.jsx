import {
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import React, { Fragment } from "react";
import { HotPicks } from "../utils/Data";

export const OtherFeaturedArticles = () => {
  return (
    <Fragment>
      <div className="flex flex-col">
        <Typography className="font-bold text-xl text-black">
          Hot Picks
        </Typography>

        {HotPicks.map((item) => (
          <div className="">
            <Card className="bg-transparent border-none shadow-none rounded cursor-pointer hover:bg-light-green-200">
              <CardBody>
                <Typography className="text-green font-bold uppercase">
                  {item.category}
                </Typography>
                <Typography className="text-xl font-medium text-black">{item.title}</Typography>
                <Typography className="text-dark-gray font-medium">
                  Written by {item.author}
                </Typography>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>
    </Fragment>
  );
};
