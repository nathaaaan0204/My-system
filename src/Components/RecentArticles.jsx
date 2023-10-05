import { Button, Card, CardBody, CardFooter, CardHeader, Typography } from '@material-tailwind/react'
import React, { Fragment } from 'react'
import { RecentArticlesData } from '../utils/Data'

export const RecentArticles = () => {
  return (
    <Fragment>
      <div className="flex flex-col 2xl:mx-96 mx-4 md:mx-16 lg:mx-32 my-12 2xl:my-32 gap-10">
        <Typography className="text-2xl xl:text-4xl font-semibold">Recent Articles</Typography>
     
        <div className="flex flex-col gap-5">
          {RecentArticlesData.map((item) => (
            <Card
              key={item.id}
              className="flex flex-col xl:flex-row  w-full lg:bg-transparent border-none lg:shadow-none rounded cursor-pointer hover:bg-light-green-200"
            >
              <CardHeader className="m-0 rounded">
                <img className="m-0 object-cover w-full xl:max-h-[200px]" src={item.imagesrc} alt={item.title} />
              </CardHeader>
              <CardBody className="flex flex-col gap-5 justify-center xl:w-[500px] 2xl:max-w-[700px]">
                <Typography className="text-green font-bold uppercase text-[12px] lg:text-base">
                  {item.category}
                </Typography>
                <Typography className="text-lg lg:text-xl">{item.title}</Typography>
                <Typography className="text-dark-gray font-medium text-[12px] lg:text-base">
                  Written by {item.author}
                </Typography>
              </CardBody>
            </Card>
          ))}
        </div>
        <div className='w-100 flex justify-center'>
          <Button className='bg-green'>READ MORE</Button>
        </div>
      </div>
    </Fragment>
  )
}
