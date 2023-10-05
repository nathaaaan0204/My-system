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
        <Typography className="font-bold text-2xl text-black mb-2">
          Hot Picks
        </Typography>

        {HotPicks.map((item) => (
          <div className="">
            <Card className="xl:bg-transparent mb-2 xl:mb-0 border-none shadow-none rounded cursor-pointer hover:bg-light-green-200">
              <CardBody>
                <Typography className="text-green font-bold uppercase text-[12px] xl:text-base">
                  {item.category}
                </Typography>
                <Typography className="text-lg xl:text-xl font-medium text-black">{item.title}</Typography>
                <Typography className="text-dark-gray font-medium text-[12px] xl:text-base">
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
