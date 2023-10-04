import { Typography } from "@material-tailwind/react";
import React, { Fragment } from "react";
import Marquee from "react-fast-marquee";
import { PartnersLogo } from "../utils/Data";
export const FastMarquee = () => {
  return (
    <Fragment> <Marquee autoFill direction="right">
       {PartnersLogo.map((item) => (
        <div className="flex gap-5">
          <div className="flex items-center gap-5">
            <img
              src={item.imagesrc}
              className="h-14 w-14"
            />
            <Typography>{item.partnerName}</Typography>
          </div>
        </div>
        ))}
        </Marquee>
    </Fragment>
  );
};
