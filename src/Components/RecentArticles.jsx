import { Button, Card, CardBody, CardFooter, CardHeader, Typography } from '@material-tailwind/react'
import React, { Fragment } from 'react'
import { RecentArticlesData } from '../utils/Data'

export const RecentArticles = () => {
  return (
    <Fragment>
    <div className="flex flex-col mx-96 my-12 gap-10">
      <Typography variant="h2" className="">Featured Article</Typography>
      
     
      <div className="flex flex-col gap-5">
        {RecentArticlesData.map((item) => (
          <Card className="flex flex-row bg-transparent border-none shadow-none rounded cursor-pointer hover:bg-light-green-200 w-full">
            <CardHeader className="m-0 rounded">
              <img className="m-0 w-[350px] h-[200px]" src={item.imagesrc} />
            </CardHeader>
            <CardBody className="flex flex-col gap-5 justify-center">
            <Typography className="text-green font-bold uppercase">
                {item.category}
              </Typography>
              <Typography className="text-xl">{item.title}</Typography>
              <Typography className="text-dark-gray font-medium">
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
